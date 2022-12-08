import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { useGetRandomUserQuery } from '../../services/randomuser'

export function Counter() {
  const { data, error, isLoading, refetch } = useGetRandomUserQuery()

  const randomUsers = data?.results.map((randomUser: any) => {
    return (<Card sx={{ minWidth: 275 }} key={randomUser.login.uuid}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Prénom: {randomUser.name.first}
        </Typography>
        <Typography variant="h5" component="div">
          Nom: {randomUser.name.last}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" onClick={() => console.log('test')}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>);
  });


  return (
    <div>
      <button onClick={() => refetch()}></button>
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
