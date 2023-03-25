import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import routes from '../utils/routes';
import FallbackSpinner from './FallbackSpinner';
import Footer from './Footer';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

const d = {
  about: "Currently working as Member of Technical Staff @ 42gears. \n\n Graduate in Electronics & Communications Engineering from DSCE \n\n ",
  imageSource: "images/about/profile.jpg"
  
}

function About(props) {
  const { header } = props;
  const [data, setData] = useState(d);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );


  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <img src={data?.imageSource} alt="profile" style={{width: 400, height: 300}} />
                  </Col>
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;