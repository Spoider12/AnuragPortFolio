<h1 align="center">Anurag Gautam — Portfolio</h1>

<p align="center">
  Personal portfolio of a Full-Stack (MERN) Developer, built with React.
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/anurag-gautam-394463279/">LinkedIn</a> ·
  <a href="https://github.com/Spoider12">GitHub</a> ·
  <a href="mailto:gautamanurag411@gmail.com">Email</a>
</p>

<div align="center">
  <img alt="Portfolio preview" src="./Images/readme-img1.png" />
</div>

<br/>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" />
</p>

## About

I'm a full-stack developer who has built and deployed three production MERN applications, including an AI-powered resume analysis platform using the Gemini API. I work with REST APIs, real-time systems (Socket.io), JWT authentication and cloud deployment. I graduated with a B.Tech in Computer Science (AI) in June 2026 and I'm looking for an SDE / Full-Stack Developer role.

This repository contains the source code of my portfolio website.

## Sections

- **Home** — introduction with an animated typewriter headline and particle background
- **About** — background, tech stack, tools and a GitHub contribution calendar
- **Projects** — featured projects with GitHub and live-demo links
- **Resume** — in-page PDF viewer with a download option

## Featured Projects

| Project | Stack | Code | Live |
|---|---|---|---|
| AI Resume Analyzer & Interview Prep Platform | React.js, Node.js, Express.js, MongoDB, Gemini API | [GitHub](https://github.com/Spoider12/AI-Interview) | [Demo](https://ai-resume-analysis-3ldp.onrender.com) |
| Chatify — Real-Time Chat Application | React.js, Node.js, Express.js, MongoDB, Socket.io, Cloudinary | [GitHub](https://github.com/Spoider12/Chatify-Chatting-) | [Demo](https://chatify-chatting.vercel.app/) |

## Tech Stack

**Languages:** Java, JavaScript
**Frontend:** React.js, TypeScript, Tailwind CSS, Bootstrap, HTML, CSS
**Backend:** Node.js, Express.js, REST APIs, Socket.io
**Databases:** MongoDB, MySQL, PostgreSQL
**Tools & Cloud:** Git, GitHub, VS Code, Postman, Vercel, Render, Cloudinary, JWT

## Built With

- [React](https://reactjs.org/) 17 and [React Router](https://reactrouter.com/) 6
- [React Bootstrap](https://react-bootstrap.github.io/) / Bootstrap 5
- [react-tsparticles](https://github.com/matteobruni/tsparticles) for the particle background
- [typewriter-effect](https://github.com/tameemsafi/typewriterjs) for the animated headline
- [react-github-calendar](https://github.com/grubersjoe/react-github-calendar) for the contribution graph
- [react-pdf](https://github.com/wojtekmaj/react-pdf) for the resume viewer
- [react-icons](https://react-icons.github.io/react-icons/) and [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended) and npm

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/Spoider12/AnuragPortFolio.git
cd AnuragPortFolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

The optimized build is generated in the `build/` folder and can be deployed to Vercel, Netlify or any static host.

## Project Structure

```
AnuragPortFolio/
├── public/                 # Static files (index.html, favicon, manifest)
├── Images/                 # README images
└── src/
    ├── components/
    │   ├── About/          # About page, tech stack, tools, GitHub calendar
    │   ├── Home/           # Landing section and typewriter text
    │   ├── Projects/       # Project cards and project list
    │   ├── Resume/         # Resume PDF viewer
    │   ├── Navbar.js
    │   ├── Footer.js
    │   ├── Particle.js
    │   ├── Pre.js          # Preloader
    │   └── ScrollToTop.js
    ├── App.js
    └── index.js
```

## Customizing

- **Projects:** edit `src/components/Projects/Projects.js` (title, description, `ghLink`, `demoLink`)
- **Skills:** edit `Techstack.js` and `Toolstack.js` in `src/components/About/`
- **GitHub calendar:** change the `username` in `src/components/About/Github.js`
- **Social links:** edit `src/components/Footer.js`

## Contact

- **Email:** [gautamanurag411@gmail.com](mailto:gautamanurag411@gmail.com)
- **LinkedIn:** [anurag-gautam-394463279](https://www.linkedin.com/in/anurag-gautam-394463279/)
- **GitHub:** [Spoider12](https://github.com/Spoider12)

## Acknowledgements

This portfolio is based on the open-source template [Soumyajit4419/Portfolio](https://github.com/soumyajit4419/Portfolio). Thanks to the original author for the starting point.
