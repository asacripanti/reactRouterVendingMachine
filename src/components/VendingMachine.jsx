import React from "react"
import { Link } from "react-router-dom";

export default function VendingMachine(){
    return(
        <nav>
            <Link to="/chips">
                Chips
            </Link>
            <br />
            <Link to="/cookies">
                Cookies
            </Link>
            <br />
            <Link to="/candy">
                Candy
            </Link>
        </nav>
    )
}