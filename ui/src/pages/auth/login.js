import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import Navbar from "../../components/layout/Navbar";
import { showToast } from "../../util/showToast";
import { isUserLoggedIn, login } from "../../service";
import LoadingOverlay from "react-loading-overlay";

export default function Login(props) {
    useEffect(() => {
        const init = async () => {
            try {
                const res = await isUserLoggedIn();
                if (res.data.isLoggedIn) {
                    props.history.push("/dashboard");
                }
            } catch (err) {
                // const errorMessage = err && err.message && err.data && err.response.data.message ? err.response.data.message : err.message ? err.message : 'Something went wrong. Please try again!';
                // showToast('ERROR', errorMessage);
            }
        };

        init();
    }, []);

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { email, password } = user;
            if (email === "" || password === "") {
                showToast("ERROR", "Email and Password cannot be empty !");
                return;
            }

            const result = await login(email, password);
            const userData = result.data.user;
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("token", result.data.token);
            showToast("SUCCESS", "Logged In Successfully");
            setLoading(false);
            props.history.push("/dashboard");
        } catch (err) {
            console.log(err);
            setLoading(false);
            const errorMessage = err.response.data.message
                ? err.response.data.message
                : err.message
                    ? err.message
                    : "Something went wrong. Please try again!";
            showToast("ERROR", errorMessage);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container login">
                <br></br>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 login-form">
                        <LoadingOverlay active={loading} spinner text="Loading ...">
                            <h4 className="login-title">🔒 Login</h4>

                            <p className="login-desc">Get started with Know Your Policy</p>

                            <form className="form-group d-flex flex-column ">
                                <input
                                    className="form-control w-75 align-self-center"
                                    placeholder="Email Address"
                                    type="text"
                                    name="email"
                                    onChange={onChange}
                                    value={user.email}
                                />
                                <br></br>
                                <input
                                    className="form-control w-75 align-self-center"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={onChange}
                                    value={user.password}
                                />

                                <br />
                                <button
                                    className="w-75 btn btn-success btn-block align-self-center btn-login-submit"
                                    onClick={handleLogin}
                                >
                                    Submit
                                </button>
                            </form>

                            <br></br>
                            
                        </LoadingOverlay>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 login-img-container">
                        <img
                            src="https://res.cloudinary.com/dhw5dya3h/image/upload/v1640626500/illustration_register_emr222.png"
                            className="img-fluid"
                            alt="Login Illustration"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
