import { Card, CardContent } from "@mui/material";

export default function AllIng({ ing }) {
    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "5px" }}>
                {ing.map((ele) => {
                    return (
                        <>
                            <Card sx={{ maxHeight: "300px", maxWidth: "200px", gap: "6" }}>
                                <h3 style={{ color: "pink" }}>{ele.name}</h3>
                                <CardContent>
                                    {ele.ingredients}
                                </CardContent>
                            </Card>
                        </>
                    )
                })}
            </div>
        </>
    )
}