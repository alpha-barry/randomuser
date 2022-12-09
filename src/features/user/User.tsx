import {CardContent, Typography, CardActions } from "@mui/material";

export default function User(props: any) {

  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Prénom: {props.user.first}
        </Typography>
        <Typography variant="h5" component="div">
          Nom: {props.user.last}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Adresse: {props.user.addrNumber + " " + props.user.addrName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Ville: {props.user.postcode + ", " + props.user.city}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Pays: {props.user.country}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </>
  );
}