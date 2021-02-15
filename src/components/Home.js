import React from "react";

export default function Home() {
  return (
    <div class="our-mission">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <div class="mobile-resize-img">
        <img
          class="banner-main"
          src={require("../output-onlinepngtools.png")}
        />
      </div>

      <div class="about-div-two">
        <div class="top-div-home">
          We believe in a future where everyone is included and able to express themselves.
          <br></br>
          <br></br>
          To achieve this vision, we’re focusing on one big goal: closing the digital divide to foster meaningful self-expression and writing opportunities for everyone.
          <br></br>
          <br></br>
          <h2>Why This Work Matters</h2>
          <br></br>
          Effective writing and digital self-expression skills empower people to tell their story. But the digital opportunity gap means many learners are left behind.
          <br></br>
          <br></br>
          Write Away is here to help by providing fun and meaningful opportunities for digitally-based writing and expression. As online education and communication expands, this mission is more important than ever––and we’re passionate about making sure everyone has the power to be heard.
          <br></br>
          <br></br>
          Want to join us? Find out how you can <a href="https://www.writeaway.org/#/get-involved">get involved.</a>
        </div>
      </div>

       <div class="the-facts-main">
        <h2 class="the-facts-header">Write Away’s Programming</h2>
        <p class="the-facts-p">Here are a few things we’re doing to achieve our goal.</p>
        <ul class="splash-list">
          <li>
            Running a digital literacy mentorship program
          </li>
          <li>
            Hosting Empower Hour, a monthly virtual workshop
          </li>
          <li>
          Consulting for other organizations on how to promote positive writing outcomes through digital tools
          </li>
        </ul>
        <p class="the-facts-p">Find out more about our programming <a href="https://www.writeaway.org/#/programs">programs.</a></p>
      </div>

      <div class="about-div-two">
        <div class="top-div-home">
          <h2>What Is the Digital Divide?</h2>
          The <b>digital divide</b><i>is the uneven distribution in the access to, skill with, or impact of information and communications technologies. This uneven distribution can emerge based on economic status; between different racial and ethnic groups; or due to geography, generational divides, or other sociocultural factors.</i>
          <br></br>
          <br></br>
          This digital opportunity gap can affect people of all ages. It’s both a significant factor in, and a major effect of, inequalities in education.
          <br></br>
          <br></br>
          <h2>From Digital Divide to Digital Self-Expression</h2>
          <br></br>
          <br></br>
          Closing the digital divide is important. But at Write Away, we know it’s only the first step. Access to technology and information is one thing. Truly feeling empowered to express yourself through these tools is another.
          <br></br>
          <br></br>
          This is why we believe in not only increasing access to technology and information, but also in guiding learners––kids and adults alike––to develop practices that help them use these tools meaningfully. Digital self-expression can be a source of empowerment, growth, and self-understanding. But you have to know where to start.
          <br></br>
          <br></br>
        </div>
      </div>
 
      <div class="the-facts-main">
        <h2 class="the-facts-header">The Current Digital Opportunity Landscape</h2>
        <p class="the-facts-p">Want to learn more about the digital opportunity gap? Here are just a few statistics that show why the situation is so bleak––and why we’re hopeful that in closing this gap, we can truly make a difference.</p>
        <ul class="splash-list">
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
        <p class="the-facts-p">For more about the ways we’re working to close the gap, check out our <a href="https://www.writeaway.org/#/programs">programs.</a></p>
      </div>

      <div class="about-div-two-quotes">
        <h2 class="">Testimonials from <nobr>Write Away Participants</nobr></h2>
        <div>
          <div>
          <i>“I just recommended this to one of my friends yesterday. This program is very well thought out. I think it’s really impressive in terms of how organized it is.”</i>
          </div>
          <br></br>
          –Lucas Finet, mentor
          <br></br>
          <br></br>
          <div>
          <i>“I really liked working with mentees and owning that relationship and seeing them progress. That was a really cool experience. Honestly I don’t know how anyone could pass up this program.”</i>
          </div>
          <br></br>
          –Allyson Meehan, mentor
        </div>
      </div>
    </div> 
  );
}
