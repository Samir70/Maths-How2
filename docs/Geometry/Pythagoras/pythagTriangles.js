
const plainABCs = [
    { pic:"Triangles/PlainABC.png", alt4Pic:"Right-angled triangle ABC with hypotenuse AC" },
    { pic:"Triangles/PlainABC2.png", alt4Pic:"Right-angled triangle ABC with hypotenuse AC" },
    { pic:"Triangles/PlainABC3.png", alt4Pic:"Right-angled triangle ABC with hypotenuse AC" }
];

// following pairs are co-prime and of different parity
const mnPairs = [
    [1, 2],
    [1, 4],
    [1, 6],
    [2, 3],
    [2, 5],
    [2, 7],
    [2, 9],
    [3, 4],
    [3, 8],
    [4, 5],
    [5, 6]
];

const triples = mnPairs.map(x=>{
    var [n, m] = x;
    return [2*m*n, m*m-n*n, m*m+n*n]
});
