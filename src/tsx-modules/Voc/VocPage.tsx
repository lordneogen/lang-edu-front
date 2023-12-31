"use client"

import { Box, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import TextField from '@mui/material/TextField';
import styles from '../../css-modules/BasePage.module.css'
import { Container, InputAdornment } from "@mui/material";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import VocPageCard from "./VocPageCard";


export default function VocPage() {

    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);


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
            <div className={styles.baseline}>
                <Box>
                    <Grid2 alignItems="center" container spacing={2}>
                        <Grid2 >
                            <div className={styles.default_1vmin_margin}>
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
                            <div className={styles.default_1vmin_margin}>
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
                    <div className={styles.loading_icon}><CircularProgress /></div>
                )
            }
            <div className={`${styles.externalCardContainer} ${!loading ? styles.loading_bool : null}`}>
                <VocPageCard></VocPageCard>
                <VocPageCard></VocPageCard>
                <VocPageCard></VocPageCard>
                <VocPageCard></VocPageCard>
                <VocPageCard></VocPageCard>
                <VocPageCard></VocPageCard>
                <VocPageCard></VocPageCard>
            </div>
            <div className={`${styles.pag} ${!loading ? styles.loading_bool : null}`}><Pagination count={10} color="secondary" /></div>
        </div>
    )
}