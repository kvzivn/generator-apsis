import { <%= moduleName %>Directive } from './javascript/<%= moduleName %>.directive';

import './stylesheets/styles.css!';

const <%= moduleName %> = angular.module('Apsis.modules.<%= moduleName %>', ['ng'])
    .directive('a<%= ModuleName %>Directive', <%= moduleName %>Directive);

export { <%= moduleName %> };
