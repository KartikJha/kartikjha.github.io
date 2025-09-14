# Kartik Jha - Portfolio Website

A minimalist, responsive portfolio website built with React and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Subtle animations and transitions
- **Modern UI** - Clean, minimalist design with professional aesthetics
- **SEO Optimized** - Structured data and meta tags for better search visibility
- **Accessibility** - WCAG compliant with proper focus states and keyboard navigation
- **Performance** - Optimized for fast loading times

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Scripts** - Build tool and development server

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KartikJha/kartikjha.github.io.git
   cd kartikjha.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages
- `npm run lint` - Runs ESLint to check code quality
- `npm run format` - Formats code with Prettier

### Local Development Server

The development server includes:
- **Hot Reload** - Automatic refresh on file changes
- **Error Overlay** - Detailed error messages in the browser
- **Source Maps** - Easy debugging with original source code
- **Fast Refresh** - Preserves component state during edits

### Debugging

1. **Chrome DevTools**: Use F12 or right-click → Inspect Element
2. **React DevTools**: Install the browser extension for React debugging
3. **Console Logging**: Check browser console for any errors or warnings
4. **Network Tab**: Monitor API calls and asset loading

## 🎨 Customization

### Personal Information

Update the following in `src/Portfolio.js`:

1. **Contact Information**:
   ```javascript
   // Update email and social links
   href="mailto:your.email@example.com"
   href="https://linkedin.com/in/your-profile"
   href="https://toptal.com/resume/your-profile"
   ```

2. **Projects**:
   ```javascript
   const projects = [
     {
       title: "Your Project Name",
       description: "Project description",
       tech: ["React", "Node.js", "MongoDB"],
       liveLink: "https://your-demo.com",
       codeLink: "https://github.com/yourusername/project",
       npmLink: "https://npmjs.com/package/your-package" // optional
     }
   ];
   ```

3. **Skills and Content**:
   - Update the skills array in the About section
   - Modify hero text and description
   - Add your actual resume file to `/public/Kartik_Jha_Resume.pdf`

### Styling

The project uses Tailwind CSS for styling. Key customizations:

1. **Colors**: Modify the color scheme in `tailwind.config.js`
2. **Typography**: Update fonts in `public/index.html`
3. **Layout**: Adjust spacing and layout in component classes
4. **Animations**: Custom animations are defined in `src/index.css`

### Adding New Sections

To add a new section:

1. Add the section to the navigation array
2. Create the section component with appropriate `id`
3. Update the `scrollToSection` logic
4. Add any necessary styling

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### GitHub Pages

1. Update `package.json` homepage field:
   ```json
   "homepage": "https://yourusername.github.io"
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

### Other Platforms

- **Netlify**: Connect your GitHub repo and deploy automatically
- **Vercel**: Import your project and deploy with zero configuration
- **Custom Server**: Use `npm run build` and serve the `build` folder

## 📊 SEO & Analytics

The portfolio includes:
- **Meta tags** for social sharing
- **Structured data** for search engines
- **Open Graph** tags for social media
- **Sitemap** friendly structure

To add Google Analytics:
1. Uncomment the GA code in `public/index.html`
2. Replace `GA_MEASUREMENT_ID` with your tracking ID

## 🔍 Performance

Optimizations included:
- **Code splitting** with React.lazy (can be added)
- **Image optimization** with proper formats and sizing
- **Minification** in production build
- **Caching** strategies for static assets

## 🧪 Testing

Run tests with:
```bash
npm test
```

For component testing, consider adding:
- **Jest** for unit tests
- **React Testing Library** for component tests
- **Cypress** for end-to-end tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add some feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **LinkedIn**: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- **GitHub**: [github.com/KartikJha](https://github.com/KartikJha)

## 🙏 Acknowledgments

- **React** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons
- **GitHub Pages** for free hosting

---

Made with ❤️ by Kartik Jha
