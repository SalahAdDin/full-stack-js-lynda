import React, { Component } from 'react';
// import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import Header from './header';
import ContestList from './contestlist';
import Contest from './contest';
import * as api from '../api';

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

    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contest: {
          ...this.state.contest,
          [contest.id]: contest
        }
      });
    });
  };

  currentContent(){
    if(this.state.currentContestId){
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    return <ContestList
      onContestClick={this.fetchContest}
      contests={this.state.contests} />;
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
