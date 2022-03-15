import React, { useEffect, useState } from "react";
import "./home.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Container } from "@mui/material";
import Button from '@mui/material/Button';

function Home() {
    const [posts, setPost] = useState([])

    useEffect(() => {
        const fetchBlogAuthor = async () => {
            const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts')
            const post = await response.json()
            setPost(post)
            return post
        }
        fetchBlogAuthor()
        console.log(posts)
    }, []);

    return (
        <Container>
            <Grid justifyContent='center'>
                {posts.map((item, index) =>
                    <Card key={index} sx={{ margin: '20px', minWidth: 270 }}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item.title.rendered}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <div dangerouslySetInnerHTML={{__html :item.content.rendered}}></div>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium">Read More</Button>
                        </CardActions>
                    </Card>
                )}
            </Grid>
        </Container>
    )
}

export default Home;