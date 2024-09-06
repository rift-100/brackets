module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = [];
  const closeBrackets = [];
  const sameBrackets = [];
  for (const [open, close] of bracketsConfig) {
    if (open === close) {
      sameBrackets.push(open);
    }
    openBrackets.push(open);
    closeBrackets.push(close);
  }
  for (const char of str.split('')) {
    if (sameBrackets.includes(char)) {
      if (stack.length === 0) {
        stack.push(char);
      } else if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    if (openBrackets.includes(char)) {
      stack.push(char);
    }
    if (closeBrackets.includes(char)) {
      const last = stack.pop();
      const lastIdx = openBrackets.indexOf(last);
      const closeIdx = closeBrackets.indexOf(char);
      if (lastIdx !== closeIdx) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}
