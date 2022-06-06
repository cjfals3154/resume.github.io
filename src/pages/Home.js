import React from "react";
import ContactWrap from "../components/Contack/ContactWrap";
import Footer from "../components/Footer";
import HomeResume from "../components/home/HomeResume";
import Introduce from "../components/home/Introduce";
import Layout from "../components/Layout";
import MyImage from "../components/MyImage";
import ProjectForm from "../components/Projects/ProjectForm";
import SkillWrapper from "../components/skill/SkillWrapper";
import Skill from "./Skill";
import ScrollOut from "scroll-out";
function home() {
  return (
    <>
      {/* <Layout /> */}
      <div>
        <MyImage />
        <HomeResume />
        <Introduce />
        {/* <SkillWrapper /> */}
        <Skill />
        <ProjectForm />
        <ContactWrap />
        <Footer />
      </div>
    </>
  );
}

export default home;
