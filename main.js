const readline = require('readline');
const { findMinRooms } = require('./findMinRooms')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionStr =
'How many adults, chidren, and infants for the booking?\n\
Eg. 3 4 2\n'

rl.question(questionStr, input => {
	// replace excess whitespaces and split user input
	const args = input.replace(/  +/g, ' ').split(' ')

	if (!isValidArgs(args)) {
		process.stdout.write('invalid argument!\n')
		return rl.close()
	}

	const [adults, children, infants] = args.map(Number)
  const ans = findMinRooms(adults, children, infants)
  process.stdout.write(ans + '\n');

  return rl.close()
});

function isValidArgs (ls) {
	const validLength = ls.length == 3
	const isNumbers = ls.filter(isNaN).length == 0

	return (validLength && isNumbers)
}
