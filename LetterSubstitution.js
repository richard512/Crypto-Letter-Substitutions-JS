alphabet = 'abcdefghijklmnopqrstuvwxyz';
key = {
	'a': '_',
	'b': 'b',
	'c': 'c',
	'd': 'd',
	'e': 'e',
	'f': 'f',
	'g': 'g',
	'h': 'h',
	'i': 'i',
	'j': 'j',
	'k': 'k',
	'l': 'l',
	'm': 'm',
	'n': 'n',
	'o': 'o',
	'p': 'p',
	'q': 'q',
	'r': 'r',
	's': 's',
	't': 't',
	'u': 'u',
	'v': 'v',
	'w': 'w',
	'x': 'x',
	'y': 'y',
	'z': 'z'
	};

function tryLetterSubstitutions(wordA, wordB) {
	wordA = wordA.toLowerCase()
	wordB = wordB.toLowerCase()
	if (wordA.length != wordB.length) {
		console.log('Error: Word Length Mismatch')
		return
	}
	tmpkey = key

	for (x in wordA) {
		if (tmpkey[wordA[x]]) {
			tmpkey[wordA[x]] = wordB[x]
			console.log(wordA[x] +' should be '+ wordB[x])
		}
	}

	tmpkeystr = Object.keys(tmpkey).join('')

	console.log('alphabet = ', alphabet)
	console.log('tmpkey = ', tmpkey)

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
				attempt += '_'
			}
		} else {
			if ('!?.,@#$%^&*()_-=+` 1234567890'.indexOf(cipherLetter) > -1) {
				attempt += cipherLetter
			} else {
				attempt += '_'
			}
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


ciphertext = 'skd nz hgpdpymw otyy zcmj? hmptbwm akmd tjm asz-agjm!';
needSolved = 'skd nz hgpdpymw otyy zcmj? hmptbwm';
mySolution = "why do bicycles fall over? because";
plaintext = tryLetterSubstitutions(needSolved, mySolution);
