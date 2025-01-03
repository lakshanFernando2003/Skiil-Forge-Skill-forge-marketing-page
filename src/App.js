import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import FramedArea from "./page/FramedArea";
import TeamMemberBox from "./Components/TeamMemberBox";

// Import team member images and social icons
import teamImage1 from "./images/392531_account_friend_human_man_member_icon.png" // Replace with actual image paths
import teamImage2 from "./images/2530821_business man_employee_general_human_member_icon.png"
import facebookIcon from "./icons/4102573_applications_facebook_media_social_icon.png";
import linkedinIcon from "./icons/2986200_linkdin_logo_media_social_icon.png";
import twitterIcon from "./icons/5296516_tweet_twitter_twitter logo_icon.png"
import Contact from "./Components/Contact";
import Roadmap from "./Components/Roadmap";
import Aboutproject from "./Components/Aboutproject";
import Footer from "./Components/Footer";

function App() {
  // Team Member Data
  const teamMembers = [
    {
      name: "L.W Fernando",
      role: "Project Manager/Full-stack developer",
      image: teamImage1,
      socialLinks: [
        { name: "Facebook", url: "https://facebook.com", icon: facebookIcon },
        { name: "Twitter", url: "https://twitter.com", icon: twitterIcon },
        { name: "LinkedIn", url: "https://linkedin.com", icon: linkedinIcon },
      ],
    },
    {
      name: "K.A.A Indipa",
      role: "Full-stack developer",
      image: teamImage2,
      socialLinks: [
        { name: "Facebook", url: "https://facebook.com", icon: facebookIcon },
        { name: "Twitter", url: "https://twitter.com", icon: twitterIcon },
        { name: "LinkedIn", url: "https://linkedin.com", icon: linkedinIcon },
      ],
    },
    {
      name: "M.K Chaniru Manmitha",
      role: "UI/UX designer",
      image: teamImage2,
      socialLinks: [
        { name: "Facebook", url: "https://facebook.com", icon: facebookIcon },
        { name: "Twitter", url: "https://twitter.com", icon: twitterIcon },
        { name: "LinkedIn", url: "https://linkedin.com", icon: linkedinIcon },
      ],
    },
    {
      name: "P.K Madushi Tharaka",
      role: "UI/UX designer",
      image: teamImage1,
      socialLinks: [
        { name: "Facebook", url: "https://facebook.com", icon: facebookIcon },
        { name: "Twitter", url: "https://twitter.com", icon: twitterIcon },
        { name: "LinkedIn", url: "https://linkedin.com", icon: linkedinIcon },
      ],
    },
    {
      name: "K.A.D.C.Kariyapperuma",
      role: "Web Developer",
      image: teamImage1,
      socialLinks: [
        { name: "Facebook", url: "https://facebook.com", icon: facebookIcon },
        { name: "Twitter", url: "https://twitter.com", icon: twitterIcon },
        { name: "LinkedIn", url: "https://linkedin.com", icon: linkedinIcon },
      ],
    },
    {
      name: "E.M.H.P Bandara",
      role: "Full-stack developer",
      image: teamImage1,
      socialLinks: [
        { name: "Facebook", url: "https://facebook.com", icon: facebookIcon },
        { name: "Twitter", url: "https://twitter.com", icon: twitterIcon },
        { name: "LinkedIn", url: "https://linkedin.com", icon: linkedinIcon },
      ],
    },
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div style={{ marginTop: "80px", padding: "20px" }}> {/* IF this one is not set can remove it will set all in one page without deviding the content */}
        <section id="theme">
           <FramedArea />
           <hr></hr>
        </section>

        {/*About Us*/}
        <section id="aboutproject">
          <Aboutproject></Aboutproject>
          <hr></hr>
        </section>

        {/*Roadmap */}
        <section id="Roadmap">
          <Roadmap></Roadmap>
          <hr></hr>
        </section>


        {/* Team Members Section */}
        <section id="team" className="Team-members">
          <h1 style={{ margin: "40px 0", color: "" }}>Meet Our Team</h1>
          <div className="team-container">
            {teamMembers.map((member, index) => (
              <TeamMemberBox
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
          <hr></hr>
        </section>


        {/* Form submittion-contact us */}
        <section id="contact">
          <h1>Contact us</h1>
          <Contact></Contact>
        </section>



      <Footer></Footer>

      </div>
    </div>
  );
}

export default App;
