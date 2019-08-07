import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap";

export class Certificates extends React.Component {
    render() {
        return (
            <Container className="backstageCertificates">
                <Row className=" headinMT">
                    {this.props.certificates.map(function(card){
                        return(
                            <Col key={card.id} xl={4} xs={4} >
                                <Card className="CollorStyle_25">
                                    <Card.Header className="CollorStyle_25 border-bottom">
                                        <img src={card.photo} width="104" height="104" className="m-center" alt={card.alt} ></img>
                                    </Card.Header>
                                    <Card.Body className="CollorStyle_25 FontCollorWhite">
                                        <Card.Text className="cardText textCenter">{card.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}