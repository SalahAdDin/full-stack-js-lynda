import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import Header from './header';

class App extends Component {
  // constructor() {

  //}

  state = {
    pageHeader: 'Nanimg Contests'
  };

  componentDidMount(){

  }

  componentWillUnMount(){
    
  }

  render() {
    return (
      <Fabric>
        <Header message={this.state.pageHeader}/>
      </Fabric>
    );
  }
}

export default App;
