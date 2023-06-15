import React from 'react';
import Grid from '@mui/material/Grid';



const TestimonialCard = (props) => {
	return (
		<Grid className="testimonial-main">
			<Grid sx={{
			}} >
				{props.image
					?<img className='testimonial-img'  src={props.image} alt="Avatar" />	
					:<div>
						<p> {props.name} </p>
					</div>
				}
			</Grid>
			<Grid item >
				<Grid item>
					<h3> {props.name} </h3>
				</Grid>
			</Grid>

			<Grid sx={{
				maxWidth:'20rem',
				fontSize:'12px',
			}}>
				<p>
					{props.content}
				</p>
			</Grid>
			
		</Grid>
	);
}


export default TestimonialCard;