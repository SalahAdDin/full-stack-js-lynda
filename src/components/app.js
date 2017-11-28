import React, { Component, PropTypes } from 'react';
// import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import Header from './header';
import ContestList from './contestlist';
import Contest from './contest';
import * as api from '../api';

const pushState = (obj, url) => window.history.pushState(obj,'', url);

class App extends Component {
  static propType = {
    // initialData: PropTypes.object.isRequired
  };

  state = this.props.initialData;

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
        currentContestId: contest.id,
        contest: {
          ...this.state.contest,
          [contest.id]: contest
        }
      });
    });
  };

  fetchContestList = () => {
    pushState(
      { currentContestId: null },
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };

  fetchNames = (nameIds) =>{
    if (nameIds.length === 0){
      return;
    }
    api.fetchNames(nameIds).then(names => {
      this.setState({
        names
      });
    });
  };

  currentContest(){
    return this.state.contests[this.state.currentContestId];
  }

  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }

    return 'Naming Contests';
  }

  lookupName = (nameId) => {
    if(!this.state.names || !this.state.names[nameId]) {
      return {
        name: '...'
      };
    }
    return this.state.names[nameId];
  }

  currentContent(){
    if(this.state.currentContestId){
      return <Contest
        contestListClick={this.fetchContestList}
        fetchNames={this.fetchNames}
        lookupName={this.lookupName}
        {...this.currentContest()} />;
    }
    return <ContestList
      onContestClick={this.fetchContest}
      contests={this.state.contests} />;
  }

  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
