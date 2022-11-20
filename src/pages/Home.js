import { NavBar } from "../components/NavBar"
import { Header } from "../components/Header"
import "./Home.css"
export const Home =()=>{
    return(
        <div className="home-container">
      <Header/>
      <NavBar/>
    </div>
    )
}