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
          Creating a digital world where everyone is included and able to
          express themselves requires addressing the digital divide that exists
          between those with and without access to technology and the
          opportunities to use that technology. Write Away wants to close this
          opportunity gap by providing meaningful and fun opportunities for
          digitally-based writing and expression. This is especially important
          now as education shifts online and distance learning becomes the new
          normal.
        </div>
      </div>

      <div class="the-facts-main">
        <h2 class="the-facts-header">The Facts</h2>
        <ul class="splash-list">
          <li>
            Nearly 2,000,000 households with children do not have a computer
            (NCES, 2019).
          </li>
          <li>
            More than 5,000,000 households with children do not have broadband
            internet access (NCES, 2019).
          </li>
          <li>
            65% of 8th graders spend 30 minutes or less per day using a digital
            device for ELA (NAEP, 2019).
          </li>
          <li>
            Digitally-based writing opportunities are associated with improved
            writing outcomes (Santoro, 2020).
          </li>
        </ul>
      </div>
    </div>
  );
}
