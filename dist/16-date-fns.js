"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const date = new Date(1998, 4, 19); // 0=enero, 1=febre..
const rta = (0, date_fns_1.subDays)(date, 1);
const str = (0, date_fns_1.format)(rta, 'dd/mm/yyyy');
console.log(str);
