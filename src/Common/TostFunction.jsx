import React from "react";
import { ToastContainer, toast } from 'react-toastify'

export default function TostFunction(message) {
    console.log(message);
    toast.warning(message)
}