import angular from 'angular';
import exampleModule from 'src/example.module';
import 'angular-mocks';

describe('Example module', function() {

    beforeEach(angular.mock.module(exampleModule.name));

});