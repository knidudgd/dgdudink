import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
  import "../styles/Carousel.css"

export default class ProjectCarousel extends React.Component<{}, {}> {
    constructor(props: {}, context: any) {
      super(props, context);
  
  
      this.state = {};
    }
  
    render() {
      return (
        <Carousel>
                <div className="project-box">
                    <img src="https://zeroblade.files.wordpress.com/2008/02/wallpaper_03.png" />
                    <p className="legend">Legend 1</p>
                    <p className="project-description">What's up?</p>
                </div>
                <div className="project-box">
                    <img src="http://www.wallpapermaiden.com/image/2016/07/12/re-zero-starting-life-in-another-world-rem-loli-yukata-anime-2620.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="project-box">
                    <img src="https://zeroblade.files.wordpress.com/2008/02/wallpaper_03.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      );
    }
  }