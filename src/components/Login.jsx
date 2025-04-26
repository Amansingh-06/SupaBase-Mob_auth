import React, { useState } from "react";
import { supabase } from "../pages/Supabase";

export default function Auth() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState("enter-phone");

    const formattedPhone = phone.startsWith("+91") ? phone : "+91" + phone;

    const handleSendOtp = async () => {
        const { error } = await supabase.auth.signInWithOtp({ phone:formattedPhone });
        if (!error) setStep("enter-otp");
    };

    const handleVerifyOtp = async () => {
        const { data, error } = await supabase.auth.verifyOtp({
            phone:formattedPhone,
            token: otp,
            type: "sms",
        });
        if (!error) {
            alert("Login Success");
            window.location.href = "./Restaurant"
        } else {
            alert("Please check your otp")
        }
       
    };

    return (
        <div className="p-4">
            {step === "enter-phone" ? (
                <div className="flex flex-col border-2 p-10 gap-8">
                    <h1 className="text-center text-3xl">Login</h1>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter mobile number" className="bg-white p-2 border-2 rounded" />
                    <button onClick={handleSendOtp} className="border-2 bg-green-400 rounded cursor-pointer">Send OTP</button>
                </div>
            ) : (
                    <div className="flex flex-col border-2 p-10 gap-8">
                        <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" className="bg-white p-2 border-2 rounded" />
                        <button onClick={handleVerifyOtp} className="border-2 bg-green-400 rounded cursor-pointer">Verify OTP</button>
                </div>
            )}
        </div>
    );
}
