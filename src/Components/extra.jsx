<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "2px solid blue" }}>
    <h1>Home</h1>
    <h1>Menu</h1>
    <h1>Ingredients</h1>
    <Button variant='outlined'>Sort</Button>

    <div>
        <FormControl fullWidth variant="outlined">
            <InputLabel label='cuisine'>Cuisine</InputLabel>
            <Select label="cuisine" value={dropdown} onChange={HandleCuisine}>
                {/* <MenuItem value="">
        cuisine
    </MenuItem> */}
                {orgdata.map((ele) => {
                    return <MenuItem value={ele.cuisine} >{ele.cuisine}</MenuItem>
                })}
            </Select>
        </FormControl>
    </div>
</Box>

{
    [...new Set(orgdata.map((ele) => ele.cuisine))]
}