import React, { useState } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "./App.css";
import MindARViewer from "./mindar-viewer";
import multiTarget from "./multi-target";
import "mind-ar/dist/mindar-image-three.prod.js";

function App() {
  const [started, setStarted] = useState(false);

  // useEffect(() => {
  //   const scanning = document.querySelector('.mindar-ui-overlay.mindar-ui-scanning')
  //   // started ? scanning.classList.add('hidden') : scanning.classList.remove('hidden')
  // }, [started]);

  const handleStart = () => {
    navigator.permissions
      .query({ name: "camera" })
      .then(permissionObj => {
        setStarted(true);
      })
      .catch(error => {
        alert("Please grant permission");
      });
    // checkDeniedPermissionAudio(() => setStarted(true))
  };

  return (
    <div
      className="App"
      style={{
        margin: "auto",
        // maxWidth: "60%",
        width: "100vw",
        height: "100vh",
        background: `linear-gradient(
          20deg,
          rgba(231, 171, 23, 1) 3%,
          rgba(211, 183, 44, 1) 60%,
          rgba(129, 175, 118, 1) 100%
        )`,
        position: "relative",
        overflow: "hidden",
        color: "white"
      }}>
      <h1>Demo</h1>

      <div>
        {/* {!started && <button onClick={() => {setStarted(true)}}>Start Image Tracking</button>}
	{started && <button onClick={() => {setStarted(false)}}>Stop Image Tracking</button>} */}

        {!started && (
          <button onClick={() => handleStart()}>Start</button>
        )}
        {started && (
          <button
            onClick={() => {
              setStarted(false);
            }}>
            Stop
          </button>
        )}
      </div>

      {started && (
        <div className="container">
          <MindARViewer />
          {/* <multiTarget/> */}
          {/* <video></video> */}
        </div>
      )}
    </div>
  );
}

export default App;
