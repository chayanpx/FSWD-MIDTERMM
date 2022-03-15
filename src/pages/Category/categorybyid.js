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

function CategoryById() {
    const [categoryByID, setCategoryByID] = useState([])

    useEffect(() => {
        const fetchCategoryById = async () => {
            const splitUrl = window.location.href.split('/')
            const id = parseInt(splitUrl[4])
            const cateRes = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/categories/${id}`)
            const catebyid = await cateRes.json()
            setCategoryByID(catebyid)
            return catebyid
        }
        fetchCategoryById()
        console.log(categoryByID)
    }, []);

    return (
        <Container>
            <Grid justifyContent='center'>
                {categoryByID.map((cate, index) =>
                    <Card key={index} sx={{ margin: '20px', minWidth: 270 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {cate.id}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {cate.name}
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small" onClick={() => goToProfile(authr.id)}>Visit Author's Page</Button>
                        </CardActions> */}
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

export default CategoryById