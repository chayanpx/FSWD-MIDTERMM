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

    const goToPost = (id) => {
        window.location = `/categories/${id}`
    }

    useEffect(() => {
        const fetchCategory = async () => {
            const cateRes = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/categories')
            const catagory = await cateRes.json()
            setCategories(catagory)
            return catagory
        }
        fetchCategory()
        console.log(categories)
    }, []);

    return (
        <Container>
            <Grid justifyContent='center'>
                <Typography>
                    Categories
                </Typography>
                {categories.map((cate, index) =>
                    <Card key={index} sx={{ display: 'inline-flex', flexWrap: 'wrap', marginTop: '10px',width: '100%' }}>
                        <CardContent>
                            <Typography 
                                variant="h5" 
                                component="div"
                                curser="pointer"
                                onClick={() => goToPost(cate.id)}
                            >
                                {cate.name}
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