import Admin from "../pages/Admin"
import Auth from "../pages/Auth"
import Basket from "../pages/Basket"
import DevicePage from "../pages/DevicePage"
import Shop from "../pages/Shop"
import AboutPage from "../components/AboutPage"
import Services from "../components/Services"
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, DEVICE_ROUTE, ABOUT_ROUTE, SERVICES_ROUTE, FAQ_ROUTE, PAIMENTDELIVERY_ROUTE} from "../utils/consts"
import Faq from "../components/Faq"
import PaymentDelivery from "../components/PaymentDelivery"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },

]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE +  '/:id',
        Component: DevicePage
    },
    {
        path: ABOUT_ROUTE,  // Додаємо маршрут "Про нас"
        Component: AboutPage
    },
    {
        path: SERVICES_ROUTE,  
        Component: Services
    },
    {
        path: FAQ_ROUTE,  
        Component: Faq
    },
    {
        path: PAIMENTDELIVERY_ROUTE,  
        Component: PaymentDelivery
    },
]
