import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
  publications,
  honors,
  leadership,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row> */}
        {/* <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row> */}
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.duration}</p>
                  <div>
                    {data.description.map((desc) => (
                      <li>{desc}</li>
                    ))}
                  </div>
                  {/* <p className="service_desc">{data.description}</p> */}
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Publications</h3>
          </Col>
          <Col lg="7">
            {publications.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                  <a href={data.link} className="service_desc">
                    {data.link}
                  </a>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Leadership Experience</h3>
          </Col>
          <Col lg="7">
            {leadership.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.duration}</p>
                  <div>
                    {data.description.map((desc) => (
                      <li>{desc}</li>
                    ))}
                  </div>
                  <a href={data?.link} className="service_desc">
                    {data?.link}
                  </a>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Honors</h3>
          </Col>
          <Col lg="7">
            {honors.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <p className="service_desc">{data.description}</p>
                  <a href={data.link} className="service_desc">
                    {data.link}
                  </a>{" "}
                  <br />
                  <a href={data.link2} className="service_desc">
                    {data.link2}
                  </a>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
