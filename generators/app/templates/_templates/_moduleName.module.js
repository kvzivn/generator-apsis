import { exampleDirective } from './javascript/example.directive';

import './stylesheets/styles.css!';

var <%= ModuleName %> = angular.module('Apsis.modules.<%= moduleName %>', ['ng'])
    .directive('aExampleDirective', exampleDirective);

export { <%= ModuleName %> };
