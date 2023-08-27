"use client"

import { Box, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import TextField from '@mui/material/TextField';
import styles from '../../css-modules/BasePage.module.css'
import VideoPageCard from "./VideoPageCard";
import { Container, InputAdornment } from "@mui/material";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import InputForPage from "@/components/Input";
import PageCardBase from "@/components/Card";


export default function VideoPage() {

    const [loading, setLoading] = useState(false);
    const [full_size, setFull_size] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    return (
        <div>
            <InputForPage></InputForPage>
            {
                !loading && (
                    <div className={styles.loading_icon}><CircularProgress /></div>
                )
            }
            <div className={`${styles.externalCardContainer} ${!loading ? styles.loading_bool : null}`}>
                <Grid2 justifyContent="center" container spacing={2}>
                    <PageCardBase></PageCardBase>
                </Grid2>
            </div>
            <div className={`${styles.pag} ${!loading ? styles.loading_bool : null}`}><Pagination count={10} color="secondary" /></div>
            <div>
                {
                    full_size && (
                        <div className={styles.open_Card}>
                            <div className={styles.inner_open_Card}>
                                <div className={styles.baseline}>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}