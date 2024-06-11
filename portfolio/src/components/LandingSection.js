import React from "react";
import { Avatar, Heading, VStack ,Text} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import image from "../images/Bipin.jpg"

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    
  >
    <img style={{borderRadius:"100px",width:"200px"}} src={require("../images/Bipin.jpg")} />
    <p>Hello, I am Bipin!</p>
    <Text fontSize='4xl'>A front end developer specialised in React</Text>
  </FullScreenSection>
);

export default LandingSection;
