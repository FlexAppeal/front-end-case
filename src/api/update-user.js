// Convert payload to following specification:
// {
//  name: string,
//  phone_num?: ?string, (null if empty)
//  address?: string,
//  networks?: { // bonus
//    add: Array<string>,
//    remove: Array<string>,
//  },
//  teams?: { // bonus
//    add: Array<string>,
//    remove: Array<string>,
//  },
// }

export default (payload) => {
  const data = payload;

  console.warn(data); // this should match the specification above
}