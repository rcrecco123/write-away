import React from "react";
import Button from "@material-ui/core/Button";

export default function Programs() {
  return (
    <div class="programs">
      <div class="about-div">
        <h2>Digital Literacy Mentorship:</h2>
        <p>
          Write Away is excited to invite you to join our Digital Literacy Mentorship program. Both mentors and mentees can find application detail at the links below. The Digital Literacy Mentorship is a six-week (three hours per week) or nine-week (two hours per week) program designed to match individual students with a mentor. Mentors will coach and guide mentees through a series of writing tasks aimed to promote digital literacy, provide opportunities for self-expression, and foster a love of writing.
        </p>
        <br></br>
        <div className="center-program">
          <h2>This program runs four times per year:</h2>
          <ul className="nobullet">
            <ul className="nobullet">
                <h3>Fall session: </h3>
              <li>
              Mentee application due: September 1st
              </li>
              <li>
              Mentor application due: August 15th
              </li>
              <li>
              Program begins October 1st
              </li>
            </ul>
            
            <ul className="nobullet">
                <h3>Spring session: </h3>
              <li>
              Mentee application due: February 1st
              </li>
              <li>
              Mentor application due: January 15th
              </li>
              <li>
              Program begins March 1st
              </li>
            </ul>
            
            <ul className="nobullet">
                <h3>Summer session: </h3>
              <li>
              Mentee application due: June 1st
              </li>
              <li>
              Mentor application due: May 15th
              </li>
              <li>
              Program begins July 1st
              </li>
            </ul>
            
          </ul>
          <br></br>
          <p>
            Over the course of the program, mentees will meet virtually with
            their mentor two to three times per week for hour-long sessions.
            During these sessions, mentors will coach mentees through the
            creation of three writing tasks: a social media narrative, a
            personal narrative, and an informational essay. Here is how you can
            get involved:
          </p>
        </div>
        <br></br>
        <br></br>
        <div class="about-div-two-quotes">
        <h2 class="">Here’s what a few folks have said about this program.</h2>
        <br></br>
        <div>
          <div>
          <i>“What I was surprised about was how welcoming people were, about feedback and about getting us involved.”</i>
          </div>
          <br></br>
          –Allyson Meehan, mentor
          <br></br>
          <br></br>
          <div>
          <i>“I think it’s an awesome opportunity. I love it. I look forward to seeing my mentee every week and seeing what she’s been up&nbsp;to”</i>
          </div>
          <br></br>
          –Abby Peabody, mentor
        </div>
      </div>
      <br></br>
      <br></br>
        <div class="program-sub-div">
          <h2>Sound interesting? Excellent! Here’s how you can apply to be a mentee or a mentor.</h2>
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
              Interested in serving as a mentor through Write Away’s Digital Literacy Mentorship program? Fill out an application and we’ll be in touch.
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
        Eight times per year, Write Away hosts a virtual Empower Hour where speakers lead participants through the experiences and paths that led to their successes, failures, and growth. Each session includes a writing exercise that asks participants to reflect on some aspect of their own life, work, thinking, or goals.
        </p>
        <h3>Past topics have included:</h3>
        <ul>
          <li>Crafting a personal mission statement</li>
          <li>Recognizing implicit bias</li>
          <li>Using the tools of storytelling to persuade people</li>
          <li>Honing your voice</li>
        </ul>
        <br></br>
        <p>Speakers have included educators, creative writers, communications professionals, and more.</p>
        <br></br>
        <p>Join us to learn from the experts and get inspired! Sign up our mailing list and follow us on social media to hear about upcoming events.</p>
      </div>
      <div className="about-div">
        <h2>
          <a href="https://www.writeaway.org/#/get-involved">Get Updates</a>
        </h2>
      </div>
      <div class="about-div">
        <h2>Write Away Consulting Services</h2>
        <p>Looking to foster digital literacy, self-expression, and good writing practices in your school or organization? Great! We love partnering with other people passionate about writing and closing the digital divide, and offer consulting services that can help put your institution on the path to digital literacy success.</p>
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
