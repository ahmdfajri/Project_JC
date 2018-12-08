import React, { Component } from 'react';
import {Layout, Drawer, Navigation, Content, Grid, Cell} from 'react-mdl';

class Categories extends Component {
    render() {
      return (
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="demo-grid-2">
        <Cell col={6}>
        <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedDrawer>
            <Drawer title="Categories">
                <Navigation>
                    <a href="/">Woman</a>
                    <a href="/">Kid</a>
                    <a href="/">Baby</a>
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
  
  export default Categories;