import Link from "next/link";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

// Define the Footer component.
const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="text-xs">
        {/* Provide information about the website and the technologies used. */}
        <b className="font-semibold">About this website:</b> built with React
        &amp; Next.js (App Router and Server Actions), Typescript, Tailwind CSS,
        Framer Motion, EmailJS, React Toaster &amp; React Vertical Timeline.
      </p>
      <p className="text-xs">
      <a target="_blank" href="https://icons8.com/icon/9zVjmNkFCnhC/logitech">G</a> icon by <a target="_blank" href="https://icons8.com">Icons8 &nbsp;</a>
      <a target="_black" href="https://github.com/sanidhyy/">Design Credits</a>
      </p>
    </footer>
  );
};

// Export the Footer component.
export default Footer;
