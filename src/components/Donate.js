import React from "react";

export default function Home() {
  return (
    <div class="about-us splash-list">
      <h2 className="donate-header">Click below to donate with PayPal!</h2>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="4U5ZGDY7Y2JYS" />
        <input
          target="_blank"
          type="image"
          src={require("../PayPal-Donate-Button-High-Quality-PNG.png")}
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          width="350"
          alt="Donate with PayPal button"
          className="coming-soon"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
}
