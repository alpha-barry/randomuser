import { Button } from '@mui/material';
import { useGetRandomUserQuery } from '../../services/randomuser'
import User from './User'

export function UserList() {
  const { data, error, isLoading, refetch } = useGetRandomUserQuery()
  let randomUsers = data?.results.map((randomUser: any) => {
    return (<User user={randomUser} key={randomUser.login.uuid}></User>);
  });

  return (
    <div className='randomUser'>
      <Button variant="outlined" onClick={() => refetch()}>
        Generer des utilisateurs
      </Button>
      {error ? (
        <>there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          {randomUsers}
        </div>
      ) : null}
    </div>
  );
}