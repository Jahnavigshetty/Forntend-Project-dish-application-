import { Card, CardContent } from "@mui/material";
import img from '../assets/pexels-lum3n-44775-1028598.jpg'

export default function Menu({ menu }) {
    console.log(menu);

    return (
        <>
            {menu.map((ele) => {
                return (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", padding: "5px", backgroundImage: `url(${img})` }}>
                            <div sx={{ maxHeight: "50px", maxWidth: "150px" }}>
                                <CardContent>
                                    {ele.name}
                                </CardContent>
                            </div>
                        </div>
                    </>

                )
            })}
        </>
    )
}