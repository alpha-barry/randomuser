import { UserList } from './features/user/UserList';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { removeUser } from './app/favoriteUserSlice';
import { UserType } from "./features/user/UserType";
import Favorite from './features/user/Favorite';

function App() {
  return (
      <div className="App">
          <UserList />
          <div className='favorite'>
            <div>
              <h2>Mes favoris</h2>
            </div>
            <div className='favoriteList'>
              <Favorite />
            </div>
          </div>
      </div>
  );
}

export default App;
