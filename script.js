// ________________/ For ga oid masalalar \________________
// // 1-masala
// let sum = 0;
// for (let i = 11; i <= 100; i += 2) {
//     sum += i;
// } console.log("toq sonlar yig'indisi: " + sum);

// // 2-masala
// let num = 5;
// let sum = 1;
// for (let i = 1; i <= num; i++) {
//     console.log(sum *= i);        
// }

// // // 3-masala
// for (let i = 1; i <= 50; i++) {
//     let cost = 0; 
//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0) {
//             cost++;
//         }
//     }
//     if (cost > 2) {
//         console.log(i);
//     }
// }

// // 4-masala
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//     sum += i ** 2;    
// }console.log(sum);

// // 5-masala
// let num = [5, 9, 13, 1, 4];
// let engKichik = Math.min(...num);
// let engKatta= Math.max(...num);
// console.log("Eng kichik son: " + engKichik);
// console.log("Eng katta son: " + engKatta);

// // 6-masala
// for (let i = 2; i <= 30; i++) {
//     let cost = 0; 
//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0) {
//             cost++;
//         }
//     }
//     if (cost > 2) {
//         console.log(i);
//     }
// }

// // 7-masala
// let num = 541646;
// let res = '';
// while (num > 0) {
//     res += num % 10;
//     num = Math.trunc(num / 10);
// } console.log(res);

// // 8-masala
// let juft = 0;
// let toq = 0;
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         juft += i ** 2;
//     } else {
//         toq += i ** 3;
//     }
// }   console.log("Juft sonlarning kvadratlari yig'indisi: " + juft);
//     console.log("Toq sonlarning kubiklari yig'indisi: " + toq);
//     console.log("Farq: " + (juft - toq));

// // 9-masala
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }

// // 10-masala
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }console.log("o'rtacha qiymat: " + sum / 100);

// // 11-masala
// let num = 564541646;
// let res = '';
// count = 0;
// while (num > 0) {
//     res += num % 10;
//     num = Math.trunc(num / 10);
//     count++;
// } console.log(count);

// // 12-masala
// let num = 9;
// if (num > 0) {
//     for (let i = -1; i >= -num; i--) {
//         console.log(i);
//     }
// } else {
//     console.log("Iltimos, musbat son kiriting.");
// }

// // 13-masala
// let num = 10;
// let sum = 0;
// let count = 4;
// let son1 = 1;
// let son2 = 2
// if (num >= 1) {
//     console.log(0);
// }
// if (num >= 2) {
//     console.log(1);
// }
// if (num >= 3) {
//     console.log(1);
//     console.log(2);
// }
// while (count < num) {
//     sum = son1 +son2;
//     console.log(sum);
//     son1 = son2;
//     son2 = sum;
//     sum = null;
//     count++;
// }

// // 14-masala
// let sum = 0;
// for (let i = 2; i <= 200; i += 2) {
//     sum += i    
// }console.log(sum);

// // 15-masala
// let sum = 0;
// for (let i = 1; i <= 20; i ++) {
//     console.log(i + i + 1);
// }



// ____________/ Break/continue ga oid masalalar \____________
// // 1-masala
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }else {
//         console.log(i);
//     } 
// }

// // 2-masala
// for (let i = 1; i <= 10; i++) {
//     if (i === 3 || i === 5) {
//         continue;
//     }else {
//         console.log(i);
//     } 
// }

// // 3-masala
// for (let i = 1; i <= 10; i++) {
//     if (i === 7) {
//         console.log('Topildi!');
//         break;
//     }
// }

// // 4-masala
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }else {
//         console.log(i);
//     } 
// }

// // 5-masala
// for (let i = 1; i <= 100; i++) {
//     if (i > 50) {
//         break;
//     }else {
//         console.log(i);
//     } 
// }

    


