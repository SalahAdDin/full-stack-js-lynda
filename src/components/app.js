import React, { Component } from 'react';
import axios from 'axios';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import Header from './header';
import ContestPreview from './contestpreview';

class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  render() {
    return (
      <Fabric className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </Fabric>
    );
  }
}

export default App;
