import styles from "../css-modules/BasePage.module.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import { Sub } from "@/types/Sub";
import { OpenCardProps } from "@/types/OpenCardProps";
import TextParse from "./TextParse";
import { Underdog } from "next/font/google";

export default function PageFullCardBase({
  name,
  video,
  text,
  onExit,
  time,
  setTime,
  subs,
}: OpenCardProps) {
  function getSubtitlesForSecond(currentTime: number): Sub[] {
    if (subs != undefined) {
      return subs?.filter((subtitle) => {
        return (
          currentTime >= subtitle.startTime && currentTime <= subtitle.endTime
        );
      });
    } else {
      return [];
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

        <div className={styles.baseline}>
          <h4>{name}</h4>
        </div>

        {setTime != undefined && time != undefined && video != undefined && (
          <div>
            <div className={styles.baseline}>
              <video
                src={video}
                width="80%"
                controls={true}
                onTimeUpdate={(event) =>
                  setTime(event.currentTarget.currentTime)
                }
              ></video>
            </div>
            <div className={styles.baseline}>
              {getSubtitlesForSecond(time).map((subtitle, index) => (
                <TextParse key={index} text={subtitle.text}></TextParse>
              ))}
            </div>
          </div>
        )}
        {text != undefined && (
          <div className={styles.baseline}>
            <TextParse text={text}></TextParse>
          </div>
        )}
      </div>
    </div>
  );
}
