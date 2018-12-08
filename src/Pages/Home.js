import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'
class Home extends Component {
    render() {
      return (
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="demo-grid-2">
        <Cell col={6}>
</Cell>
 <Cell col={4}>4</Cell>
<Cell col={2}>2</Cell>
</Grid>
</div>
      );
    }
  }
  
  export default Home;