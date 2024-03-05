import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser);
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="absolute w-screen z-50 bg-gradient-to-b from-black flex justify-between" >
            <img 
                className="w-40" 
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
                alt="logo" 
            />
            {user && <div className="flex self-center">
            <div className="font-bold text-white mr-4">Hi, {user?.displayName || "User"}</div>
            <button className="border-2 border-red-700 text-white font-bold bg-red-700 mr-5 h-[30px] rounded-md" onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    );
};

export default Header;