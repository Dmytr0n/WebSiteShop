import { useContext, useState, useEffect } from 'react';
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, Form, FormControl, Dropdown, ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";
import { FaBars, FaUser, FaShoppingCart, FaSearch } from "react-icons/fa"; 
import TypeBar from './TypeBar';
import './styles/NavBar.css';

const NavBar = observer(() => {
  const { user, device } = useContext(Context); // Assuming device is in context
  const navigate = useNavigate();
  const role = user.getUser().role;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const location = useLocation(); 
  const isHomePage = location.pathname === SHOP_ROUTE;

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token"); // Видаляємо токен
    navigate(SHOP_ROUTE);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  
    // Якщо пошукове поле порожнє, показуємо всі пристрої
    if (query.length > 0) {
      const filteredSuggestions = device.devices.filter(device =>
        device.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      // Якщо поле пошуку порожнє, показуємо всі пристрої
      setSuggestions(device.devices);
    }
  };
  

  const handleSearchSubmit = () => {
    device.setSearchQuery(searchQuery); // Оновлюємо пошуковий запит в context
    setSuggestions([]); // Скидаємо підказки після натискання кнопки пошуку
    navigate(`${SHOP_ROUTE}?query=${searchQuery}`); // Передаємо параметр пошуку через URL
  };
  

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name); // Встановлюємо вибрану підказку в поле пошуку
    device.setSearchQuery(suggestion.name); // Оновлюємо пошуковий запит в context
    setSuggestions([]); // Скидаємо підказки після вибору
  };

  const handleLogoClick = () => {
    setSearchQuery(''); // Очищаємо поле пошуку
    device.setSearchQuery(''); // Скидаємо пошуковий запит в контексті
    setSuggestions([]); // Скидаємо підказки
    navigate(SHOP_ROUTE); // Перенаправляємо на головну сторінку магазину
  };
  

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Container>
          {isHomePage && (
            <Button variant="link" className="menu-btn" onClick={toggleSidebar}>
              <FaBars className="menu-icon" />
            </Button>
          )}
          <NavLink className="navbar-title" to={SHOP_ROUTE} onClick={handleLogoClick}>
  DM_Remont
</NavLink>

          
          <Form className="d-flex search-bar">
            <FormControl
              type="search"
              placeholder="Пошук..."
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button variant="outline-light" onClick={handleSearchSubmit}>
              <FaSearch />
            </Button>
            {suggestions.length > 0 && (
              <div className="autocomplete-suggestions">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name}
                  </div>
                ))}
              </div>
            )}
          </Form>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <NavLink to="/cart" className="nav-link">
                <FaShoppingCart size={20} />
              </NavLink>
              {user.isAuth ? (
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="user-dropdown">
                    <FaUser size={20} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {role === 'ADMIN' && (
                      <Dropdown.Item
                        className="admin-btn"
                        onClick={() => navigate(ADMIN_ROUTE)}
                      >
                        Адмін панель
                      </Dropdown.Item>
                    )}
                    <Dropdown.Item
                      className="logout-btn"
                      onClick={logOut}
                    >
                      Вийти
                    </Dropdown.Item>
                  </Dropdown.Menu>

                </Dropdown>
              ) : (
                <Button className="auth-btn" onClick={() => navigate(LOGIN_ROUTE)}>
    Авторизуватися
</Button>

              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <TypeBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
});

export default NavBar;
