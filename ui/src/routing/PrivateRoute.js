import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import { isUserLoggedIn } from "../service";
import Loader from '../helper/Loader'


const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);

    useEffect(() => {
        async function init() {
            try {
                const result = await isUserLoggedIn();
                setIsLoggedIn(true);
            } catch (err) {
                setIsLoggedIn(false);
            }
        }
        init();
    }, [isLoggedIn]);

    if (isLoggedIn === undefined) {
        return <Loader></Loader>
    }

    return (
        <Route
            {...rest}
            render={(props) => {
                const data = {
                    ...props,
                    isLoggedIn
                }
                return !isLoggedIn ? <Redirect to="/" {...props} /> : <Component {...data} />;
            }}
        />
    );
};

export default PrivateRoute;
