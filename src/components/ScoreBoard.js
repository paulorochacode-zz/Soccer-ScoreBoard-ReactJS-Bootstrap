import React from "react";
import Team from './Team';
import Game from './Game';

export default class ScoreBoard extends React.Component {
      constructor(){
            super();
            this.state ={
                  gols_home:0,
                  gols_visitor:0,
            };
      }

      putGolHome(){
            this.setState({
                  gols_home: this.state.gols_home + 1,
            })
      }

      putGolVisitor(){
            this.setState({
                  gols_visitor: this.state.gols_visitor + 1,
            })
      }

      render(){
            return(
            <div className="row justify-content-center">
            <div className="col-7 aligh-items-start " style={{"border": "solid","margin":"0px"}}>
                  <div className="row">   
                     <h3 className="col-8 offset-1">Home</h3>
                     <h3 className="col-3">Visitor</h3>
                  </div>   
                     <div className="bg-info justify-content-center col-3" style={{float: "left", "marginRight": "0px","border": "solid", }}>
                           
                           <Team name={this.props.home.name} 
                           gols={this.state.gols_home}
                           putGol={this.putGolHome.bind(this)}
                           />
                     </div> 
                     <div className="justify-content-center"style={{float: "left", "marginRight": "0px","border": "solid",}}>
                           <Game stadium={this.props.game.stadium}
                                 date={this.props.game.date}
                                 time={this.props.game.time}/>
                     </div> 
                     
                     <div className="bg-info justify-content-center" style={{float: "left", "marginRight": "0px","border": "solid",}}>
                           
                           <Team name={this.props.visitor.name} 
                           gols={this.state.gols_visitor}
                           putGol={this.putGolVisitor.bind(this)}/>
                     </div>
                     <div style={{clear: "both"}}></div>
               </div>   
               </div>
            )
      }
}