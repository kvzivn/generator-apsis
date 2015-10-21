import { <%= moduleName %>Directive } from './javascript/<%= moduleName %>.directive';

// Uncomment the line below of you have styles to load
// import './stylesheets/styles.css!';

const <%= moduleName %> = angular.module('Apsis.modules.<%= moduleName %>', ['ng'])
    .directive('a<%= ModuleName %>Directive', <%= moduleName %>Directive);

export { <%= moduleName %> };
