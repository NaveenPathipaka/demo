import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function Main(){
    return(
       <>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Home />} />
                </Routes>
            </BrowserRouter>
       </>
    )
}
export default Main;