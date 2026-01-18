const { add } = require('./index');

console.log('Testing add(2, 3)...');
const result = add(2, 3);
if (result !== 5) {
  console.error(`Test Failed: Expected 5 but got ${result}`);
  process.exit(1);
} else {
  console.log('Test Passed!');
}
