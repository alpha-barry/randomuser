import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { removeUser } from './app/store';

function App() {

  const a:any = useSelector((state:any) => state);
  const dispatch = useDispatch();

  const t = a.user.favorities.map((v:any) => {
    return(<Card sx={{ minWidth: 275 }} key={v.uuid}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Prénom: {v.first}
        </Typography>
        <Typography variant="h5" component="div">
          Nom: {v.last}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
      </CardContent>
      <CardActions>
        <button aria-label="add to favorites" onClick={() => dispatch(removeUser(v.uuid))}>
          ret
        </button>
      </CardActions>
    </Card>);
  });
  return (
      <div className="App">
        <header className="App-header">
          <Counter />
          <div className='favorite'>
            {t}
          </div>
        </header>
      </div>
  );
}

export default App;
