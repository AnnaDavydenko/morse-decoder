const {
    strikethrough
} = require("colors");

const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const isSpace = (sequance) => {
    return sequance === "**********";
}

// .- -> a
const decodeChar = (encoddedChar) => {
    return MORSE_TABLE[encoddedChar];
}

// 1011 -> .-
const normolizeAndDecodeSequance = (sequance) => {
    let res = [];
    for (let j = 0; j < sequance.length;) {
        res.push(`${sequance[j]}${sequance[j+1]}`);
        j += 2;
    }
    return res.filter(item => item !== "00").map(item => item === "10" ? "." : "-").join("");
}


const split10 = (str) => {
    return str.match(/.{1,10}/g);
}

function decode(expr) {
    let string = "";
    const splittedBy10 = split10(expr);
    splittedBy10.forEach(sequance => {
        string += isSpace(sequance) ? " " : decodeChar(normolizeAndDecodeSequance(sequance));
    });
    return string;
}

module.exports = {
    decode
}