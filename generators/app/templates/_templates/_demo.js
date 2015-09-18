import { <%= moduleName %> } from 'src/<%= moduleName %>.module';

angular.module('demo', ['ng', <%= moduleName %>.name]);

angular.element(document).ready(() => angular.bootstrap(document, ['demo']));
