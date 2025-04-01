import React, { useContext } from 'react'; // Import useContext from React
import { Routes, Route, Navigate } from 'react-router-dom'; // Import routing components from react-router-dom
import { Context } from "../index"; // Import the Context if it's defined in index.js
import { authRoutes, publicRoutes } from '../store/routes'; // Import routes from the appropriate file
import { SHOP_ROUTE } from "../utils/consts"; // Import SHOP_ROUTE from the constants file

const AppRouter = () => {
    const { user } = useContext(Context); // Using context to get user state
    console.log(user)
    return (
        <Routes>
            {user.isAuth === true && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}
            {/* Catch-all route for handling 404 */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;
