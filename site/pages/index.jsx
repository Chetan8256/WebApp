import React, { Component } from "react";
import Layout from "../components/Layout";
import {Card, Icon, Grid, Image, Segment, Table} from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Fetch} from "react-request";
import { Carousel } from 'react-responsive-carousel';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
/*
import factory from '../ethereum/factory';
*/


class MainIndex extends Component {
    state = {}
    /*
    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);
    }*/
    handleOnUpdate = (e, { width }) => this.setState({ width })

    render() {
        const { width } = this.state
        //const textAlign = width >= Responsive.onlyComputer.minWidth ? 'right' : 'left'
        return (
            <Layout>
                <Fetch url="http://localhost:9000/activitylogs" mode="cors">
                    {({ fetching, failed, response, data }) => {
                    if (fetching) {
                        return <div>Loading data...</div>;
                    }

                    if (failed) {
                        return <div>The request did not succeed.</div>;
                    }

                    if (data) {
                        return (
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Sr No.</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Population</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    { Object.keys(data).map((key)=> (
                                            <Table.Row key = {key}>
                                                <Table.Cell>{key}</Table.Cell>
                                                <Table.Cell>{data[key]["name"]}</Table.Cell>
                                                <Table.Cell>{data[key]["population"]}</Table.Cell>
                                            </Table.Row>
                                        )
                                    )}
                                </Table.Body>
                            </Table>
                        );
                    }
                    return null;
                    }}
                </Fetch>
            </Layout>
        );
    }
}

export default MainIndex;
