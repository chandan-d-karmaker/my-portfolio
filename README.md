# My Portfolio

Personal portfolio website built with React and Vite, showcasing projects, skills, and contact information.

> 🚧 **Status: Work in Progress** — This project is under active development. Content, sections, and design may change frequently.

**Live Demo:** [amick.pages.dev](https://amick.pages.dev/)

---

## Tech Stack

- **Framework/Bundler:** [Vite](https://vitejs.dev/) 7 + [React](https://react.dev/) 19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4, [DaisyUI](https://daisyui.com/), [MUI (Material UI)](https://mui.com/), Emotion
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Contact Form:** [EmailJS](https://www.emailjs.com/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Smooth Scrolling:** react-scroll
- **Icons:** react-icons
- **Linting:** ESLint

## Getting Started

### Prerequisites

- Node.js (LTS recommended)

### Installation

```bash
git clone https://github.com/chandan-d-karmaker/my-portfolio.git
cd my-portfolio
npm install
```

### Environment Variables

If the contact form uses EmailJS, create a `.env` file in the root of the project:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Update the variable names above to match your actual EmailJS configuration.

### Run the development server

```bash
npm run dev
```

Vite will start a local dev server (by default at `http://localhost:5173`).

### Other scripts

```bash
npm run build     # Build for production
npm run preview   # Preview the production build locally
npm run lint       # Run ESLint
```

## Project Structure

```
├── assets
│   ├── project-thumnails
│   │   ├── chandan-d-karmaker.github.io_github-issue-tracker_.png
│   │   ├── digitools.png
│   │   ├── english-janala.png
│   │   ├── influencer.png
│   │   ├── job-application.png
│   │   ├── payoo.png
│   │   └── tea-house.png
│   ├── Bitcoin.svg
│   ├── Calendar.svg
│   ├── Card.svg
│   ├── Discord.svg
│   ├── Dots.svg
│   ├── Dribble.svg
│   ├── Ellipse.svg
│   ├── Email.svg
│   ├── Figma.svg
│   ├── Github.svg
│   ├── Landmark.svg
│   ├── Linkedin.svg
│   ├── LogoBox.svg
│   ├── Play.svg
│   ├── Rectangle.png
│   ├── Telegram.svg
│   ├── Twitter.svg
│   ├── about-me.png
│   ├── bg-gray.jpeg
│   ├── burger-closed.png
│   ├── burger-open.png
│   ├── chandan_resume.pdf
│   ├── ck.svg
│   ├── hero-ck.png
│   ├── heroImg.png
│   ├── nextjs.png
│   ├── react.svg
│   ├── rectangle-lg.png
│   ├── rectangle-sm.png
│   └── tailwind.png
├── components
│   ├── Projects
│   │   ├── ProjectCard.jsx
│   │   └── Projects.jsx
│   ├── AbooutMe.jsx
│   ├── ContactMe.jsx
│   ├── DownloadResume.jsx
│   ├── MagneticButton.jsx
│   ├── ProgressScrollBar.jsx
│   ├── ScrollToTop.jsx
│   ├── Sidebar.jsx
│   ├── TopNavBar.jsx
│   ├── TypingAnimation.jsx
│   ├── dots.jsx
│   ├── footer.jsx
│   ├── hero.jsx
│   └── skills.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Roadmap / Notes

This portfolio is actively being built and refined. Planned/in-progress areas include:

- [ ] Polishing individual sections (About, Projects, Skills, Contact)
- [ ] Adding/updating project showcases
- [ ] Responsive design improvements
- [ ] Performance and accessibility tweaks
- [ ] Animations and micro-interactions

Feel free to open an issue if you spot a bug or have a suggestion.

## Deployment

This project is deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Author

**Chandan D. Karmaker** — [GitHub](https://github.com/chandan-d-karmaker)

## License

This project is licensed under the [MIT License](LICENSE).
