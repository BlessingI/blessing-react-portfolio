import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <h1 id="about">Resume</h1>
      <div>Download my Resume</div>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>Mysql, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;
