import React from "react";

export default function OurMission() {
  return (
    <div class="our-mission">
      <div class="mission-div vision-div">
        <h2>Vision</h2>
        <h4 class="h-vision">
          A digital world where everyone is included <br></br>and able to
          express themselves. <br></br>
          <div class="writeaway">
            <img class="coffe-pic" src={require("../MASTER.png")} />
          </div>
        </h4>
      </div>

      <div class="mission-div ms-two ms-seven">
        {/* <img class="coffe-pic" src={require("../coffee.jpg")} /> */}
        <div class="about-margin">
          <h2>Our Mission</h2>
          <div>
            Write Away is on a mission to close the digital divide by creating
            opportunities for learners of all ages to use digital tools for
            writing and expression. We believe that a digitally inclusive world
            is possible through strategic coaching and mentorship. Together, we
            can create opportunity, build virtual community, and access the
            tools needed for 21st century success.
          </div>
        </div>
      </div>

      <div class="mission-div misson-secret">
        <ul>
          <li>
            Write Away: Let’s make writing & digital literacy fun, exciting, and
            motivating!
          </li>
          <li>
            Right Away: We must work with purpose and urgency to close the
            digital divide and ensure students have 21st century skills.
          </li>
          <li>
            Write a Way: By creating opportunities for digital writing and
            expression, we can help pave the way for future jobs, hobbies, and
            passions that enrich our lives!
          </li>
        </ul>
      </div>

      <div class="mission-div ms-four values-left">
        <h2>Core Values</h2>
        <ul class="values-list">
          <li class="values">Equity</li>
          <li class="values">Rigor</li>
          <li class="values">Joy</li>
          <li class="values">Creativity</li>
          <li class="values">Inclusion</li>
        </ul>

        {/* <img class="coffe-pic" src={require("../phone1.jpg")} /> */}
      </div>
    </div>
  );
}
