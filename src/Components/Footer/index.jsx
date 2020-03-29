import React from "react";
import "./Footer.css";

const Section = ({ title, subtitle, dark, id }) => {
  return (
    // <div className={"section" + (dark ? " section-dark" : "")}>
    //   <div className="section-content" id={id}>
    //     <h1>{title}</h1>
    //     <p>{subtitle}</p>
    //   </div>
    // </div>

    <div class="row" id="footer">
      <div class="col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
        <div class="spacer-content"></div>
        <div class="text-center">
          <h3>Ждем вас на свадьбе</h3>
          <h1 class="text-primary">Анастасия &amp; Михаил</h1>
        </div>
        <div class="mt-5"></div>
      </div>
    </div>
  );
};

export default Section;
