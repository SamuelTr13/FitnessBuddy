import React, { Component } from 'react';
import Menu from './Menu.js';
import {Route,BrowserRouter as Router, Routes, } from 'react-router-dom'
import Home from '../components/Home.js';

class App extends Component {

    render() {
        return (
                <div>
            <Router>
                    <Routes>
                        <Route path='/chest' element= {<Menu/>}/>
                        <Route path='/' element={<Home/>}/>
                    </Routes>
            </Router>
                </div>
        );
    }

}

export default App;