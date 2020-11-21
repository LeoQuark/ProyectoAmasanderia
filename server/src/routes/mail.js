const sendmail = require('sendmail')({ silent: true });
import { Router } from "express";
const router = Router();

// sendmail({
//     from: 'leonardo.penaf@utem.cl',
//     to: 'leo.kpex@gmail.com',
//     subject: 'test sendmail',
//     html: 'LEITO',
// }, function (err, reply) {
//     console.log(err && err.stack);
//     console.log('errorrr')
//     console.dir(reply);
// });

export default router;

