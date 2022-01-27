// async function myFunc() {
  

  
//   const error = true;
  
//   if(!error) {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve('hello'), 1000)
//     });

//   }else{
//     await Promise.reject(new Error('something went wrong'))
//   }

//   const res = await promise;

//   return res;
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err))

async function getUsers() {

  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await response.json();

  return data
}


getUsers().then(users => console.log(users))