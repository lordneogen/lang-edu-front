"use client"

import { Box, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import TextField from '@mui/material/TextField';
import styles from '../css-modules/VideoPage.module.css'
import TextPageCard from "./TextPageCard";
import { Container, InputAdornment } from "@mui/material";


import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";


export default function TextPage() {

    const [searchTerm, setSearchTerm] = useState("");

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
            <div className={styles.card_out}>
                <TextPageCard></TextPageCard>
            </div>

        </div>
    )
}