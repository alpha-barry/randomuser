import { Button, TextField } from '@mui/material';
import { useGetRandomUserQuery } from '../../services/randomuser'
import User from './User'

export function UserList() {
  const { data, error, isLoading, refetch } = useGetRandomUserQuery();

  let randomUsers = data?.results.map((randomUser: any) => {
    return (<User user={randomUser} key={randomUser.login.uuid}></User>);
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