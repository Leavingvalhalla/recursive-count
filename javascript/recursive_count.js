function recursiveCount(num = 0) {
  if (num === 10) return num;
  console.log(num);
  recursiveCount(num + 1);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file

// return if count = 10
// count += 1
// count()

// And a written explanation of your solution
