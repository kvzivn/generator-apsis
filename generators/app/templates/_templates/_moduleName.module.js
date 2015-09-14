import { exampleDirective } from './javascript/example.directive';

import './stylesheets/styles.css!';

var <%= moduleName %> = angular.module('Apsis.modules.<%= moduleName %>', ['ng'])
    .directive('aExampleDirective', exampleDirective);

export { <%= moduleName %> };
