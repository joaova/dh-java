let notas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];

let acimaDaMedia = notas.filter(function(num) {
    return (num >= 7);
});

console.log(acimaDaMedia.sort());