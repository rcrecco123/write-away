import React from "react";
import Button from "@material-ui/core/Button";

export default function Programs() {
  return (
    <div class="programs">
      <div class="about-div">
        <h2>Digital Literacy Mentorship:</h2>
        <p>
          Write Away is excited to invite you to join our Digital Literacy
          Mentorship program. Both mentors and mentees can find application
          detail at the links below. The Digital Literacy Mentorship is a
          six-week (3 hours per week) or nine-week (2 hours per week) program
          designed to match individual students with a mentor who will coach and
          guide them through a series of writing tasks aimed to promote digital
          literacy, provide opportunities for self-expression, and foster a love
          of writing.
        </p>
        <br></br>
        <div className="center-program">
          <h2>This program runs four times per year:</h2>
          <ul className="nobullet">
            <li>
              Fall session: Begins October 1st. Submit application by August
              31st.{" "}
            </li>
            <li>
              Winter session: Begins February 1st. Submit application by
              December 31st.{" "}
            </li>
            <li>
              Spring session: Begins April 1st. Submit application by February
              28th.
            </li>
            <li>
              Summer session: Begins July 1st. Submit application by May 31st.
            </li>
          </ul>
          <p>
            Over the course of the program, mentees will meet virtually with
            their mentor two to three times per week for hour-long sessions.
            During these sessions, mentors will coach mentees through the
            creation of three writing tasks: a social media narrative, a
            personal narrative, and an informational essay. Here is how you can
            get involved:
          </p>
        </div>
        <div class="program-sub-div">
          <div class="apply-box">
            <div class="sub-sub subsub-two">
              <h3 class="sub-p sub-center">Apply to be a mentee: </h3>
              <p class="sub-p">
                Parents can apply for their child to participate in the Digital
                Literacy Mentorship program by filling out this application. 
              </p>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSer0H-CdbyYAzq1E4zgiN0-QfeoKOAvEaODapiNLFQUNQuHBQ/viewform"
              >
                <Button variant="contained" color="primary">
                  Become a mentee
                </Button>
              </a>
            </div>
            <img
              class="coffe-pic-two inverse-pic"
              src={require("../family3.png")}
            />
          </div>

          <div class="apply-box">
            <img
              class="coffe-pic-two inverse-pic"
              src={require("../whiteboard4.png")}
            />
            <div class="sub-sub subsub-two last-sub">
              <h3 class="sub-p sub-center">Apply to be a mentor: </h3>
              <p class="sub-p">
                If you are interested in serving as a mentor through Write
                Away’s Digital Literacy Mentorship program, you can fill out an
                application{" "}
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf4-3cwMXiFFrZm3-A_EFzbyYGNvFqFOFG5gTON3s1kWy_kqg/viewform"
                >
                  here
                </a>
                
              </p>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf4-3cwMXiFFrZm3-A_EFzbyYGNvFqFOFG5gTON3s1kWy_kqg/viewform"
              >
                <Button variant="contained" color="primary">
                  Become a mentor
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="about-div">
        <h2>Empower Hour:</h2>
        <p>
          On the first Thursday of each month, Write Away will host a virtual
          Empower Hour! During each Empower Hour, a guest speaker will provide
          insight and inspiration for writing. They will lead participants
          through the life experiences, realizations, and frameworks that led to
          their successes, failures, and overall growth. Join us to learn from
          the experts!&nbsp;
        </p>
        <p>
          The first Empower Hour will be hosted by Write Away’s president and
          founder Deanna Santoro, Ed.D. During this session, Dr. Santoro will
          describe her vocational journey and tell the story of Write Away. As a
          part of this time together, participants will write their personal
          mission statements.
        </p>
      </div>
      <div className="about-div">
        <h2>
          Follow us on social media for the latest updates on the date and time
          for each event.
        </h2>
      </div>
      <div class="about-div">
        <h2>Consulting Services: </h2>
        <p>
          If you are a school, school district/network, or organization looking
          to promote positive writing outcomes for kids through the use of
          digitally-based writing tools, email us at{" "}
          <a href="mailto:info.writeaway@gmail.com">
            info.writeaway@gmail.com{" "}
          </a>
          to learn more about how we can support you!
        </p>
      </div>
    </div>
  );
}
