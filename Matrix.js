export default class Matrix {
    randomChar() {
        return (String.fromCharCode("A".charCodeAt(0) + Math.floor(Math.random() * 26)));
    }
    constructor(length, width) {
        this.matrix = {};
        this.width = width;
        this.length = length;
        for (let x = 0; x < length; x++) {
            this.matrix[x] = {};
            for (let y = 0; y < width; y++) {
                this.matrix[x][y] = {};
                this.matrix[x][y].isSet = false;
                this.matrix[x][y].char = this.randomChar();
            }
        }
    }
}
