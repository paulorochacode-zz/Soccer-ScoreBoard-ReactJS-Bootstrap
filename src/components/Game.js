import React from 'react';

export default class Team extends React.Component {
      render(){
            return(
                  <div>
                        <h2 style={{"font-size":"2vw"}}>{this.props.stadium}</h2>
                        <div>
                              <span style={{"font-size":"2vw"}}>{this.props.date}</span>
                              <span>-</span>
                              <span style={{"font-size":"2vw"}}>{this.props.time}</span>
                        </div>
                  </div>
            )
      }
}