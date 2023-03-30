import { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import '../styles/experience.css';
import 'react-vertical-timeline-component/style.min.css';

const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
  },
};

const data = {
  experiences: [
      {
          title: "Member of Technical Staff",
          subtitle: "42Gears Mobility Systems",
          workType: "Full-time",
          workDescription: [
              "Develop & manage MDM solution",
              "Develop android apps for Phone, wear OS & VR"
          ],
          dateText: "07/2021 – Present"
      },
      {
          title: "Application Developer",
          subtitle: "Vrook",
          workType: "Internship",
          workDescription: [
              "Develop User Interface and framework for chatbot using React & React Native"
          ],
          dateText: "07/2020 – 12/2022"
      },
      {
          title: "Android Developer",
          subtitle: "Dwaiapayana Technologies",
          workType: "Internship",
          workDescription: [
              "Developed multiple customer-centric android applications.",
          ],
          dateText: "03/2020 – 06/2020"
      }
  ]
}

function Experience(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;

  return (
    <>
      <Header title={header} />

      {data
        ? (
          <div className="section-content-container">
            <Container>
              <VerticalTimeline
                lineColor={theme.timelineLineColor}
              >
                {data.experiences.map((item) => (
                  <Fade>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                      key={item.title + item.dateText}
                      date={item.dateText}
                      style={styles.itemStyle}
                      contentStyle={{ color: theme.color }}
                    >
                      <h2 className="item-title">
                        {item.title}
                      </h2>
                      <div style={styles.subtitleContainerStyle}>
                        <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                          {item.subtitle}
                        </h4>
                        {item.workType && (
                        <h5 style={{...styles.inlineChild,color: theme.background}}>
                    &nbsp;·
                          {' '}
                          {item.workType}
                        </h5>
                        )}
                      </div>
                      <ul style={styles.ulStyle}>
                        {item.workDescription.map((point) => (
                          <div key={point}>
                            <li style={{color: theme.background}}>
                              <ReactMarkdown
                                children={point}
                                components={{
                                  p: 'span',
                                }}
                              />
                            </li>
                            <br />
                          </div>
                        ))}
                      </ul>
                    </VerticalTimelineElement>
                  </Fade>
                ))}
              </VerticalTimeline>
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
}

Experience.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Experience;