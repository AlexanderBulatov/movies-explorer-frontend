// import { useState, useEffect } from 'react'

// export default function useWindowSize() {
//   const [size, setSize] = useState({
//     width: 0,
//     height: 0,
//   })

//   useEffect(() => {
//     function onResize() {
//       setSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       })
//     }
//     onResize()

//     window.addEventListener('resize', onResize)
//     return () => window.removeEventListener('resize', onResize)
//   }, [])

//   return size
// }

// ---------------------------------------------
import { useState, useEffect } from 'react';

export default function useWindowSize() {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  // =================================================================
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    let timeout;
    function handleWindowResize() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setWindowSize(getWindowSize());
      }, 1000);
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return windowSize;
}
