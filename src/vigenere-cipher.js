const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  mainChiphering(message, key, direct) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      const messageElem = message[i].toUpperCase();
      const messageElemIndex = this.alphabet.indexOf(messageElem);
      if (messageElemIndex >= 0) {
        const keyElem = key[keyIndex % key.length].toUpperCase();
        const keyElemIndex = this.alphabet.indexOf(keyElem);
        if (direct == true) {
          const encryptedElemIndex =
            (messageElemIndex + keyElemIndex) % this.alphabet.length;
          const encryptedElem = this.alphabet[encryptedElemIndex];
          result += encryptedElem;
          keyIndex++;
        } else {
          const encryptedElemIndex =
            (messageElemIndex - keyElemIndex + this.alphabet.length) %
            this.alphabet.length;
          const encryptedElem = this.alphabet[encryptedElemIndex];
          result += encryptedElem;
          keyIndex++;
        }
      } else {
        result += message[i];
      }
    }
    return this.direct ? result : result.split("").reverse().join("");
  }
  encrypt(message, key) {
    return this.mainChiphering(message, key, true);
  }

  decrypt(message, key) {
    return this.mainChiphering(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
