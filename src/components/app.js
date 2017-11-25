import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import ContestsPreview from './contestspreview';
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
        <div>
          {this.props.contests.map(
            contest => <ContestsPreview {...contest} />
          )}
        </div>
      </Fabric>
    );
  }
}

export default App;
