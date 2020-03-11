import React, {Component} from 'react';

class Ticker  extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  };

  //Lifcycle methods -- Built in
  componentDidMount () {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000)
  }

  shouldComponentUpdate (nextProps, nextState) {
    //this is where we check a condition if it's true or fa;se
    //and only allow a re-render if the condition is true
    // if(nextState.count % 3 === 0) return true;
    //   else return false;
    return(nextState.count % 3 === 0); //one-liner

  }

  //custom method
  reset = () => {
     this.setState({
       count: 0
   });
 };

  //This is a custom method
  // increment = () => {
  //   if(this.state.count === 0){
  //     this.state.count++;
  //   };
  // };



  render () {
    return(
      <div>
      <p>The Ticker is: {this.state.count} </p>
      <button onClick={this.reset} type="button">Reset the Ticker</button>
      </div>
    );
  };
};



export default Ticker;
