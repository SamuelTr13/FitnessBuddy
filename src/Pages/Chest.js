import React, {Component} from 'react';
import '../styles.css';


// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
// const useInput = init => {
//   const [ value, setValue ] = useState(init);
//   const onChange = e => {
//     setValue(e.target.value);
//   };
//   // return the value with the onChange function instead of setValue function
//   return [ value, onChange ];
// };

class Chest extends Component {
    constructor(props) {
    super(props);
    this.state = {
      history: [],
      historyUpdate: false,
    }
    this.submitForm = this.submitForm.bind(this);
    this.getHistory = this.getHistory.bind(this);
  }
  
  componentDidMount() {
    this.getHistory();
  }

  submitForm (event) {
    const body = {
      reps,
      weight,
      notes,
    };

    fetch('/api/chest', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(() => {
        this.getHistory();
        // newHistory = this.state.historyUpdate;
        // this.setState({ historyUpdate: !newHistory })
      })
      .catch(err => console.log('Chest post history /pages/chest: ERROR: ', err));
  }//end of submitform

  //get history of workouts
  getHistory () {
    fetch('/api/chest')
      // .then(res => {
      //   return res.json()
      // })
      .then((history) => {
        // console.log('response', history)
        if (!history.history) history = [];
        return this.setState({
          history: [{'Reps': 4, Weight: 50, Notes: ''},{'Reps': 4, Weight: 50, Notes: ''}],
        });
      })
      .catch(err => console.log('Chest.gethistory: get history: Error: ', err));
  }//end of get history
  
  //live reloading to see history 
  //when click on submit for each workout then live reload history to the screen 
  render() {
    const historyData = [];
    const { history } = this.state;
    for (let i = 0; i < history.length; i++) {
      const reps = history[i].Reps;
      const weight = history[i].Weight;
      const notes = history[i].Notes;
      historyData.push(
        <div key = {i}>
          <h3>Reps: {reps} Weight: {weight}</h3>
          <h4>Notes: {notes}</h4>
        </div>
      )
      
    }
    
    // const [reps, repsOnChange] = useInput('');
    // const [weight, weightOnChange] = useInput('');
    // const [notes, notesOnChange] = useInput('');
    
    return (
      <section className="mainMenu">
        <header className="pageHeader">
          <h1>Let's Get that Pec Meat</h1>
          <div id='mainContainer'>
            <div id='exerciseBox'>
              <h3>Bench Press</h3>
              <h4>Sets: 3 Reps: 8-10</h4>
              <form onSubmit={this.submitForm} >
                <input className='repititions' type='text' placeholder='# of Reps' />
                <input className='weight' type='text' placeholder='Weight' />
                <div>
                  <input className='notes' type='text' placeholder='Notes' ></input>
                </div>
                <button type='submit' >Submit</button>
              </form>
              <div>{historyData}</div>
            </div>
            <div id='exerciseBox'>
              <h3>Incline Bench Press</h3>
              <h4>Sets: 4 Reps: 10-12</h4>
              <form method='POST' action='/pages/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id='exerciseBox'>
              <h3>Dumbbell Chest Press</h3>
              <h4>Sets: 3 Reps: 12, 10, 8</h4>
              <form method='POST' action='/pages/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id='exerciseBox'>
              <h3>Incline Press Machine</h3>
              <h4>Sets: 3 Reps: 12-15</h4>
              <form method='POST' action='/pages/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id='exerciseBox'>
              <h3>Bench Press Machine</h3>
              <h4>Sets: 4 Reps: 12, 10, 8, 6</h4>
              <form method='POST' action='/pages/chest'>
                <input className='repititions' type='text' placeholder='# of Reps'></input>
                <input className='weight' type='text' placeholder='Weight'></input>
                <div>
                  <input className='notes' type='text' placeholder='Notes'></input>
                </div>
                <input type='submit' value='Done Set'></input>
              </form>
            </div>
            <div id='exerciseBox'>
              <h3>Machine Fly</h3>
              <h4>Sets: 3 Reps: 12-15</h4>
              <form method='POST' action='/pages/chest'>
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
  }//end of render
}//end of class

export default Chest;