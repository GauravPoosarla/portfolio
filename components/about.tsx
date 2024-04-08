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
        user-friendly web applications. As a recent graduate of VIT Vellore
        University, I've gained a solid foundation in software development
        principles and programming skills. During my internship at McKinsey &
        Company, I worked on various web technologies such as React and Node,
        contributing to the development of several projects.
      </p>
      <br></br>
      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
        Presently, I am a software engineer at Samsung, where I am an integral
        part of the order fulfillment team within the Samsung eCommerce
        division. My responsibilities predominantly revolve around backend
        technologies.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
