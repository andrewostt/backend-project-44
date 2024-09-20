import { gameLogic } from "../src/index.js";

export function calculationGame() {
    const rules = 'What is the result of the expression?';
    const a = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    const b = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    const results = [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
    const num = `+`;
    gameLogic(rules, num, a, b);
}