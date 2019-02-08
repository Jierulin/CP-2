
import React, { Component } from 'react';
import './App.css';

var wisdoms =[
  "Yidian!!!!",
  "Kangle!!!",
  "I need to see photos of my cute dogs, mom.",
  "Jieru is the smartest.",
  "Caution: Keep out of reach of children.",
  "You're growing out of some of your problems, but there are others that you're growing into.",
  "Every cloud engenders not a storm.",
  "My dogs are cute.",
  "I need good sleep.",
  "I need good food."

]

  var index = Math.floor(Math.random()*wisdoms.length) 
    
class App extends Component {

  constructor(props) {
    super(props);
    
    var index = 0;
    this.state = {
      wisdom: wisdoms[index]
    };
    
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);

setInterval(this.setRandomWisdom,15000);


  }




  
  setRandomWisdom() {
     var index1 = Math.floor(Math.random()*wisdoms.length) 
     if(index1==index){
         if(index1<=wisdoms.length-1){
             index1++;
             if (index1 > wisdoms.length-1) {
                index1 = 0;
             }
             this.setState({
                wisdom:wisdoms[index1]});
                }else{
                      index1=0;
                     this.setState({
                      wisdom:wisdoms[index1]});
                 }

                 index=index1;
                }else {
           
              this.setState( {
              wisdom:wisdoms[index1]});
            
              index=index1;

         }      
    


  }
  
  addWisdom() {
    wisdoms.push(prompt("What new wisdom do you offer?"));
  }
  
  removeCurrentWisdom() {
    var index = wisdoms.indexOf(this.state.wisdom);
    wisdoms.splice(index, 1);
  }
  
  render() {
    return (
      <div className="App">
        {this.state.wisdom}
        <button className="more" onClick={this.setRandomWisdom}>Another</button>
        <button className="new-wisdom" onClick={this.addWisdom}>Another</button>
    
 </div>
    );
  }
}

export default App;
