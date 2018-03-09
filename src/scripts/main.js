require('../styles/styles.scss');

import BmiBeregner from './components/bmi/bmi-beregner';

function init() {

    const bb = new BmiBeregner();

}
document.addEventListener('DOMContentLoaded', () => {
    init(); // Udkommenteres til launch i webdok, da vi ikke får event dér
});

