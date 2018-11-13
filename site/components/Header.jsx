import React, {Component} from "react";
//import {browserHistory} from "react-router";
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Menu, Segment, Responsive, Grid, Input, Dropdown, Button} from "semantic-ui-react";
import "../public/css/app.css";

class HeaderTmpl extends Component {

    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        //this.props.history.push("/irdata");
        //this.props.pathname = "/irdata";
        //this.props.history.push("/irdata");
    }
    handleOnUpdate = (e, { width }) => this.setState({ width })
    /*
    redirect(to) {
        browserHistory.push({
           pathname: to
        });
    }
    */
    render () {
        const { activeItem, width } = this.state
        const textAlign = width >= Responsive.onlyComputer.minWidth ? 'right' : 'left'
        return (
            <Grid>
                <Grid.Row columns={1} only='mobile'>
                <Grid.Column>
                    <Segment>Here you can add content for mobile view</Segment>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} only='computer'>
                    <Grid.Column>
                        <Menu className="topMenu">
                            <Menu.Item header>Our Company</Menu.Item>
                            <Menu.Item
                            name='home'
                            //as={Link} to="/"
                            //onClick={(event, itemProps) => this.redirect(itemProps.name)}
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                            href="/"
                            >
                            Home
                            </Menu.Item>

                            <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                            href="/login"
                            //as={Link} to="/login"
                            //onClick={(event, itemProps) => this.redirect(itemProps.name)}
                            >
                            Login
                            </Menu.Item>
                            <Menu.Item name='register'
                            active={activeItem === 'register'}
                            onClick={this.handleItemClick}
                            href="/register"
                            //as={Link} to="/register"
                            //onClick={(event, itemProps) => this.redirect(itemProps.name)}
                            >
                            Register
                            </Menu.Item>
                            <Menu.Item name='search' style={{width: "40rem"}}>
                            <Input className='icon' fluid icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <Dropdown item text='Language'>
                                    <Dropdown.Menu>
                                    <Dropdown.Item>English</Dropdown.Item>
                                    <Dropdown.Item>Russian</Dropdown.Item>
                                    <Dropdown.Item>Spanish</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Menu.Item>
                                    <Button primary>Sign Up</Button>
                                </Menu.Item>
                                <Menu.Item>
                                    <Button primary>Sign Up</Button>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                        <Menu>
                            <Menu.Item
                            name='editorials'
                            active={activeItem === 'editorials'}
                            onClick={this.handleItemClick}
                            >
                            Editorials
                            </Menu.Item>

                            <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
                            Reviews
                            </Menu.Item>

                            <Menu.Item
                            name='upcomingEvents'
                            active={activeItem === 'upcomingEvents'}
                            onClick={this.handleItemClick}
                            >
                            Upcoming Events
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default HeaderTmpl;

