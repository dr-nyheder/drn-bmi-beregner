'use strict'
import {select, selectAll, create} from '../../utils/trix-utils';

export default class BmiBeregner{
    constructor(){
        console.log('Ja, du er tyk!');
        this.build();
    }
    build(){
        let wrappers = selectAll('[drn-bmi-beregner]:not(.initialised)');

        
        for (var i = 0; i < wrappers.length; ++i) {
            console.log('d', i);
            const wrapper = wrappers[i];

            wrapper.classList.add('initialised');
            const innercontainer = create('div', wrapper, 'drn-bmi-inner-container');
            this.startContainer = create('div', innercontainer, 'drn-bmi-start-container');
            const question = create('div', this.startContainer, 'drn-bmi-question');
            question.innerHTML = 'Check dit BMI';


            const button = create('div', this.startContainer, 'drn-bmi-button');
            button.innerHTML = 'Start';
            button.addEventListener('click', ()=>{
                button.classList.add('hidden');
                this.begin();
            })
        }
    

    }
    begin(){
        console.log('Begin!');
    }
}