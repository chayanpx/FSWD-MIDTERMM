import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Container } from "@mui/material";
import Button from '@mui/material/Button';

function Content() {
    const [postById, setPostByID] = useState([])
    const [commentById, setCommentByID] = useState([])
    const splitUrl = window.location.href.split('/')
    const id = parseInt(splitUrl[4])

    useEffect(() => {
        const fetchPostById = async () => {
            const postRes = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts?${id}`)
            const postbyid = await postRes.json()
            const commentRes = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/comments')
            const commentById = await commentRes.json()
            setPostByID(postbyid)
            setCommentByID(commentById)
            return (postbyid, commentById)
        }
        fetchPostById()
        console.log(postById)
        console.log(commentById)
    }, []);

    const filtPost = postById.filter((item) => item.id === id)
    const filtComment = commentById.filter((item) => item.post === id)

    return (
        <Container>
            <Grid justifyContent='center'>
                {filtPost.map((item, index) =>
                    <Card key={index} sx={{ margin: '20px', width: '100%' }}>
                        <CardContent>
                            <Typography variant="h4" component="div">
                                {item.title.rendered}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <div dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
                            </Typography>
                        </CardContent>
                    </Card>
                )}
                <Typography sx={{marginLeft: '20px'}} variant="h5" component="div">
                    Comments
                </Typography>
                {filtComment.map((comment) =>
                    <Card sx={{ margin: '20px', width: '100%' }}>
                        <CardContent sx={{ display:'inline-flex' }}>
                            <CardMedia
                                sx={{width: '100px'}}
                                component="img"
                                image={Object.values(comment.author_avatar_urls)[2]}
                                alt="profile"
                            />
                            <Typography 
                                fontSize={16}
                                sx={{
                                    marginLeft:'20px'
                                }}
                            >
                                {comment.author_name}
                                <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </Grid>
        </Container>
    )
}

export default Content;