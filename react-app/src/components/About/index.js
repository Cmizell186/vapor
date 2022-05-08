import './index.css'
import { useState } from 'react'
import Carousel from 'react-material-ui-carousel';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {

  const [meIndex, setMeIndex] = useState(0);
  // const [currentUrl, setCurrentUrl] = useState('')


  const damian = {
    fullName: "Damian Rojas",
    about: "about goes here",
    linkedIn: "https://www.linkedin.com/in/damian-rojas-076a571b8/",
    github: "https://github.com/JayDrojas",
    videoUrl: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1239300/7e947720d756d861084c22f7046006cc7f4ce082.webm',
    imgUrl: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/579720/18f5c18b83cf9aba982b047d8f9dd45c32d129c2.gif"
  }
  const jared = {
    fullName: "Jared Kunhart",
    about: "about goes here",
    linkedIn: "https://www.linkedin.com/in/jared-kunhart-307661236/",
    github: "https://github.com/Jared-Kunhart",
    videoUrl: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1263950/8640b3b89faac7bb99ffb0071b03098523e2b5f0.webm',
    imgUrl: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/628750/2198fb601a782cdc2b1e17a050c296d6c5ec300d.gif"
  }
  const chris = {
    fullName: "Chris Mizell",
    about: "about goes here",
    linkedIn: "https://www.linkedin.com/in/christopher-mizell-4b21a4174",
    github: "https://github.com/Cmizell186",
    videoUrl: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1465660/6f0c3c0d89b37e1d0fbdd805f114eb359dc0e539.webm',
    imgUrl: "https://avatars.akamai.steamstatic.com/96b7ff8d843b358304b9f4c813ca62011c09028c_full.jpg"
  }
  const jason = {
    fullName: "Jason Vien",
    linkedIn: "jason-link",
    github: "https://github.com/JDVien",
    about: "about goes here",
    videoUrl: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1263950/4d466f77edf3265a253fba79d47bc91a37e34920.webm",
    imgUrl: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/650330/658d7a42b02f59a94b0ea2a97ee46b4323b66c78.gif"
  }

  const handleChange = (i) => {
    setMeIndex(i)
  }

  const usArray = [jared, damian, jason, chris]

  return (
    <div id="main-div-about-us-jd">
      <h1>About the Team</h1>
      <div id="about-us-content-jd">

        <div onClick={() => handleChange(0)} className="container-individual-div-jd">
          Jared Kunhart
        </div>
        <div onClick={() => handleChange(1)} className="container-individual-div-jd">
          Damian Rojas
        </div>
        <div onClick={() => handleChange(2)} className="container-individual-div-jd">
          Jason Vien
        </div>
        <div onClick={() => handleChange(3)} className="container-individual-div-jd">
          Chris Mizell
        </div>
      </div>
      <div id="user-info-area-container-jd">
        <video key={usArray[meIndex].videoUrl} autoPlay muted loop id="user-jd-video">
          <source src={usArray[meIndex].videoUrl}></source>
        </video>
        <div id="user-content-jd">
        <div id="pfp-container-jd">
          <img id="pfp-image-jd" alt='' src={usArray[meIndex].imgUrl}/>
          <div className='user-name-profile-jd'>
            <strong id='user-name-strong-jd'>{usArray[meIndex].fullName}</strong>
            <div className='links-div-jd'>
            <a href={usArray[meIndex].github}>
              <GitHubIcon style={{height: "45px", width:"45px"}}/>
            </a>
            <a href={usArray[meIndex].linkedIn}>
              <LinkedInIcon style={{height: "45px", width:"45px"}}/>
            </a>
          </div>
          </div>
          <div className='user-level-jd'>
            <strong>Level</strong>
            <span className='level-num-jd'>8</span>
          </div>
        </div>
        <div className='screen-shots-jd'>
          <h2 className='art-showcase-h2-jd'>Art Show Case</h2>
          <Carousel
          height='250px'>
            <img alt='' id="art-showcase-img-jd" src="https://vaporgames.s3.us-west-1.amazonaws.com/screen_1.jpg"></img>
            <img alt='' id="art-showcase-img-jd" src="https://vaporgames.s3.us-west-1.amazonaws.com/screen_2.png"></img>
            <img alt='' id="art-showcase-img-jd" src="https://vaporgames.s3.us-west-1.amazonaws.com/screen_3.gif"></img>
            <img alt='' id="art-showcase-img-jd" src="https://vaporgames.s3.us-west-1.amazonaws.com/screen_4.jpg"></img>
          </Carousel>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs;
