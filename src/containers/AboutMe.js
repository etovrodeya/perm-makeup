import React from 'react'
import { Container, Row, Col, Media } from "react-bootstrap";

export class AboutMe extends React.Component {
    render() {
        const { aboutMe } = this.props
        return (
            <Container>
                <Row className="backstageAboutMe">
                    <Col xl={12}>
                        <h2 className="fontColor22 headinMT">ОБО МНЕ</h2>
                        <Media className="textMT">
                            <img width="104" height="104" src={aboutMe.photo} className="mr-4 innerMedia" alt={aboutMe.alt}></img>
                            <Media.Body>
                                <div className="fontColor22 captionText indent">
                                    Меня зовут Анастасия. Я делаю перманентный макияж в городе Смоленск, а так же укладку бровей, выстраиваю их архетиктуру, окрашиваю ресницы, триддинг лица.
                                    Я являюсь сертифицированным специалистом в области перманентного макияжа. Имею медицинское образование.
                                    Записаться ко мне можно по телефону или написав в Direct в instagram.
                                </div>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
            </Container>
        )
    }
}