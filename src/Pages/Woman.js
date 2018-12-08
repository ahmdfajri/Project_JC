import React, { Component } from 'react';
import {Layout, Drawer, Navigation, Content, Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom'

class Woman extends Component {
    render() {
      return (
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="demo-grid-2">
        <Cell col={6}>
        <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedDrawer>
            <Drawer title="Categories">
                <Navigation>
                <Link to="/Collections/All_Items">All Items</Link>
                    <Link to="/Collections/Woman">Woman</Link>
                    <Link to="/Collections/Kid">Kid</Link>
                    <Link to="/Collections/Baby">Baby</Link>
                </Navigation>
            </Drawer>
            <Content />
        </Layout>
    </div>
</Cell>
 <Cell col={4}>
</Cell>
<Cell col={2}>2</Cell>
</Grid>
</div>
      );
    }
  }
  
  export default Woman;