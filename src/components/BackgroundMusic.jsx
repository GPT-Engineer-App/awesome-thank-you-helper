import React, { useState } from 'react';
import { Howl, Howler } from 'react-howler';
import { IconButton } from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Howl
        src="/path/to/your/music/file.mp3"
        playing={isPlaying}
        loop={true}
        volume={0.5}
      />
      <IconButton
        icon={isPlaying ? <FaPause /> : <FaPlay />}
        onClick={togglePlayPause}
        aria-label="Play/Pause Music"
        position="fixed"
        bottom="20px"
        right="20px"
        colorScheme="teal"
      />
    </div>
  );
};

export default BackgroundMusic;