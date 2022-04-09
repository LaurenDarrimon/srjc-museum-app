import React from "react";

import { Container, Row, Col, Accordion } from "react-bootstrap";

import logo from "../assets/images/logo-500.png";

const About = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    //loading or intro screen and homepage
    <Container fluid className="about-page">
      <Row className="justify-content-center p-5">
        <Col xs={12} className="text-center">
          <h1 className="display-3">Thanks for Playing!</h1>
          <h2 className="subtitle p-5">About </h2>
        </Col>
        <Col xs={11} md={10}>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>This Game</Accordion.Header>
              <Accordion.Body>
                <p>
                  Thanks for playing the North American Art Scavenger Hunt! This educational game is intended to teach museum visitors about native American art while having fun and exploring.
                </p>
                <img
                  src={logo}
                  className="logo-about img-fluid float-end"
                  alt="round SRJC logo showing black on white pottery design"
                />
                <p>
                  It is centered around the SRJC Multi-Cultural Museum's collection of art and artifacts from across North America, particularly California, the Pacific Northwest, the Southwest, and the Great Plains.
                </p>
                <p>
                  This game was created specifically with our local school district's annual 4th grade field trip in mind. But is intended to be enjoyed by all. Thanks for playing 4th graders! (and everyone else!) 
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Our Team</Accordion.Header>
              <Accordion.Body>
                <h2>OUR TEAM</h2>
                <div>{/*This is for Lauren*/}
                  <h3>Lauren Duker Darrimon</h3>
                  <p><small><em>Full-Stack | Digital & Web Developer</em></small></p>
                  <p>
                    <button>LinkedIn</button>
                    <button>GitHub</button>
                    <button>Website</button>
                    <button>Email</button>
                  </p>
                </div>
                <div>
                  {/*This is for Erin*/}
                  <h3>Erin Potter</h3>
                  <p><small><em>Front-End Developer | Designer</em></small></p>
                  <p>
                    <button>LinkedIn</button>
                    <button>GitHub</button>
                    <button>Website</button>
                    <button>Email</button>
                  </p>
                </div>
                <div>
                  {/*Wayne */}
                  <h3>Wayne Howlett</h3>
                  <p><small><em>Full-Stack | Digital & Web Developer</em></small></p>
                  <p>
                    <button href="www.linkedin.com/in/wayne-howlett">LinkedIn</button>
                    <button href="https://github.com/WHowlett">GitHub</button>
                    <button href="www.waynehowlett.tech">Website</button>
                    <button href="mailto:wmhowlett89@icloud.com">Email</button>
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>This Museum</Accordion.Header>
              <Accordion.Body>
                <h2>THIS MUSUEM </h2>
                <p>
                  The Santa Rosa Junior College Multicultural Museum is a unique institution in that we are one of only 12 museums in the country that is housed in a two year college. Founded in 1939,
                  the SRJC Multicultural Museum has over 5,000 catalogued items, and over 90% of our collection has been donated by community members like you.
                </p>
                <p>
                  <stong><em>
                    The mission of the Santa Rosa Junior College Multicultural Museum is to promote awareness and appreciation for the diverse cultural achievements of human expression in material form, by upholding the highest level of archival care, preservation, and exhibit presentation
                    to the public - who are the united stakeholders of a united cultural heritage.
                  </em></stong>
                </p>
                <p>
                  With only two permanent staff members and a small group of student employees and volunteers, the SRJC Multicultural Museum provides services to over 4,300 visitors per year from the Santa Rosa Junior College and the community at large on a very modest budget. Of these visitors, we host numerous hands-on
                  educational tours to K-12 school groups; helping to educate our future college students.
                </p>
                <p>
                  Our holdings include the renowned Elsie Allen Pomo Basketry Collection; Southwest pottery from world famous artists such as Nampeyo, Maria Martinez, and Lucy Lewis; diverse African sculptures and masks; original serigraphs
                  from the Northwest Coast, and diverse and original artwork from across the globe.
                </p>
                <p>
                  With your support, the SRJC Multicultural Museum can continue to grow and to provide first-rate archival care for our collections, expand our educational programs, and enrich lives with our ever changing exhibits. Thank you for considering a financial contribution to the SRJC Multicultural Museum!
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Museum History</Accordion.Header>
              <Accordion.Body>
                <h2>MUSEUM HISTORY</h2>
                <p>
                  In 1938, a Works Projects Administration Grant was awarded to Floyd Bailey, SRJC President, and <a href="https://museum.santarosa.edu/who-was-jesse-peter">Jesse Peter</a> to build a museum on the college campus.&nbsp;It opened in 1940, and Jesse Peter, assisted by his wife, Mabel Crane, served as the director until his death in 1944.&nbsp;During these years&nbsp;the museum was primarily a natural history exhibit, with a small collection of Native American art.
                </p>
                <p>
                  By the late 1960s the original museum had been broken up. The building was taken over by the Art Department, which created the Art Gallery, and most of the natural history collection was given over to the Departments of Life Science and Earth and Space Science. The Native American art collection was left stored in a small section of the original facility, which is now the heart of the present Santa Rosa Junior College Museum.&nbsp;
                </p>
                <p>
                  In 1975, Bill Smith, an SRJC instructor and Mihilakawna (Dry Creek) Pomo, opened up the storage space and created a Native American Exhibit with the collection of approximately 300 pieces of art. He recruited Native American students to help build models of a Pomo Roundhouse and a Klamath River house, and designed a circular display area within the rectangular space, creating little hide-away exhibits to give the viewer a feeling of privacy.
                </p>
                <p>
                  Smith left the college in 1979, at which time Benjamin Benson, an Anthropologist, was asked by the college to take over the Native American exhibit and create a museum. As the new director, Benson began with a series of theme shows, mounting educational exhibits on single subjects, ranging from basketry to Amazon Indian cultures. New display cases were built, a model of a Hopi pueblo was put in place, and storage, lighting, and security systems were developed. In the past twenty years, the collection has grown from 300 pieces to more than 4000.
                </p>
                <p>
                  In 2007, the museum began a major renovation that <a href="https://www.youtube.com/watch?v=qYpe0isYNcM" target="_blank">virtually recreated it</a>. &nbsp;The Art Gallery was moved into the newly completed Doyle Library and the museum re-inhabited its original wing of Bussman Hall nearly tripling its&nbsp;exhibit space. Along with the renovation came a name change, a new museum Director, and a&nbsp;slight shift in the museum's vision. Multicultural education is now the central focus of the Santa Rosa Junior College Museum.</p>
                <p>
                  To read more about Jesse Peter, the man who the museum is named after, <a href="https://museum.santarosa.edu/who-was-jesse-peter">click here</a>.&nbsp;
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Col>
        {/**<Col xs={11} md={3}>
          <img
            src={logo}
            className="logo"
            alt="round SRJC logo showing black on white pottery design"
          />
        </Col> */}
      </Row>

    </Container>
  );
};

export default About;
