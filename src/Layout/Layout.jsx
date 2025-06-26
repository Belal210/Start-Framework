import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


export default function Layout () {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}