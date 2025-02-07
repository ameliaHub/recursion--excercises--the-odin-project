//fibonacci iterativo
function fibs(num){
    element1 = 0;
    element2 = 1;
    let sum = 0
    let array = [] ;
    for (let index = 0; index < num; index++) {
        if(index === 0){
            array[index]=element1;
        }
        else if(index === 1){
            array[index]=element2;
        }else{
        sum = element1+element2;
        element1=element2
        element2 = sum;

        array[index]=sum;
        }
        
        
    }

    return array;
}

console.log(fibs(8))

//fibonacci recursivo
function fibsRec(num){
    if(num <2){
        return num;
    }else{
        return fibs(num-1)+fibs(num-2)
    }
}

function fibsRec(num) {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let prevArray = fibsRec(num - 1); // Obtiene la serie hasta num-1
    let nextNum = prevArray[prevArray.length - 1] + prevArray[prevArray.length - 2]; // Suma los dos últimos elementos
    prevArray.push(nextNum); // Agrega el siguiente número a la secuencia

    return prevArray;
}

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]



//corregido
function fibsRec(num) {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let prevArray = fibsRec(num - 1); // Obtiene la serie hasta num-1
    let nextNum = prevArray[prevArray.length - 1] + prevArray[prevArray.length - 2]; // Suma los dos últimos valores
    return [...prevArray, nextNum]; // Devuelve el array actualizado
}

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

function fibs(num) {
    let array = [0, 1];

    for (let i = 2; i < num; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return num > 1 ? array : [0]; // Manejo del caso num=1
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
