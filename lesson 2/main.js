// const array = [
//     {
//         username: "Jack",
//         full_name: "Jack Kyrgyz"
//     },
//     {
//         username: "Joe",
//         full_name: "Joe Kyrgyz"
//     },
//     {
//         username: "John",
//         full_name: "John Kyrgyz"
//     }
// ]
// // for(let i =0; i < array.length; i++){ //1 цикл
// //     console.log(array[i])
// //
// // }
//
// // for(let user of array ){ //2 цикл
// //     console.log(user);
// // }
// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//     key6: 'b6',
//     key7: 'b7',
//     key8: 'b8',
//     key9: 'b9',
//     key10:'b10',
// }

// console.log(obj.key1);
// console.log(obj.key2);
// console.log(obj.key3);
// console.log(obj.key4);
// console.log(obj.key5);
//
// for(let key in obj){
//     console.log(obj[key])
// }
// let i =0;
//
// while (i <5){
//     console.log("Hello!")
//     i--
// }
// const users = [
//     {
//         username: 'jack',
//         salary: 500
//     },
//     {
//         username: 'John',
//         salary: 5000
//     },
//     {
//         username: 'Aman',
//         salary: 10000
//     }
// ]
// console.log(users)
//
// const destructUsers= users.map(user =>({
//    name: user.username,
//    salary: user.salary
// }))
// console.log(destructUsers)

// const destructUsers = [];
//
// for(let user of users) {
//     destructUsers.push({
//         name: user.username,
//         salary: user.salary
//     })
//
// }
// console.log(destructUsers)

// const filteredUsers=users.filter(user => user.salary >500);
// console.log(filteredUsers);




// for(let user of users){
//     if(user.salary >500){
//         filteredUsers.push(user)
//     }
// }
// console.log(filteredUsers)