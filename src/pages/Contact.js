import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';



const Contact = () => {


    return (<>
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div>
                <h1 style={{
                    fontSize: '50px'
                }}> We Would love to hear from you  </h1>
                <p style={{
                    color: 'grey',
                    textAlign:'center',
                    margin:'15px'

                }}> Tell us something about your project .....</p>
            </div>
        </Container>

        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Container>
                <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1kdJYHiILktZMOOX0Nd9dZ6XhpTlM3aA&ehbc=2E312F"
                    width="600"
                    height="480"
                    sandbox="allow-scripts"
                ></iframe>
            </Container>

            <Container sx={{ textAlign: 'center' }}>
                <h1> Contact Us </h1>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <input style={{
                        padding: "10px",
                        margin: '15px',
                        fontSize: '15px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '7px',
                        border: 'none'
                    }} placeholder='Your Name'></input>
                    <input style={{
                        padding: "10px",
                        margin: '15px',
                        fontSize: '15px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '7px',
                        border: 'none'
                    }} placeholder='Your Email ID'></input>
                    <input style={{
                        padding: "10px",
                        margin: '15px',
                        fontSize: '15px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '7px',
                        border: 'none'
                    }} placeholder='Phone Number'></input>
                    <textarea style={{
                        padding: "10px",
                        margin: '15px',
                        fontSize: '15px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: '7px',
                        border: 'none'
                    }} placeholder='Description'></textarea>

                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Button sx={{
                            backgroundColor: '#FF971E',
                            color: '#fff',
                            marginTop: '20px',
                            borderRadius: '10px',
                            marginLeft: '20px',
                            width: '200px',
                            height: '45px',
                            '&:hover': {
                                backgroundColor: '#FFB55F',
                                color: '#fff',
                            },
                        }} variant="contained">
                            Send Now
                        </Button>
                    </Container>
                </Container>
            </Container>


        </Box>
    </>
    );
};

export default Contact;
