import React, { Component } from 'react';
import '../styles.css';

export default function Home() {
    return (
      <section className="mainMenu">
        <header className="pageHeader">
          <h1>All Natural Butt Lift Day!</h1>
          <div id = 'mainContainer'>
            <div id ='exerciseBox'>
              <h3>Back Squat</h3>
              <h4>Sets: 3 Reps: 10-12</h4>
              <form method='POST' action='/legs'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Bulgarian Split Squat with Dumbbells</h3>
              <h4>Sets: 3 Reps: 15</h4>
              <form method='POST' action='/legs'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Leg Press</h3>
              <h4>Sets: 4 Reps: 12, 10, 8, 6</h4>
              <form method='POST' action='/legs'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Calf Raises</h3>
              <h4>Sets: 4 Reps: 15</h4>
              <form method='POST' action='/legs'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
                </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Leg Extension</h3>
              <h4>Sets: 3 Reps: 15</h4>
              <form method='POST' action='/legs'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Lying Hamstring Curl</h3>
              <h4>Sets: 3 Reps: 15</h4>
              <form method='POST' action='/legs'>
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

