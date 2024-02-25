import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";

function AudioBookPlayer({ userId, bookId, audioSrc }: any) {
  const [playerKey, setPlayerKey] = useState(Date.now());

  useEffect(() => {}, [userId, bookId]);

  // Écoutez les changements de position de la lecture audio
  const handleListen = (e: any) => {
    const currentTime = e.target.currentTime;
    /*   const docRef = doc(db, 'userAudioProgress', `${userId}_${bookId}`);
    updateDoc(docRef, { currentTime }).catch(console.error); */
  };

  // Lorsque l'utilisateur quitte le lecteur, sauvegardez la dernière position de lecture
  const handlePause = (e: any) => {
    handleListen(e);
  };

  // Réinitialiser le lecteur pour charger la dernière position sauvegardée
  const reloadPlayer = (savedTime: any) => {
    setPlayerKey(Date.now()); // Réinitialiser la clé pour forcer le rechargement du composant
    setTimeout(() => {
      const player = document.querySelector(".audio-player audio");
      if (player) {
        //player.currentTime = savedTime;
      }
    }, 100);
  };

  return (
    <div key={playerKey}>
      <AudioPlayer
        src={audioSrc}
        onListen={handleListen}
        onPause={handlePause}
      />
    </div>
  );
}

export default AudioBookPlayer;
