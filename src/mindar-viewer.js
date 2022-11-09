import React, { useEffect, useRef } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const sceneRef = useRef(null);
  
  document.querySelector('.mindar-ui-scanning')?.classList.add('hidden')

  useEffect(() => {
    const sceneEl = sceneRef.current;
    sceneEl.style.margin = "auto";
    sceneEl.style.width = "90%";
    sceneEl.style.height = "100vh";
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
    });
    return () => {
      document.querySelectorAll('.mindar-ui-overlay').forEach(item => item.remove())
      arSystem.stop();
    };
  }, []);

  return (
    <>
      <a-scene
        ref={sceneRef}
        mindar-image="imageTargetSrc: ./computer.mind; maxTrack: 2"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false">
        <a-assets>
          <a-asset-item
            id="bearModel"
            src="./assets/Computer/scene.gltf"></a-asset-item>
          <a-asset-item
            id="raccoonModel"
            src="./assets/Coke/scene.gltf"></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

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
            rotation="0 0 0 "
            position="0 -0.5 0"
            scale="0.3 0.3 0.3"
            src="#bearModel"
            animation-mixer></a-gltf-model>
        </a-entity>
      </a-scene>
    </>
  );
};
