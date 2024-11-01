export default function calculateExpression(expr) {
  const parts = expr.split(' ');
  const num1 = parseFloat(parts[0]);
  const operation = parts[1];
  const num2 = parseFloat(parts[2]);

  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Неизвестная операция';
  }
}
