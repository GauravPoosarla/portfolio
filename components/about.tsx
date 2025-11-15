// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] mx-auto text-left leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
        I'm a dedicated software engineer with a passion for building
        user-friendly and scalable web applications. I graduated from VIT Vellore,
        where I built a strong foundation in software development and worked on
        several impactful projects. During my internship at McKinsey & Company,
        I gained hands-on experience in modern web technologies such as React and
        Node.js, contributing to multiple client-focused solutions.
      </p>
      <br />
      <p className="mb-3">
        After graduation, I joined Samsung as a software engineer, where I worked
        in the eCommerce division as part of the Order Fulfillment team. My role
        primarily focused on backend engineering, building reliable and efficient 
        systems at scale.
      </p>
      <br />
      <p>
        Currently, I am part of the Securities Lending engineering team at
        Goldman Sachs. Here, I work on high-performance distributed systems,
        leveraging technologies like Kafka, Spring Boot, and scalable backend
        architectures to build resilient pre and post-trade and platform components.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
