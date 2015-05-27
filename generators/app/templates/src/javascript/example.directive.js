'use strict';

import templateHtml from '../templates/example.tpl.html!text';

export default exampleDirective;

function exampleDirective() {
    return {
        name: 'apsisExampleDirective',
        template: templateHtml,
        link: directiveLink
    };


    /////////////////////////////////////


    function directiveLink() {
        console.log('link');
    }

}


