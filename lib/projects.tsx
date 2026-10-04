export const projects = [
  {
    title: "Decidecks",
    imgSrc: "/project-imgs/decidecks.webp",
    imgModalsrc: "/project-imgs/decidecks-modal.webp",
    code: "",
    projectLink: "https://holo-board-two.vercel.app/",
    tech: [
      "Typescript",
      "React",
      "Vite",
      "Tailwind",
      "SASS",
      "Supabase",
      "Tanstack Query",
      "Tanstack Form",
      "Zustand",
      "Radix",
      "Three.js",
      "GSAP",
      "Tiptap",
    ],
    description:
      " Productivity app that turns your day into a small hand of playable task cards.",
    modalContent: (
      <>
        <p>
          Decidecks reimagines productivity as a focused card game. Instead of
          a long todo list, the user draws a small hand of task and chore
          cards, plays one at a time on the table, and parks it on a Waiting
          or Done pile when it&apos;s set aside or finished.
        </p>
        <div>
          <p className="modal__subtitle">Features:</p>
          <ul className="modal__list">
            <li>
              <b>Card-based tasks and chores:</b> A deck to draw from, a
              hand with a card limit, and a table where one card is played at
              a time.
            </li>
            <li>
              <b>Mood check-ins and focus timer:</b> A daily mood card and a
              built-in pomodoro timer, played from the hand like any other
              card.
            </li>
            <li>
              <b>Stats:</b> A monthly calendar view with
              completion heatmaps and streak tracking for finished cards.
            </li>
            <li>
              <b>Local-first with cloud sync:</b> Fully usable without an
              account; signing in syncs tasks through Supabase.
            </li>
          </ul>
        </div>
        <div>
          <p className="modal__subtitle">Technologies Used:</p>
          <ul className="modal__list">
            <li>Main technology - React with TypeScript and Vite</li>
            <li>Supabase for the database</li>
            <li>Styled with Tailwind CSS and Sass</li>
            <li>State management using Tanstack Query and Zustand</li>
            <li>UI components built with Radix</li>
            <li>Visual effects with Three.js and GSAP</li>
            <li>Rich text editing with Tiptap</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Focus Board",
    imgSrc: "/project-imgs/focus-board.webp",
    imgModalsrc: "/project-imgs/focus-board-modal.webp",
    code: "",
    projectLink: "https://focus-board-cyan.vercel.app/",
    tech: [
      "Typescript",
      "React",
      "Tailwind",
      "Vite",
      "SASS",
      "Supabase",
      "Tanstack Query",
      "Zustand",
      "shadcn/ui",
      "NodeJS",
      "Radix",
    ],
    description:
      " Browser-based dashboard that enhances productivity.",
    modalContent: (
      <>
        <p>
          Focus Board is a web application that allows users to customize their
          dashboard.
        </p>
        <div>
          <p className="modal__subtitle">Features:</p>
          <ul className="modal__list">
            <li>
              <b>Customizable backgrounds:</b> Choose your own backgrounds and
              themes using static or animated wallpapers, or even YouTube
              videos.
            </li>
            <li>
              <b>Personalized Soundscapes:</b> Enhance your experience with
              ambient sounds tailored to your mood.
            </li>
            <li>
              <b>Productivity Tools:</b> Includes sticky notes, to-do lists, a
              Pomodoro timer, a habit tracker, and many more.
            </li>
          </ul>
        </div>
        <div>
          <p className="modal__subtitle">Technologies Used:</p>
          <ul className="modal__list">
            <li>Main technology - React with TypeScript</li>
            <li>Supabase for the database</li>
            <li>Styled with Tailwind CSS and Sass</li>
            <li>State management using Tanstack Query and Zustand</li>
            <li>UI components built with shadcn/ui and Radix</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Chords Lab",
    imgSrc: "/project-imgs/chords-lab.webp",
    imgModalsrc: "/project-imgs/chords-lab-modal.webp",
    code: "https://github.com/brozinsky/chords-lab",
    projectLink: "https://chords-lab.vercel.app/",
    tech: [
      "Typescript",
      "React",
      "Vite",
      "SASS",
      "Tailwind",
      "Tanstack Query",
      "Zustand",
      "Radix",
    ],
    description:
      " Web application for displaying piano chords and scales charts on a keyboard.",
    modalContent: (
      <>
        <p>
          Chords Lab is a web application that allows users explore musical
          scales and chords. The project aims on creating all possible chords
          and scales based on the formulas for a given instrument.
        </p>
        <div>
          <p className="modal__subtitle">Features/used technologies:</p>
          <ul className="modal__list">
            <li>Main technology - React with Typescript</li>
            <li>Styled with Tailwindcss and Sass</li>
            <li>State management with Tanstack Query and Zustand</li>
            <li>UI primitives by HeadlessUI and Radix</li>
            <li>Designed using Figma</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Sznurkowe Królowe",
    imgSrc: "/project-imgs/sznurkowe-krolowe.webp",
    imgModalsrc: "/project-imgs/sznurkowe-krolowe-modal.webp",
    code: "https://github.com/brozinsky/next-handmade-ecommerce",
    projectLink: "https://next-handmade-ecommerce.vercel.app/",
    tech: [
      "Typescript",
      "React",
      "Nextjs",
      "SASS",
      "Tailwind",
      "Sanity",
      "Zustand",
      "HeadlessUI",
    ],
    description: " An ecommerce website for handmade store.",
    modalContent: (
      <>
        <p>
          An e-commerce web application. Store has a cart to add/remove items,
          it shows the total price and sends user to checkout.
          <br />
          Styling made with Sass and Tailwind.
          <br />
          Backend made using Sanity, data consumed with NextJS using GROQ and
          server components.
        </p>
        <div>
          <p className="modal__subtitle">Features/used technologies:</p>
          <ul className="modal__list">
            <li>Next JS + Typescript</li>
            <li>Styled with Tailwind and SASS</li>
            <li>Backend: Sanity</li>
            <li>State management - Zustand</li>
            <li>Fully responsive mobile first design</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Restaurant Template",
    imgSrc: "/project-imgs/restaurant.webp",
    imgModalsrc: "/project-imgs/restaurant-modal.webp",
    code: "https://github.com/brozinsky/next-restaurant-template",
    projectLink: "https://next-restaurant-template.vercel.app/",
    tech: ["Typescript", "React", "Nextjs", "SASS", "Tailwind", "Zustand"],
    description: "Next JS template for asian cuisine restaurant.",
    modalContent: (
      <>
        <p>
          NextJS template for asian cuisine restaurant.
          <br />
          Styling made with Sass and Tailwind.
        </p>
        <p className="modal__subtitle">Features/used technologies:</p>
        <ul className="modal__list">
          <li>Next JS + Typescript</li>
          <li>Styled with Tailwind and SASS</li>
          <li>State management - zustand</li>
          <li>Fully responsive mobile first design</li>
          <li>Designed using Figma</li>
        </ul>
      </>
    ),
  },
  {
    title: "Jacks or Better",
    imgSrc: "/project-imgs/jacks-or-better.webp",
    imgModalsrc: "/project-imgs/jacks-or-better-modal.webp",
    code: "https://github.com/brozinsky/videopoker-jacks-or-better",
    projectLink: "https://brozinsky.github.io/videopoker-jacks-or-better/",
    tech: ["React", "CSS", "OOP"],
    description: " A classic casino game written in React.",
    modalContent: (
      <>
        <p>
          Jacks or Better is the most common casino game variation of video
          poker based on five-card draw poker.
          <br />
          It&apos;s a mix of a slots machine and poker.
          <br />
          I embarked on creating this game as my first project utilizing React
          JS, leveraging Object-Oriented Programming principles for a structured
          and scalable codebase
          <br />
          Styling made with CSS.
        </p>
        <p className="modal__subtitle">Features/used technologies:</p>
        <ul className="modal__list">
          <li>Main technology - React</li>
          <li>Styling made in CSS</li>
          <li>Designed using Figma</li>
        </ul>
      </>
    ),
  },
];
