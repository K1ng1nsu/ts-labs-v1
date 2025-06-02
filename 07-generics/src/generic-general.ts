function GenericFunctionDeclare<T>(param: T): T {
  return param;
}

const GenericAllowFunction = <T>(param: T): T => {
  return param;
};

const GenericFunctionExpression = function <T>(arg: T): T {
  return arg;
};

interface GenericInterface<T, U> {
  (arr: T[]): T;
  value: U;
}

type GenericType<T, U> = {
  fuc: (arr: T[]) => T;
  value: U;
};

class GenericClass<T, U> {
  p1: T;
  p2: U;
  constructor(p1: T, p2: U) {
    this.p1 = p1;
    this.p2 = p2;
  }

  getP1(): T {
    return this.p1;
  }
  getP2(): U {
    return this.p2;
  }
}
