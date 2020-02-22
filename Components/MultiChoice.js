Vue.component('multi-choice', {
    props: ['qData'],
    template: `
        <div>
            <h2>{{ qData.qText }}</h2>
            <button 
              v-for="b in qData.options" 
              v-on:click="$emit('answer-given', b, qData.answer)">{{b}}</button>
            <br>
        </div>
    `
})
