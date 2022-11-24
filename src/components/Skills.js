import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const imageStyle = {
    width : "150px",
    height : "150px"
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
                                <img src='https://miro.medium.com/max/800/1*8hhfdEqRkRQSaJrJlx60zg.png' style={imageStyle} alt="Image" />
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
