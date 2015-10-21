import templateHtml from '../templates/<%= moduleName %>.tpl.html!text';

function <%= moduleName %>Directive() {
    return {
        template: templateHtml,
    };
}

export { <%= moduleName %>Directive };
