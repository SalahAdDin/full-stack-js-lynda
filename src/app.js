import React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

const App = (props) => {
  return (
    <Fabric>
      <h2 className="ms-textAlignCenter">
        {props.headerMessage}
      </h2>
    </Fabric>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string.isRequired
};

App.defaultProps = {
   headerMessage: 'Hello!!'
 };

export default App;
