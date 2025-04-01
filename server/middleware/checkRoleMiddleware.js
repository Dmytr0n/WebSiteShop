const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            return next();
        }
        try {
            const authHeader = req.headers.authorization; // Правильне написання
            if (!authHeader) {
                return res.status(401).json({ message: "Відсутня авторизація" });
            }

            const token = authHeader.split(' ')[1]; // Розділяємо "Bearer token"
            if (!token) {
                return res.status(401).json({ message: "Відсутня авторизація" });
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                return res.status(403).json({ message: "Немає доступу" });
            }
            req.user = decoded;
            next();
        } catch (e) {
            return res.status(401).json({ message: "Невірний токен або відсутня авторизація" });
        }
    };
};
