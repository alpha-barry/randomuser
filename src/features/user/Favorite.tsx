import { Card, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "./UserType";
import User from './User'
import { removeUser } from "../../app/favoriteUserSlice";

export default function Favorite() {
    const users: any = useSelector((state: any) => state);
    const dispatch = useDispatch();

    const usersElement = users.user.favorities.map((user: UserType) => {
        console.log(user)
        return (<Card sx={{ minWidth: 275 }} key={user.uuid}>
            <User user={user}></User>
            <CardActions>
                <button aria-label="add to favorites" onClick={() => dispatch(removeUser(user.uuid))}>
                    retirer
                </button>
            </CardActions>*
        </Card>);
    });

    /*<CardActions>
          <button aria-label="add to favorites" onClick={() => dispatch(removeUser(user.uuid))}>
            retirer
          </button>
        </CardActions>*/
    return (
        <div>
            {usersElement}
        </div>
    );
}