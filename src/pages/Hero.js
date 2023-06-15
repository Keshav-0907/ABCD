import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import Services from './OurServices'
import Why from './Why'
import TestimonialCard from '../components/TestomonialCard'
import { TestimonialData } from '../Data/TestimonialData'
import Video from '../Assets/heroVid.mp4'

const Hero = () => {
  return (
    <>

      <div className="video-container">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="caption">
          <div className='video-btn'>
            <Button sx={{
              backgroundColor: '#FF971E',
              color: '#fff',
              borderRadius: '10px',
              marginLeft: '20px',
              height: '45px',
              '&:hover': {
                backgroundColor: '#FFB55F',
                color: '#fff',
              },
            }} variant="contained">
              Get Started
            </Button>
          </div>
        </div>
      </div>



      <Services />
      <Box sx={{
        textAlign: 'center',
      }}>
        <Typography sx={{ fontSize: '40px', fontWeight: 'bold', padding: '0px 20px' }}>
          What our clients says
        </Typography>
        <Typography sx={{ padding: '0px 20px' }}>
          Our Clients send us a bunch of smilies with our services and we love them        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          '@media (max-width: 1100px)': {
            display: 'flex',
            flexDirection: 'column'
          },
        }}>
          {
            TestimonialData.map((item, index) => (
              <Grid key={index} sx={{
                display: 'flex',
                justifyContent: 'center',
              }}>
                <TestimonialCard
                  name={item.name}
                  image={item.image}
                  content={item.content}
                  project={item.project}
                />
              </Grid>
            ))}
        </Box>
      </Box>



      <Why />
      {/* <Contact/> */}
    </>
  )
}

export default Hero