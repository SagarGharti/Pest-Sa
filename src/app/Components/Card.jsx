import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DynamicCard({ title, description, image, buttonText1, buttonText2 }) {
  return (
    <Card sx={{ maxWidth: 345 }} className=" shadow-xl ">
      <CardMedia
        component="img"
        alt="Card Image"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className='justify-between px-4'>
        <Button size="small" className='text-neutral border border-neutral-6 '>{buttonText1}</Button>
        <Button size="small" className='bg-primary-3 text-white'>{buttonText2}</Button>
      </CardActions>
    </Card>
  );
}
