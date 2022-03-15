import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Container } from "@mui/material";
import Button from '@mui/material/Button';

function CategoryById() {
    const [categoryByID, setCategoryByID] = useState([])
    const [PostByCat, setPostByCat] = useState([])
    const splitUrl = window.location.href.split('/')
    const id = parseInt(splitUrl[4])

    const goToPost = (id) => {
        window.location.href = `/posts/${id}`
    }

    useEffect(() => {
        const fetchCategoryById = async () => {
            const catRes = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/categories?${id}`)
            const catbyid = await catRes.json()
            const postRes = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts`)
            const postt = await postRes.json()
            setCategoryByID(catbyid, id)
            setPostByCat(postt)
            return (catbyid, postt)
        }
        fetchCategoryById()
    }, []);

    const filtPost = PostByCat.filter((item) => item.categories.includes(id))

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

export default CategoryById