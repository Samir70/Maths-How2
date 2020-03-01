const [ADJ, OPP, HYP] = ['adjacent', 'opposite', 'hypotenuse'];

const lableAOHqs = [
    { pic: "triangles/AngleRAdj.png", answer: ADJ },
    { pic: "triangles/AngleROpp.png", answer: OPP },
    { pic: "triangles/AngleRHyp.png", answer: HYP },
    { pic: "triangles/AngleTopAdj.png", answer: ADJ },
    { pic: "triangles/AngleTopOpp.png", answer: OPP },
    { pic: "triangles/AngleTopHyp.png", answer: HYP },
    { pic: "triangles/Adj1.png", answer: ADJ },
    { pic: "triangles/Opp1.png", answer: OPP },
    { pic: "triangles/NoAngleHyp.png", answer: HYP }
]

lableAOHqs.forEach(q=>{
    q.qText = 'At which side does the arrow point?';
    q.alt4Pic = "Triangle with arrow pointing at a side";
    q.options = [ADJ, OPP, HYP]
});

const sohcahtoaQs = [
    {
        qText: "Which function is associated with the opposite and hypotenuse?",
        answer: "SIN"
    },
    {
        qText: "Which function is associated with the opposite and adjacent?",
        answer: "TAN"
    },
    {
        qText: "Which function is associated with the adjacent and hypotenuse?",
        answer: "COS"
    },
    {
        qText: "Which function is associated with the adjacent and opposite?",
        answer: "TAN"
    },
    {
        qText: "Which function is associated with the hypotenuse and adjacent?",
        answer: "COS"
    },
    {
        qText: "Which function is associated with the hypotenuse and opposite?",
        answer: "SIN"
    }
];
sohcahtoaQs.forEach(q => q.options = ['SIN', 'COS', 'TAN'])

const sidePairs = [
    OPP+' and '+HYP,
    ADJ+' and '+HYP,
    OPP+' and '+ADJ
]
const indicatedSidesQs = [
    { pic:"triangles/angleA-givenA-wantO.png", answer:OPP+' and '+ADJ },
    { pic:"triangles/angleA-givenA-wantH.png", answer:ADJ+' and '+HYP },
    { pic:"triangles/angleA-givenO-wantH.png", answer:OPP+' and '+HYP },
    { pic:"triangles/angleA-givenH-wantO.png", answer:OPP+' and '+HYP },
    { pic:"triangles/angleA-givenH-wantA.png", answer:ADJ+' and '+HYP },
    { pic:"triangles/angleC-givenA-wantO.png", answer:OPP+' and '+ADJ },
    { pic:"triangles/angleC-givenA-wantH.png", answer:ADJ+' and '+HYP },
    { pic:"triangles/angleC-givenO-wantH.png", answer:OPP+' and '+HYP },
    { pic:"triangles/angleC-givenH-wantO.png", answer:OPP+' and '+HYP },
    { pic:"triangles/angleC-givenH-wantA.png", answer:ADJ+' and '+HYP }
];

indicatedSidesQs.forEach(q => {
    q.qText = "Which two sides are indicated in the triangle?";
    q.alt4Pic = "Triangle ABC with one side length given";
    q.options = sidePairs
});

const sctFromTriQs = [
    { pic:"triangles/angleA-givenA-wantO.png", answer:'TAN' },
    { pic:"triangles/angleA-givenA-wantH.png", answer:'COS' },
    { pic:"triangles/angleA-givenO-wantH.png", answer:'SIN' },
    { pic:"triangles/angleA-givenH-wantO.png", answer:'SIN' },
    { pic:"triangles/angleA-givenH-wantA.png", answer:'COS' },
    { pic:"triangles/angleC-givenA-wantO.png", answer:'TAN' },
    { pic:"triangles/angleC-givenA-wantH.png", answer:'COS' },
    { pic:"triangles/angleC-givenO-wantH.png", answer:'SIN' },
    { pic:"triangles/angleC-givenH-wantO.png", answer:'SIN' },
    { pic:"triangles/angleC-givenH-wantA.png", answer:'COS' }
];

sctFromTriQs.forEach(q => {
    q.qText = "Which function connects the two indicated sides?";
    q.alt4Pic = "Triangle ABC with one side length given";
    q.options = ['SIN', 'COS', 'TAN']
})

