import styles from "../css-modules/BasePage.module.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import { Sub } from "@/types/Sub";

export default function PageFullCardBase({
  video = "",
  text = "",
  texttr = "",
  onExit,
  time,
  setTime,
  subs,
}: {
  video?: string;
  text?: string;
  texttr?: string;
  onExit: () => void;
  time?: number;
  setTime?: (a: number) => void;
  subs?: Array<Sub>;
}) {
  function getSubtitlesForSecond(currentTime: number): Sub[]|undefined {
    return subs?.filter((subtitle) => {
      return currentTime >= subtitle. && currentTime <= subtitle.endTime;
    });
  }
  }
  return (
    <div className={styles.open_Card}>
      <div className={styles.inner_open_Card}>
        <div className={styles.Card_open_exit}>
          <IconButton onClick={onExit} className={styles.Card_exit}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </div>

        {setTime != undefined && time != undefined && (
          <div className={styles.baseline}>
            <video
              src="/video.mp4"
              width="80%"
              controls={true}
              onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
            ></video>
            <p>{time}</p>
            <
          </div>
        )}
      </div>
    </div>
  );
}
