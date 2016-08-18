# Crypto-Letter-Substitutions-JS
For solving letter substitution / solving cryptograms

## How it works

You input a ciphertext, some text you might know the meaning of, and the meaning you propose, then this code swaps out the letters in the ciphertext so you can see if that solution looks right.

## Example usage:

ciphertext = 'skd nz hgpdpymw otyy zcmj hmptbwm akmd tjm asz-agjm';
needSolved = 'skd nz hgpdpymw otyy zcmj';
mySolution = "why do bicycles fall over";
plaintext = tryLetterSubstitutions(needSolved, mySolution);

/*
RESULT: "why do bicycles fall over because ahey are awo-aire"
*/
