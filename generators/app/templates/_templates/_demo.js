import angular from 'angular';

import { <%= ModuleName %> } from 'src/<%= moduleName %>.module';

angular.module('demo', ['ng', <%= ModuleName %>.name]);
