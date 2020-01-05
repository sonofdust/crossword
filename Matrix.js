export default class Matrix {
    randomChar() {
        return (String.fromCharCode("A".charCodeAt(0) + Math.floor(Math.random() * 26)));
    }
    constructor(element, length, width) {
        this.matrix = {};
        this.element = element;
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
        this.loadGrid();
    }

    loadGrid() {
        let htmlTxt = '';
        htmlTxt += `<table>`;

        Object.keys(this.matrix).forEach(xdx => {
            htmlTxt += `<tr>`;
            Object.keys(this.matrix[xdx]).forEach(ydx => {
                htmlTxt += `<td><div class = ${(this.matrix[xdx][ydx].isSet) ? 'slctcell' : 'cell'} id='${xdx}-${ydx}''>${this.matrix[xdx][ydx].char}</div></td>`;
            })
            htmlTxt += `</tr>`;
        });
        htmlTxt += `</table>`;
        this.element.innerHTML = htmlTxt;
    };
}
