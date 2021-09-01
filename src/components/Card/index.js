import React, { Component } from "react";
import "./Card.css";
import "boxicons";
import PropTypes from "prop-types";

export default class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
      {/* python programming */}
      <a href= "/Python">
        <div className="course_cards">
          <img src={"../images/python.png"} className="" alt="logo" />
          <h4 class="course-title">Programming with Python</h4>
          <p class="course-caption">
            Build a fantasy cricket game using Python language
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>
      </a>

        {/* digital marketing */}
        <a href= "/DigitalMarketting">
        <div className="course_cards">
          <img src={"../images/digital_marketting.png"} className="" alt="logo" />
          <h4 class="course-title">Digital Marketing</h4>
          <p class="course-caption">
            Learn SEO, Search Engine Marketing, Web Analytics and more
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>
        </a>

        {/* web development */}
        <a href= "/WebDevelopment">
        <div className="course_cards">
          <img src={"../images/web_development.png"} className="" alt="logo" />
          <h4 class="course-title">Web Development</h4>
          <p class="course-caption">
            Learn how to create a full website from scratch
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>
        </a>

        {/* Android App Development */}
        <div className="course_cards">
          <img src={"../images/android_development.png"} className="" alt="logo" />
          <h4 class="course-title">Android App Development</h4>
          <p class="course-caption">Build your own food ordering app from scratch</p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Data Science */}
        <div className="course_cards">
          <img src={"../images/data_science.png"} className="" alt="logo" />
          <h4 class="course-title">Data Science</h4>
          <p class="course-caption">
              Learn the ABCs upto Z of Data Science training</p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Ethical Hacking */}
        <div className="course_cards">
          <img src={"../images/ethical_hacking.png"} className="" alt="logo" />
          <h4 class="course-title">Ethical Hacking</h4>
          <p class="course-caption">
            Learn to hacking and secure the web applications
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Creative Writing */}
        <div className="course_cards">
          <img src={"../images/writing.png"} className="" alt="logo" />
          <h4 class="course-title">Creative Writing</h4>
          <p class="course-caption">
            Learn the craft of Creative Writing from a published author
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* French Language */}
        <div className="course_cards">
          <img src={"../images/french_language.png"} className="" alt="logo" />
          <h4 class="course-title">French Language</h4>
          <p class="course-caption">
            Learn how to read, write, and converse in French, from an expert
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="course_cards">
          <img src={"../images/machine_learning.png"} className="" alt="logo" />
          <h4 class="course-title">Machine Learning</h4>
          <p class="course-caption">
            Learn Machine Learning from scratch and take the first step towards
            AI
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Programming with C and C++ */}
        <div className="course_cards">
          <img src={"../images/cpp.png"} className="" alt="logo" />
          <h4 class="course-title">Programming with C and C++</h4>
          <p class="course-caption">
            Build a strong programming foundation by learning C and C++
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Advanced Excel */}
        <div className="course_cards">
          <img src={"../images/excel.png"} className="" alt="logo" />
          <h4 class="course-title">Advanced Excel</h4>
          <p class="course-caption">
            Learn how to use Microsoft Excel from scratch
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* SOLIDWORKS */}
        <div className="course_cards">
          <img src={"../images/solidworks.png"} className="" alt="logo" />
          <h4 class="course-title">SOLIDWORKS</h4>
          <p class="course-caption">Begin your journey as a 3D Design Engineer</p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Business Communication Skills */}
        <div className="course_cards">
          <img src={"../images/business_communication.png"} className="" alt="logo" />
          <h4 class="course-title">Business Communication Skills</h4>
          <p class="course-caption">
            Develop effective communication skills for the workplace
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* AutoCAD */}
        <div className="course_cards">
          <img src={"../images/autocad.png"} className="" alt="logo" />
          <h4 class="course-title">AutoCAD</h4>
          <p class="course-caption">
            Learn to build 2D drafts and 3D models in AutoCAD
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Financial Modeling and Valuation */}
        <div className="course_cards">
          <img src={"../images/financial_modelling.png"} className="" alt="logo" />
          <h4 class="course-title">Financial Modeling and Valuation</h4>
          <p class="course-caption">
            Learn financial modeling and valuation techniques from scratch
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Core Java */}
        <div className="course_cards">
          <img src={"../images/corejava.png"} className="" alt="logo" />
          <h4 class="course-title">Core Java</h4>
          <p class="course-caption">Develop system applications from scratch to full</p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="course_cards">
          <img src={"../images/graphic_design.png"} className="" alt="logo" />
          <h4 class="course-title">Graphic Design</h4>
          <p class="course-caption">
            Design stunning graphics using Adobe Photoshop
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Beginner's Trading Certification */}
        <div className="course_cards">
          <img src={"../images/python.png"} className="" alt="logo" />
          <h4 class="course-title">Beginner's Trading Certification</h4>
          <p class="course-caption">Learn stock market trading strategies with skills</p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* STAAD Pro */}
        <div className="course_cards">
          <img src={"../images/python.png"} className="" alt="logo" />
          <h4 class="course-title">STAAD Pro</h4>
          <p class="course-caption">
            Master the leading structural analysis and design tool used by Civil
            Engineers
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        {/* Internet of Things */}
        <div className="course_cards">
          <img src={"../images/iot.png"} className="" alt="logo" />
          <h4 class="course-title">Internet of Things</h4>
          <p class="course-caption">
            Learn to build IoT projects from scratch in 4 weeks
          </p>
          <hr />

          <div class="course-block-footer-treatment">
            <div class="duration-view">Duration: 6 weeks</div>
            <div class="know-more-button">
              KNOW MORE
              <span
                class="iconify right_icon"
                data-icon="bx:bx-chevrons-right"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
