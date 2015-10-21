require('babel-core/register');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/e2e.spec.js'],
};
