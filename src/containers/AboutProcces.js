import React from 'react'
import propTypes from 'prop-types'
import { Container, Row, Col } from "react-bootstrap";

export class AboutProcces extends React.Component {
    render() {
        const { text, heading } = this.props
        return (
            <Container className="backstagePhoto">
                <Row className="backstage">
                    <Col xl={12}>
                        <h2 className="fontColor22 headinMT">{heading}</h2>
                        <div className="fontColor22 captionText indent textMT">{text}</div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

AboutProcces.propTypes = {
    text: propTypes.string.isRequired,
    heading: propTypes.string.isRequired,
}