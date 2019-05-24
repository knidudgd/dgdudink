import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css"
import { Project, HardCodedProjects } from "../components/Project"

export default class ProjectCarousel extends React.Component<{}, {mode: "default"|"description", slide: "start"|number}> {
    constructor(props: {}, context: any) {
      super(props, context);
      this.state = {mode: "default", slide: "start"};
    }

    setMode(newMode: "default"|"description") {
      this.setState({mode: newMode})
    }

    setSlide(newSlide: "start"|number, newMode: "default"|"description") {
      this.setState({slide: newSlide})
      this.setMode(newMode)
    }

    render() {
      let projects = HardCodedProjects
      let carouselState = "visible"
      let descriptionState = "hidden"
      
      if (this.state.mode === "default"){
        carouselState = "visible"
        descriptionState = "hidden"
      }

      else {
        carouselState = "hidden"
        descriptionState = "visible"
      }

      return (
        <div>
          <div className = {(carouselState)}>
            <Carousel infiniteLoop useKeyboardArrows>
            
            <div key = {"landing"} className="project-box">
                  
                  <img src= {require("../images/TemporaryPic.png")}/>
                    
                  <div className="project-textbox">
                    <p className="project-title">
                      Welcome to my portfolio page.
                    </p>
                    <p className="project-text">
                      My name is Daniel and I believe I'm the quick-learning engineer you need for your next
                      tech project.
                      Click the button labelled "about me" for more about me.<br/>
                      <br/>
                      On this page you will find various projects I've worked on and what I've learned
                      while doing them.<br/>
                      <br/>
                      Please click the arrow on the right to browse through my portfolio chronologically
                      or go left to go straight to my latest project. You can also use the arrow keys to navigate.
                    </p>
                  </div>
            </div>

            {
              projects.map (
                (project, i) => 
                  <div key = {i} className="project-box">
                    
                    <img src= {project.image}/>
                    
                    <p className="legend">{project.name}</p>

                    <div className="project-textbox">
                      <div className="project-head">
                        <p className="project-title">{project.name}</p>
                        <p className="project-blurb">{project.blurb}</p>
                      </div>
                      <p className="project-learned" style = {{fontWeight : "bold"}}>Learned how to:</p>
                      {project.learned.map (
                        (thing, i) =>
                          <p key = {"learnedThing " + i} className="project-learned">{thing}</p>
                      )}

                    </div>

                    <div className ="project-cards">
                      <div className="card">
                        <div className="card-header">
                          Using:
                        </div>
                        <ul className="list-group list-group-flush">
                          {project.tools.map(
                            (tool, i) =>
                            <li key = {"tool" + i} className="list-group-item">{tool}</li>
                          )}
                        </ul>
                      </div>
                      <div className="card bottom-card">
                        <button className="button card-header"
                        onClick={()=>this.setSlide(i,"description")}>
                          <b>Read full description</b>
                        </button>
                      </div>
                    </div>
                  </div>
              )
            }
            </Carousel>
          </div>
          
          { (
            () => {
            if (this.state.slide != "start"){
              return(
                <div className={descriptionState}>
                  <div className="project-box" style = {{justifyContent: "center"}}>
                    <div style = {{display : "flex", flexDirection: "column"}}>
                      <img src= {projects[this.state.slide].image} style = {{objectFit : "fill"}} className = "fullImage"/>
                      <div className="card">
                        <button className="button card-header return-button"
                        style = {{marginLeft : "5vmin"}}
                        onClick={()=>this.setSlide(this.state.slide,"default")}>
                          <b>Return</b>
                        </button>
                      </div>
                    </div>
                    <p className="project-description">{projects[this.state.slide].description}</p>
                  </div>
                </div>
              )
            }
          })()
        }
        </div>
      );

    }
  }