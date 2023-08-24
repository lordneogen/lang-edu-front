"use client";
import { usePathname } from "next/navigation";
import styles from '../css-modules/HomePage.module.css'
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import Icon from "../Svg/Icon";


const pages = [
    { id: 1, title: "О нас", path: "/about", select: "/about" },
    { id: 2, title: "Регистрация", path: "/reg", select: "/reg" },
    { id: 3, title: "Видео", path: "/video", select: "/video" },
    { id: 4, title: "Текст", path: "/text", select: "/text" },
    { id: 5, title: "Словарь", path: "/voc", select: "/voc" },
    { id: 6, title: "Пакеты словарей", path: "/vocpack", select: "/vocpack" },
];

export default function HomePage({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <div>
            <div className={styles.row_main}>
                <div className={styles.row}>
                    <Icon></Icon>

                </div>
                <div className={styles.row_button}>
                    <Grid container spacing={4}>
                        {
                            pages.map(({ id, title, path, select }) => (
                                <div className={`${pathname !== select ? styles.title : null} ${pathname == select ? styles.active : null}`} key={id}>
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
            </div>
            {children}
        </div>
    )
}