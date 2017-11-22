import React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

const Header = ({ message }) => {
  return(

      <h2 className="ms-textAlignCenter">
        {message}
      </h2>
  );
};

const App = (props) => {
  return (
    <Fabric>
      <Header message="Naming contexts"/>
    </Fabric>
  );
};

export default App;
