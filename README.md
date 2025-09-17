# Phil Ledoit - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Responsive Design**: Mobile-first approach with perfect mobile experience
- **Type Safety**: Full TypeScript support for better development experience
- **Fast Development**: Vite for lightning-fast HMR and builds
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Accessibility**: ARIA labels, keyboard navigation, and focus states

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Install Node.js** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use a package manager like Chocolatey: `choco install nodejs`

2. **Clone and install dependencies**:
   ```bash
   git clone https://github.com/ledoit/portfolio-vite.git
   cd portfolio-vite
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio-vite/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      }
    }
  }
}
```

### Content
- **Personal Info**: Update `src/components/Hero.tsx`
- **About Section**: Modify `src/components/About.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Projects**: Update `src/components/Projects.tsx`
- **Contact**: Modify `src/components/Contact.tsx`

### Styling
- Global styles: `src/index.css`
- Component styles: Use Tailwind classes in components
- Custom components: Add to `src/components/`

## 🚀 Deployment

### GitHub Pages
1. Update `vite.config.ts` base path:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy dist/ folder to GitHub Pages
   ```

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and deploy

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Images**: Optimized and lazy-loaded
- **Fonts**: Preloaded for better performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: phil@menhir-holdings.com
- **GitHub**: [@ledoit](https://github.com/ledoit)
- **LinkedIn**: [Phil Ledoit](https://linkedin.com/in/philledoit)
- **Website**: [ledoit.dev](https://ledoit.dev)

---

Built with ❤️ by Phil Ledoit
