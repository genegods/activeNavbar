import React from 'react'
import { NavData } from '../data/NavData'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = "text-black bg-white w-full h-16 shadow centered font-bold rounded-tl-3xl rounded-br-3xl";
  const normalLink = " ";
  return (
    <React.Fragment>
    <section>
      <div className='bg-blue-900 w-full text-white text-xl h-20 grid grid-cols-4 items-center'>
          {
            NavData.map((item, index) =>{

                return(
                    <div key={index} >
                       <div className='uppercase centered'>
                        <NavLink to={item.path} 
                               className={({ isActive }) =>
                               isActive ? activeLink : normalLink
                             }
                        >
                        <span>{item.title}</span>
                        </NavLink>
                      
                       </div>
                    </div>
                )
            })
          }
      </div>
    </section>
  </React.Fragment>
  )
}

export default Navbar