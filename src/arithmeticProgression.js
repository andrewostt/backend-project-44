export default function arithmeticProgression() {
    const randomNums = {
        start: Math.ceil(Math.random() * 10),
        ratio: Math.ceil(Math.random() * 4 + 1),
        swapNum: Math.round(Math.random() * 9),
      };
      const progression = [];
      for (let i = 0; i < 10; i += 1) {
        progression.push(randomNums.start + i * randomNums.ratio);
      }
      const result = {
        swappedNum: progression[randomNums.swapNum],
        progression: "",
      };
      progression[randomNums.swapNum] = "..";
      result.progression = progression.join(" ");
      return result;
}
