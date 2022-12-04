  let vec2 = [[1, 2, 3, 4], 
              [2, 3, 4, 5], 
              [2, 3, 1, 4], 
              [5, 3, 2, 1]];

function diagonalNva(){
    let datos = [];
    for (let i = 0; i < vec2.length; i++) {
        datos.push(vec2[i][i]);

    }
    return datos;
}

function diagonalInversaNva(){
    let datos = [];
    for (let i = vec2.length-1; i >= 0; i--) {
        datos.push(vec2[i][i]);

    }
    return datos;
}

function invertirValores(){
    let datos = [];
    for (let i = 0; i < vec2.length; i++) {
        for (let j = 0; j < vec2[i].length; j++) {
            datos.push(vec2[j][i]);
        }
    }
    return datos;
}

console.table(invertirValores());
console.table(diagonalInversaNva());
console.table(diagonalNva());