import users from '../data/users';

export default (offset = 0, limit = users.length) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: users.slice(offset, offset + limit),
      pagination: {
        total_count: 20,
        offset: offset,
        limit: limit,
      },
    });
  }, 1000);
});
