import styles from '../css-modules/VideoPage.module.css'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import DehazeIcon from '@mui/icons-material/Dehaze';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const actions = [
    { icon: <DeleteIcon />, name: 'Удалить' },
    { icon: <EditIcon />, name: 'Редактировать' },
    { icon: <ShareIcon />, name: 'Поделиться' },
];


export default function VideoPageCard() {
    return (
        <div className={styles.card}>
            <div className={styles.card_crud}>
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
            <div className={styles.card_photo}>

            </div>
            <div className={styles.card_name}>
                <p>
                    Текст
                </p>
            </div>
        </div>
    )
}