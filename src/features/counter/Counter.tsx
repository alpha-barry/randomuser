import React, { useState } from 'react';
import { useGetRandomUserQuery, useGetUserBySeedQuery } from '../../services/randomuser'
import styles from './Counter.module.css';

export function Counter() {
  const { data, error, isLoading } = useGetRandomUserQuery()

  console.log(data)

  return (
    <div>
    </div>
  );
}
