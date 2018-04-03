import React from "react";

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.onPlus = this.onPlus.bind(this);
        this.onMinus = this.onMinus.bind(this);
    }

    onPlus() {
        this.setState({count: this.state.count + 1})
    }
    onMinus() {
        this.setState({count: this.state.count - 1});
    }
  render() {
    return (
        <div>
          <h1>Counter</h1>
          <p>current count: {this.state.count}</p>
          <button onClick={()=> this.onPlus()}>plus</button>
          <button onClick={()=> this.onMinus()}>minus</button>
        </div>
      )
  }
}

