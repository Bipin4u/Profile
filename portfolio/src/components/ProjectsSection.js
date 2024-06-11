import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Akira Clone(Stability Automation | DTV)    ",
    description:
      "An application to automate Android TV.      Performs TV, stream selection operation &   simultaneously captures logs and video & if  issue (No AV) is observed, bugreport is   generated.",   
       getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Deep learning based recognition of crop     disease by image classification | 2022    ",
    description:
      "A crop disease detection system to classify      different plant disease | Python      ",    
      getImageSrc: () => require("../images/deeplearning.png"),
  },
  {
    title: "Test script generation with python",
    description:
      "An application to generate test case script       from TV logs for TV automation | Jupyter      ",    
      getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "TextForms | React.js",
    description:
      "The Textform performs uniquely flexible      capabilities for processing textual data.",
    getImageSrc: () => require("../images/textform.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      p={6}
      alignItems="flex-start"
      spacing={12}
      m={6}
    >
      <Heading as="h1" id="projects-section">
         Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={75}
        paddingLeft={20}
        paddingRight={20}
        
        
      
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
