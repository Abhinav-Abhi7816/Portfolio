import React from 'react'
import './App.css';
import ProjectCard from './ProjectCard';
import { ReactProjectsArr,JSProjectsArr,MernProjectsArr } from './ProjArr';
function ProjectCon() {
  return (
    <>
    <div className="projects" id="projects">
    <h1>My Projects</h1>
    <h2 className="projects-sec">MERN-Projects(Mongo Db, Express JS, React JS, Node JS)</h2>
    <div className='images-container'>
      {
        (MernProjectsArr && MernProjectsArr.length!==0)?
        MernProjectsArr.map((el,i)=>
            <ProjectCard key={i} name={el.name} cardNo={i} which={'mern'} gitLink={el.gitLink} imageLink={el.imageLink}></ProjectCard>
        )
        :null
      }
    </div>


    <h2 className="projects-sec">React-JS Projects</h2>
    <div className='images-container'>
      {
        (ReactProjectsArr && ReactProjectsArr.length!==0)?
        ReactProjectsArr.map((el,i)=>
            <ProjectCard key={i} name={el.name} cardNo={i} which={'react'} gitLink={el.gitLink} imageLink={el.imageLink}></ProjectCard>
        )
        :null
      }
    </div>


    <h2 className="projects-sec">HTML, CSS , JS Projects</h2>
    <div className="images-container">
      {
        (JSProjectsArr && JSProjectsArr.length!==0)?
        JSProjectsArr.map((el,i)=>
            <ProjectCard key={i} name={el.name} gitLink={el.gitLink} cardNo={i} which={'js'}  imageLink={el.imageLink}></ProjectCard>
        )
        :null
      }
    </div>
    </div>
    </>
  )
}

export default ProjectCon
