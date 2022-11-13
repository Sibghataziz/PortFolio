import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const imageStyle = {
    width : "200px",
    height : "200px"
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are my Full-Stack Development skills.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src='https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw' style={imageStyle} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src='https://e7.pngegg.com/pngimages/239/228/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png' alt="Image" style={imageStyle}/>
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png' style={imageStyle} alt="Image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src='https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo.png' style={imageStyle} alt="Image" />
                                <h5>NODE.JS</h5>
                            </div>
                            <div className="item">
                                <img src='https://www.w3jar.com/wp-content/uploads/2019/05/express-js-tutorial.png' style={imageStyle} alt="Image" />
                                <h5>EXPRESS.JS</h5>
                            </div>
                            <div className="item">
                                <img src='https://servicenav.coservit.com/wp-content/uploads/2022/05/18-1.jpg' style={imageStyle} alt="Image" />
                                <h5>MONGODB</h5>
                            </div>
                            <div className="item">
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEX////LODfJLSzglpbKNDP99/fRU1Pwzs7IJCPuyMjTX17LNjXMPDvKMjDXb2789PTwzs3PR0bHHx3HFBLZenrekZDQTEvkoqIlE/svAAABlklEQVR4nO3dyU4DQRBEQbywmsUshv//UzgiIcrKErh7IOJeKT3NcQ59dgYAAAAAQO1yWfaXceHj09WiPJ+nhRfb1ZLs1goVzk6hwvkpVDg/hQrnp1Dh/BQqnJ9ChfNTqHB+ChV+2Rvya+LudIW7i/316e1fisQfLtzepGs/YrNWGFE4gMKQwgEUhhQOoDCkcACFIYUDKAwpHEBhSOEACkMKB1AYUjiAwtBvFd7uit378nQhhavt7lt3f6Kw+oYKFWYUdiksKAwp7FJYUBhS2KWwoDCksEthQWFIYZfCgsKQwi6FBYUhhV0KCwpDCrsUFhSGFHYpLCgMKexSWFAYUtilsKAwpLBLYUFhSGGXwoLCkMIuhQWFIYVdCgsKQwq7FBYUhhR2KSwoDCnsUlhQGFLYpbCgMKSwS2FBYUhh12IKH5qOFRan54fTFa62/SeNisBjuyd8DeljsK1aPbJbHnqzS+H0FCqcn0KF81OocH4KFc5PocL5KVQ4P4UK56fwXxa+Xq0X5SkufNssyyEuBAAAAAD47B0TP5VoSK2pFAAAAABJRU5ErkJggg=='
                                style={imageStyle} alt="Image" />
                                <h5>NPM</h5>
                            </div>
                            <div className="item">
                                <img src='https://images.squarespace-cdn.com/content/v1/57c649658419c2380d1947be/1534825375055-OA4431YN1BZ93RTAEIZF/postman-tile.png?format=1500w' style={imageStyle} alt="Image" />
                                <h5>POSTMAN</h5>
                            </div>
                            <div className="item">
                                <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
                                style={imageStyle} alt="Image" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'
                                style={imageStyle} alt="Image" />
                                <h5>GITHUB</h5>
                            </div>
                            <div className="item">
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                                style={imageStyle} alt="Image" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' style={imageStyle} alt="Image" />
                                <h5>REDUX</h5>
                            </div>
                            <div className="item">
                                <img src='https://mui.com/static/logo.png' style={imageStyle} alt="Image" />
                                <h5>MATERIAL UI</h5>
                            </div>
                            <div className="item">
                                <img src='data:image/jpeg;base64,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' style={imageStyle} alt="Image" />
                                <h5>CHAKRA UI</h5>
                            </div>
                            <div className="item">
                                <img src='https://avatars.githubusercontent.com/u/20658825?s=200&v=4' 
                                style={imageStyle} alt="Image" />
                                <h5>STYLED-COMPONENTS</h5>
                            </div>
                            <div className="item">
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' style={imageStyle} alt="Image" />
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                                <img src='https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg' style={imageStyle} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
