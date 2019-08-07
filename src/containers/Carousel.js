import React from "react"
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";

export class CarouselCert extends React.Component {
    render() {
        return (
            <div>
                <h2 className="fontColor22 headinMT">СЕРТИФИКАТЫ</h2>
                <Carousel className="backstageCarousel textMT">
                    {this.props.carousel.map(card =>(
                        <Carousel.Item key={card.id}>
                        <img
                            className="d-block imageCarousel"
                            src={card.photo}
                            alt={card.alt}
                        />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        )
    }
}