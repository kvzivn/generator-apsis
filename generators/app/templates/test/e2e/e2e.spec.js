// If you need angular, angular-mocks and Jasmine-Matchers, uncomment the import
// below.
// import '../helpers/imports';

describe('MODULE NAME', () => {
    beforeEach(() => {
        // If you are using the gulp-config-apsis serve task with the generator
        // folder structure, this is the url to get. Otherwise, modify as needed.
        browser.get('http://localhost:9000/demo');
    });

    describe('when the page loads it', () => {
        it('should have a title that reads "Apsis Demo"', () => {
            expect(true).toEqual(false);
        });
    });

    describe('when the user clicks a button it', () => {
        it('should execute an action', () => {
            expect(true).toEqual(false);
        });
    });

});
