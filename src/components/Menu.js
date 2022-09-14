import React, { Component } from 'react';
import '../styles.css';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch('/api/')
    //   .then(res => res.json())
    //   .then((characters) => {
    //     if (!Array.isArray(characters)) characters = [];
    //     return this.setState({
    //       characters,
    //       fetchedChars: true
    //     });
    //   })
    //   .catch(err => console.log('Characters.componentDidMount: get characters: ERROR: ', err));
  }

  render() {
    return (
      <section className="mainMenu">
        <header className="pageHeader">
          <h1>Chest Day!</h1>
          <div id = 'mainContainer'>
            <div id ='exerciseBox'>
              <h3>Bench Press</h3>
              <h4>Sets: 3 Reps: 8-10</h4>
              <form method='POST' action='/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Incline Bench Press</h3>
              <h4>Sets: 4 Reps: 10-12</h4>
              <form method='POST' action='/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Dumbbell Chest Press</h3>
              <h4>Sets: 3 Reps: 12, 10, 8</h4>
              <form method='POST' action='/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Incline Press Machine</h3>
              <h4>Sets: 3 Reps: 12-15</h4>
              <form method='POST' action='/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
                </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Bench Press Machine</h3>
              <h4>Sets: 4 Reps: 12, 10, 8, 6</h4>
              <form method='POST' action='/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id ='exerciseBox'>
              <h3>Machine Fly</h3>
              <h4>Sets: 3 Reps: 12-15</h4>
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
}

export default Menu;
