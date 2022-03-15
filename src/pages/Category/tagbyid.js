import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Container } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function TagsById() {
    const [tagsByID, setTagByID] = useState([])
    const [PostByCat, setPostByCat] = useState([])
    const splitUrl = window.location.href.split('/')
    const id = parseInt(splitUrl[4])

    const goToPost = (id) => {
        window.location.href = `/posts/${id}`
    }

    useEffect(() => {
        const fetchCategoryById = async () => {
            const tagRes = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/tags?${id}`)
            const tagbyid = await tagRes.json()
            const postRes = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts`)
            const postt = await postRes.json()
            setTagByID(tagbyid, id)
            setPostByCat(postt)
            return (tagbyid, postt)
        }
        fetchCategoryById()
        console.log(tagsByID)
        console.log(PostByCat)
    }, []);

    // const filtCate = categoryByID.filter((item) => item.id === id)
    const filtPost = PostByCat.filter((item) => item.tags.includes(id))

    return (
        <Container>
            <Grid justifyContent='center'>
                {filtPost.map((post, index) =>
                    <Card key={index} sx={{ margin: '20px', minWidth: 270 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {post.title.rendered}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium" onClick={() => goToPost(post.id)}>Read More</Button>
                        </CardActions>
                    </Card>
                )}
            </Grid>
        </Container>
    )
}

export default TagsById