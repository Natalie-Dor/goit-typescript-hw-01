// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
// чому так як в конспекті не працює
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
