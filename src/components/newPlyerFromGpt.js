// import React, { useState, useRef, useEffect } from 'react';
// import { Button } from '@mui/material';
// import css from './video.css'
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import VideocamIcon from '@mui/icons-material/Videocam';
// import RadioButtonCheckedSharpIcon from '@mui/icons-material/RadioButtonCheckedSharp';
// import StopCircleSharpIcon from '@mui/icons-material/StopCircleSharp';
// import { RecorsWebcanOptions, useRecordWebcam } from 'react-record-webcam'

// function VideoPlayer() {
//   const [videos, setVideos] = useState(['video.mp4', 'video2.mp4', 'video3.mp4', 'video3.mp4']);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const videoRef = useRef(null);
//   const cameraRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const [videoBasePath, setVideoBasePath] = useState('http://localhost:58166/');
//   const [recordedChunks, setRecordedChunks] = useState([]);

//   const mimeType = 'video/webm;codecs=h264';
//   const options = {
//     fileName: '',
//     fileType: 'mp4',
//     width: '1920',
//     height: '1080'
//   }
//   const recordWebcam = useRecordWebcam(options);
//   const getRecordingFileHooks = async () => {
//     const blob = await recordWebcam.getRecording();
//     console.log({ blob });
//   }

//   const handleVideoClick = (videoName) => {
//     console.log('handleVideoClick-----------------------------');
//     setSelectedVideo(videoName);
//     videoRef.current.src = videoBasePath + videoName;
//     videoRef.current.load();
//     console.log(videoRef.current);
//   };

//   const handlePlayClick = () => {
//     videoRef.current.play();
//     // cameraRef.current.play();
//   };

//   const handleCameraClick = async () => {
//     debugger
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     cameraRef.current.srcObject = stream;
//     cameraRef.current.play();
//     // if (MediaRecorder.isTypeSupported(mimeType)) {
//     //   const options = { mimeType };
//     //   const mediaRecorder = new MediaRecorder(stream, options);
//     //   mediaRecorderRef.current = mediaRecorder;
//     // } else {
//     //   const options = { mimeType: 'video/webm' };
//     //   const mediaRecorder = new MediaRecorder(stream, options);
//     //   mediaRecorderRef.current = mediaRecorder;
//     // }
//     mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=h264' });
//   };

//   const handleRecordClick = () => {
//     console.log('handleRecordClick');
//     console.log('mediaRecorderRef.current');
//     console.log(mediaRecorderRef.current);
//     console.log('selectedVideo');
//     console.log(selectedVideo);
//     if (!mediaRecorderRef.current || !selectedVideo) {
//       console.log('go to  return!!');
//       return;
//     }

//     videoRef.current.currentTime = 0;
//     videoRef.current.play();

//     // Reset the recorded chunks
//     setRecordedChunks([]);

//     mediaRecorderRef.current.start();

//     // Start recording the camera feed
//     const cameraStream = cameraRef.current.srcObject;
//     const cameraTrack = cameraStream.getVideoTracks()[0];
//     mediaRecorderRef.current.stream.addTrack(cameraTrack);
//   };

//   const handleStopRecordClick = () => {
//     console.log('handleStopRecordClick');
//     // mediaRecorderRef.current.mimeType = 'video/webm;codecs=h264';
//     if (!mediaRecorderRef.current || !selectedVideo) {
//       return;
//     }

//     mediaRecorderRef.current.stop();
//   };

//   mediaRecorderRef.current?.addEventListener('dataavailable', (event) => {
//     console.log('dataavailable EventListener');
//     console.log(event);
//     console.log(event.data);
//     // Add each chunk of recorded data to the state
//     setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
//   });

//   mediaRecorderRef.current?.addEventListener('stop', () => {
//     console.log('stop eventlistener');
//     // Create a new Blob from the recorded chunks
//     const recordedBlob = new Blob(recordedChunks, { type: 'video/webm;codecs=h264' });

//     // Create a URL for the recorded Blob
//     const videoURL = URL.createObjectURL(recordedBlob);

//     // Download the recorded video
//     const a = document.createElement('a');
//     a.href = videoURL;
//     a.download = 'recorded_video.webm';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);

//     // Reset the recorded chunks
//     setRecordedChunks([]);
//   });

//   return (
//     <>
//       <div>
//         <div>
//           <p>camera status: {recordWebcam.status}</p>
//           <button onClick={recordWebcam.open}>open webcam camera</button>
//           <button onClick={recordWebcam.close}>close webcam camera</button>
//           <button onClick={recordWebcam.start}>start record webcam camera</button>
//           <button onClick={recordWebcam.stop}>stop record webcam camera</button>
//           <button onClick={recordWebcam.retake}>retake webcam camera</button>
//           <button onClick={recordWebcam.download}>download record webcam camera</button>
//           <button onClick={getRecordingFileHooks}>get recording</button>
//           <video ref={recordWebcam.webcamRef} autoPlay muted />
//           <video ref={recordWebcam.previewRef} autoPlay muted />
//         </div>
//         <div className='videoButtonsDiv' >
//           {videos.map((video) => (
//             <button onClick={() => handleVideoClick(video)} className='videoButton'>{video}</button>
//           ))}
//         </div>
//         <Button onClick={() => { }} className='buttons' title='טען עוד' style={{ color: '#E48F9F' }}>
//           טען עוד
//         </Button>
//         <div className='divider'></div>
//       </div>

//       <div style={{ display: 'flex' }}>
//         <div style={{ flex: 1 }}>
//           {/* Video element */}
//           <video ref={videoRef} controls className='videoScreen' />
//         </div>
//         <div style={{ flex: 1 }}>
//           {/* Camera element */}
//           <video ref={cameraRef} className='videoScreen' />
//         </div>
//       </div>
//       <Button disabled={!selectedVideo} onClick={handlePlayClick} className='buttons'>
//         <PlayCircleOutlineIcon style={{ color: '#E48F9F' }} />
//       </Button>
//       <Button onClick={handleCameraClick} className='buttons'><VideocamIcon style={{ color: '#E48F9F' }} /></Button>
//       {/* <Button
//         disabled={!selectedVideo || !mediaRecorderRef.current}
//         onClick={handleRecordClick}
//       >
//         Start Recording
//       </Button> */}
//       <Button onClick={handleRecordClick} className='buttons'>
//         {/* disabled={!selectedVideo || !mediaRecorderRef.current?.stream} */}
//         <RadioButtonCheckedSharpIcon style={{ color: '#E48F9F' }} />
//       </Button>

//       <Button onClick={handleStopRecordClick} className='buttons'>
//         {/* disabled={!selectedVideo || !mediaRecorderRef.current?.stream} */}
//         <StopCircleSharpIcon style={{ color: '#E48F9F' }} />
//       </Button>
//       {/* <div style={{ display: 'flex' }}>
//         <video ref={videoRef} controls />
//         <video ref={cameraRef} width="320" height="240" controls />
//       </div> */}
//     </>
//   );
// }

// export default VideoPlayer;
import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import VideocamIcon from '@mui/icons-material/Videocam';
import RadioButtonCheckedSharpIcon from '@mui/icons-material/RadioButtonCheckedSharp';
import StopCircleSharpIcon from '@mui/icons-material/StopCircleSharp';

function VideoPlayer() {
  // ...

  const canvasRef = useRef(null);

  // ...

  const handleRecordClick = () => {
    // ...

    mediaRecorderRef.current.start();

    // Start capturing frames
    mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
      const recordedBlob = event.data;
      const videoURL = URL.createObjectURL(recordedBlob);

      // Create a new video element to load the recorded chunk
      const videoElement = document.createElement('video');
      videoElement.src = videoURL;

      // Capture a frame from the recorded video
      videoElement.addEventListener('loadeddata', () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        // Get the frame data as a data URL
        const frameData = canvas.toDataURL();

        // Log the details of the frame
        console.log('Frame Data:', frameData);

        // Send the frame data to the Python backend (example using fetch)
        fetch('http://8080', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ frameData }),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the Python backend if needed
            console.log('Response from Python:', data);
          })
          .catch((error) => {
            // Handle any errors
            console.error('Error:', error);
          });
      });

      // Clean up the video element
      videoElement.addEventListener('ended', () => {
        URL.revokeObjectURL(videoURL);
        videoElement.remove();
      });

      // Load the recorded chunk
      videoElement.load();
    });

    // ...
  };

  // ...

  return (
    <>
      {/* ... */}

      <div style={{ display: 'flex' }}>
        {/* ... */}
      </div>

      <Button onClick={handleRecordClick} className='buttons'>
        {/* ... */}
      </Button>

      <Button onClick={handleStopRecordClick} className='buttons'>
        {/* ... */}
      </Button>

      {/* ... */}
    </>
  );
}

export default VideoPlayer;