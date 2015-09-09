import { <%= ModuleName %> } from 'src/<%= moduleName %>.module';

angular.module('demo', ['ng', <%= ModuleName %>.name]);
angular.module('demo', ['ng']);
angular.element(document).ready(() => angular.bootstrap(document, ['<%= ModuleName %>']));
