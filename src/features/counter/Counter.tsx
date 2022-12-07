import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { useGetRandomUserQuery, useGetUserBySeedQuery } from '../../services/randomuser'
import styles from './Counter.module.css';

export function Counter() {
  const { data, error, isLoading } = useGetRandomUserQuery()

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const randomUsers = data?.results.map((randomUser: any) => {
      return (<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Nom: {randomUser.name.first}
        </Typography>
        <Typography variant="h5" component="div">
          Prénom: {randomUser.name.first}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          </IconButton>
      </CardActions>
    </Card>  );
  });


  return (
    <div>
      {error ? (
        <>there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        {randomUsers}
      </>
      ) : null}
    </div>
  );
}
