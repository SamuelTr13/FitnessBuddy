import React, { Component } from 'react';
import Chest from '../Pages/Chest.js';
import {Route,BrowserRouter as Router, Routes, } from 'react-router-dom'
import Home from '../Pages/Home';
import Back from '../Pages/Back';
import Legs from '../Pages/Legs';
import Arms from '../Pages/Arms';
import Shoulders from '../Pages/Shoulders';

class App extends Component {

    render() {
        return (
                <div>
            <Router>
                    <Routes>
                        <Route path='/chest' element={<Chest />} />
                        <Route path='/back' element={<Back />} />
                        <Route path='/legs' element={<Legs />} />
                        <Route path='/arms' element={<Arms />} />
                        <Route path='/shoulders' element= {<Shoulders/>}/>
                        <Route path='/' element={<Home/>}/>
                    </Routes>
            </Router>
                </div>
        );
    }

}

export default App;