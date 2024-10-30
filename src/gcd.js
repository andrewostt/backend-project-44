export default function gcd(a, b) {
  var c = a;
  var d = b;
  while (d !== 0) {
    const temp = d;
    d = c % d;
    c = temp;
  }
  return c;
}
