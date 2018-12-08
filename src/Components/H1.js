import React from 'react';
import {Link} from 'react-router-dom';


class H1 extends React.Component {
    render() {
      return (
        <React.Fragment>
      <div>
          <Link to="/"><img className="header_img" src="./img/image02.jpg" alt=""/></Link>
      </div>
      </React.Fragment>
      );
    }
  }
  
  export default H1;