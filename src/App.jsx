import { useState } from "react";
import HomePage from "./Components/Home";
import Ingredients from "./Components/Ingredient";
import LoginForm from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import AllIng from "./Components/AllIng";


function App() {
  const [selectedItem, setSelectedItem] = useState({})
  const [menu, setMenu] = useState({})
  const [ing, setIng] = useState({})

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage setSelectedItem={setSelectedItem} setMenu={setMenu} setIng={setIng} />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/Ingredients" element={<Ingredients selectedItem={selectedItem} />} />
          <Route path="/Menu" element={<Menu menu={menu} />} />
          <Route path="/AllIng" element={<AllIng ing={ing} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
