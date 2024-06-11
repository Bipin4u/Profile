import React, { useEffect, useRef  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: bipinkumar9739340018@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/bipin4u/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/bipin-kumar-2449a71b9/",
  },
];


const Header = () => {
  const handleClick = (anchor)  => {
    console.log(anchor)
    const id = `${anchor}-section`;
    console.log(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const download = (anchor)  => {
    var resumeUrl = 'https://github.com/Bipin4u/Resume/raw/main/Resume.pdf'; 
    var a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'https://github.com/Bipin4u/Resume/raw/main/Resume.pdf'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          
          alignItems="center"
        >
            {socials.map((social,index) =>{
              return(
                <nav key={index} style={{paddingLeft:20, paddingRight:20}}>
                  <a href={social.url}>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                </nav>
              )
            })}
            <HStack w="50%">

            </HStack>
          <nav >
            <HStack spacing={6} >
              <Link to = "" onClick={()=>handleClick('projects')}>Projects</Link >
              <Link  to = "" onClick={()=>handleClick('contactme')}>Contact Me</Link >
              <Link  to = "" onClick={()=>handleClick('skills')}>Skills</Link >
              <Link  to = "" onClick={()=>download()}>Resume</Link >
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
