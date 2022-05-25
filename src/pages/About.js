// About Page - this project / our team / etc.

import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import logo from "../assets/images/logo/logo-500.png";

const About = () => {
  //functions, hooks, state, etc go here

  //return JSX
  return (
    <Container fluid className="about pt-lg-5 site-content">
      <Row className="mx-auto pt-5 justify-content-center">
        <Col xs={12} className="text-center">
          <h1 className="display-2 py-4 pangolin-font">About</h1>
        </Col>
        <Col xs={6} lg={7} className="text-center mx-auto pb-5">
          <img
            src={logo}
            className="logo-about img-fluid"
            alt="round SRJC logo showing black on white pottery design"
          />
        </Col>
        <Col xs={11} sm={10} md={8} lg={7} xl={6}>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>This Game</Accordion.Header>
              <Accordion.Body className="fs-3">
                <p>
                  This scavenger hunt is based on the SRJC Multicultural
                  Museum's collection of art and artifacts from across western
                  North America.
                </p>
                <p>
                  This game was created specifically with our local schools'
                  annual 4th grade field trip in mind, but is intended to be
                  enjoyed by all!
                </p>
                <p className="bold-text">
                  Thanks for playing 4th graders! (and everyone else!)
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Our Team</Accordion.Header>
              <Accordion.Body className="fs-3">
                <div className="pb-4">
                  {/*This is for Lauren*/}
                  <h3>Lauren Duker Darrimon</h3>
                  <p className="mb-1">Full-Stack | Digital & Web Developer</p>
                  <p>
                    {/*linkedIn*/}
                    <a href="https://www.linkedin.com/in/lauren-duker-darrimon/">
                      <svg
                        width="35px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </a>
                    &nbsp; &nbsp;
                    {/*github*/}
                    <a href="https://github.com/LaurenDarrimon">
                      <svg
                        width="35px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                      </svg>
                    </a>
                    &nbsp; &nbsp;
                    {/*website*/}
                    <a href="https://laurendarrimon.github.io/portfolio/">
                      <svg
                        width="35px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="pb-4">
                  {/*This is for Erin*/}
                  <h3>Erin Potter</h3>
                  <p className="mb-1">Front-End Developer | Designer</p>
                  <p>
                    {/*linkedIn*/}
                    <a href="https://www.linkedin.com/in/erinmckaypotter/">
                      <svg
                        width="35px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </a>
                    &nbsp; &nbsp;
                    {/*github*/}
                    <a href="https://github.com/erinmckaypotter">
                      <svg
                        width="35px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                      </svg>
                    </a>
                    {/*website*/}
                    &nbsp; &nbsp;
                    <a href="http://erinmckaypotter.com">
                      <svg
                        width="35px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="pb-4">
                  {/*Wayne */}
                  <h3>Wayne Howlett</h3>
                  <p className="mb-1">Full-Stack | Digital & Web Developer</p>
                  <p>
                    {/*linkedIn*/}
                    <a href="https://www.linkedin.com/in/wayne-howlett/">
                      <svg
                        width="35px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </a>
                    &nbsp; &nbsp;
                    {/*github*/}
                    <a href="https://github.com/WHowlett">
                      <svg
                        width="35px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                      </svg>
                    </a>
                    &nbsp; &nbsp;
                    {/*website*/}
                    <a href="https://waynehowlett.tech/">
                      <svg
                        width="35px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/*<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
                        <path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div>
                  <h5 className="h3 pt-2">Images & Illustrations</h5>
                  <p>Illustrations by Erin Potter.</p>
                  <p className="pb-4">
                    Photos provided by SRJC Multicultural Museum.
                  </p>
                  <h5 className="h3">Educational Content</h5>
                  <p>
                    All educational material for this game was provided by the
                    the SRJC Multicultural Museum. All textual edits made by our
                    team to fit the context of this game were made in
                    consultation with the museum's curator and the college's
                    Native American Faculty and Staff Association.
                  </p>
                  <h5 className="h3">Code Repository</h5>
                  <p> To learn more about this application or build your own, visit the <a href="https://github.com/LaurenDarrimon/srjc-museum-app" target="_blank">code repository on GitHub.</a></p>

                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>This Museum</Accordion.Header>
              <Accordion.Body className="fs-3">
                <p>
                  The Santa Rosa Junior College Multicultural Museum is a unique
                  institution in that we are one of only 12 museums in the
                  country that is housed in a two year college. Founded in 1939,
                  the SRJC Multicultural Museum has over 5,000 catalogued items,
                  and over 90% of our collection has been donated by community
                  members like you.
                </p>
                <p>
                  <strong>
                    The mission of the Santa Rosa Junior College Multicultural
                    Museum is to promote awareness and appreciation for the
                    diverse cultural achievements of human expression in
                    material form, by upholding the highest level of archival
                    care, preservation, and exhibit presentation to the public -
                    who are the united stakeholders of a united cultural
                    heritage.
                  </strong>
                </p>
                <p>
                  With only two permanent staff members and a small group of
                  student employees and volunteers, the SRJC Multicultural
                  Museum provides services to over 4,300 visitors per year from
                  the Santa Rosa Junior College and the community at large on a
                  very modest budget. Of these visitors, we host numerous
                  hands-on educational tours to K-12 school groups; helping to
                  educate our future college students.
                </p>
                <p>
                  Our holdings include the renowned Elsie Allen Pomo Basketry
                  Collection; Southwest pottery from world famous artists such
                  as Nampeyo, Maria Martinez, and Lucy Lewis; diverse African
                  sculptures and masks; original serigraphs from the Northwest
                  Coast, and diverse and original artwork from across the globe.
                </p>
                <p>
                  With your support, the SRJC Multicultural Museum can continue
                  to grow and to provide first-rate archival care for our
                  collections, expand our educational programs, and enrich lives
                  with our ever changing exhibits. Thank you for considering a
                  financial contribution to the SRJC Multicultural Museum!
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Museum History</Accordion.Header>
              <Accordion.Body className="fs-3">
                <p>
                  In 1938, a Works Projects Administration Grant was awarded to
                  Floyd Bailey, SRJC President, and{" "}
                  <a href="https://museum.santarosa.edu/who-was-jesse-peter">
                    Jesse Peter
                  </a>{" "}
                  to build a museum on the college campus.&nbsp;It opened in
                  1940, and Jesse Peter, assisted by his wife, Mabel Crane,
                  served as the director until his death in 1944.&nbsp;During
                  these years&nbsp;the museum was primarily a natural history
                  exhibit, with a small collection of Native American art.
                </p>
                <p>
                  By the late 1960s the original museum had been broken up. The
                  building was taken over by the Art Department, which created
                  the Art Gallery, and most of the natural history collection
                  was given over to the Departments of Life Science and Earth
                  and Space Science. The Native American art collection was left
                  stored in a small section of the original facility, which is
                  now the heart of the present Santa Rosa Junior College
                  Museum.&nbsp;
                </p>
                <p>
                  In 1975, Bill Smith, an SRJC instructor and Mihilakawna (Dry
                  Creek) Pomo, opened up the storage space and created a Native
                  American Exhibit with the collection of approximately 300
                  pieces of art. He recruited Native American students to help
                  build models of a Pomo Roundhouse and a Klamath River house,
                  and designed a circular display area within the rectangular
                  space, creating little hide-away exhibits to give the viewer a
                  feeling of privacy.
                </p>
                <p>
                  Smith left the college in 1979, at which time Benjamin Benson,
                  an Anthropologist, was asked by the college to take over the
                  Native American exhibit and create a museum. As the new
                  director, Benson began with a series of theme shows, mounting
                  educational exhibits on single subjects, ranging from basketry
                  to Amazon Indian cultures. New display cases were built, a
                  model of a Hopi pueblo was put in place, and storage,
                  lighting, and security systems were developed. In the past
                  twenty years, the collection has grown from 300 pieces to more
                  than 4000.
                </p>
                <p>
                  In 2007, the museum began a major renovation that{" "}
                  <a
                    href="https://www.youtube.com/watch?v=qYpe0isYNcM"
                    target="_blank"
                  >
                    virtually recreated it
                  </a>
                  . &nbsp;The Art Gallery was moved into the newly completed
                  Doyle Library and the museum re-inhabited its original wing of
                  Bussman Hall nearly tripling its&nbsp;exhibit space. Along
                  with the renovation came a name change, a new museum Director,
                  and a&nbsp;slight shift in the museum's vision. Multicultural
                  education is now the central focus of the Santa Rosa Junior
                  College Museum.
                </p>
                <p>
                  To read more about Jesse Peter, the man who the museum is
                  named after,{" "}
                  <a href="https://museum.santarosa.edu/who-was-jesse-peter">
                    click here
                  </a>
                  .&nbsp;
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Thanks</Accordion.Header>
              <Accordion.Body className="fs-3">
                <p>
                  A very special thanks to Clint McKay for generously sharing
                  his family's living tadition of Pomo basket weaving with us.
                </p>
                <p>
                  To Rachel Minor, the curator of the musuem, for her wealth of
                  knowledge, endless stream of content, and boundless
                  enthusiasm.
                </p>
                <p>
                  To Brenda Flyswithhawks for her invaluable insights and
                  thoughtful feedback.
                </p>
                <p>
                  To to Professor Ethan Wilde for all his
                  support, both technical and inspirational.
                </p>
                <p>
                  To our user testers for bearing with us.
                </p>
                <p>
                  Above all, we thank and honor the artists and craftspersons
                  whose art, culture and traditions this little game is lucky
                  enough to feature.
                </p>
                <p>
                  The many skilled hands and hours that went into leaving such a
                  beautiful legacy are visible in every knot, color, and bead.
                  Thank you.
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
