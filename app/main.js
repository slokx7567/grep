function matchPattern(inputLine, pattern) {
  if (pattern.length === 1) {
    return inputLine.includes(pattern);
  }else if(pattern === '\\d'){
    return /\d/.test(inputLine);
  }else if( pattern === '\\w'){
    return /\w/.test(inputLine);
  }else if(pattern.startsWith('[') && pattern.endsWith(']')) {
    const ptr = new RegExp(pattern)
    return ptr.test(inputLine);
  }
  else {
    throw new Error(`Unhandled pattern ${pattern}`);
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
