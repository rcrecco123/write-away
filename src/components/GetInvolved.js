import React from "react";
import Button from "@material-ui/core/Button";
export default function GetInvolved() {
  return (
    <div class="get-involved">
      <div class="about-div about-us low-margin">
      <div></div>
        <p className="social-header">Check out our programming page for opportunities as a student mentor, or reach out to find out more about how you can help us achieve our mission as an intern or volunteer.</p>
        <a
                target="_blank"
                href="mailto:test@example.com?subject=Volunteer"
              >
                <Button variant="contained" color="primary">
                VOLUNTEER
                </Button>
              </a>
      
        <h2 class="social-header">Subscribe to our mailing list:</h2>
        <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe0d49kyxphuhD_lf5-nDiAzb1A3Y2ZeMR5JKaKcZlBdCa8Ig/viewform?gxids=7628"
              >
                <Button variant="contained" color="primary">
                 SUBSCRIBE
                </Button>
              </a>
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
      </div>
    </div>
  );
}
