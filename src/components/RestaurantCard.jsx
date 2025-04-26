// RestaurantCard.jsx

function RestaurantCard({ name, location, rating, imageUrl }) {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img
                className="w-64 h-48 object-cover"
                src={imageUrl}
                alt={`${name} image`}
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600">📍 {location}</p>
                <p className="mt-2 text-yellow-500 font-medium">⭐ {rating}</p>
            </div>
        </div>
    );
}

export default RestaurantCard;
