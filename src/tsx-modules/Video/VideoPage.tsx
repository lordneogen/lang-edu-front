"use client"

import { Box, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import TextField from '@mui/material/TextField';
import styles from '../css-modules/VideoPage.module.css'
import VideoPageCard from "./VideoPageCard";
import { Container, InputAdornment } from "@mui/material";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";


export default function VideoPage() {

    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [full_size, setFull_size] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    // @ts-ignore
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };


    return (
        <div>
            <div className={styles.row}>
                <Box>
                    <Grid2 alignItems="center" container spacing={2}>
                        <Grid2 >
                            <div className={styles.inp}>
                                <TextField
                                    id="search"
                                    color="warning"
                                    type="search"
                                    label="Поиск"
                                    value={searchTerm}
                                    onChange={handleChange}
                                    sx={{ width: '50vw' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className={styles.inp}>
                                <TextField
                                    color="warning"
                                    sx={{ width: '50vw' }}
                                    required
                                    id="outlined-required"
                                    label="Название"
                                    defaultValue="Название"
                                />
                            </div>
                        </Grid2>
                        <Grid2>
                            <Button
                                variant="contained"
                                component="label"
                                color="warning"
                            >
                                Файл
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                        </Grid2>
                        <Grid2>
                            <Button
                                variant="contained"
                                // component="label"
                                color="warning"

                            >
                                Добавить
                            </Button>
                        </Grid2>
                    </Grid2>
                </Box>
            </div>
            {
                loading ? (
                    <div></div>
                ) : (
                    <div className={styles.load}><CircularProgress /></div>
                )
            }
            <div className={`${styles.card_out} ${!loading ? styles.loading : null}`}>
                <Grid2 justifyContent="center" container spacing={2}>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                    <VideoPageCard></VideoPageCard>
                </Grid2>
            </div>
            <div className={`${styles.pag} ${!loading ? styles.loading : null}`}><Pagination count={10} color="secondary" /></div>
            <div>
                {
                    full_size ? (
                        <div className={styles.full_card}>
                            <div className={styles.inner_card}>
                                <div className={styles.row}>

                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )

                }
            </div>
        </div>
    )
}