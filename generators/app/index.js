/* node: true */

var yeoman = require('yeoman-generator');
var path = require('path');
var logo = require('./apsis-logo');

module.exports = yeoman.generators.Base.extend({
    initializing: function() {},
    promptUser: function() {
        var done = this.async();

        console.log(logo);
        console.log('Hellu! Let\'s create your component!');

        var prompts = [
            {
                name: 'appName',
                message: 'What is your modules\'s name?'
            },
            {
                name: 'appAuthor',
                message: 'What is the author\'s name?'
            },
            {
                name: 'appDesc',
                message: 'Give a brief description of your module.'
            }
        ];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;
            this.appAuthor = props.appAuthor;
            this.appDesc = props.appDesc;

            done();
        }.bind(this));
    },
    writing: {
        files: function() {
            var context = {
                authorName: this.appAuthor,
                moduleDesc: this.appDesc,
                moduleName: this.appName,
                ModuleName: this.appName.charAt(0).toUpperCase() + this.appName.slice(1)
            };
            this.template('_gitignore', '.gitignore');
            this.template('_eslintrc', '.eslintrc');
            this.template('_eslintignore', '.eslintignore');
            this.template('_templates/_tpl.html', 'src/templates/' + this.appName + '.tpl.html');
            this.template('gulpfile.babel.js');
            this.template('config.js');
            this.template('_templates/_package.json', 'package.json', context);
            this.template('_templates/_moduleName.module.js', 'src/' + this.appName + '.module.js', context);
            this.template('_templates/_directive.js', 'src/javascript/' + this.appName + '.directive.js', context);
            this.template('_templates/_demo.js', 'demo/demo.js', context);
            this.template('_templates/_README.md', 'README.md', context);
        },
        directories: function() {
            this.directory('_git', '.git');
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
