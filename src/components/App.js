import './App.css';
import React from 'react';
import ScoreBoard from "./ScoreBoard";

const data = {
  game: {
    stadium:"Giuseppe Meazza",
    date: "01/06/2016",
    time: "19h",
  },
  home: {
    name:"Milan",
  },
  visitor: {
    name:"Manchester",
  }
}
export default class App extends React.Component{
    render() {
      return(
        <div>
          <ScoreBoard game={data.game}
                      home={data.home}
                      visitor={data.visitor}/>
        </div>
       );
    }
}


