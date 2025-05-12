type Difficulty = "easy" | "medium" | "hard";
const difficulty1: Difficulty[] = ["easy",  "medium",  "hard"];
const difficulty2: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3
}


// Helper functions
const checkIsEvenAndReturnText = (num: number) => {
    let isEven = num % 2 === 0;
    return `Number is ${isEven ? "even" : "odd"}.`
}
const checkIsDivisibleByXAndReturnText = (num: number, x: number) => {
    let isDivisibleByX = num % x === 0;
    return `Number is ${isDivisibleByX ? "divisible" : "not divisible"} by ${x}.`
}
const checkIsLessThanXAndReturnText = (num: number, x: number) => num < x;

const hints = [
  {
    difficulty: "easy",
    id: "even-or-odd",
    action: checkIsEvenAndReturnText
  },
  {
    difficulty: "medium",
    id: "even-or-odd",
    action: checkIsDivisibleByXAndReturnText
  },
  {
    difficulty: "hard",
    id: "even-or-odd",
    action: checkIsLessThanXAndReturnText
  }
] 

// If user select easy
const userSelectedDifficulty: Difficulty = "easy"

const easyHints = hints.filter(hint => hint.difficulty === "easy")

console.log(easyHints[0])