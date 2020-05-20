import React from "react";

export default function GetInvolved() {
  return (
    <div class="get-involved">
      <div class="about-div about-us">
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
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-facebook"></i>
          </div>
        </div>

        <div class="join-team">
          <h2>Join the team:</h2>
          <div>IdeaList</div>
          <div>Indeed</div>
        </div>
      </div>
    </div>
  );
}
