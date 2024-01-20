import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
const Home = () =>
{
    return(
        <>
        <div className="abc">

            <div className='first'>Hello,my name is</div>
            <div className="second" >Nisha Mlind Bhujbal</div>
            <div className="third">And I'm a Web Developer</div>
             <a href="/Navbar"><button className='four'> Hire Me</button></a>

        </div>
        <div>
            <img src={require('./logo.png')} alt="photo" height={200} width={200}/>
            </div></>
        
    )
}
export default Home;