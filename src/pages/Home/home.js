import React from "react";
import "./home.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Home() {
    return (
        <div>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                homie home
            </Typography>
        </div>
    )
}

export default Home;