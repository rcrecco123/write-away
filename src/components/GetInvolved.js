import React from "react";

export default function GetInvolved() {
  return (
    <div class="get-involved">
      <div class="about-div about-us low-margin">
        <h2 class="social-header">Subscribe to our mailing list:</h2>

        <div>
          <form class="formy">
            <div>
              <input type="text" placeholder="Name" name="name" required />
              <input
                type="email"
                placeholder="Email address"
                name="mail"
                required
              />

              <div class="sub-button">
                <input type="submit" value="subscribe" />
              </div>
            </div>
          </form>
        </div>

        <div class="social-div">
          <h2>Follow us on social media: @writeaway_org</h2>
          <div class="devicons">
            <a target="_blank" href="https://twitter.com/writeaway_org">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/writeaway_org/">
              <i class="fab fa-instagram-square"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/Write-Away-109023140808446"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div class="mission-div jobs-div">
          {/* <img class="coffe-pic" src={require("../coffee.jpg")} /> */}
          <div class="about-margin">
            <h2>Open Positions</h2>
            <a
              target="_blank"
              href="https://www.internships.com/app/job/ccm_da62f5f8-4a3b-44bf-9dbc-375c2b7cbc09?context=shared"
            >
              Digital Literacy Mentor
            </a>
            <br></br>
            <a
              target="_blank"
              href="https://www.internships.com/app/job/ccm_65fdff34-f16b-485f-8c5e-55d354a2f92f?context=shared"
            >
              Social Media Manager
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
