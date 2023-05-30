import React, { useRef } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const video = videoRef.current;

    video.src = URL.createObjectURL(file);
    video.load();
  };

  const startCameraCapture = () => {
    const video = videoRef.current;

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  };

  const captureFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    // Send imageData to your Python script for processing
    // You can use libraries like Axios to make an HTTP request

    // Example code to send imageData using Axios:
    // axios.post('http://your-python-script-url', { imageData })
    //   .then((response) => {
    //     // Handle the response from Python
    //   })
    //   .catch((error) => {
    //     console.error('Error sending frame to Python:', error);
    //   });
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileInputChange} />
      <br />
      <button onClick={startCameraCapture}>Open Camera</button>
      <br />
      <video ref={videoRef} controls />
      <br />
      <button onClick={captureFrame}>Capture Frame</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default VideoComponent;
