import { UserList } from './features/user/UserList';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { removeUser } from './app/favoriteUserSlice';
import { UserType } from "./features/user/UserType";

function App() {

  const users:any = useSelector((state:any) => state);
  const dispatch = useDispatch();

  const usersElement = users.user.favorities.map((user:UserType) => {
    return(<Card sx={{ minWidth: 275 }} key={user.uuid}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Prénom: {user.first}
        </Typography>
        <Typography variant="h5" component="div">
          Nom: {user.last}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Adresse: {user.addrNumber + " " + user.addrName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Ville: {user.postcode + ", " + user.city}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Pays: {user.country}
        </Typography>
      </CardContent>
      <CardActions>
        <button aria-label="add to favorites" onClick={() => dispatch(removeUser(user.uuid))}>
          retirer
        </button>
      </CardActions>
    </Card>);
  });

  return (
      <div className="App">
          <UserList />
          <div className='favorite'>
            <div>
              <h2>Mes favoris</h2>
            </div>
            <div className='favoriteList'>
              {usersElement}
            </div>
          </div>
      </div>
  );
}

export default App;
