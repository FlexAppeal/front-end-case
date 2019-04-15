import * as R from 'ramda';
import users from '../data/users';

export default (id) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: R.find(R.propEq('id', id), users),
    });
  }, 500);
});
