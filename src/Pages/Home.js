import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <nav>
                <ul>
                    <li>
                        <Link to='/chest'>
                            <h2>Chest Day</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to='/legs'>
                            <h2>Leg Day</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to='/arms'>
                            <h2>Bicep/Tricep Day</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to='/shoulders'>
                            <h2>Shoulder Day</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to='/back'>
                            <h2>Back Day</h2>
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
            )
}
