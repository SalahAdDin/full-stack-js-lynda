import React, { Component } from 'react';
// import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import Header from './header';
import ContestList from './contestlist';

const pushState = (obj, url) => window.history.pushState(obj,'', url);

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

  fetchContest = (contestId) => {
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );
  };

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
