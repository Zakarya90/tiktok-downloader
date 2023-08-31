import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="TikTok Video Downloader" />
          <link rel="stylesheet" href="/styles/global.css" />
          <link rel="icon" href="/favicon.ico" />
          {/* Remove title from here */}
        </Head>
        <body>
          <header>
            <h1>TikTok Video Downloader</h1>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                {/* Add more navigation links */}
              </ul>
            </nav>
          </header>
          <Main />
          <footer>
            <p>&copy; {new Date().getFullYear()} TikTok Downloader</p>
          </footer>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
