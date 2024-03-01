import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [signInForm, setSingInFrom] = useState(true);

    const handleForm = () => {
        setSingInFrom(!signInForm);
    };
    return (
        <div>
            <Header />
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="login-bg-img"/>
            <form className="absolute right-0 left-0 w-4/12 my-36 mx-auto bg-black text-white bg-opacity-75 p-12 rounded">
                <h1 className="text-3xl font-semibold mb-4">
                    {signInForm ? "Sing In" : "Sign Up"}
                </h1>
                {!signInForm && <input className="w-full px-4 py-3 bg-gray-700 mt-4 rounded" type="text" placeholder="Full Name"/>}
                <input className="w-full px-4 py-3 bg-gray-700 mt-4 rounded" type="text" placeholder="Email or phone number"/>
                <input className="w-full px-4 py-3 bg-gray-700 mt-4 rounded" type="password" placeholder="Password"/>
                <button className="w-full px-4 py-3 bg-red-700 mt-10 rounded-lg" type="submit">
                    {signInForm ? "Sing In" : "Sign Up"}
                </button>
                <div className="flex text-sm mt-20">
                    <p className="text-gray-400">
                        {signInForm ? "New to Netflix?" : "Already registered?"}
                    </p>
                    <p className="ml-2 cursor-pointer hover:underline" onClick={handleForm}>
                    {signInForm ? "Sign Up now" : "Sign In now"}
                    </p>
                    .
                </div>
            </form>
        </div>
    );
};

export default Login;