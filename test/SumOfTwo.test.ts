import {expect} from 'chai';
import PuzzleSolution from '../src/PuzzleSolution';
import SumOfTwo from '../src/SumOfTwo';

describe('SumOfTwo', () => {
  const data: number[] = [7, 4, 9, 2];
  const puzzle: PuzzleSolution<number[]> = new SumOfTwo(data, 11);
  it('brute-force solution', () => {
    expect(puzzle.bruteForceSolution()).to.include.ordered.members([0, 1]);
  });
  it('optimal solution', () => {
    expect(puzzle.optimalSolution()).to.include.ordered.members([0, 1]);
  });
});
