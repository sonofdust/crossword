import Matrix from './Matrix.js'

export default class MatrixPoints extends Matrix {
    constructor(element, length, width) {
        super(element, length, width);
        this.words = {};
    }
    getChar() { return this.randomChar(); }

    getRandomPoint(length, width) {
        return {
            x: Math.floor(Math.random() * length),
            y: Math.floor(Math.random() * width)
        }
    };

    setWord(word) {
        this.words[word] = [];
    };

    getWord(word) { return this.words[word] };

    getWords() { return Object.keys(this.words) };

    deleteWord(word) {
        delete this.words[word];
    }

    addPoint(word, point) {
        this.words[word] = [...this.words[word], point];
    };


    directions = {
        vu: (point) => {
            ++point.y;
            return point;
        },
        vd: (point) => {
            --point.y;
            return point;
        },
        hr: (point) => {
            ++point.x;
            return point;
        },
        hl: (point) => {
            --point.x;
            return point;
        },
        dru: (point) => {
            ++point.x;
            ++point.y;
            return point;
        },
        drd: (point) => {
            ++point.x;
            --point.y;
            return point;
        },
        dlu: (point) => {
            --point.x;
            ++point.y;
            return point;
        },
        dld: (point) => {
            --point.x;
            --point.y;
            return point;
        }
    };
    randomDirectionKey() { return (Object.keys(this.directions)[Math.floor(Math.random() * Object.keys(this.directions).length)]) };
}


