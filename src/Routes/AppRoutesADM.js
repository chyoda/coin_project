import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeADM from "./pages/ADM/HomeADM";
import ListMembro from "./pages/ADM/ListMembro";
import AddMembro from "./pages/ADM/AddMembro";
import HomeCom from "./pages/COM/HomeCom";

const AppRoutesADM = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeADM />} />
            <Route path="/ListaMembros" element={<ListMembro />} />
            <Route path="/AdicionarMembros" element={<AddMembro />} />
            <Route path="/ComissaoDashboard" element={<HomeCom />} />
        </Routes>
    );
};

export default AppRoutesADM;
