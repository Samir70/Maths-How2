const [ADJ, OPP, HYP] = ['adjacent', 'opposite', 'hypotenuse'];

const lableAOHqs = [
    { pic: "../docs/Geometry/Trigonometry/triangles/AngleRAdj.png", answer: ADJ },
    { pic: "../docs/Geometry/Trigonometry/triangles/AngleROpp.png", answer: OPP },
    { pic: "../docs/Geometry/Trigonometry/triangles/AngleRHyp.png", answer: HYP },
    { pic: "../docs/Geometry/Trigonometry/triangles/AngleTopAdj.png", answer: ADJ },
    { pic: "../docs/Geometry/Trigonometry/triangles/AngleTopOpp.png", answer: OPP },
    { pic: "../docs/Geometry/Trigonometry/triangles/AngleTopHyp.png", answer: HYP },
    { pic: "../docs/Geometry/Trigonometry/triangles/Adj1.png", answer: ADJ },
    { pic: "../docs/Geometry/Trigonometry/triangles/Opp1.png", answer: OPP },
    { pic: "../docs/Geometry/Trigonometry/triangles/NoAngleHyp.png", answer: HYP }
]

lableAOHqs.forEach(q=>{
    q.qText = 'At which side does the arrow point?';
    q.alt4Pic = "Triangle with arrow pointing at a side";
    q.options = [ADJ, OPP, HYP]
});

