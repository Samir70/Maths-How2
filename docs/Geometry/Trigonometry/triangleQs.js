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

