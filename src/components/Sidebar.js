import React from 'react';
import { GoHome } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { VscListFlat } from "react-icons/vsc";
import { MdOutlineDescription } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoStatsChartSharp } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { PiCoffeeLight } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoWalletSharp } from "react-icons/io5";


function Sidebar({ children }) {
    const menuItem = [
        {
            path: "/Dashboard",
            name: "Dashboard",
            icon: <GoHome />
        },
        {
            path: "/orderList",
            name: "Order List",
            icon: <VscListFlat />,
        },
        {
            path: "/OrderDetail",
            name: "Order Detail",
            icon: <MdOutlineDescription />,
        },
        {
            path: "/product",
            name: "Customer",
            icon: <GoPeople />,
        },
        {
            path: "/productList",
            name: "Analytics",
            icon: <IoStatsChartSharp />,
        },

        {
            path: "/Rewiews",
            name: "Rewiews",
            icon: <LuPencil />,
        },

        {
            path: "/Foods",
            name: "Foods",
            icon: <PiCoffeeLight />,
        },


        {
            path: "/foodDetail",
            name: "foodDetail",
            icon: <GiNotebook />,
        },
        {
            path: "/Customerdetail",
            name: "Customer Detail",
            icon: <GoPerson />,
        },


        {
            path: "/Calendar",
            name: "Calendar",
            icon: <CiCalendar />,
        },


        {
            path: "/Chat",
            name: "Chat",
            icon: <IoChatboxEllipsesOutline />,
        },

        {
            path: "/Wallet",
            name: "Wallet",
            icon: <IoWalletSharp />,
        },

    ];

    return (
        <div className='container'>
            <div className="sidebar">
                <div className="top_section">
                    <div className="logo"></div>
                    <h5 className='subtitle'>Modern Admin Dashboard</h5>
                   

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

                <div className="cards">
                    <div className="text">Please, organize your
                        menus through button
                        bellow!</div>

                        <div className="img"></div>
                        <button className='button'>+Add Menus</button>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Sidebar;
