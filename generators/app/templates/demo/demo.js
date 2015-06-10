import angular from 'angular';

import exampleModule from 'src/example.module';

angular.module('demo', ['ng', exampleModule.name]);
