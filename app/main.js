function matchPattern(inputLine, pattern) {
  let regex = pattern.replace('\\d', '[0-9]').replace('\\w', '[0-9a-zA-Z^\]');

  if (pattern[0] === '^') {
    pattern = pattern.slice(1, pattern.length)
  }else if(pattern[inputLine.length-1] === '$'){
    pattern = pattern.slice(0, pattern.length-1)
  }
  if (pattern.length === 1) {
    return inputLine.includes(pattern);
  } else {
    return new RegExp(regex).test(inputLine);
  }
}

function main() {
  const pattern = process.argv[3];
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();

  if (process.argv[2] !== "-E") {
    console.log("Expected first argument to be '-E'");
    process.exit(1);
  }

  console.log("Logs from your program will appear here");
  if (matchPattern(inputLine, pattern)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
