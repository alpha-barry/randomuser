import { Card, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "./UserType";
import User from './User'
import { removeUser } from "../../app/favoriteUserSlice";

export default function Favorite() {
    const users: UserType[] = useSelector((state: any) => state.user.favorities);
    const dispatch = useDispatch();

    const usersElement = users.map((user: UserType) => {
        return (<Card sx={{ minWidth: 275 }} key={user.uuid}>
            <User user={user}></User>
            <CardActions>
                <button aria-label="add to favorites" onClick={() => dispatch(removeUser(user.uuid))}>
                    retirer
                </button>
            </CardActions>
        </Card>);
    });

    return (
        <div>
            {usersElement}
        </div>
    );
}