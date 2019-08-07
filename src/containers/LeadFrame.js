import React from 'react'
import propTypes from 'prop-types'
import { Container, Row, Col } from "react-bootstrap";

export class LeadFrame extends React.Component {
    render() {
        const { photo, name, logo, alt, alt2 } = this.props
        return (
            <Container className="CollorStyle_22 lightShadow">
                <Row className="LeadFrameRow">
                    <Col>
                        <img id='leadframePhoto' src={photo} className='leadFramePhoto' alt={alt}></img>
                    </Col>
                    <Col>
                        <div className="inner">
                            <object type="image/svg+xml" data={logo} width="120" height="120" alt={alt2}></object> 
                            <h1>{name}</h1>
                            <h2>PERMANENT MAKEUP</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

LeadFrame.propTypes = {
    photo: propTypes.string.isRequired,
    logo: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
}