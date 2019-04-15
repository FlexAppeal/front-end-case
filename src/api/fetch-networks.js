import networks from '../data/networks';

export default () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ data: networks });
  }, 1000);
});
