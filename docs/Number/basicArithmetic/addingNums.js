const levels = [
    { name: 'bronze-1', description: 'adding single digits' },
    { name: 'bronze-2', description: 'adding double digit numbers, no carrying' },
    { name: 'bronze-3', description: 'adding two digit numbers'},
    { name: 'silver-1', description: 'three digit numbers'},
    { name: 'silver-2', description: 'making the numbers longer than this would just be busy work'}
    // should decimals be done here?
];

const randInt = n => {
    return Math.floor(Math.random() * n) + 1
}

Vue.component('adding-nums', {
    props: {
        'level': Number
    },
    data: function () {
        return {
            ans: 12,
            userAns: '',
            feedback: 'Right or Wrong',
            showFeedback: false,
            userCorrect: false
        }
    },
    computed: {
        qText: function () {
            var left, right
            switch (this.level) {
                case 0: { left = randInt(9); right = randInt(9); break }
                case 1: {
                    var a =  randInt(8), b = randInt(8);
                    var i = randInt(9-a), j = randInt(9-b);
                    left = 10*a + b;
                    right = 10*i + j;
                    break
                }
                case 2: { left = randInt(99); right = randInt(99); break}
                case 3: { left = randInt(999); right = randInt(999); break}
                default: { left = randInt(5000); right = randInt(5000); }
            }
            this.ans = left + right;
            return left + ' + ' + right + ' = '
        }
    },
    methods: {
        checkAnswer: function () {
            var n = Number(this.userAns);
            if (n === this.ans) {
                this.feedback = 'Correct! ' + this.qText + this.ans;
                this.userCorrect = true
            } else {
                this.feedback = 'Wrong! ';
                this.feedback += Math.abs(n - this.ans) > 10 ? 'You are out by more than 10' : 'Maybe you only have one digit wrong.'
            }
            this.showFeedback = true
        },
        tryAgain: function () {
            this.showFeedback = false;
        }
    },
    template: `
        <div>
            <form v-if="!showFeedback" id="answerblock" v-on:submit.prevent="checkAnswer">
                <label>{{qText}}<input v-model="userAns" /></label>
                <button type="submit" >Check Answer</button>
            </form>
            <div v-if="showFeedback">
                <label>{{feedback}}</label>
                <button v-if="showFeedback && !userCorrect" v-on:click="tryAgain">Try again</button>
            </div>
        </div>
    `
})