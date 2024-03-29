import React from 'react';
import YouTube from 'react-youtube';


const YouTubeVideo = ({ videoId }:{videoId:string}) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};


export default YouTubeVideo;