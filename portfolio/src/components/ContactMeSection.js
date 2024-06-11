import React, {useEffect, useRef, useState} from "react";
import { useFormik } from "formik";
import '../index.css'
import emailjs from '@emailjs/browser';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const focusedProject = useRef(null)

  const formik = useFormik({
    initialValues: {
      firstName:"",
      email:"",
      type:"",
      comment:""
    },

    onSubmit:  (values) => {
      submit("sdf",values)
      emailjs.send("service_pjrnfkm","template_jpmpzvm", values ,{
        publicKey: '4KJt0SItQqEnCIzg-',
        })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      }, 
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required") ,
      email: Yup.string().email('Enter valid email address').required('Required'),
      type: Yup.string().required("required"),
      comment : Yup.string().min(25,"Must be more then 25 character").required("Required")
    }),
  })


  useEffect(()=>{
    if(response){
      onOpen(response.type, response.message);
      if(response.type=='success'){
        

        formik.resetForm()
      }
    }
  },[response])


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#2A4365"      
    >
      <VStack w="140%" p={15} m={10} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box mt={20} pl={250} pr={250} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={2}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input 
                  ref={focusedProject}
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? ( 
                  <div className="required">{formik.errors.firstName}</div>
                ) : null}
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}

                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="required" >{formik.errors.email}</div>
                ) : null}
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select  style={{backgroundColor:"#2A4365"}}
                  id="type" 
                  name="type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.type}
                  >
                  <option style={{backgroundColor:"#2A4365"}} value="hireMe">Freelance project proposal</option>
                  <option style={{backgroundColor:"#2A4365"}} value="openSource">
                    Job oppertunity
                  </option>
                  <option style={{backgroundColor:"#2A4365"}} value="other">Other</option>
                </Select>
                {formik.touched.type && formik.errors.type ? (
                  <div className="required">{formik.errors.type}</div>
                ) : null}
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={120}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}

                />
                {formik.touched.comment && formik.errors.comment ? (
                  <div className="required">{formik.errors.comment}</div>
                ) : null}
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full">
                {isLoading?<div>Loading...</div>:<div>Submit</div>}
              </Button>


            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
