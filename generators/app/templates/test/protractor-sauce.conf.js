require('babel-core/register');

exports.config = {
    specs: ['e2e/*.spec.js'],

    sauceUser: 'hmps',
    sauceKey: 'ac28ba44-17f5-4d99-9069-53acac0b8563',

    multiCapabilities: [{
        'browserName': 'firefox',
    }, {
        'browserName': 'chrome',
    }],
};
