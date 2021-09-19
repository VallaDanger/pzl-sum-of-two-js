import PuzzleSolution from './PuzzleSolution';
import SumOfTwo from './SumOfTwo';

const data: number[] = [7, 4, 9, 2];
const puzzle: PuzzleSolution<number[]> = new SumOfTwo(data, 11);

console.log(puzzle.bruteForceSolution());
console.log(puzzle.optimalSolution());

export default {puzzle};
