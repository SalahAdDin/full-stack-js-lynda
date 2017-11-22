import React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import Header from './header';

const App = (props) => {
  return (
    <Fabric>
      <Header message="Naming contexts"/>
    </Fabric>
  );
};

export default App;
