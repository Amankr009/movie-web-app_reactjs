import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter ([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            } else {
              dispatch(removeUser());
            }
        });
    });

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;