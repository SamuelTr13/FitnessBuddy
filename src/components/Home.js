import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function Home() {
    return (
            <div>
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/chest'>Chest Day</Link>
                    </li>
                </ul>
            </nav>
            </div>
            )
}
