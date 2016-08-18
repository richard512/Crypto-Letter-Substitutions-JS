alphabet = 'abcdefghijklmnopqrstuvwxyz'
ciphertext = 'skd nz hgpdpymw otyy zcmj hmptbwm akmd tjm asz-agjm'
//ciphertext = 'daag'
words = ciphertext.split(' ')

function tryLetterSubstitutions(wordA, wordB) {
	wordA = wordA.toLowerCase()
	wordB = wordB.toLowerCase()
	if (wordA.length != wordB.length) {
		console.log('Error: Word Length Mismatch')
		return
	}
	tmpkey = key

	for (x in wordA) {
		//letterIndex = alphabet.indexOf(wordA[x])
		//tmpkey = tmpkey.substr(0,letterIndex) + wordB[x] + tmpkey.substr(letterIndex+1)
		tmpkey[wordA[x]] = wordB[x]
		//console.log('Letter '+wordA[x]+' should be '+wordB[x])
	}

	tmpkeystr = Object.keys(tmpkey).join('')

	console.log(alphabet+' = alphabet')
	console.log(tmpkeystr+' = tmpkey')

	attempt = ''
	for (x in ciphertext) {
		cipherLetter = ciphertext[x]
		letterIndex = alphabet.indexOf(tmpkey[cipherLetter])
		if (letterIndex > -1) {
			//console.log(cipherLetter+' @ '+letterIndex+' IN '+tmpkeystr)
			maybeLetter = alphabet[letterIndex]
			//console.log(cipherLetter+' ~ '+letterIndex+' ~ '+maybeLetter)
			if (typeof maybeLetter != 'undefined') {
				attempt += maybeLetter
			} else {
				attempt += cipherLetter
			}
		} else {
			attempt += cipherLetter
		}
	}

	return attempt
}

function findPossibleWords(words) {
	for (i in words) {
		word = words[i]
		wordlen = word.length
		possiblewords = commons[wordlen]
		if (possiblewords) {
			console.log(word+' ~ '+possiblewords)
		} else {
			console.log('no idea what '+word+' is')
		}
	}
}

tryLetterSubstitutions(
	'skd nz hgpdpymw otyy zcmj hmptbwm',
	'why do bicycles fall over because'
	)
