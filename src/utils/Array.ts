interface Array<T> {
  sum(): number;
  toNumbers(): number[];
  sortNumbersAscending(): T[];
  sortNumbersDescending(): T[];
  union(array: any[]): T[];
  difference(array: any[]): T[];
  intersection(array: any[]): T[];
  match(array: any[]): T[];
}

Array.prototype.sum = function (): number {
  return this.reduce((sum: number, a: number) => sum + a, 0);
};

Array.prototype.toNumbers = function (): number[] {
  return this.map((a: any) => Number(a));
};

Array.prototype.sortNumbersAscending = function (): number[] {
  return this.sort((a: number, b: number) => a - b);
};

Array.prototype.sortNumbersDescending = function (): number[] {
  return this.sort((a: number, b: number) => b - a);
};

Array.prototype.union = function (array: any[]): any[] {
  let a = new Set(this);
  let b = new Set(array);
  return Array.from(new Set([...this, ...b]));
};

Array.prototype.difference = function (array: any[]): any[] {
  let a = new Set(this);
  let b = new Set(array);
  return Array.from(new Set([...a].filter(x => !b.has(x))));
};

Array.prototype.intersection = function (array: any[]): any[] {
  let a = new Set(this);
  let b = new Set(array);
  return Array.from(new Set([...a].filter(x => b.has(x))));
};

Array.prototype.match = function (array: any[]): any[] {
  return this.every((a: any) => array.includes(a));
};
