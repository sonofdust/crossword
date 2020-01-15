import MatrixPoints from './Points.js'

let mtx = {};
const initMatrix = (length, width) => { mtx = new MatrixPoints(length, width); };
const removeWord = (word) => {
    mtx.getWord(word).forEach(item => {
        let char = mtx.getChar();
        mtx.matrix[item.x][item.y].isSet = false;
        mtx.matrix[item.x][item.y].char = char;
        let el = document.getElementById(`${item.x}-${item.y}`);
        el.innerText = char;
        el.className = "cell";
    });
    mtx.deleteWord(word);
}

const loadGrid = (element) => {
    
    let htmlTxt = '';
    htmlTxt += `<table>`;
    Object.keys(mtx.matrix).forEach(xdx => {
        htmlTxt += `<tr>`;
        Object.keys(mtx.matrix[xdx]).forEach(ydx => {
            htmlTxt += `<td><div class = ${(mtx.matrix[xdx][ydx].isSet) ? 'slctcell' : 'cell'} id='${xdx}-${ydx}''>${mtx.matrix[xdx][ydx].char}</div></td>`;
        })
        htmlTxt += `</tr>`;
    });
    htmlTxt += `</table>`;
    element.innerHTML = htmlTxt;
};



const getWords = () => mtx.getWords();
const addWord = (word) => {
    mtx.setWord(word);

    let count = 0;
    do {
        let directionKey = mtx.randomDirectionKey();
        let point = mtx.getRandomPoint(mtx.length, mtx.width);
        try {
            for (let i = 0; i < word.length; i++) {
                if (mtx.matrix[point.x] && mtx.matrix[point.x][point.y] && !mtx.matrix[point.x][point.y].isSet) {
                    mtx.addPoint(word, {
                        x: point.x,
                        y: point.y,
                        char: word.charAt(i)
                    });
                    point = mtx.directions[directionKey](point);
                } else {
                    mtx.setWord(word);
                    break;
                }
            }
        } catch (e) {
            alert('Error adding word.');
        }
    } while ((count++ < mtx.length * mtx.width * 10) && !mtx.getWord(word).length);

    if (!mtx.getWord(word).length) {
        alert(`Was unable to add ${word}`);
        delete mtx.deleteWord(word);
    }

    let temp = mtx.getWord(word);

    if (temp.length) {
        try {
            temp.forEach((item, index) => {
                mtx.matrix[item.x][item.y].char = word.charAt(index);
                mtx.matrix[item.x][item.y].isSet = true;
            })
            loadGrid(document.querySelector('.grid'));
        } catch (e) {
            alert('Could not place word in grid. inner');
        }
    } else {
        delete mtx.deleteWord(word);
        alert('Could not place word in grid. outter');
    }
}

export { initMatrix, addWord, getWords, removeWord, loadGrid };

