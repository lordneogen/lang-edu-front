import styles from '../css-modules/HomePage.module.css'
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";


const pages = [
    { id: 1, title: "О нас", path: "/about", select: "/about" },
    { id: 2, title: "Регистрация", path: "/reg", select: "/reg" },
    { id: 3, title: "Видео", path: "/video", select: "/video" },
    { id: 4, title: "Текст", path: "/text", select: "/text" },
    { id: 5, title: "Словарь", path: "/voc", select: "/voc" },
];

export default function HomePage({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className={styles.row}>
                <Grid>
                    <h1>ИнОб</h1>
                </Grid>
            </div>
            <div className={styles.row}>
                <Grid container spacing={4}>
                    {
                        pages.map(({ id, title, path, select }) => (
                            <div className={styles.title} key={id}>
                                <Link className={styles.link} key={id} href={path}>
                                    <h4>
                                        {title}
                                    </h4>
                                </Link>
                            </div>
                        )
                        )
                    }
                </Grid>
            </div>
            {children}
        </div>
    )
}