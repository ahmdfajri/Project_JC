import React, { Component } from 'react';
import { Layout, Header, Navigation, Textfield, Content } from 'react-mdl';
import Main from './Main';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="/"><img className="header_img" src="./img/image02.jpg" alt=""/></Link>
            <div className="demo-big-content">
                <Layout>
                    <Header className="header_color">
                        <Navigation>
                            <Link to="/New">NEW ARRIVAL</Link>
                            <Link to="/Categories">CATEGORIES</Link>
                            <Link to="/Collections">COLLECTIONS</Link>
                            <Link to="/Sale">SALE</Link>
                            <Link to="/Gift">GIFT</Link>
                            <Link to="/Store">OUR STORE</Link>
                            <Textfield
                                onChange={() => { }}
                                label="Expandable Input"
                                expandable
                                expandableIcon="search"
                            />
                        </Navigation>
                    </Header>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
            </div>

        );
    }
}

export default Nav;
