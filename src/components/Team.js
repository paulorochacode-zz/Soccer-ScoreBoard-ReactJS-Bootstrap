import React from 'react';
import GolButton from './GolButton';

export default class Team extends React.Component {
      render(){
            return(
                  <div>
                        <h1 style={{"font-size":"4vw"}}>{this.props.name}</h1>
                        <h2 style={{"font-size":"4vw"}}>{this.props.gols}</h2>
                        <GolButton putGol={this.props.putGol}/>
                  </div>
            )
      }
}