import React from 'react';

export default class GolButton extends React.Component {
      handleClick(event){
            event.preventDefault();
            this.props.putGol();
      }

      
      render(){
            return(
                  <button onClick={this.handleClick.bind(this)} class="btn btn-success px-5 m-2">Gol!</button>
            )
      }
}