// components/VideoDownloader.js

import React from 'react';
import axios from 'axios';

function VideoDownloader() {
  const handleDownload = async () => {
    const videoUrl = '...'; // Replace with the TikTok video URL
    try {
      const response = await axios.post('/api/download', { url: videoUrl }, { responseType: 'blob' });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'tiktok_video.mp4');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download TikTok Video</button>
    </div>
  );
}

export default VideoDownloader;


