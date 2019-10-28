import React from 'react';

import QuoteCitation from './Components/QuoteCitation';

import axios from 'axios';

const exemple = [{
  quote:"Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?",
  character:"Abe Simpson",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593"
}]


class App extends React.Component{

state={
  simpson:exemple[0]
}

getSimpson= this.getSimpson.bind(this)

getSimpson() {
  axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
    .then (response => response.data)
    .then (data => {
      this.setState ({
        simpson: data[0],
      });
    });
}

render (){
  const {simpson} = this.state
  return(
    <div>
      <QuoteCitation simpson={simpson} />
      <button type="button" onClick={this.getSimpson}>Get simpson</button>
    </div>
    );
  }
}

export default App;
