import { useEffect, useState } from "react";
import axios from "axios";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardMedia } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Header from "./Header";


export default function HomePage({ setSelectedItem, setMenu, setIng }) {

    const [orgdata, setOrgdata] = useState([])
    const [dupdata, setDupdata] = useState([])
    let navigate = useNavigate()

    const myData = async () => {
        try {
            const data = await axios.get("https://dummyjson.com/recipes")
            // console.log(data?.data?.recipes)
            setOrgdata(data.data.recipes)
            setDupdata(data.data.recipes)
            setMenu(data.data.recipes)
            setIng(data.data.recipes)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        myData()
    }, [])

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#389eb324",
        }}>
            <div>
                <Header orgdata={orgdata} dupdata={dupdata} setDupdata={setDupdata} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                {dupdata?.map((ele) => {
                    return (
                        <>
                            <div key={ele.id}>
                                <Card sx={{
                                    maxWidth: 345,
                                    borderRadius: "2px",
                                    width: "250px",
                                    height: "415px",
                                }} style={{ borderRadius: "5px", backgroundColor: "black" }}>

                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={ele.image}
                                        alt=" dish"
                                    />
                                    <CardContent >
                                        <center><Typography style={{ color: "white", fontSize: "10px" }}><b>{ele.name}</b></Typography></center><hr />
                                        <Typography style={{ color: "white" }}> Rating: <b>{ele.rating} </b>  </Typography>
                                        <Typography style={{ color: "white", display: "inline" }}>ReviewCount:<b>{ele.reviewCount}</b></Typography>
                                    </CardContent>
                                    <center><Button size="small" variant="contained" style={{ color: "black", backgroundColor: "white" }} onClick={() => {
                                        setSelectedItem(ele)
                                        navigate("/Ingredients")
                                    }}>click here to get ingredients</Button></center>
                                </Card>
                                <br />
                            </div>
                        </>)

                })}
            </div>
        </Box>
    )
}