import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Container } from "@mui/material";
import Button from '@mui/material/Button';

function Author() {
    const [blogAuthor, setBlogAuthor] = useState([])

    const goToProfile = (id) => {
        window.location.href = `/author/${id}`
    }

    useEffect(() => {
        const fetchBlogAuthor = async () => {
            const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/users')
            const authors = await response.json()
            setBlogAuthor(authors)
            return authors
        }
        fetchBlogAuthor()
    }, []);

    return (
        <Container>
            <Grid justifyContent='center'>
                {blogAuthor.map((authr, index) =>
                    <Card key={index} sx={{ display:'inline-flex', margin: '20px', width: '50%' }}>
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
                            <Button size="small" onClick={() => goToProfile(authr.id)}>Visit Author's Page</Button>
                        </CardActions>
                    </Card>
                )}
            </Grid>
        </Container>
    )
}

export default Author;