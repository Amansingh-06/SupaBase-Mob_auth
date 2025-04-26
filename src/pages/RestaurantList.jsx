import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { supabase } from "./Supabase";


function RestaurantList() {
  
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        const fetchRestaurant = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                const { data, error } = await supabase.from("Restaurant").select("*");
                if (!error) {
                    setRestaurant(data);

                } else {
                    console.warn("fetch Error",error.message)
                }
            } else {
                console.log("User not login")
            }
        }
        fetchRestaurant();
    },[])

{console.log(restaurant)}
    return (
        < div >
            <h1 className="mt-10 text-center text-7xl">Restaurant</h1>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 py-8 flex-wrap gap-10  w-full">
            
            {
                restaurant.map((rest) => (
                    <RestaurantCard
                        name={rest.name}
                        location={rest.location}
                        rating={rest.rating}
                        imageUrl={`${rest.imgUrl}`}
                    />
                ))
           }
            </div>
        </div>
    );
}

export default RestaurantList;
