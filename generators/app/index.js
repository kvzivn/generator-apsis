/* jshint node: true */

var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.Base.extend({
    initializing: function() {
        // this.sourceRoot(path.join(__dirname, '../../templates/app'));

        this.argument('appname', {type: String, required: false});
        this.appname = this.appname || path.basename(process.cwd());
        this.appname = this._.camelize(this._.slugify(
            this._.humanize(this.appname)));
    },
    writing: {
        files: function() {
            // this.template('_editorconfig', '.editorconfig');
            this.template('_gitignore', '.gitignore');
            this.template('_jscsrc', '.jscsrc');
            this.template('_jshintrc', '.jshintrc');
            this.template('gulpfile.js');
            this.template('jspm.conf.js');
            this.template('package.json');
            this.template('README.md');
        },
        directories: function() {
            this.directory('demo');
            this.directory('src');
            this.directory('test');
        }
    },
    install: function() {
        this.installDependencies({
            bower: false,
            npm: true,
            skipInstall: this.options['skip-install']
        });
    }
});
