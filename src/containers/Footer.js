import React from "react"
import { Container, Row } from "react-bootstrap";

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Container className="CollorStyle_25 textCenter">
                    <Row>
                        <div className="fontColor22 cardText m-center">2019<br /><a href={this.props.links.linkAuthor} className="fontColor22 border-bottom fp">CREATED BY ANDREY PISKUNOV</a></div>
                    </Row>
                </Container>
            </footer>
        )
    }
}