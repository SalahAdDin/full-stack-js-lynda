import React, { Component } from 'react';
// import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import Header from './header';
import ContestList from './contestlist';

class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
