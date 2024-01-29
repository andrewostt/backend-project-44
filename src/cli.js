import readlineSync from 'readline-sync';

var questionName = '';
export function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  questionName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${questionName}!`);
}

export { questionName };
