import React from "react"
import { Card, Container, Row, Col, Media } from "react-bootstrap";

export class Feedback extends React.Component {
    render() {
        return (
            <Container className="backstageFeedback">
                <Row className="headinMT positionCenter">
                    <h2 className="fontColor22">ОТЗЫВЫ</h2>
                </Row>
                <Row className="mediaMT positionCenter">
                    <ul className="list-unstyled">
                        {this.props.feedback.map(function(card){
                            return(
                                <Media as="li" key={card.id} className="mediaIndent">
                                        <img
                                        width={128}
                                        height={128}
                                        className="mr-3 mediaImg"
                                        src={card.photo}
                                        alt={card.alt}
                                        />
                                    <Media.Body className="fontColor22 tmY-50">
                                        <h5>{card.heading}</h5>
                                        <p className="blockquote-footer ">{card.text}</p>
                                    </Media.Body>
                                </Media>
                            )})}
                    </ul>
                </Row>
            </Container>
        )
    }
}