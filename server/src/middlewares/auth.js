const jwt = require("jsonwebtoken");
const {
    access
} = require("fs");



const isAuth = (req, res, next) => {
    // console.log(`req.hostname: ${req.hostname}`)
    // se puede validar en el caso de que existan varios host
    // console.log(`req.headers: ${req.headers}`)
    try {
        const {
            token
        } = req.headers;

        if (token) {
            const data = jwt.verify(token, process.env.JWT_SECRET);
            console.log(`jwt data: ${data}`);
            req.sessionData = {
                userId: data.userId,
                role: data.role
            }
            next();
        } else {
            throw {
                CODE: 403,
                status: "ACCES DENIED",
                message: "missing token",
            };
        }
    } catch (err) {
        res.status(err.code || 500).send({
            status: err.status || "ERROR",
            message: err.message,
        });
    }
};

const isAdmin = (req, res, next) => {
    // console.log(`req.hostname: ${req.hostname}`)
    // se puede validar en el caso de que existan varios host
    // console.log(`req.headers: ${req.headers}`)
    try {
        const {
            role
        } = req.sessionData
        console.log(`isAdmin: ${role}`)
        // comprobamos si es admin
        if (role != 'admin') {
            throw {
                CODE: 403,
                status: "ACCES DENIED",
                message: "invalid role",
            };
        }
        next()
    } catch (err) {
        res.status(err.code || 500).send({
            status: err.status || "ERROR",
            message: err.message,
        });
    }
};

module.exports = {
    isValidHostName,
    isAuth,
    isAdmin
};