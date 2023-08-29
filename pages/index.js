import { useState } from 'react';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDownload = async () => {
    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoUrl }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Video downloaded successfully!');
      } else {
        setMessage('An error occurred while downloading the video.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while processing your request.');
    }
  };

  return (
    <div>
      <h1>TikTok Video Downloader</h1>
      <input
        type="text"
        placeholder="Enter TikTok video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
      <p>{message}</p>
    </div>
  );
}

