import React from 'react'
import { RiHomeLine } from "react-icons/ri";


function Sidebar() {
    return (
        <section>
            <ul>
                <li>
                    <RiHomeLine />
                    <span>Home</span>
                </li>
                <li>
                    <RiHomeLine />
                    <span>Post Job</span>
                </li>
                <li>
                    <RiHomeLine />
                    <span>Interview Prep</span>
                </li>
                <li>
                    <RiHomeLine />
                    <span>Learning Path</span>
                </li>
                <li>
                    <RiHomeLine />
                    <span>Dashboard</span>
                </li>
            </ul>
        </section>
    )
}

export default Sidebar