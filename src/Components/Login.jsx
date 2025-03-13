import { Button, Card, TextField } from "@mui/material";
import bgimg from '../assets/pexels-ozgomz-1667427.jpg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TostFunction from "../Common/TostFunction";
import { ToastContainer } from "react-toastify";

export default function LoginForm() {
    const [userdata, setUserdata] = useState({ username: "", password: "" })
    const [error, setError] = useState({ username: "", password: "" })
    const [loading, setLoading] = useState(false)

    let navigate = useNavigate()

    const urlData = async (username, password) => {
        try {
            setLoading(true)
            const resData = await axios.post("https://dummyjson.com/auth/login", { username: username, password: password })
            if (resData?.status == 200) {
                sessionStorage.setItem("accessToken", resData.data.accessToken);
                // let data = sessionStorage.getItem("accessToken")
                // console.log(data)
                setLoading(false)
                navigate("/Home")
            }
        } catch (error) {
            console.log(error);
            console.log(error.response.data.message);
            TostFunction(error?.response?.data?.message)
            setLoading(false);
        }
    }

    // const storage = window.sessionStorage;


    function HandleSubmit(e) {
        e.preventDefault()
        // storage.clear()
        const userregex = /^[A-Za-z]{3,}$/
        const passwordregex = /^.{8,}$/

        let newErrors = { username: "", password: "" }

        //user condition
        if (!userregex.test(userdata.username)) {
            newErrors.username = "invalid username"
        }

        //passsword condition
        if (!passwordregex.test(userdata.password)) {
            newErrors.password = "password must contain atleast 8 charecter"
        }

        setError(newErrors)
        if (newErrors.username == "" && newErrors.password == "") {
            urlData(userdata.username, userdata.password)
        }
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", backgroundImage: `url(${bgimg})`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "97vh" }}>
                <h1 style={{ fontWeight: "900", color: "white", fontFamily: "sans-serif", fontStyle: "revert", display: "flex" }}>Foodie Delight</h1>
                <pre style={{ fontStyle: "oblique", fontWeight: "600", fontSize: "28px", color: "#d0eed5", display: "flex", alignItems: "center" }}>"We are indeed much more than what we eat,<br />
                    but what we eat can nevertheless help us<br />
                    to be much more than what we are."<br />
                    ~ Adelle Davis
                </pre>
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <Card sx={{ maxHeight: "250px", maxWidth: "355px", padding: "15px", borderRadius: "15px", backgroundColor: "#ecececa1", border: "2px solid white", marginTop: "50%", marginRight: "9px" }}>
                        <form onSubmit={HandleSubmit}>
                            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <h2 style={{ display: "flex", justifyContent: "center", color: "#845b02d6" }}>Create Account</h2>

                                <TextField type="text" placeholder="Enter username" label="username" style={{ margin: "5px" }} value={userdata.username} onChange={(e) => {
                                    setUserdata((userdata) => {
                                        return { ...userdata, username: e.target.value }
                                    })
                                    if (error.username) {
                                        setError((prev) => {
                                            return { ...prev, username: "" }
                                        })
                                    }
                                }} />
                                <span style={{ color: "#a05306", fontSize: "11px" }}>{error.username}</span>
                                <TextField type="password" placeholder="Enter password" label="password" style={{ margin: "5px" }} value={userdata.password} onChange={(e) => {
                                    setUserdata((userdata) => {
                                        return { ...userdata, password: e.target.value }
                                    })
                                    if (error.password) {
                                        setError((prev) => {
                                            return { ...prev, password: "" }
                                        })
                                    }
                                }} />
                                <span style={{ color: "#a05306", fontSize: "11px" }}>{error.password}</span>
                                <Button variant="contained" style={{ backgroundColor: "#a67112" }} type="submit" >{loading ? "loading" : "Login"}</Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}