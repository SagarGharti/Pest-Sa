import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function DynamicCard({ title, description, image, buttonText2 }) {
  return (
    <Card sx={{ 
      maxWidth: 450, 
      height: 550, 
      display: 'flex', 
      flexDirection: 'column' 
    }} className="shadow-xl w-full">
      <CardMedia
        component="img"
        alt="Card Image"
        height="200"
        image={image}
        sx={{
          width: '100%',
          objectFit: 'cover',
          aspectRatio: '16 / 9',
        }}
      />
      <CardContent sx={{ 
        flexGrow: 1, 
        overflow: 'auto',
        paddingTop: 6,
        paddingX: 4, 
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <CardActions sx={{ justifyContent: 'flex-end', padding: 2 }}>
        <Button 
          size="small" 
          sx={{
            backgroundColor: '#3CB54B',
            paddingX: "16px",  
            paddingY: "8px", 
            color: 'white',
            '&:hover': {
              backgroundColor: '#37A544',
            },
          }}
        >
          {buttonText2}
        </Button>
      </CardActions>
    </Card>
  );
}