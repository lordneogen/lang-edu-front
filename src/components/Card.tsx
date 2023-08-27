import styles from '../css-modules/BasePage.module.css'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import DehazeIcon from '@mui/icons-material/Dehaze';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useEffect } from "react";


const actions = [
    { icon: <DeleteIcon />, name: 'Удалить' },
    { icon: <EditIcon />, name: 'Редактировать' },
];


export default function PageCardBase({ photo = "", text = "", share = true }: { photo?: string, text?: string, share?: boolean }) {

    useEffect(() => {
        if (share) {
            actions.push({ icon: <ShareIcon />, name: 'Поделиться' })
        }
    }, []);
    return (
        <Grid2>
            <div className={styles.Card}>
                <div className={styles.Card_crud}>
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ '& .MuiFab-primary': { width: 40, height: 40 }, position: 'absolute', right: "-1vw", bottom: "0vw" }}
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
                    <div className={styles.Card_photo}>

                    </div>
                )}
                <div className={styles.Card_name}>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </Grid2>
    )
}