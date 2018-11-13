import React, {Component} from "react";
import {Container, Grid, Image, List, Divider, Segment, SegmentGroup} from "semantic-ui-react";

class FooterTmpl extends Component {
    render () {
        return (
            <div>
                <Divider horizontal>
                    <Segment textAlign='center'>Back To Top</Segment>
                </Divider>
                <Grid style={{backgroundColor: '#C9E7EF'}}>
                    <Grid.Row columns={1} only='mobile'>
                        <Grid.Column>
                            <Segment>Add Footer Content for mobile</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={4} only='computer'>
                        <Grid.Column>
                            <Segment>
                                <List divided relaxed>
                                    <List.Item>
                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                        <List.Description as='a'>Updated 10 mins ago</List.Description>
                                    </List.Content>
                                    </List.Item>
                                    <List.Item>
                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                                        <List.Description as='a'>Updated 22 mins ago</List.Description>
                                    </List.Content>
                                    </List.Item>
                                    <List.Item>
                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                                        <List.Description as='a'>Updated 34 mins ago</List.Description>
                                    </List.Content>
                                    </List.Item>
                                </List>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <List>
                                    <List.Item>
                                    <List.Header>New York City</List.Header>
                                    A lovely city
                                    </List.Item>
                                    <List.Item>
                                    <List.Header>Chicago</List.Header>
                                    Also quite a lovely city
                                    </List.Item>
                                    <List.Item>
                                    <List.Header>Los Angeles</List.Header>
                                    Sometimes can be a lovely city
                                    </List.Item>
                                    <List.Item>
                                    <List.Header>San Francisco</List.Header>
                                    What a lovely city
                                    </List.Item>
                                </List>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <List>
                                    <List.Item as='a'>What is a FAQ?</List.Item>
                                    <List.Item as='a'>Who is our user?</List.Item>
                                    <List.Item as='a'>Where is our office located?</List.Item>
                                </List>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <List>
                                    <List.Item icon='users' content='Semantic UI' />
                                    <List.Item icon='marker' content='New York, NY' />
                                    <List.Item
                                    icon='mail'
                                    content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
                                    />
                                    <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
                                </List>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default FooterTmpl;

