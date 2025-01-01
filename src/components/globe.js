'use client';  // Make sure this runs on the client side

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';  // Import OrbitControls correctly

const Globe = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const width = globeRef.current.clientWidth;
    const height = globeRef.current.clientHeight;

    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    globeRef.current.appendChild(renderer.domElement);

    // Add basic ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);  // Soft white light
    scene.add(ambientLight);

    // Add a directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Create the globe (a sphere)
    const geometry = new THREE.SphereGeometry(5, 32, 32);

    // Use a local path or working external URL for the texture
    const texture = new THREE.TextureLoader().load(
      '/textures/earth.jpg',  // Local path from the public folder
      () => {
        console.log('Texture loaded successfully');
      },
      undefined,
      (error) => {
        console.log('Error loading texture:', error);
      }
    );

    // Apply texture to material
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Position the camera so the globe is visible
    camera.position.z = 15;

    // Add OrbitControls for interactivity (mouse interaction)
    const controls = new OrbitControls(camera, renderer.domElement);  // Set up OrbitControls

    // Optional: Adjust controls settings
    controls.enableDamping = true;  // Smoothness of the rotation
    controls.dampingFactor = 0.25;  // How fast the movement stops
    controls.screenSpacePanning = false;  // Prevents panning up/down
    controls.maxPolarAngle = Math.PI / 2;  // Prevents rotation beyond the poles (no upside down)

    // Animation function to rotate the globe (optional)
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();  // Update the controls on each frame
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={globeRef}
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'lightblue',  // Debug: Make the container visible
      }}
    />
  );
};

export default Globe;
