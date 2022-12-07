import React, { useState, useEffect } from 'react';
import { useGetRandomUserQuery, useGetUserBySeedQuery } from '../../services/randomuser'
import styles from './Counter.module.css';

export function Counter() {
  const { data, error, isLoading } = useGetRandomUserQuery()

  const randomUsers = data?.results.map((randomUser: any) => {
      return (<div key={randomUser.login.uuid}>
        <div>
          {randomUser.name.first}
        </div>
        <div>
          {randomUser.name.last}
      </div>
      <br/>
      <div>
        
      </div>
      </div>);
  });


  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {isLoading ? <div>Loading...</div>: <div>{randomUsers}</div>}
        </>
      ) : null}
    </div>
  );
}
