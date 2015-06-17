import angular from 'angular';

import ExampleCtrl from './javascript/example.controller';
import exampleDirective from './javascript/example.directive';

import './stylesheets/styles.css!';

var <%= ModuleName %> = angular.module('Apsis.modules.<%= moduleName %>', ['ng'])
    .controller('ExampleController', ExampleCtrl)
    .directive('apsisExampleDirective', exampleDirective);

export { <%= ModuleName %> };