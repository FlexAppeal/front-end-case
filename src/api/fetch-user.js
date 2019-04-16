import users from '../data/users';

export default (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = users.filter((user) => user.id === id)[0];

    if (!user) reject('No user found');

    resolve({
      data: user,
    });
  }, 500);
});
