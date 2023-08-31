// pages/index.js

import React, { useState } from 'react';
import axios from 'axios';
import VideoDownloader from '../components/VideoDownloader';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');

  const handleDownload = async () => {
    try {
      const response = await axios.post('/api/download', { url: videoUrl }, { responseType: 'blob' });
      
      const blob = new Blob([response.data], { type: 'video/mp4' });
      const url = URL.createObjectURL(blob);
      setDownloadLink(url);
    } catch (error) {
      console.error('Error downloading video:', error);
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
      {downloadLink && (
        <div>
          <a href={downloadLink} download="tiktok_video.mp4">
            Click here to download the video
          </a>
        </div>
      )}
      <VideoDownloader />
    </div>
  );
}
