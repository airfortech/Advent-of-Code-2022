interface Array<T> {
  sum(): number;
  toNumbers(): number[];
  sortNumbersAscending(): T[];
  sortNumbersDescending(): T[];
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
