import templateHtml from '../templates/<%= moduleName %>.tpl.html!text';

export { <%= moduleName %>Directive };

function <%= moduleName %>Directive() {
    return {
        template: templateHtml,
    };
}
