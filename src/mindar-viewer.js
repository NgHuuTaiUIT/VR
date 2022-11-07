import React, { useEffect, useRef } from "react";

export default () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    sceneEl.style.width = "100vh";
    sceneEl.style.height = "100vh";
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      
      arSystem.start(); // start AR
    });
    return () => {
      arSystem.stop();
    };
  }, []);

  return (
    <>
      {/* <button onClick={() => sceneRef.current.switchTarget(0)}>Test</button> */}
      {/* <a-scene
        ref={sceneRef}
        mindar-image="imageTargetSrc: ./card.mind; maxTrack: 2; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;"
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"> */}

<a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/examples/image-tracking/assets/band-example/band.mind; maxTrack: 2" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
        {/* <a-assets>
	<img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.png" />
	<a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
      </a-assets> */}

        <a-assets>
          <a-asset-item
            id="bearModel"
            src="./assets/Ferrari-j50/scene.gltf"></a-asset-item>
          <a-asset-item
            id="raccoonModel"
            src="./assets/Coke/scene.gltf"></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        {/* <a-entity mindar-image-target="targetIndex: 0">
	<a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
	<a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
      </a-entity> */}
        <a-entity mindar-image-target="targetIndex: 1">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="1 1 1"
            src="#raccoonModel"
            animation-mixer></a-gltf-model>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 0">
          <a-gltf-model
            rotation="0 50 0 "
            position="0.5 0 0"
            scale="0.001 0.001 0.001"
            src="#bearModel"
            animation-mixer></a-gltf-model>
        </a-entity>
      </a-scene>
    </>
  );
};
