import { Card, Typography } from "@mui/material";
import bgimg from '../assets/pexels-goumbik-349610.jpg';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { useNavigate } from "react-router-dom";

export default function Ingredients({ selectedItem }) {
    // console.log(selectedItem);

    const navigate = useNavigate()

    function handleBackButton() {
        navigate("/Home")
    }
    return (
        <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: "95vh" }}>

            <h1 style={{ display: "flex", justifyContent: "center", backgroundColor: "#764949", color: "white", fontStyle: "inherit" }}>{selectedItem.name}</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                    <Card sx={{ maxHeight: "350px", maxWidth: "700px", borderRadius: "25px", border: "2px solid #d9c8c8", marginTop: "80px", marginLeft: "15px" }}>
                        <img src={selectedItem.image} height={350} width={600} />
                    </Card>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", justifyItems: "center", width: "800px" }}>
                    <h3 style={{ color: "#a25d69", display: "flex", justifyContent: "center", fontFamily: "monospace", fontSize: "25px" }}>Ingredients:</h3>
                    <Typography style={{ fontFamily: "sans-serif", display: "flex", justifyContent: "start" }}>{selectedItem.ingredients}</Typography>
                    <h3 style={{ color: "#a25d69", display: "flex", justifyContent: "center", fontFamily: "monospace", fontSize: "25px" }}>Instructions:</h3>
                    <Typography>{selectedItem.instructions}</Typography><br />
                    <Typography>prepTimeMinutes:{selectedItem.prepTimeMinutes}</Typography>
                    <Typography>cookTimeMinutes:{selectedItem.cookTimeMinutes}</Typography>
                    <Typography>servings:{selectedItem.servings}</Typography>
                    <Typography>difficulty:{selectedItem.difficulty}</Typography>
                    <Typography>cuisine:{selectedItem.cuisine}</Typography><br />
                    <Typography style={{ color: "#a25d69", fontWeight: "bold" }}>{selectedItem.tags.map((hash) => { return `#${hash}` })}</Typography>
                </div>
            </div >
            <button onClick={handleBackButton} style={{ backgroundColor: "#764949" }}>
                <ArrowBackSharpIcon style={{ color: "white", fontSize: "30px", display: "flex", justifyContent: "flex-start" }} />
            </button>
        </div>
    )
}
