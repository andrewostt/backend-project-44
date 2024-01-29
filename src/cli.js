import readlineSync from 'readline-sync';
export { questionName, hello, welcome };

const welcome = console.log('Welcome to the Brain Games!');
const questionName = readlineSync.question('May I have your name? ');
const hello = console.log(`Hello, ${questionName}!`);
