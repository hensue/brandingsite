import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
    // AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiOutlineContacts
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const NavLinks = () => {
    return (
        <>
            <a className="px-4 font-extrabold text-gray-100 hover:text-blue-900" href='/'>
                <AiOutlineHome style={{ marginBottom: "2px", display: 'inline-block' }} />  <span>Home</span>
            </a>
            <a className="px-4 font-extrabold text-gray-100 hover:text-blue-900" href='/about'>
                <AiOutlineUser style={{ marginBottom: "2px", display: 'inline-block' }} />  <span>About</span>
            </a>
            {/* <HashLink className="px-4 font-extrabold text-gray-100 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink> */}
            {/* <HashLink className="px-4 font-extrabold text-gray-100 hover:text-blue-900" smooth to="/#project"> */}
            <a className="px-4 font-extrabold text-gray-100 hover:text-blue-900" href='/service'>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px", display: 'inline-block' }} />
                <span>Service</span>
            </a>

            {/* <a className="px-4 font-extrabold text-gray-100 hover:text-blue-900" href='/#resume'>
                <CgFileDocument style={{ marginBottom: "2px", display: 'inline-block' }} />  <span>Resume</span>
            </a> */}
            {/* </HashLink> */}
            <a className="px-4 font-extrabold text-gray-100 hover:text-blue-900" href='/contact'>
                <AiOutlineContacts style={{ marginBottom: "2px", display: 'inline-block' }} />  <span>Contact</span>
            </a>
            {/* <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo">
                Demo our products
            </Link> */}
        </>
    )
}

export default NavLinks;