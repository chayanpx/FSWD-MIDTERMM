import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Content() {
    return (
        <div>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                content!
            </Typography>
        </div>
    )
}

export default Content;