'use client';

import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // blue
        },
        secondary: {
            main: '#9c6d3a', // brown
        },
        adding: {
            main: '#61c967', // green
        },
        removing: {
            main: '#ed5a5a', // red
        },
    },
});

export default theme;