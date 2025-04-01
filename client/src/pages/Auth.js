import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { registration, login } from '../http/userApi';
import { observer } from 'mobx-react-lite'; // Це потрібно для використання observer
import { Context } from '..';

const Auth =  observer( () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Для відображення помилок
  const {user} = useContext(Context)

  const click = async () => {
      try {
        let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE); // Переходимо в магазин після входу
      } catch (err) {
        setError(err.response?.data?.message || "Помилка під час авторизації"); // Відображення помилки
      }
      
      
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
        <Form className="d-flex flex-column">
          {error && <div className="text-danger text-center">{error}</div>} {/* Відображення помилки */}
          <Form.Control
            className="mt-3"
            placeholder="Введіть ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введіть ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between align-items-center mt-3 pl-3 pr-3">
            <div className="d-flex justify-content-between w-100">
              {isLogin ? (
                <div className="d-flex align-items-center">
                  Немає акаунту?{' '}
                  <NavLink to={REGISTRATION_ROUTE} className="ms-1">
                    Зареєструватися
                  </NavLink>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  Є акаунт?{' '}
                  <NavLink to={LOGIN_ROUTE} className="ms-1">
                    Увійти
                  </NavLink>
                </div>
              )}
              <Button variant="outline-success" onClick={click}>
                {isLogin ? 'Увійти' : 'Реєстрація'}
              </Button>
            </div>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
