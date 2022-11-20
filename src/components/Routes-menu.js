import {Routes,Route,BrowserRouter} from "react-router-dom"
import { Home } from "../pages/Home"

export const RoutesMenu =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
    
    )
}