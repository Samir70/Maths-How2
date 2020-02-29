/*
This component will show multiple choice questions.
It requires 
-- an array of questions (which the component will ask in random order)
-- the index of the first question
-- a boolean stating whether or not to show a picture (the default is false)
Each question is an object requiring the following properties
-- qText : a string with the text of a question
-- answer : a string which represents the answer
-- options : an array of strings representing the multiple choice options, 
    each option will be displayed as a button.
    Obviously, one of these options needs to match exactly the answer 
    (this is not checked, it makes it easier 
        to have many questions whose answers are the same options)
-- pic : needed if the show-pic attribute is set to true
-- alt4Pic : alt text for picture, as above 
*/

Vue.component('multi-choice', {
    props: {
        qList : Array,
        firstq : Number,
        showPic : Boolean
    },
    data: function () {
        return {
            showAnswer: false,
            answerMessage: 'Default answer. Should not be shown',
            chosenQ: this.qList[this.firstq],
            unAsked: this.qList.map((x, i)=>i).filter(x=>x!==this.firstq)
        }
    },
    methods: {
        checkAnswer: function (userAns, qAns) {
            this.answerMessage = userAns === qAns ?
                "Correct! The answer is " + qAns :
                "Wrong! The answer is " + qAns;
            this.showAnswer = true;
        },
        nextQ: function () {
            if (this.unAsked.length === 0) {
                this.unAsked = this.qList.map((x, i) => i);
            }
            var qNum = this.unAsked[Math.floor(Math.random() * this.unAsked.length)];
            this.unAsked = this.unAsked.filter(x => x !== qNum);
            this.chosenQ = this.qList[qNum];
            this.showAnswer = false;
        }
    },
    template: `
        <div>
            <div v-if="!showAnswer || !showPic" >
                <h2>{{ chosenQ.qText }}</h2>
                <button 
                  v-if="!showAnswer"  
                  v-for="b in chosenQ.options" 
                  v-on:click="checkAnswer(b, chosenQ.answer)">{{b}}</button>
            </div>
            <div v-if="showAnswer">
              <h2>{{answerMessage}}</h2>
              <button v-on:click="nextQ">Next question</button>
            </div>
            <img v-if="showPic" v-bind:src="chosenQ.pic" v-bind:alt="chosenQ.alt4Pic" >
        </div>
    `
})
