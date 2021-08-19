function encrypt(plaintext, key) {
    let text = plaintext
    const consonants = key.match(/[^aeiou]/gi).length;
    const vowels = key.match(/[aeiou]/gi).length;
    for (let j = 0; j < consonants; j++) {
        const cryptArr = []
        for (let i = 0; i < text.length; i += vowels) {
            cryptArr.push(text.slice(i, i + vowels));
        }
        cryptArr.reverse();
        text = cryptArr.join('');
    }
    console.log(text);
    return text;
}

let ciphertext = encrypt("I once loved a feathered goose. It had such a marvelous head of plummage atop its neck.",'mackerel');

function decrypt(ciphertext, key) {
    let text = ciphertext
    const consonants = key.match(/[^aeiou]/gi).length;
    const vowels = key.match(/[aeiou]/gi).length;
    const remainder = text.length % vowels;
    for (let i = 0; i < consonants; i++) {
        const decryptArr = [];
        decryptArr.push(text.slice(0,remainder));
        for (let j = remainder; j < text.length; j += vowels) {
            decryptArr.push(text.slice(j, j + vowels));
        }
        decryptArr.reverse();
        text = decryptArr.join('');
    }
    console.log(text)
    return text;
}

decrypt(ciphertext, 'mackerel')

