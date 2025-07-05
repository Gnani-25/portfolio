# Rasmal Gnaneshwar - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional journey as a Computer Science Engineering student and aspiring software developer.

## 🌟 Live Demo

**Website**: [https://gnani-25.github.io/portfolio](https://gnani-25.github.io/portfolio)

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and cyan accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful transitions and hover effects
- **Contact Form**: Functional contact form with EmailJS integration
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Portfolio Showcase**: Detailed project presentations with technologies and highlights
- **Skills Visualization**: Interactive skill bars and progress indicators
- **Professional Sections**: About, Skills, Services, Portfolio, and Contact sections

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Modern icon library

### Backend & Services
- **EmailJS** - Contact form email service
- **React Router** - Client-side routing

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **GitHub Pages** - Deployment platform

## 📁 Project Structure

```
portfolioo/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── About.tsx      # About section
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Navigation.tsx # Navigation bar
│   │   ├── Portfolio.tsx  # Portfolio projects
│   │   ├── Services.tsx   # Services offered
│   │   └── Skills.tsx     # Skills showcase
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main app component
│   └── main.tsx           # App entry point
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
└── tailwind.config.ts     # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gnani-25/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the configuration in `src/components/Contact.tsx`:
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

## 🎨 Customization

### Colors and Theme
- Primary colors are defined in `tailwind.config.ts`
- Main accent color: Cyan (#06b6d4)
- Secondary accent: Blue (#3b82f6)

### Content Updates
- **Personal Info**: Update `src/components/Hero.tsx` and `src/components/About.tsx`
- **Projects**: Modify `src/components/Portfolio.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Services**: Update `src/components/Services.tsx`
- **Contact Info**: Change `src/components/Contact.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### GitHub Pages (Current)
```bash
npm run deploy
```

### Other Platforms
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **Firebase**: Use Firebase Hosting

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast initial load with lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

**Rasmal Gnaneshwar**
- B.Tech CSE Student at Vardhaman College of Engineering (CGPA: 9.65)
- Research Intern at IIT Ropar
- Passionate about programming and software development
- Skills: Python, Machine Learning, MERN Stack, TypeScript, C++

## 📞 Contact

- **Email**: rasmalgnaneshwar001@gmail.com
- **LinkedIn**: [gnaneshwar-r-a9aa5228b](https://linkedin.com/in/gnaneshwar-r-a9aa5228b)
- **GitHub**: [Gnani-25](https://github.com/Gnani-25)
- **Phone**: +91 9347560270

---

⭐ **Star this repository if you found it helpful!**
