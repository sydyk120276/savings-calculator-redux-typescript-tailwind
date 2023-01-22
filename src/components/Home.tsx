import React, { useEffect } from 'react'

import RightBar from './RightBar/RightBar'
import LeftBar from './LeftBar/LeftBar'

// import { fetchUsers } from '../redux/reducers/useReducer';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';

const Home: React.FC = () => {
  const { users, error, loading } = useTypedSelector(state => state.user)

  // if (loading) {
  //   return <h1>Идёт загрузка...</h1>
  // }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="container h-screen flex ">
      <LeftBar />
      <RightBar />
    </div>
  );
}

export default Home
