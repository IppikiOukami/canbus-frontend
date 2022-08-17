import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "../HomePage/Home";
import NoAccess from "./NoAccess";
import CBViz from "../CBViz/Visualizer";

export default function RouteMain(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/CBViz" element={<CBViz/>} />
                    <Route path="/NoAccess" element={<NoAccess />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}