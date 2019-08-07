import React from "react"
import { Card, Container, Row, Col, Button } from "react-bootstrap";

export class Price extends React.Component {
    render() {
        return (
            <Container className="backstagePrice">
                <Row className="positionCenter  headinMT">
                    <h2 className="fontColor22">УСЛУГИ</h2>
                </Row>
                <Row className="positionCenter">
                    <h3 className="fontColor22 headinMTsub">ПЕРМАНЕНТНЫЙ МАКИЯЖ</h3>
                </Row>
                <Row className=" headinMTsub">
                    {this.props.price.slice(0,3).map(function(price){
                        return(
                            <Col key={price.id} >
                                <Card className="cardPrice lightShadow">
                                    <Card.Body className="cardPriceBody CollorStyle_23">
                                        <Card.Title className="cardPriceTitie">{price.heading}</Card.Title>
                                        <Card.Text className="cardPriceText">{price.text}</Card.Text><p className="cardPriceValue tmX-50">{price.price}</p>
                                        <a href="index.html##contacts" className="cardPriceButton btn btn-light">Записаться</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                <Row className="positionCenter">
                    <h3 className="fontColor22 headinMTsub">УХОД ЗА БРОВЯМИ</h3>
                </Row>
                <Row className=" headinMTsub">
                    {this.props.price.slice(3,6).map(function(price){
                        return(
                            <Col key={price.id} >
                                <Card className="cardPrice lightShadow">
                                    <Card.Body className="cardPriceBody CollorStyle_23">
                                        <Card.Title className="cardPriceTitie">{price.heading}</Card.Title>
                                        <Card.Text className="cardPriceText">{price.text}</Card.Text><p className="cardPriceValue tmX-70">{price.price}</p>
                                        <a href="index.html##contacts" className="cardPriceButton btn btn-light">Записаться</a>
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