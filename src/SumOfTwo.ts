import PuzzleSolution from './PuzzleSolution';

export default class SumOfTwo implements PuzzleSolution<number[]> {
  private array: Array<number>;
  private size: number;
  private target: number;

  constructor(array: number[], target: number) {
    this.array = Array.from(array);
    this.size = this.array.length;
    this.target = target;
  }

  private get(index: number) {
    return this.array[index];
  }

  bruteForceSolution(): number[] {
    // time complexity: O(n^2)

    // scan the whole array
    for (let i = 0; i < this.size; i++) {
      const valueAtI: number = this.get(i);

      // starting from i, scan every element to its
      // right until the end of the array
      for (let j = i + 1; j < this.size; j++) {
        // if at some point the sum of current element
        // at j and element at i is equal to target,
        // then the solution has been found.
        if (valueAtI + this.get(j) === this.target) {
          return Array.of(i, j);
        }
      }
    }

    return [];
  }

  optimalSolution(): number[] {
    // time complexity: O(n)

    const history: Map<number, number> = new Map();

    for (let i = 0; i < this.size; i++) {
      const item = this.get(i);
      if (history.has(item)) {
        const index: number = history.get(item) as number;
        return Array.of(index, i);
      }
      const difference: number = this.target - this.get(i);
      history.set(difference, i);
    }

    return [];
  }
}
