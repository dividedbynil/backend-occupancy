const {
	findMinRooms,
	minAdultsError,
	maxGuestsError
} = require('./findMinRooms.js')

const testCases =
	[ [3,4,2, 2]
	, [1,6,3, minAdultsError]
	, [2,5,5, 2]
	, [3,1,4, 2]
	, [6,2,0, maxGuestsError]
	, [1,1,6, minAdultsError]
	, [1,2,4, minAdultsError]
	, [6,1,1, 2]
	, [3,2,9, 3]
	, [3,3,3, 1]
	, [3,3,4, 2]
	]

testCases.map(ls => {
	const expected = ls.pop()
	console.log(`arguments: ${ls}`)

	const ans = findMinRooms(...ls)
	if (String(expected) !== ans)
		return console.log(`expect: ${expected}\nbut got: ${ans}\n`)
	console.log('correct!\n')
})
