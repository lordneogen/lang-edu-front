import { Box, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import TextField from '@mui/material/TextField';
import styles from '../css-modules/BasePage.module.css'
import { Container, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';




export default function InputForPage({ showFileInput = true,
    showFileButton = true,
    showAddButton = true,
    showWordInput = true,
    onSubmit,
    onSearch,
}:
    {
        showFileInput?: boolean,
        showFileButton?: boolean,
        showAddButton?: boolean,
        showWordInput?: boolean,
        onSubmit?: () => void,
        onSearch?: () => any,
    }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [nameTerm, setNameTerm] = useState("");

    const [word1Term, setWord1Term] = useState("");
    const [word2Term, setWord2Term] = useState("");

    const [lang1Term, setLang1Term] = useState<string | null>(null);

    const Lang1change = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        setLang1Term(newValue);
    };

    const [lang2Term, setLang2Term] = useState<string | null>(null);

    const Lang2change = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        setLang2Term(newValue);
    };

    const languages = ['English', 'Русский'];

    return (
        <div className={styles.baseline}>
            <Box>
                <Grid2 alignItems="center" container spacing={2}>
                    <Grid2>
                        <div className={styles.default_1vmin_margin}>
                            <TextField
                                id="search"
                                color="warning"
                                type="search"
                                label="Поиск"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}
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
                        {showWordInput && (
                            <div>
                                <div className={styles.default_1vmin_margin}>
                                    <TextField
                                        color="warning"
                                        sx={{ width: '50vw' }}
                                        required
                                        id="outlined-required"
                                        label="Слово"
                                        value={word1Term}
                                        defaultValue="Слово"
                                        onChange={(e) => {
                                            setWord1Term(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className={styles.default_1vmin_margin}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        sx={{ width: '50vw' }}
                                        value={lang1Term}
                                        onChange={Lang1change}
                                        options={languages}
                                        renderInput={(params) => <TextField {...params} label="Autocomplete" />}
                                    />
                                </div>
                                <div className={styles.default_1vmin_margin}>
                                    <TextField
                                        color="warning"
                                        sx={{ width: '50vw' }}
                                        required
                                        value={word2Term}
                                        id="outlined-required"
                                        label="Перевод"
                                        defaultValue="Перевод"
                                        onChange={(e) => {
                                            setWord2Term(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className={styles.default_1vmin_margin}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        sx={{ width: '50vw' }}
                                        value={lang1Term}
                                        onChange={Lang1change}
                                        options={languages}
                                        renderInput={(params) => <TextField {...params} label="Autocomplete" />}
                                    />
                                </div>
                            </div>

                        )}
                        {showFileInput && (
                            <div className={styles.default_1vmin_margin}>
                                <TextField
                                    color="warning"
                                    sx={{ width: '50vw' }}
                                    required
                                    id="outlined-required"
                                    label="Название"
                                    value={nameTerm}
                                    onChange={(e) => {
                                        setNameTerm(e.target.value);
                                    }}
                                    defaultValue="Название"
                                />
                            </div>
                        )}
                    </Grid2>
                    <Grid2>
                        {showFileButton && (
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
                        )}
                    </Grid2>
                    <Grid2>
                        {showAddButton && (
                            <Button
                                variant="contained"
                                color="warning"
                            >
                                Добавить
                            </Button>
                        )}
                    </Grid2>
                </Grid2>
            </Box>
            <h1>{lang1Term}</h1>
        </div>
    );
}