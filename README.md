# Tejas Pocchi | Portfolio

A modern, responsive portfolio website to showcase projects, experience, and skills. Built with React, Vite, and Tailwind CSS.

## 🚀 Features
- Interactive and visually appealing UI
- Project and experience showcase
- Responsive design for all devices
- Social media integration
- Technology stack highlights
- Testimonials section

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Icons/Assets:** Custom SVGs, images in `/public` and `/src/assets`
- **State Management:** React hooks

## 📁 Project Structure
```
├── public/           # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/       # Images and icons
│   ├── components/   # React components
│   ├── constants/    # Data for experience, projects, etc.
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── package.json      # Project metadata and scripts
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md         # Project documentation
```

## 🧑‍💻 Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/tejaspocchi-bit/Portfolio.git
   cd Portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

## 🏗️ Build for Production
```bash
npm run build
# or
yarn build
```
The output will be in the `dist/` folder, ready to deploy.

## 🌐 Deployment
- Deploy the contents of the `dist/` folder to your preferred static hosting (Vercel, Netlify, GitHub Pages, etc.).
- Make sure to include the `public/` assets if your host requires it.

## 📄 License
This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio!

## Contributing
If you find any issues, have suggestions, or want to contribute to the project, feel free to open an issue or submit a pull request. Your contributions are highly appreciated!
