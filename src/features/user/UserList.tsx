import { Button, Card, IconButton, TextField } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addUser } from '../../app/favoriteUserSlice';
import { useGetRandomUserQuery } from '../../services/randomuser'
import User from './User'
import { useDispatch } from 'react-redux';

export function UserList() {
  const { data, error, isLoading, refetch } = useGetRandomUserQuery();
  const dispatch = useDispatch();
  
  const randomUsers = data?.results.map((randomUser: any) => {
    const us = {
      first: randomUser.name.first,
      last: randomUser.name.last,
      addrNumber: randomUser.location.street.number,
      addrName: randomUser.location.street.name,
      postcode: randomUser.location.postcode,
      city: randomUser.location.city,
      country: randomUser.location.country,
      uuid: randomUser.login.uuid
    }
    return (
      <Card sx={{ minWidth: 275 }} key={randomUser.login.uuid}>
        <User user={us}></User>
        <IconButton aria-label="add to favorites" onClick={() => dispatch(addUser(us))}>
          <FavoriteIcon />
        </IconButton>
      </Card>
    );
  });

  return (
    <div className='randomUser'>
      <div id='userCtrl'>
        <Button id="generator" variant="outlined" onClick={() => refetch()}>
          Generer des utilisateurs
        </Button>
      </div>
      {error ? (
        <>there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className='userList'>
          {randomUsers}
        </div>
      ) : null}
    </div>
  );
}

function dispatch(arg0: any): void {
  throw new Error('Function not implemented.');
}
