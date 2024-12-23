<a name="readme-top"></a>

# A Modern UI/UX Portfolio using Next.JS

![A Modern UI/UX Portfolio using Next.JS](/.github/images/img_main.png "A Modern UI/UX Portfolio using Next.JS")

[![Ask Me Anything!](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://img.shields.io/github/license/sanidhyy/portfolio)](https://github.com/sanidhyy/portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sanidhyy/portfolio/commits/main "Maintenance")
[![GitHub branches](https://badgen.net/github/branches/sanidhyy/portfolio)](https://github.com/sanidhyy/portfolio/branches "GitHub branches")
[![Github commits](https://badgen.net/github/commits/sanidhyy/portfolio/main)](https://github.com/sanidhyy/portfolio/commits "Github commits")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sanidhy.vercel.app/ "Vercel status")
[![GitHub issues](https://img.shields.io/github/issues/sanidhyy/portfolio)](https://github.com/sanidhyy/portfolio/issues "GitHub issues")
[![GitHub pull requests](https://img.shields.io/github/issues-pr/sanidhyy/portfolio)](https://github.com/sanidhyy/portfolio/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)

</details>

## :bangbang: Folder Structure

Here is the folder structure of My Portfolio.

```bash
portfolio/
  |- public/
  |- app/
  |- components/
  |- constants/
  |- context/
  |- lib/
  |- public/
    |-- icons/
  |- .env.local/
  |- next.config.js/
  |- package-lock.json
  |- package.json
  |- postcss.config.cjs
  |- tailwind.config.cjs
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in root folder.
4. Contents of `.env`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXXX
```

5. Create new account in [EmailJS](https://www.emailjs.com/ "EmailJS").
6. From dashboard, choose Email Services > Add New Service and connect your mail to emailjs.
7. Once new service is configured, copy your **Service ID** to `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
8. Now, go to Email Templates > Create New Template to create your mail template. Once it is done, you can copy **Template ID** to `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
9. To get your **Public Key**, click on your username on navbar and go to account settings > Copy Public Key to `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
10. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

![Copy Public Key](/.github/images/step_emailjs.png "Copy Public Key")

11. Now app is fully configured :+1: and you can start using this app using `npm run dev` or `yarn dev`.

**NOTE:** Make sure you don't share these keys publicaly.

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel")

## :wrench: Stats

[![Stats for this App](/.github/images/stats.svg "Stats for this App")](https://pagespeed-insights-svg.glitch.me/?url=https://www.sanidhy.me/ "Stats for this App")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in My Portfolio

- [Email JS](https://www.emailjs.com/ "Email JS")
- [Framer Motion](https://www.framer.com/motion/ "Framer Motion")
- [CLSX](https://www.npmjs.com/package/clsx "CLSX")
- [React Icons](https://react-icons.github.io/react-icons/ "React Icons")
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component "React Vertical Timeline Component")
- [React Hot Toast](https://www.npmjs.com/package/react-hot-toast "React Hot Toast")
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer "React Intersection Observer")
- [Next PWA](https://www.npmjs.com/package/next-pwa "Next PWA")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
