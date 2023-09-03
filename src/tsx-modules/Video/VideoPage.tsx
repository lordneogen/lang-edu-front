"use client";

import { Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TextField from "@mui/material/TextField";
import styles from "../../css-modules/BasePage.module.css";
import VideoPageCard from "./VideoPageCard";
import { Container, InputAdornment } from "@mui/material";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import InputForPage from "@/components/Input";
import PageCardBase from "@/components/Card";
import { subtest } from "../../../datasub";

export default function VideoPage() {
  const [loading, setLoading] = useState(false);
  const [full_size, setFull_size] = useState(false);

  var tx =
    "Как вы видели выше, мы создали класс специально для карточки без изображения, поскольку нам не нужен display: flex на родительском элементе. Вопрос в том, можем ли мы это сделать в CSS, без второго класса? Ну, вот где CSS :has приходит на помощь. Это может помочь нам проверить, есть ли у элемента .card изображение .card__image или нет.Например, мы можем проверить, есть ли у карточки изображение, и если да, то нам нужно применить flexbox.";
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <div>
      <InputForPage
        showAddButton={true}
        showFileButton={true}
        showFileInput={true}
      ></InputForPage>
      {!loading && (
        <div className={styles.loading_icon}>
          <CircularProgress />
        </div>
      )}
      <div
        className={`${styles.externalCardContainer} ${
          !loading ? styles.loading_bool : null
        }`}
      >
        <Grid2 justifyContent="center" container spacing={2}>
          <PageCardBase
            name={"Название"}
            text={tx}
            setfull={true}
            subs={subtest}
          ></PageCardBase>
        </Grid2>
      </div>
      <div className={`${styles.pag} ${!loading ? styles.loading_bool : null}`}>
        <Pagination count={10} color="secondary" />
      </div>
    </div>
  );
}
