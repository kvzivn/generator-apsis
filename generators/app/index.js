/* node: true */

var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    initializing: function() {
        // this.sourceRoot(path.join(__dirname, '../../templates/app'));

        // this.argument('appname', {type: String, required: false});
        // this.appname = this.appname || path.basename(process.cwd());
        // this.appname = this._.camelize(this._.slugify(
        //     this._.humanize(this.appname)));
    },
    promptUser: function() {
        var done = this.async();

        // have Yeoman greet the user
        console.log(this.yeoman);

        var prompts = [{
            name: 'appName',
            message: 'What is your modules\'s name ?'
        }];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;

            done();
        }.bind(this));
    },
    writing: {
        files: function() {
            var context = {
                moduleName: this.appName,
                ModuleName: this.appName.charAt(0).toUpperCase() + this.appName.slice(1)
            };
            // this.template('_editorconfig', '.editorconfig');
            this.template('_gitignore', '.gitignore');
            this.template('_jscsrc', '.jscsrc');
            this.template('_jshintrc', '.jshintrc');
            this.template('gulpfile.js');
            this.template('jspm.conf.js');
            this.template('_templates/_package.json', 'package.json', context);
            this.template('_templates/_moduleName.module.js', 'src/' + this.appName + '.module.js', context);
            this.template('_templates/_demo.js', 'demo/demo.js', context);
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
