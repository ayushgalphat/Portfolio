import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  analytics,
  dataportfolio,
  meta,
  others,
  ux,
} from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Case Studies </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho flex">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a target="_blank" href={data.link}>
                    view project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> UI/UX </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho flex">
          {ux.map((data, i) => {
            return (
              <div
                key={i}
                className="po_item"
                style={{ height: "40vh", background: "transparent" }}
              >
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a target="_blank" href={data.link}>
                    view project
                  </a>
                </div>
              </div>
            );
          })}
          <div
            className="po_item"
            style={{
              height: "40vh",
              width: "30vw",
              background: "transparent",
              fontSize: "16px",
              border: "none",
              textAlign: "left",
            }}
          >
            <div style={{fontSize:"18px"}}>
              CreatorFlow AI is an intelligent content management platform that
              leverages advanced AI/ML technologies to revolutionize how
              influencers, social media managers, and marketing teams create,
              optimize, and distribute content across Instagram, X (Twitter),
              YouTube, and LinkedIn.
            </div>
                <a  style={{fontSize:"21px"}} href="https://robust-drug-2b9.notion.site/CreatorFlow-AI-An-AI-Powered-Content-Management-Platform-for-Social-Media-Excellence-Case-Study-29ac86115b02802b845fdb9cff6ab12a?pvs=143">  
                
                Link
                </a>
            <br />
            <br />
            <br />
            <h4>Key Features:</h4>
            <div style={{fontSize:"18px"}}>
              <li>AI-Powered Ideation & Brainstorming</li>
              <li>Smart Content Calendar, Scheduling, & Campaign Management</li>
              <li>Content Optimization & SEO </li>
              <li>Cross-Platform Social Media Integration</li>
              <li> Advanced Analytics & Insights</li>
            </div>
          </div>
        </div>
      </Container>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Analytics </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho flex">
          {analytics.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Other Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho flex">
          {others.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a target="_blank" href={data.link}>
                    view project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
