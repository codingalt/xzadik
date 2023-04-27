import React, { useEffect, useState } from "react";
import FilterRow from "../components/FilterRow/FilterRow";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";
import API from "../components/axios";

const Home = () => {
  const heroTxt = "the Playground.";
  const slogan = "Explore my experiments in";

  const [projects, setProjects] = useState([]);
  const [empty, setEmpty] = useState(false);

  const getProjects = async () => {
    try {
      const { data } = await API.get("/project");
      setProjects(data?.projects);
      if(data.projects?.length === 0){
        setEmpty(true);
      }else{
        setEmpty(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Search projects By keyword
  const searchProjects = async (keyword) => {
    try {
      const { data } = await API.get(`/project?keyword=${keyword}`);
      setProjects(data?.projects);
      if(data.projects?.length === 0){
        setEmpty(true);
      }else{
        setEmpty(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get Projects by filter
  const filterProjects = async (workType,liscense) => {
    try {
      if(workType !== "" || liscense !== ""){
        const { data } = await API.post("/project/filter", {
          workType,
          liscense,
      });
      setProjects(data?.projects);
      if(data.projects?.length === 0){
        setEmpty(true);
      }else{
        setEmpty(false)
      }

      }else{
        getProjects();
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Navbar />
      <Hero heroTxt={heroTxt} slogan={slogan} />
      <FilterRow
        setProjects={setProjects}
        searchProjects={searchProjects}
        getProjects={getProjects}
        filterProjects={filterProjects}
      />
      <ProjectGrid projects={projects} empty={empty} />
      <Footer />
    </>
  );
};

export default Home;
