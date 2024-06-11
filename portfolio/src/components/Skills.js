import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Skillcard from "./Skillcard";

const myskill = [
  {
    title: "Python",
      getImageSrc: () => require("../images/python.png"),
  },
  {
    title: "React",
       getImageSrc: () => require("../images/React.png"),
  },
  {
    title: "HTML",
      getImageSrc: () => require("../images/HTML.webp"),
  },
  {
    title: "CSS",
     getImageSrc: () => require("../images/CSS.webp"),
  },
  {
    title: "JavaScript",
     getImageSrc: () => require("../images/JS.png"),
  },
  {
    title: "C++",
     getImageSrc: () => require("../images/C++.png"),
  },
  {
    title: "SQL",
     getImageSrc: () => require("../images/SQL.png"),
  },
  {
    title: "GIT",
     getImageSrc: () => require("../images/GIT.png"),
  },
];

const Skills = () => {
  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      alignItems="flex-start"
      m={8}
      mt={20}
    >
      <Heading id="skills-section">
         Skills
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(6,minmax(0,1fr))"
        gridGap={70}
        padding={20}
        >
        {myskill.map((project,index) => (
          <Skillcard
            key={project.title}
            title={project.title}
            imageSrc={project.getImageSrc()}
            isCentered={index>=project.length-2}
            rotateContinuously={index === 1} // Rotate the second item continuously
                       
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Skills;
