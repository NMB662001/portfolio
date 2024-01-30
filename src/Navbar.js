import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Front from './Front'
// import { useNavigate } from 'react-router-dom';

const Nabvar=()=>
{
    // const navigate=useNavigate();
    return(
  <><>
            <div className='nav'><div className='m'>
                <div className='left'> Nisha Milind Bhujbal</div>
                <div className='right'>
                    <Link to='/Home'>Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Skills'>Skills</Link>
                    <Link to='/Project'>Project</Link>
                    <Link to='/Contact'>Contact</Link>
                </div> </div>
            </div>
            </>
            </>
     
        // <div>
        //         <div className='first'>Hello,my name is</div>
        //         <div className="second">Nisha Mlind Bhujbal</div>
        //         <div className="third">And I'm a Web Developer</div>
        //         <a href="/Navbar"><button className='four'> Hire Me</button></a>

        //     </div>
            /* <div>
                <button onClick={()=>
                {
                    navigate('./Home');
}}>click me</button>
<>
        <div  >
            <div >Hello,my name is</div>
            <div >Nisha Mlind Bhujbal</div>
            <div >And I'm a Web Developer</div>
             <a href="#"><button class="l4"> Hire Me</button></a>

        </div></>
                </div> */
    
    )

}
export default Nabvar