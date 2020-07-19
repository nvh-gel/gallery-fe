import React, {Component} from "react";
import AppNavBar from "./AppNavBar";
import {Container, Button} from "reactstrap";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavBar/>
                <Container fluid>
                    <Button color="link">
                        <Link to="/groups">Manage JUG Tours</Link>
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Home;
