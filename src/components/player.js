import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';

function VideoPlayer() {
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null);

  const handleStartRecording = () => {
    debugger
    // Start recording logic

    // Get the media stream from the video element
    const videoStream = videoRef.current.srcObject;
    
    // Create a new MediaRecorder instance
    mediaRecorderRef.current = new MediaRecorder(videoStream, { mimeType: 'video/webm' });

    // Attach event listeners
    mediaRecorderRef.current.addEventListener('dataavailable', handleRecordDataAvailable);
    mediaRecorderRef.current.addEventListener('stop', handleRecordStop);

    // Start the media recorder
    mediaRecorderRef.current.start();
  };

  const handleStopRecording = () => {
    // Stop recording logic

    // Stop the media recorder
    mediaRecorderRef.current?.stop();
  };

  const handleRecordDataAvailable = (event) => {
    console.log('dataavailable EventListener');
    console.log(event);
    setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
  };

  const handleRecordStop = () => {
    console.log('stop eventlistener');
    const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });

    const videoURL = URL.createObjectURL(recordedBlob);

    // Download the recorded video
    const a = document.createElement('a');
    a.href = videoURL;
    a.download = 'recorded_video.webm';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Reset the recorded chunks
    setRecordedChunks([]);
  };

  const videoRef = useRef(null);

  return (
    <div>
      {/* VideoPlayer UI */}
      <video ref={videoRef} controls />

      <Button onClick={handleStartRecording}>Start Recording</Button>
      <Button onClick={handleStopRecording}>Stop Recording</Button>
    </div>
  );
}

export default VideoPlayer;

















// import React from 'react';
// import { Player } from 'video-react';
// import name from "./video.mp4"

// export default function Video() {
//   return (
//     <Player
//       autoplay
//       playsInline
//     //   poster="/assets/poster.png"
//       src={name}
//     />
//   );
// };