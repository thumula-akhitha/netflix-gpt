import React, { useState } from "react";
import Header from "./Header";
const Login = ()=>{
    const [isSignUp, setIsSignUp] = useState(false);
    return(
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/US-en-20260216-TRIFECTA-perspective_50150254-733d-4e8b-bb6d-8e4072322724_large.jpg" alt="Netflix background" className="w-full h-full object-cover" />
            </div>
            <form className="absolute p-4 m-4 bg-black/80 flex flex-col gap-4 my-24 mx-auto right-0 left-0 w-[410px]">
            <div className="mx-9 flex flex-col gap-4">
                <p className="text-white text-2xl font-bold p-2 m-2">{isSignUp ? "Sign Up" : "Sign In"}</p>
                {isSignUp && <><input type="text" placeholder="Full Name" className="p-2 mb-1 bg-gray-800 text-white rounded-md"/>
                <input type="text" placeholder="Phone Number" className="p-2 mb-1 bg-gray-800 text-white rounded-md"/></>}
                <input type="text" placeholder="Email Address" className="p-2 mb-1 bg-gray-800 text-white rounded-md"/>
                <input type="password" placeholder="Password" className="p-2 mb-1 bg-gray-800 text-white rounded-md"/>
                <button type="submit" className="p-2 mb-2 bg-red-600 text-white rounded-md">{isSignUp ? "Sign Up" : "Sign In"}</button>
                <div className="mb-6">
                    <p className="text-gray-500">{isSignUp ? "Already have an account?" : "New to Netflix? "} <span className="text-white cursor-pointer px-2 hover:underline" onClick={()=> setIsSignUp(!isSignUp)}>Sign Up Now</span></p>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Login;