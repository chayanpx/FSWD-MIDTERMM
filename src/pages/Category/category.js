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

function Category() {
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])

    const goByCat = (id) => {
        window.location = `/categories/${id}`
    }

    const goByTag = (id) => {
        window.location = `/tags/${id}`
    }

    useEffect(() => {
        const fetchCategory = async () => {
            const cateRes = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/categories')
            const catagory = await cateRes.json()
            const tagRes = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/tags')
            const tag = await tagRes.json()
            setCategories(catagory)
            setTags(tag)
            return (catagory, tag)
        }
        fetchCategory()
        console.log(categories)
        console.log(tags)
    }, []);

    return (
        <Container>
            <Grid justifyContent='center'>
                <Typography sx={{fontSize: '36px', marginTop: '10px'}}>
                    Categories
                </Typography>
                {categories.map((cate, index) =>
                    <Card key={index} sx={{ display: 'inline-flex', flexWrap: 'wrap', marginTop: '10px', width: '100%' }}>
                        <CardContent>
                            <Typography
                                variant="h5"
                                component="div"
                                curser="pointer"
                                onClick={() => goByCat(cate.id)}
                            >
                                {cate.name}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
                <Typography sx={{fontSize: '36px', marginTop: '10px'}}>
                    Tags
                </Typography>
                {tags.map((item, index) =>
                    <Card key={index} sx={{ display: 'inline-flex', flexWrap: 'wrap', marginTop: '10px', width: '100%' }}>
                        <CardContent>
                            <Typography
                                variant="h5"
                                component="div"
                                curser="pointer"
                                onClick={() => goByTag(item.id)}
                            >
                                {item.name}
                            </Typography>
                        </CardContent>
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

export default Category;