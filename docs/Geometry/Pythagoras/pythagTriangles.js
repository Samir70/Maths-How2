
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

function  makePythagQ(qType="findLong"){
    var [a, b, c] = triples[Math.floor(Math.random()*triples.length)];
    if (qType==="findLong") {
        var triDiscription = "The lengths of the two short sides are: "+a+' and '+b;
        var question = "Find the length of the long side."; 
        var sumOfSqs = a*a + b*b;
        var answer = [
            "Start by squaring both sides to get "+a*a + ' and ' + b*b,
            "Add those squares together to get "+sumOfSqs,
            "Find the square root of "+sumOfSqs,
            "So the length of the long side is "+c
        ];
    } else {
        triDiscription = "The length of one of the short sides is: "+a+
                " while the long side is "+c;
        question = "Find the length of the other short side."; 
        var diffOfSqs = c*c - a*a;
        answer = [
            "Start by squaring both sides to get "+a*a + ' and ' + c*c,
            "Take one from the other to get "+diffOfSqs,
            "Find the square root of "+diffOfSqs,
            "So the length of the long side is "+b
        ];
    }
    return {triDiscription, question, answer}
}