import React, { Component } from 'react';
import '../styles.css';

export default function Home() {
    return (
      <section className="mainMenu">
        <header className="pageHeader">
          <h1>Welcome to the Gun Show!</h1>
          <div id = 'mainContainer'>
            <div id ='exerciseBox'>
              <h3>Standing Barbell Bicep Curl</h3>
              <h4>Sets: 4 Reps: 15, 12, 10, 8</h4>
              <form method='POST' action='/arms'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Tricep Cable Pulldowns</h3>
              <h4>Sets: 4 Reps: 15, 12, 10, 8</h4>
              <form method='POST' action='/arms'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Preacher Curl</h3>
              <h4>Sets: 4 Reps: 15</h4>
              <form method='POST' action='/arms'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Single Dumbbell Overhead Triceps Extension</h3>
              <h4>Sets: 4 Reps: 15</h4>
              <form method='POST' action='/arms'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
                </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Standing Dumbbell Bicep Curl</h3>
              <h4>Sets: 3 Reps: 15 </h4>
              <form method='POST' action='/arms'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Dumbbell Tricep Kickbacks</h3>
              <h4>Sets: 3 Reps: 15</h4>
              <form method='POST' action='/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
          </div>
        </header>
      </section>
    );
}

