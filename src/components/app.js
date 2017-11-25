import React, { Component } from 'react';
import axios from 'axios';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import ContestsPreview from './contestspreview';
import Header from './header';

class App extends Component {
  // constructor() {

  //}

  state = {
    pageHeader: 'Nanimg Contests',
    contests: []
  };

  componentDidMount(){
    axios.get('/api/contests').then(
      resp => {
        this.setState({
          contests: resp.data.contest
        });
      }
    ).catch(console.error);
  }

  componentWillUnMount(){

  }

  render() {
    return (
      <Fabric>
        <Header message={this.state.pageHeader}/>
        <div>
          {this.state.contests.map(
            contest => <ContestsPreview key={contest.id} {...contest} />
          )}
        </div>
      </Fabric>
    );
  }
}

export default App;
