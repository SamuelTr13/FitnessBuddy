import React, { Component } from 'react';
import '../styles.css';

export default function Home() {
    return (
      <section className="mainMenu">
        <header className="pageHeader">
          <h1>Ain't Gonna Need Shoulder Pads No More!</h1>
          <div id = 'main'>
            <div id ='exerciseBox'>
              <h3>Machine Shoulder Press</h3>
              <h4>Sets: 3 Reps: 15, 12, 10</h4>
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
              <h3>Dumbbell Front Raise</h3>
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
              <h3>Seated Dumbbell Shoulder Press</h3>
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
              <h3>Dumbbell Lateral Raise</h3>
              <h4>Sets: 3 Reps: 12</h4>
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
              <h3>Cable Lateral Raise</h3>
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
              <h3>Machine Reverse Fly</h3>
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

