import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite'; // Це потрібно для використання observer
import { Context } from '.';
import { Spinner } from 'react-bootstrap';
import { check } from './http/userApi';
import Footer from './components/Footer';

const App = observer( () => {
  const {user,device} =useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) { // Виконуємо перевірку тільки якщо є токен
      check()
        .then(() => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .catch(() => {
          localStorage.removeItem('token'); // Якщо токен невалідний — видаляємо його
          user.setUser(false);
          user.setIsAuth(false);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false); // Якщо немає токена, відразу прибираємо спінер
    }
  
    device.setPage(1);
  }, []);
  
  
  if (loading) {
      return <Spinner animation={"grow"}/>
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
