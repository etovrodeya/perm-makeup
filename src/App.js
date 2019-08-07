import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LeadFrame } from './containers/LeadFrame'
import { Container } from "react-bootstrap";
import { AboutProcces } from './containers/AboutProcces'
import { AboutMe } from './containers/AboutMe'
import { CarouselCert } from './containers/Carousel'
import { Certificates } from './containers/Certificates'
import { Price } from './containers/Price'
import { Feedback } from './containers/Feedback'
import { Contacts } from './containers/Contacts'
import { Footer } from './containers/Footer'

class App extends Component {
  render(){
    const { title, leadFrame, aboutProcces, aboutMe, carousel, price, feedback, certificates } = this.props
    return (
      <div >
        <Container id="leadFrameContent" className="CollorStyle_25 lightShadow">
          <LeadFrame photo={leadFrame.photo} name={title.name} logo={title.logoBlack} alt={leadFrame.alt} alt2={leadFrame.alt2}></LeadFrame>
          <AboutProcces text={aboutProcces.text} heading={aboutProcces.heading}></AboutProcces>
          <AboutMe aboutMe={aboutMe}></AboutMe>
          <CarouselCert carousel={carousel}></CarouselCert>
          <Certificates certificates={certificates}></Certificates>
          <Price price={price} links={title}></Price>
          <Feedback feedback={feedback}></Feedback>
          <Contacts links={title}></Contacts>
          <Footer links={title}></Footer>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    title: store.title,
    leadFrame: store.leadFrame,
    aboutProcces: store.aboutProcces,
    aboutMe: store.aboutMe,
    carousel: store.carousel,
    certificates: store.certificates,
    price: store.price,
    feedback: store.feedback,
  }
}

export default connect(mapStateToProps)(App);