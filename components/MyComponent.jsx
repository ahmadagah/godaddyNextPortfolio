'use client'

import React, {
  useEffect,
  useRef,
  useState,
} from 'react'
import FOG from 'vanta/dist/vanta.fog.min'

const MyComponent = () => {
  const [vantaEffect, setVantaEffect] =
    useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script =
          document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = () =>
          reject(new Error('Script load error'))
        document.head.appendChild(script)
      })
    }

    // Check if THREE.js is already loaded
    if (!window.THREE) {
      loadScript(
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
      )
        .then(() => {
          // Initialize Vanta effect once THREE.js is loaded
          if (!vantaEffect) {
            setVantaEffect(
              FOG({
                el: myRef.current,
                THREE: window.THREE, // Pass the globally loaded THREE to Vanta
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                highlightColor: '#000000',
                midtoneColor: '#00ff99',
                lowlightColor: '#000000',
                baseColor: '#000000',
                blurFactor: 0.23,
                speed: 1.8,
                zoom: 3.0,
              })
            )
          }
        })
        .catch(console.error)
    } else {
      // If THREE.js is already loaded
      if (!vantaEffect) {
        setVantaEffect(
          FOG({
            el: myRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: '#000000',
            midtoneColor: '#00ff99',
            lowlightColor: '#000000',
            baseColor: '#000000',
            blurFactor: 0.23,
            speed: 1.8,
            zoom: 3.0,
          })
        )
      }
    }

    // Cleanup Vanta effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={myRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1, // Ensure it's behind the content
      }}
    ></div>
  )
}

export default MyComponent
