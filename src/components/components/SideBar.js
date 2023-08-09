import { FaFileDownload } from "react-icons/fa";
import { ImStack } from "react-icons/im";
import { AiFillFolderAdd } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import '../style/navbar.css';
import { Link } from "react-router-dom";
import DokaLogo from '../../img/doka.jpg';
import { BiImport } from "react-icons/bi"
import { BiExport } from "react-icons/bi"

import * as React from 'react';
import { useQuery } from "react-query";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { download, fetchExportData } from "./ExportData";
import {useEffect, useState} from "react";
import LogoutButton from "./LogoutButton";


const SideBar = () => {

    const [color1, setColor1] = useState('#FFDD00');
    const [color2, setColor2] = useState('#FFDD00');
    const [color3, setColor3] = useState('#FFDD00');
    const [color4, setColor4] = useState('#FFDD00');
    const [color5, setColor5] = useState('#FFDD00');

    useEffect(() => {
        setColor1('#FFDJ00');
        setColor2('#FFDD00');
        setColor3('#FFDD00');
        setColor4('#FFDD00');
        setColor5('#FFDD00');
        console.log(window.location.pathname);
        switch (window.location.pathname) {
            case '/installablePackages':
                console.log("yo");
                setColor1('#8E9DC8');
                console.log(color1);
                break;
            case '/import':
                setColor2('#8E9DC8');
                break;
            case '/export':
                setColor3('#8E9DC8');
                break;
            case '/versionstack':
                setColor4('#8E9DC8');
                break;
            case '/installables':
                setColor5('#8E9DC8');
                break;
        }
    }, [window.location.pathname])

    function handleClick(e) {

    }

    return (
        <div className="nav-container fixed top-0 right-0 h-full w-1/5 m-0
                        flex flex-col
                        text-white shadow-lg font-bold">


            <Link to="/">
                <img className="doka-logo" src={DokaLogo} alt="Doka" />
            </Link>
            <Link className="nav-link" to="/installablePackages" onClick={handleClick}>
                <SideBarIcon title={"Installable Packages"} icon={<FaFileDownload size="40" />} style={{backgroundColor: color1}}  />
            </Link>
            <Link className="nav-link" to="/import" onClick={handleClick} >
                <SideBarIcon title={"Import"} icon={<BiImport size="40" />} style={{backgroundColor: color2}} />
            </Link>
            {/* <Link className="nav-link" to="/export"> */}
            {/* <SideBarIcon title={"Export"} icon={<BiExport size="40" />} /> */}
            <ExportMenu onClick={handleClick} style={{backgroundColor: color3}} />
            {/* </Link> */}
            <Link className="nav-link" to="/versionstack" onClick={handleClick} style={{backgroundColor: color4}}>
                <SideBarIcon title={"View Versionstack"} icon={<ImStack size="40" />} />
            </Link>
            <Link className="nav-link" to="/installables" onClick={handleClick} style={{backgroundColor: color5}}>
                <SideBarIcon title={"Installables"} icon={<AiFillFolderAdd size="40" />} />
            </Link>
            <p className="resetTitle">Reset Cache</p>
            <BiReset className="reset" size="60" />
            <Link className="nav-link" to="/login">
            <LogoutButton/>
            </Link>
        </div>
    );

};

const SideBarIcon = ({ title, icon }) => (
    <div className="sidebar-icon p-8 hover:bg-sky-300 active:bg-sky-400 flex flex-row md:shrink-0">
            <p className="title">{title}</p><p className="icon">{icon}</p>
    </div>
);

const ExportMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

   /* const { data, status } = useQuery('config', fetchExportData)*/

    return (
        <div>
            <div
                onClick={handleClick}
                onMouseOver={handleClick}

                id="demo-positioned-button"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
            >
                <SideBarIcon title={"Export"} icon={<BiExport size="40" />} />
            </div>

            <Menu
                className="exportMenu"
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                disableScrollLock={true}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                MenuListProps={{
                    onMouseLeave: handleClose
                }}
            >

                <Link className="nav-link" to="/export">
                    <MenuItem onClick={handleClose}>View First</MenuItem>
                </Link>

            </Menu>
        </div>
    );
}

export default SideBar;