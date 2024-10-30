export default function gcd(a, b) {
  let c = a;
  let d = b;
  while (d !== 0) {
    const temp = d;
    d = c % d;
    c = temp;
  }
  return c;
}
