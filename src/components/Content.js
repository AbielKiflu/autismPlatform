import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";

export default function Header(){

    return(
        <nav className="nav">
            <ul>
                <li><h1>Pôle Autisme Namur</h1></li>
                <li><Link to="./faq"> FQA </Link></li>
            </ul>
        </nav>
    );
}