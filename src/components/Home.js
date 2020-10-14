import React from "react";

export default function Home() {
  return (
    <div class="our-mission">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <div>
        <img
          class="banner-main"
          src={require("../output-onlinepngtools.png")}
        />
      </div>

      <div class="about-div-two">
        <div class="top-div-home">
          Our digital future includes everyone.
          <br></br>
          <br></br>
          Good writing and digital self-expression skills empower people to tell
          their story. But the digital opportunity gap means many learners are
          left behind.
          <br></br>
          <br></br>
          Write Away is here to help by providing fun and meaningful
          opportunities for digitally-based writing and expression. As online
          education and communication expands, this mission is more important
          than ever––and we’re passionate about making sure everyone has the
          power to be heard.
        </div>
      </div>

      <div class="the-facts-main">
        <h2 class="the-facts-header">Here are the facts...</h2>
        <ul class="splash-list">
          <li>
            65% of 8th graders reported spending 30 minutes or less per day
            using a digital device for ELA (
            <a
              target="_blank"
              href="https://nces.ed.gov/nationsreportcard/data/"
            >
              National Assessment of Education Progress
            </a>
            , 2019).
          </li>
          <li>
            Adults who lack digital literacy skills are more likely to be Black,
            Hispanic, older, or less educated than more digitally literate
            adults. They are also more likely to work in lower skilled jobs or
            to not participate in the labor force (
            <a target="_blank" href="https://nces.ed.gov/pubs2018/2018161.pdf">
              NCES
            </a>
            , 2018).
          </li>
          <li>
            Most adults in the U.S. use a computer for both work (74%) and in
            everyday life (81%) (
            <a target="_blank" href="https://nces.ed.gov/pubs2018/2018161.pdf">
              NCES
            </a>
            , 2018).
          </li>
          <li>
            A greater percentage of Black adults (22%) and Hispanic adults (35%)
            are not digitally literate, compared to White adults (11%) (
            <a target="_blank" href="https://nces.ed.gov/pubs2018/2018161.pdf">
              NCES
            </a>
            , 2018).
          </li>
          <li>
            Only 2 percent of US students have the skills of a digital native.
            Internationally, only 19 percent of the 42,000 students assessed in
            14 countries and educational systems could work independently with
            computers as information-gathering and management tools (
            <a
              target="_blank"
              href="https://nces.ed.gov/surveys/icils/icils2018/pdf/2019164.pdf"
            >
              NCES
            </a>
            , 2018).
          </li>
          <li>
            Digitally-based writing opportunities are associated with improved
            writing outcomes (Santoro, 2020).
          </li>
          <li>
            Nearly 2 million households with children do not have a computer (
            <a
              target="_blank"
              href="https://nces.ed.gov/programs/edge/Demographic/ACS"
            >
              National Center for Education Statistics
            </a>
            , 2019).
          </li>
          <li>
            More than 5 million households with children do not have broadband
            internet access (
            <a
              target="_blank"
              href="https://nces.ed.gov/programs/edge/Demographic/ACS"
            >
              NCES
            </a>
            , 2019).
          </li>
        </ul>
      </div>
    </div>
  );
}
