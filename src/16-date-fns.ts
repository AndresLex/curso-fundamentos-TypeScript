import { subDays, format } from 'date-fns';

const date = new Date(1998, 4, 19); // 0=enero, 1=febre..
const rta = subDays(date, 1);
const str = format(rta, 'dd/mm/yyyy');

console.log(str);
