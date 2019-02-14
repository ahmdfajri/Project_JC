import React, { Component } from 'react';
import { Layout, Header, Navigation, Textfield, Content, Dialog, DialogTitle, DialogActions, Button, DialogContent } from 'react-mdl';
import Main from './Main';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    handleOpenDialog() {
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }
    render() {
        return (
            <div className="header_color">
                <Link to="/"><img className="header_img" src="./img/image.png" alt="" /></Link>
                <h1 className="tea_line">TEA LINE</h1>
                <Layout>
                    <Header className="header_color">
                        <Navigation>
                            <Link to="/New">SHOP</Link>
                            <Link to="/Categories">BLOG</Link>
                            <Link to="/Collections">COLLECTIONS</Link>
                            <Textfield
                                onChange={() => { }}
                                label="Expandable Input"
                                expandable
                                expandableIcon="search"
                            />
                            <div>
                                <Button colored onClick={this.handleOpenDialog} raised ripple>Sign In</Button>
                                <Dialog open={this.state.openDialog}>
                                    <DialogTitle>LOGIN</DialogTitle>
                                    <DialogContent>
                                        <p>Please enter your email and password</p>
                                        <input placeholder="email"></input>
                                        <input placeholder="password"></input>
                                        <p>Don't have account? Please Signup</p>
                                        <Button>Signup</Button>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button type='button'>Agree</Button>
                                        <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </Navigation>
                    </Header>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>


        );
    }
}

export default Nav;
