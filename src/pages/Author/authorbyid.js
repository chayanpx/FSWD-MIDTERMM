import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Container } from "@mui/material";
import Button from '@mui/material/Button';

function AuthorById() {
    const [authorByID, setAuthorByID] = useState([])

    useEffect(() => {
        const fetchAuthorById = async () => {
            const splitUrl = window.location.href.split('/')
            const id = parseInt(splitUrl[4])
            const userRes = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/users/${id}`)
            const authorbyid = await userRes.json()
            // const postResponse = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/users/' + id)
            // const postById = await postResponse.json()
            setAuthorByID(authorbyid)
            return authorbyid
        }
        fetchAuthorById()
        console.log(authorByID)
    }, []);

    return (
        <Container>
            <Grid justifyContent='center'>
                {authorByID.map((authr, index) =>
                    <Card key={index} sx={{ margin: '20px', minWidth: 270 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {authr.slug}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {authr.name}
                            </Typography>
                            <CardMedia
                                component="img"
                                image={Object.values(authr.avatar_urls)[2]}
                                alt="profile"
                            />
                        </CardContent>
                        <CardActions>
                            <Button size="small">Visit Author's Page</Button>
                        </CardActions>
                    </Card>
                )}
                {/* <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                authorrrr!
            </Typography> */}
            </Grid>
        </Container>
    )
}
export default AuthorById