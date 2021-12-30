import MainPage from './pages/MainPage'
import actions from './actions'

import './App.css';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.initApp())
  })

  return (
    <MainPage />
  );
}

export default App;
