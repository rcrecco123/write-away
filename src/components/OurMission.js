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
        <h2>Write Away works towards this mission from three perspectives:</h2>
        <ul>
          <li>
            Write Away! Let’s make writing & digital literacy fun, exciting, and
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
          <li class="values">
            Equity:{" "}
            <p class="smaller-one">
              We work to ensure that individuals of all backgrounds have an
              equitable opportunity to express themselves in digital
              environments.
            </p>
          </li>
          <li class="values">
            Inclusion:{" "}
            <p class="smaller-one">
              We strive to create an educational context where students feel
              safe, seen, and heard, and where they have access to technology
              and the opportunity to participate with others in digital
              environments.
            </p>
          </li>
          <li class="values">
            Growth:{" "}
            <p class="smaller-one">
              We believe that everyone is a life-long learner with the potential
              to grow personally and develop professionally as both a writer and
              a digital citizen.
            </p>
          </li>
          <li class="values">
            Creativity:{" "}
            <p class="smaller-one">
              We know writing and engaging with a variety of digital tools
              fosters creativity, imagination, and artistic expression.
            </p>
          </li>
          <li class="values">
            Justice:{" "}
            <p class="smaller-one">
              We empower each other to use writing as a tool to create a better
              world.
            </p>
          </li>
        </ul>

        {/* <img class="coffe-pic" src={require("../phone1.jpg")} /> */}
      </div>
    </div>
  );
}
