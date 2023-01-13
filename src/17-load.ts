import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'Andres',
    role: 'seller'
  },
  {
    username: 'Marina',
    role: 'customer'
  },
  {
    username: 'Nataly',
    role: 'admin'
  }
]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
