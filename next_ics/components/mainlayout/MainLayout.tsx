import type { AppProps } from "next/app";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Content from "../content/content";

function Layout() {
    return (
        <section id="main-layout">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Content></Content>
        </section>
    )

}

export default Layout;

