import angular from 'angular';

import ExampleCtrl from './javascript/example.controller';
import exampleDirective from './javascript/example.directive';

import './stylesheets/styles.css!';

var moduleName = 'Apsis.modules.example';

angular.module(moduleName, ['ng'])
    .controller('ExampleController', ExampleCtrl)
    .directive('apsisExampleDirective', exampleDirective);

export default moduleName;