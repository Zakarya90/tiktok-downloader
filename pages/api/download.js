import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.get(req.body.url, { responseType: 'blob' });

      // Create a Blob from the video data and send it as a response
      const blob = new Blob([response.data], { type: 'video/mp4' });
      res.setHeader('Content-Type', 'video/mp4');
      res.send(blob);
    } catch (error) {
      console.error('Error downloading video:', error);
      res.status(500).send('Error downloading video');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}

