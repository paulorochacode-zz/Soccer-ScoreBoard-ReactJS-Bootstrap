import React from "react";



export default class Counter extends React.Component {
      constructor(){
            super();
            this.state = {
                  counter: 0,
            }
      }

      decrement(){
            this.setState({
                  counter: this.state.counter - 1
            });
      }

      increment(){
            this.setState({
                  counter: this.state.counter + 1
            });
      }

      render(){
            return(
                  <div class ="container">
                        <div class="row py-5" >
                              <div id="counter" class="col-2 align-self-center offset-5 p-2 ">
                                    <h1 class="offset-5">{this.state.counter}</h1>
                                    <div class="offset-2">
                                          <button class="btn btn-danger sm p-2.8 px-3 m-1" onClick={this.decrement.bind(this)}>-</button>
                                          <button class="btn btn-success sm p-2.5 m-1" onClick={this.increment.bind(this)}>+</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }
}