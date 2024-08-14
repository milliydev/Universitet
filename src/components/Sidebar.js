import React from 'react';
import { GoHome } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import logoImg from './img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiMessage2Fill } from "react-icons/ri";
import { FaCertificate } from "react-icons/fa";
import { AiFillBackward } from "react-icons/ai";
function Sidebar({ children }) {
    const menuItem = [
        {
            path: "/Dashboard",
            name: "Dashboard",
            icon: <GoHome />
        },
        {
            path: "/orderList",
            name: "Message",
            icon: <RiMessage2Fill />,
        },
        {
            path: "/FoodDetail",
            name: "Profile",
            icon: <MdOutlineAccountCircle />,
        },
        {
            path: "/product",
            name: "course",
            icon: <GoPeople />,
        },
        {
            path: "/productList",
            name: "Certificate",
            icon: <FaCertificate />,
        },






    ];

    return (


        <div>
            <div className="sidebar">
                <div className="top_section">
                    <img className='logo' src={logoImg} alt="" />

                    <h5 className='subtitle'>Qarshi Xalqaro Universteti</h5>


                </div>
                <div>
                    {
                        menuItem.map((item, index) => {
                            return (
                                <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                    <div className="icon">{item.icon}</div>
                                    <div className="link_text">{item.name}</div>
                                </NavLink>
                            );
                        })
                    }
                </div>

             <button className='exit'>Chiqish  <AiFillBackward className='btn-icon'/>  </button>
            </div>
            <main>{children}</main>
        </div>

    );
}

export default Sidebar;
