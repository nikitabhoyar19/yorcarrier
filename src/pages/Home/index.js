import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* banner */}
      <div className="campaign_banner">
        {/* inner section of the banner */}
        <div className="campaign_content">
          <h1>Learn in-demand skills</h1>
          <h2>Anytime, Anywhere, Affordable</h2>
          <p>Get up to 55% + 10% off on all online trainings</p>
        </div>
      </div>

      {/* heading */}
      <p className="heading">Online Trainings we offer:</p>

      {/* course container */}
      <div className="course_container">
        <Card />
      </div>

      {/* specialization course card */}
      <div className="specialization_courses">
        {/* heading */}
        <p className="heading">Online Trainings we offer:</p>

        <div class="specialization_card">
          <div class="image_holder"></div>
          <div class="details_box">
            <div class="content_box">
              <p class="training_name">Machine Learning Specialization</p>
              <label class="training_info">
                Learn and build a career in Data Science
              </label>
              <div class="gradient_horizontal_rule"></div>
              <label class="duration">
                <strong>Duration: </strong>6 Months
              </label>
              <hr class="light_rule"></hr>
              <label class="training-list-title">
                This specialization includes 4 trainings:
              </label>
              <div class="training-list">
                <div>
                  <div class="list-numbering-container">
                    <div>1</div>
                  </div>
                  <div>Introduction to Machine Learning</div>
                </div>

                <div>
                  <div class="list-numbering-container">
                    <div>2</div>
                  </div>
                  <div>Advanced Machine Learning</div>
                </div>
                <div>
                  <div class="list-numbering-container">
                    <div>3</div>
                  </div>
                  <div>SQL for Data Science</div>
                </div>
                <div>
                  <div class="list-numbering-container">
                    <div>4</div>
                  </div>
                  <div>Interview Preparation for Data Science Roles</div>
                </div>
              </div>
            </div>

            <div class="ribbon_message">
              Get Mentorship From a Practicing Data Scientist
            </div>

            <div class="know-more-box">
              <a
                href="/"
                id="machine-learning-specialization-know-more"
                class="btn know-more-cta"
              >
                KNOW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
   </>
  );
};

export default Home;
