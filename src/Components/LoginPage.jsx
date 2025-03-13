import { TextField, Box, Button, Card } from "@mui/material";
import image from '../assets/pexels-ozgomz-1667427.jpg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const [error, setError] = useState({ username: "", password: "" })
    const [loading, setLoading] = useState(false)
    const [userdata, setUserdata] = useState({ username: "", password: "" })

    let navigate = useNavigate()



    function ErrorHandling() {
        debugger
        //username condition
        const usernameRegex = /^[A-Za-z]{3,}$/;
        if (!usernameRegex.test(userdata.username)) {
            setError((error) => {
                return { ...error, username: "invalid username" }
            })
        } else {
            setError((prev) => ({ ...prev, username: "" }));
        }

        //password condition
        const passwordRegex = /^.{8,}$/
        if (!passwordRegex.test(userdata.password)) {
            setError((error) => {
                return { ...error, password: "Password must contain atleast 8 charecters" }
            })
        }
        else {
            setError((prev) => ({ ...prev, password: "" }));
        }
    }


    function HandleSubmit(e) {
        e.preventDefault()

        setLoading(true)

        debugger
        if ((error.username.length < 1) && (error.password.length < 1)) {
            navigate("/Home")
        }
    }

    return (
        <Box style={{
            display: "flex",
            height: "98vh",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }}>

            <h1 style={{ fontWeight: "900", fontSize: "29px", fontFamily: "sans-serif", color: "white" }}>Foodie Delight</h1>

            <pre style={{ color: "white", fontFamily: "cursive", fontSize: "31px", fontWeight: "500", display: "flex", alignItems: "center" }}>"We are indeed much more than what we eat,<br />
                but what we eat can nevertheless help us<br />
                to be much more than what we are."<br />
                ~ Adelle Davis</pre>

            <div style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                width: "88%"
            }}>

                <Card style={{ padding: "20px", height: "300px", borderRadius: "12px", backgroundColor: "#dfe4e5cc", marginRight: "10px" }}>
                    <h2 style={{ fontFamily: "revert-layer", fontSize: "35px", display: "flex", justifyContent: "center", color: "#525258" }}>Create Account</h2>
                    {/* //onblur onfocus value for form input feild ,call validate form in every input feild */}

                    <form>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <TextField label="Username" size="large" value={userdata.username}
                                onChange={(e) => {
                                    ErrorHandling()
                                    setUserdata((prev) => { return { ...prev, username: e.target.value } })
                                }
                                } sx={{ margin: "5px" }} />
                            <span>{error.username}</span>
                            <TextField label="Password" size="large" type="password" value={userdata.password}
                                onChange={(e) => {
                                    ErrorHandling()
                                    setUserdata((prev) => { return { ...prev, password: e.target.value } })
                                }} sx={{ margin: "5px" }} />
                            <span>{error.password}</span>
                            <Button variant="contained" onClick={(e) => {
                                ErrorHandling()
                                HandleSubmit(e)
                            }}>
                                Create Account
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </Box>
    )
}