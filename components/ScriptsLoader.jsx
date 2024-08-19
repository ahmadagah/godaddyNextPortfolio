'use client'

import { useEffect } from 'react'

const ScriptsLoader = () => {
  useEffect(() => {
    const script1 =
      document.createElement('script')
    script1.src =
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
    script1.async = true
    document.body.appendChild(script1)

    const script2 =
      document.createElement('script')
    script2.src =
      'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js'
    script2.async = true
    document.body.appendChild(script2)

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
    }
  }, [])

  return null // No UI, just loading scripts
}

export default ScriptsLoader
