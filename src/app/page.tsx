// Установите нужные библиотеки с помощью npm или yarn
// npm install srt-parser react-player
// "use client"

import React from 'react';
import ReactPlayer from 'react-player';
// import { DefaultPlayer as Video } from 'react-html5video';
// import introVideo from './video/video.mp4'
import 'react-html5video/dist/styles.css';
// import videoSource from './video.mp4';
import Grid from "@mui/material/Unstable_Grid2";
import HomePage from '@/tsx-modules/HomePage';

const SubtitlePlayer = ({
  children,
}: {
  children: React.ReactNode
}) => {

  // type Subs = {
  //   id: String,
  //   startTime: String,
  //   startSeconds: number,
  //   endTime: String,
  //   endSeconds: number,
  //   text: String
  // }
  // return (
  //   <div>
  //     <Video autoPlay loop muted
  //       controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
  //       // poster="http://sourceposter.jpg"
  //       onCanPlayThrough={() => {
  //         // Do stuff
  //       }}>
  //       <source src={introVideo} type="video/mp4" />
  //       {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
  //     </Video>
  //   </div>
  // );

  return (
    <div>
    </div>
  )


};

export default SubtitlePlayer;
