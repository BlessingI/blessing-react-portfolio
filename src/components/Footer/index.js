import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);
  return (
    <section className="fontawesome">
      <a href="https://twitter.com/" target="blank">
        {" "}
        <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />{" "}
      </a>
      <a href="https://www.facebook.com/" target="blank">
        {" "}
        <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
      </a>
      <a href="https://www.linkedin.com/in/blessing-igbadumhe/" target="blank">
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
      </a>
      <a href="https://github.com/BlessingI" target="blank">
        <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
      </a>
    </section>
  );
}

export default Footer;
