import React, { Component } from 'react';
import '../styles.css';

export default function Home() {
    return (
      <section className="mainMenu">
        <header className="pageHeader">
          <h1>All Natural Butt Lift Day!</h1>
          <div id = 'main'>
            <div id ='exerciseBox'>
              <h3>Back Squat</h3>
              <h4>Sets: 3 Reps: 10-12</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
            <div id ='exerciseBox'>
              <h3>Bulgarian Split Squat with Dumbbells</h3>
              <h4>Sets: 3 Reps: 15</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
            <div id ='exerciseBox'>
              <h3>Leg Press</h3>
              <h4>Sets: 4 Reps: 12, 10, 8, 6</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
            <div id ='exerciseBox'>
              <h3>Calf Raises</h3>
              <h4>Sets: 4 Reps: 15</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
            <div id ='exerciseBox'>
              <h3>Leg Extension</h3>
              <h4>Sets: 3 Reps: 15</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
            <div id ='exerciseBox'>
              <h3>Lying Hamstring Curl</h3>
              <h4>Sets: 3 Reps: 15</h4>
              <div >
                <input id='reps' type='text' placeholder='# of Reps' />
                <input id='weight' type='text' placeholder='Weight' />
                <div>
                  <input id='notes' type='text' placeholder='Notes' ></input>
                </div>
                <input type='submit' value='Submit' onClick={()=> this.submitForm()}></input>
              </div>
            </div>
          </div>
        </header>
      </section>
    );
}

