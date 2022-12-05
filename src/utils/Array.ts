interface Array<T> {
  sum(): number;
  toNumbers(): number[];
  sortNumbersAscending(): T[];
  sortNumbersDescending(): T[];
  union(array: any[]): T[];
  difference(array: any[]): T[];
  intersection(array: any[]): T[];
  match(array: any[]): boolean;
  splitEveryNth(n: number): T[];
  rotate(): T[];
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

Array.prototype.match = function (array: any[]): boolean {
  return this.every((a: any) => array.includes(a));
};

Array.prototype.splitEveryNth = function (n: number): any[] {
  const arr: string[][] = [];

  for (let i = 0; i < this.length; i++) {
    if (!arr[Math.floor(i / n)]) arr[Math.floor(i / n)] = [];
    arr[Math.floor(i / n)].push(this[i]);
  }

  return arr;
};

Array.prototype.rotate = function (): any[] {
  return this[0].map((_: any, i: number) => this.map((row: any) => row[i]));
};
