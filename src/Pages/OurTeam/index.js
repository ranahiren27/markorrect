import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

import "./index.scss";

export default function OurTeam(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="our-team-container">
      <div className="page-one">
        <h1>Our team</h1>
        <p className="our-team-subtitle-one">
          We are digital marketers and web developers who are influenced by the
          rising and booming digital economy.
          <br /> Our team is always on the lookout for folks who want to assist
          others stay relevant in an ever-changing digital environment.
        </p>
        <p className="our-team-subtitle-two">Meet Markorrect Founder</p>
        <div className="founder-image-container">
          <div>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="founder"
            />
            <p>KUSHAL CHAUDHARI</p>
            <p>Founder</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="founder"
            />
            <p>SAIMIL PATEL</p>
            <p>Founder</p>
          </div>
        </div>
      </div>
      <div className="page-two">
        <div className="heading-of-page-two">GET TO KNOW THE MARKORRECT</div>
        <p className="our-team-subtitle-two">Meet Markorrect Team</p>
        <div className="founder-image-container">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            shouldResetAutoplay={false}
          >
            {new Array(8).fill(0).map((_, index) => {
              return (
                <div key={index}>
                  <img
                    src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="founder"
                  />
                  <p>KUSHAL CHAUDHARI</p>
                  <p>Founder</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div onClick={props.toContactUs} className="our-team-page-footer">
        <div className="footer-left">
          For Your Digital Marketing demands, <br /> Hire the best Digital
          Marketing Agency.
        </div>
        <div className="footer-right">
          SUMBIT YOUR PROPOSAL <br /> REQUEST
        </div>
      </div>
    </div>
  );
}
