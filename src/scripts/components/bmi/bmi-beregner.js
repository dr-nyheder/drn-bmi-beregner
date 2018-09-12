'use strict'
import {select, selectAll, create} from '../../utils/trix-utils';

export default class BmiBeregner{
    constructor(){
        // console.log('Ja, du er tyk!');
        this.build();
    }
    build(){
        let wrappers = selectAll('[drn-bmi-beregner]:not(.initialised)');

        
        for (var i = 0; i < wrappers.length; ++i) {
            // console.log('d', i);
            const wrapper = wrappers[i];

            wrapper.classList.add('initialised');
            const innercontainer = create('div', wrapper, 'drn-bmi-inner-container');
            this.startContainer = create('div', innercontainer, 'drn-bmi-start-container');
            const question = create('div', this.startContainer, 'drn-bmi-question');
            question.innerHTML = wrapper.dataset.startText;
            console.log(wrapper.dataset.startText)


            const hfield = create('input', this.startContainer, ['drn-bmi-field']);
            hfield.type = 'number'
            hfield.placeholder = 'Højde i cm.'

            const wfield = create('input', this.startContainer, ['drn-bmi-field']);
            wfield.type = 'number'
            wfield.placeholder = 'Vægt i kg.'

            
            const button = create('div', this.startContainer, 'drn-bmi-button');
            const result = create('div', this.startContainer, 'drn-bmi-result');
            button.innerHTML = 'Beregn';
            button.addEventListener('click', ()=>{
                console.log(isNaN(hfield.value));
                if(hfield.value === '' || isNaN(hfield.value)){
                    result.innerHTML = `Du skal indtaste talværdier i felterne`;
                    hfield.focus();
                }else if(wfield.value === '' || isNaN(wfield.value)){
                    result.innerHTML = `Du skal indtaste talværdier i felterne`;
                    wfield.focus();
                }else{
                    result.innerHTML = `Dit BMI er: ${this.calculate(hfield.value, wfield.value)}`;
                }
                //button.classList.add('hidden');
            })

        }
    

    }
    calculate(h, w){
        console.log('Calculate', h, w);
        return (w / Math.pow((h*.01), 2)).toFixed(2).toString().replace('.',',');
    }
}