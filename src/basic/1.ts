// const age = 50;
// const username = "Max";
// const toggle = true;
// const empty = null;

//  не обов'язково вказувати тип даних, якщо ви передаєте його явно
const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback1 = (a: any) => {
  return 100 + a;
};
// const callback2 = (a: unknown) => {
//   return 100 + a;
// };
const callback3 = (a: string | number) => {
  // return 100 + a;
  // number + str - чи можна?

  if (typeof a === "string") {
    return 100 + a;
  } else {
    return 100 + a;
  }
};
// finally
const callback4 = (a: number) => {
  return 100 + a;
};
