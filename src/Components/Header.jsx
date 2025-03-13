import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from "jwt-decode";

export default function Header({ orgdata, setDupdata }) {
    const [dropdown, setDropdown] = useState("")
    const [ascending, setAscending] = useState(false)

    const navigate = useNavigate()

    let data = sessionStorage.getItem("accessToken",);
    const decoded = jwtDecode(data);
    console.log(decoded);



    function HandleCuisine(e) {
        let result = orgdata.filter((ele) => {
            console.log(e.target.value);
            if (ele.cuisine == e.target.value) {
                return ele
            }
            if (e.target.value == "") {
                return ele
            }
        })
        setDupdata(result)
        setDropdown(e.target.value)
    }

    let uniqueCuisine = []
    for (let i = 0; i < orgdata.length; i++) {
        let temp = 0;
        for (let j = i + 1; j < orgdata.length; j++) {
            if (orgdata[i].cuisine === orgdata[j].cuisine) {
                temp++;
            }
        }
        if (temp == 0) {
            uniqueCuisine.push(orgdata[i].cuisine)
        }
    }


    function HandleSortDsc() {
        const sortRating = [...orgdata].sort((a, b) => b.rating - a.rating)
        setDupdata(sortRating)
        setAscending(false)

    }
    function HandleSortAsc() {
        const sortByRating = [...orgdata].sort((a, b) => a.rating - b.rating)
        setDupdata(sortByRating)
        setAscending(true)
    }

    function HandleMenu() {
        navigate("/Menu")
    }

    function HandleIng() {
        navigate("/AllIng")
    }



    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "4px", border: "4px solid #89afd4", backgroundColor: "#c9d3de8a", paddingLeft: "25px", paddingRight: "25px" }}>
                <h3>Home</h3>
                <span onClick={HandleMenu}><h3>Menu</h3></span>
                <span onClick={HandleIng}><h3>Ingredients</h3></span>
                {/* {ascending ? "descending by rating" : "ascending by rating"} */}
                <Button variant='outlined' onClick={ascending ? HandleSortDsc : HandleSortAsc} sx={{ borderRadius: "50%", display: "flex", justifyContent: "center", padding: "3px", border: "1px solid grey" }}><ArrowUpwardIcon /><ArrowDownwardIcon /></Button>
                <FormControl sx={{ width: "170px" }}>
                    <InputLabel sx={{ fontWeight: "bold", display: "flex", alignContent: "center" }} ><RestaurantIcon sx={{ fontSize: 20, marginRight: 1 }} />Select Cuisine</InputLabel>
                    <Select size='small' value={dropdown} onChange={(e) => { HandleCuisine(e) }}>
                        <MenuItem value="">Select</MenuItem>
                        {uniqueCuisine.map((ele, index) => {
                            return <MenuItem key={index} value={ele}>{ele}</MenuItem >
                        })}
                    </Select>
                </FormControl>
                <span style={{ borderRadius: "50%", border: "1px solid black", display: "flex", justifyContent: "center", padding: "3px" }}>
                    <img src={decoded.image} height="20px" width="20px" alt='image' />
                </span>
                {/* <AccountCircleIcon sx={{ color: "black", fontSize: "40px" }} /> */}
            </Box>
        </>
    )
}