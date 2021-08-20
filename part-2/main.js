const plainText = document.querySelector("#plaintext")
const cipherText = document.querySelector("#ciphertext")
const plainkey = document.querySelector("#encryptkey")
const decryptkey = document.querySelector("#decryptkey")
const encryptButton = document.querySelector("#encryptButton")
const decryptButton = document.querySelector("#decryptButton")
const encryptText = document.querySelector("#encrypt")
const decryptText = document.querySelector("#decrypt")

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
    encryptText.textContent = text
    plainText.value = ""
    plainkey.value = ""
}


function decrypt(ciphertext, key) {
    let text = ciphertext
    const consonants = key.match(/[^aeiou]/gi).length;
    const vowels = key.match(/[aeiou]/gi).length;
    const remainder = text.length % vowels;
    for (let i = 0; i < consonants; i++) {
        const decryptArr = [];
        decryptArr.push(text.slice(0,remainder));
        console.log(text.slice(0,remainder));
        for (let j = remainder; j < text.length; j += vowels) {
            decryptArr.push(text.slice(j, j + vowels));
        }
        decryptArr.reverse();
        text = decryptArr.join('');
    }
    console.log(text)
    decryptText.textContent = text;
    cipherText.value = ""
    decryptkey.value = ""
}

const enc = () => {
    encrypt(plaintext.value, plainkey.value)
}
encryptButton.addEventListener('click', () => {
    encrypt(plaintext.value, plainkey.value)
})

decryptButton.addEventListener('click', () => {
    decrypt(ciphertext.value, decryptkey.value)
})

