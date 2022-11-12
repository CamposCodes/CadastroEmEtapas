import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormStep1 }  from "./pages/FormStep1/index";
import { FormStep2 }  from "./pages/FormStep2/index";
import { FormStep3 }  from "./pages/FormStep3/index";
import { FinalPage } from "./pages/FinalPage/index";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<FormStep1/>} path="/"/>
                <Route element={<FormStep2/>} path="/step2"/>
                <Route element={<FormStep3/>} path="/step3"/>
                <Route element={<FinalPage/>} path="/final"/>
            </Routes>  
        </BrowserRouter>
    );
}