'use client';

import { useEffect } from 'react';

const ScriptsLoader = () => {
  useEffect(() => {
    // Function to create and append a script
    const loadScript = (src) => {
      const script =
        document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    // Load the required scripts
    const script1 = loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
    );
    const script2 = loadScript(
      'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js'
    );

    // Cleanup function to remove the scripts
    return () => {
      if (script1)
        document.body.removeChild(script1);
      if (script2)
        document.body.removeChild(script2);
    };
  }, []);

  return null; // No UI, just loading scripts
};

export default ScriptsLoader;
