import React from "react"
import { Container, Row, Col } from "react-bootstrap";

import direct from '../media/images/direct.svg'
import phone from '../media/images/phone.svg'

export class Contacts extends React.Component {
    render() {
        return (
            <Container name="#contacts" id="#contacts" className="backstageContacts CollorStyle_25">
                <Row className="">
                    <Col className="textCenter">
                        <h2 id="#contacts" className="fontColor22 headinMT">АДРЕС</h2>
                    </Col>
                    <Col className="textCenter">
                        <h2 className="fontColor22 headinMT">КОНТАКТЫ</h2>
                    </Col>
                </Row>
                <Row className="textRight textContacts ">
                    <Col className=" textIndent">
                        <a href={this.props.links.linkMap} className="border-bottom textIndent">
                            <span className="fontColor22 cardTitie ">Остановка ”Железнодорожная больница”</span>
                            <span className="fontColor22 cardText">город Смоленск, Смоленская область</span>
                        </a>
                    </Col>
                    <Col>
                        <Row className="textleft">
                            <object type="image/svg+xml" data={phone} width="32" height="32" className="mr-2" alt={this.props.links.alt}></object> 
                            <a href={this.props.links.linkPhone} className="fontColor22 cardTitie textleft innerText border-bottom">+7-(999)-999-99-99</a>
                        </Row>
                        <Row className="textSubContacts">
                            <object type="image/svg+xml" data={direct} width="32" height="32" className="mr-2" alt={this.props.links.alt2}></object> 
                            <a href={this.props.links.linkDirect} className="fontColor22 cardTitie innerText border-bottom">@anastasia_alexeeva_permanent</a>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}