import React from "react";
//import "semantic-ui-css/semantic.min.css";
import {Grid} from "semantic-ui-react";
import BodyBackgroundColor from "react-body-backgroundcolor";
import HeaderTmpl from "./Header";
import FooterTmpl from "./Footer";
import LeftBarTmpl from "./LeftBar";

export default props => {
    return (
        <div style={{backgroundColor:"#E9F6F9"}}>
			  {<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>}
			  {/*<HeaderTmpl />*/}
			  {/*<BodyBackgroundColor backgroundColor='#E9F6F9'>*/}
				<Grid>
					<Grid.Row columns={3} only='computer'>
						<Grid.Column width="3">
							{/*<LeftBarTmpl />*/}
						</Grid.Column>
						<Grid.Column width="13">
							{props.children}
						</Grid.Column>
						{/*
							<Grid.Column width="3">
							</Grid.Column>
						*/}
					</Grid.Row>
				</Grid>
				{/*<FooterTmpl />*/}
			{/*</BodyBackgroundColor>*/}
			</div>
    );
}
