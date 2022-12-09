import { Card, CardContent, Typography, CardActions, IconButton } from "@mui/material";
import { useDispatch } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addUser } from "../../app/favoriteUserSlice";

export default function User(props: any) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Prénom: {props.user.name.first}
        </Typography>
        <Typography variant="h5" component="div">
          Nom: {props.user.name.last}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Adresse: {props.user.location.street.number + " " + props.user.location.street.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Ville: {props.user.location.postcode + ", " + props.user.location.city}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Pays: {props.user.location.country}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" onClick={() => dispatch(addUser({
          first: props.user.name.first,
          last: props.user.name.last,
          addrNumber: props.user.location.street.number,
          addrName: props.user.location.street.name,
          postcode: props.user.location.postcode,
          city: props.user.location.city,
          country: props.user.location.country,
          uuid: props.user.login.uuid
        }))}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}