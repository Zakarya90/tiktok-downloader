import React, { useState } from 'react';
import { DefaultSeo } from 'next-seo';
import '../styles/global.css';

// Create a global context for managing theme
const ThemeContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <DefaultSeo
          title="TikTok Downloader"
          description="Download TikTok videos easily."
          // Add more SEO settings as needed
        />
        <div className="sidebar">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              {/* Add more navigation links */}
            </ul>
          </nav>
        </div>
        <div className="content">
          <header>
            <h1>TikTok Video Downloader</h1>
          </header>
          <main>
            <Component {...pageProps} />
          </main>
          <footer>
            <p>&copy; {new Date().getFullYear()} TikTok Downloader</p>
          </footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;

