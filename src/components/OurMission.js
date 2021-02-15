import React from "react";

export default function OurMission() {
  return (
    <div class="our-mission">
      <div class="mission-div vision-div">
        <h2>Vision</h2>
        <h4 class="h-vision">
        Our Story <br></br>
          <div class="writeaway">
            <img class="coffe-pic" src={require("../MASTER.png")} />
          </div>
        </h4>
      </div>

      <div class="about-div-two">
        <div class="top-div-home">
          <div>
          Deanna Santoro, Write Away’s co-founder, had already worked as a teacher in three different school systems when she got the idea for this organization.
          <br></br>
          <br></br>
          In the first school, her students had little to no access to computers. In the second, there were computers, but they weren’t being used consistently or purposefully across different classrooms. And in the third school, there were also computers...only, they were the same clunky desktop devices Deanna had used back in third grade herself.
          <br></br>
          <br></br>
          One day, as part of the studies for her EdD, Deanna was working on some research about the relationship between achievement gaps and gaps in access to technology. She came across the term “digital divide”––and immediately thought of her students.
          <br></br>
          <br></br>
          It struck her: no matter how hard she worked on her lessons, her students were still going to lag behind in their ability to use technology meaningfully, in the classroom and beyond.
          <br></br>
          <br></br>
          Deanna decided right then that she had to do something to not only address the digital divide, but also empower students and their families to understand how to use technology to express themselves, achieve their goals, and enrich their lives. So that night, she started brainstorming ideas for an organization that would address these issues. 
          <br></br>
          <br></br>
          The organization would do more than just increase access to digital literacy. It would help people use technology to empower themselves and engage in the deeply human act of communicating.
          <br></br>
          <br></br>
          With this mission in mind, Write Away was born.
          <br></br>
          <br></br>
          </div>
        </div>
      </div>

      <div class="about-div-two">
      <div class="top-div-home">
        <h2>Strategy</h2>
        <p class="the-facts-p">Write Away works toward this mission from three perspectives:</p>
        <ul>
          <li>
            <u>Write Away!</u> Let’s make writing & digital literacy fun, exciting, and
            motivating!
          </li>
          <li>
            <u>Right Away:</u> We must work with purpose and urgency to close the
            digital divide and ensure students have 21st century skills.
          </li>
          <li>
            <u>Write a Way:</u> By creating opportunities for digital writing and
            expression, we can help pave the way for future jobs, hobbies, and
            passions that enrich our lives!
          </li>
        </ul>
        </div>
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
