import React from "react";
import Button from "@material-ui/core/Button";

export default function Programs() {
  return (
    <div class="programs">
      <div class="about-div">
        <h2>Webinars:</h2>
        <p>
          Are you a teacher, parent, or school leader looking to create
          opportunities for digitally-based writing for kids? Write Away is
          hosting a series of Webinars to equip you with the tools and
          perspective that will help you create fun and engaging digital writing
          experiences that connect to kids’ interests and the social media
          platforms they already use. Join us for our next&nbsp;
          <a
            target="_blank"
            href="https://www.facebook.com/Write-Away-109023140808446"
          >
            FREE Webinar&nbsp;
          </a>
          to learn more!
        </p>
      </div>
      <div class="about-div">
        <h2>Digital Literacy Mentorship:</h2>
        <p>
          Write Away is excited to launch our Digital Literacy Mentorship
          program in Summer of 2020. The Digital Literacy Mentorship is a 6 week
          program designed to match individual students with a mentor that will
          coach and guide them through a series of writing tasks aimed to
          promote digital literacy, provide opportunities for self-expression,
          and foster a love for writing. Over the course of the six week
          program, kids will meet virtually with their mentor three times per
          week for hour sessions. During these sessions, mentors will coach
          mentees through the creation of three writing tasks: a social media
          narrative, a personal narrative, and an informational essay.
        </p>

        <div class="program-sub-div">
          <div class="apply-box">
            <div class="sub-sub subsub-two">
              <h3 class="sub-p sub-center">Apply to be a mentee: </h3>
              <p class="sub-p">
                Parents can apply for their child to participate in the Digital
                Literacy Mentorship program by filling out this application. All
                participants will engage in three one hour virtual sessions with
                a mentor each week over the course of the six week program
                beginning on June 29th, 2020. You can email Write Away at &nbsp;
                <a href="mailto:info.writeaway@gmail.com">
                  info.writeaway@gmail.com
                </a>
              </p>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfcpWKXW1ceHoYGn3v2n8p1LSg-PtgnKmxT05lF0x6eeePxmA/viewform?usp=sf_link"
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
                application <a href="/apply">here</a>. This mentorship
                opportunity will run from June 22nd, 2020 through August 14th,
                2020. This is an opportunity to work with students in grades
                6th-12th as their Digital Literacy coach. Please submit your
                application to be a mentor by June 15th, 2020 for
                consideration. 
              </p>
              <a href="apply-mentor">
                <Button variant="contained" color="primary">
                  Become a mentor
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="about-div">
        <h2>Consulting Services: </h2>
        <p>
          If you are a school, school district/network, or organization looking
          to promote positive writing outcomes for kids through the use of
          digitally-based writing tools, email us at info.writeaway@gmail.com to
          learn more about our consultant services.
        </p>
      </div>
    </div>
  );
}