const maxGuestsError = 'invalid booking, maximum 7 guests and 9 infants'
const minAdultsError = 'invalid booking, minimum one adult per room'

function findMinRooms (adults, children, infants) {
	if (adults + children > 7 || infants > 9)
		return maxGuestsError

	const maxNonAdults = Math.max(children, infants)
	const maxNonAdultRooms = Math.ceil(maxNonAdults / 3)

	if (adults < maxNonAdultRooms)
		return minAdultsError

	const maxAdultRooms = Math.ceil(adults / 3)
 	const minRooms = Math.max(maxNonAdultRooms, maxAdultRooms)

	return String(minRooms)
}

module.exports = { findMinRooms, maxGuestsError, minAdultsError }
