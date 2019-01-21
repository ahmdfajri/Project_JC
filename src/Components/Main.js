import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home';
import Categories from '../Pages/Categories';
import Gift from '../Pages/Gift';
import Collections from '../Pages/Collections';
import New from '../Pages/New';
import Sale from '../Pages/Sale';
import Store from '../Pages/Store';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Gift" component={Gift}/>
        <Route path="/Categories" component={Categories}/>
        <Route path="/Collections" component={Collections}/>
        <Route path="/New" component={New}/>
        <Route path="/Sale" component={Sale}/>
        <Route path="/Store" component={Store}/>
        <Route path="/Signin" component={Signin}/>
        <Route path="/Signup" component={Signup}/>
    </Switch>
)

export default Main;