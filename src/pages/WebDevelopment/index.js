import React from 'react'
import './WebDevelopment.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Register from "../../components/Register";

const WebDevelopment = () => {
    return (
        <>
                 {/* navbar */}
        <Navbar />

{/* python banner */}
<div className="python_banner">
  {/* inner section of the banner */}
  <div className="python_content">
    <h1>The Python Challenge</h1>
    <h2>Learn Python programming and win cash rewards!</h2>
    <p>Get up to 55% + 10% off on all online trainings</p>
  </div>

  {/* python form */}
  <div className="python_login_form">
    <Register />
  </div>
</div>

{/* About contest */}
<div className="about_contest">
  <h2>About the contest</h2>
  <p>
    The Python Challenge is your chance to learn the most popular and
    versatile programming language from scratch and stand a chance to
    win cash rewards worth Rs. 65,000! Once you register for the
    contest, you will first learn Python on Internshala Trainings
    platform. You will then take part in the online challenge in which
    you will have to submit a project. The project will be evaluated by
    our team of experts and the top 3 performers would be rewarded with
    cash prizes worth Rs. 35,000/-, Rs. 20,000/- and Rs. 10,000/-! For
    more details on the training, click here to view the detailed table
    of content.
  </p>
</div>

{/* why learn section */}
<div className="why_learn_main_section">
  {/* heading */}
  <div class="heading">Why learn Programming with Python?</div>

  {/* Elements Container */}
  <div class="element_container">
    <div class="element">
    <img src={"https://trainings.internshala.com/uploads/contests/python/Versatility.svg"} className="" alt="logo" />
      <div class="title">Beginner friendly</div>
      <div class="text">
        A simple and powerful syntax makes Python one of the easiest
        languages to learn.
      </div>
    </div>

    <div class="element">
    <img src={"https://trainings.internshala.com/uploads/contests/python/Beginner%20friendly.svg"} className="" alt="logo" />
      <div class="title">Beginner friendly</div>
      <div class="text">
        A simple and powerful syntax makes Python one of the easiest
        languages to learn.
      </div>
    </div>

    <div class="element">
    <img src={"https://trainings.internshala.com/uploads/contests/python/Be%20in%20demand.svg"} className="" alt="logo" />
      <div class="title">Beginner friendly</div>
      <div class="text">
        A simple and powerful syntax makes Python one of the easiest
        languages to learn.
      </div>
    </div>
  </div>
</div>

{/* Feedback */}
<div className="testimonal_section">
   {/* heading */}
<div className="testimonial_heading">
Feedback from past students
</div>
   {/* testimonal_box */}
<div className="testimonal_profile">
 {/* image */}
<img src={"https://trainings.internshala.com/uploads/contests/python/yavnika_sharma.png"} className="" alt="logo" />
{/* content */}
<div className= "testimonal_profile_details">
<div class="testimonial-name">Jincy</div>

<div class="testimonial-college">Institute Of Engineering And Technology, 
University Of Calicut</div>

<div class="testimonial-rating">
         <span class="fa fa-star">
         </span>&nbsp;<span class="fa fa-star">
        </span>&nbsp;<span class="fa fa-star">
        </span>&nbsp;<span class="fa fa-star">
        </span>&nbsp;<span class="fa fa-star">
        </span>&nbsp;                                   
 </div>

 <div class="testimonial-description">
     I developed a project through the Python Training
     on my own in despite not having any prior experience.
     The teacher cleared my doubts in no time, and the
     Internshala support team was also extremely helpful. 
 </div>
</div>
</div>


</div>
{/* Footer */}
<Footer />

        </>
    )
}

export default WebDevelopment
