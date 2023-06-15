import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import { BlogData } from '../Data/BlogData';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function ActionAreaCard() {
    return (
        <Box>
            <Box sx={{
                textAlign: 'center',

            }}>
                <Typography sx={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                }}>
                    Blogs
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '80vh',
                '@media (max-width: 1100px)': {
                    display: 'flex',
                    height: 'auto',
                    flexDirection: 'column'
                },
            }}>
                {
                    BlogData.map((item, index) => (
                        <Box key={index}>

                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.imgURL}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{
                                        minWidth: '20rem',
                                    }}>
                                        <h3>
                                            {item.title}
                                        </h3>
                                    </CardContent>
                                    <CardContent sx={{
                                        minWidth: '20rem',
                                    }}>
                                        <span style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>  <CalendarMonthIcon /> {item.date} </span>
                                    </CardContent>

                                    <CardContent>
                                        <Button sx={{
                                            backgroundColor: '#FF971E',
                                            color: '#fff',
                                            borderRadius: '10px',
                                            height: '35px',
                                            '&:hover': {
                                                backgroundColor: '#FFB55F',
                                                color: '#fff',
                                            },
                                        }} variant="contained">
                                            Read More
                                        </Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    ))
                }

            </Box>
        </Box>

    );
}