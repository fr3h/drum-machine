import React, { useState, useEffect, useRef, useCallback  } from 'react';

function DrumPad({ id, clip, description, playSound }) {
  const [isActive, setActive] = useState(false);
  const audioRef = useRef(null);

  const playClip = useCallback(() => {
    audioRef.current.play();
    setActive(true);
    playSound(description);

    setTimeout(() => {
      setActive(false);
    }, 200); 
  }, [description, playSound]); 

  const handleKeyPress = useCallback((event) => {
    if (event.key.toUpperCase() === id) {
      playClip();
    }
  }, [id, playClip]);  

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]); 

  return (
    <div className={`drum-pad ${isActive ? 'active' : ''}`} id={`${id}-pad`} onClick={playClip}>
      {id}
      <audio ref={audioRef} className="clip" id={id} src={clip}></audio>
    </div>
  );
}

export default DrumPad;