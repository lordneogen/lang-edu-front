import styles from "../css-modules/BasePage.module.css";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import PageFullCardBase from "./FullCard";
import { Sub } from "@/types/Sub";
import { CardProps } from "@/types/CardProps";
import useToggle from "@/functions/toggleBool";

const actions = [
  { icon: <DeleteIcon />, name: "Удалить" },
  { icon: <EditIcon />, name: "Редактировать" },
];

export default function PageCardBase({
  photo = "",
  name,
  text,
  texttr,
  setfull = false,
  subs,
  time = 0,
}: CardProps) {
  const [full_size, setFull_size] = useToggle(false);
  const [time_state, setTime] = useState(time);

  return (
    <div>
      <Grid2>
        <div className={styles.Card}>
          <div className={styles.Card_crud}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{
                "& .MuiFab-primary": { width: 40, height: 40 },
                position: "absolute",
                right: "-1vw",
                bottom: "0vw",
              }}
              icon={<DehazeIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </div>
          {photo != "" && (
            <div className={styles.Card_photo} onClick={setFull_size}></div>
          )}

          {name != undefined && (
            <div className={styles.Card_name} onClick={setFull_size}>
              <p>{name}</p>
            </div>
          )}

          {texttr != undefined && (
            <div className={styles.Card_name} onClick={setFull_size}>
              <p>{texttr}</p>
            </div>
          )}
        </div>
      </Grid2>
      <div>
        {full_size && setfull && (
          <PageFullCardBase
            name={name}
            onExit={setFull_size}
            time={time_state}
            setTime={setTime}
            subs={subs}
            text={text}
          ></PageFullCardBase>
        )}
      </div>
    </div>
  );
}
