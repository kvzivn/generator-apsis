/* eslint-env node */
import { watch, serve, stylus, clean, eslint, sequence } from 'strawpedo';
import nib from 'nib';
import glob from 'glob';

var stylusIncludePath = glob.sync(process.cwd() + '/jspm_packages/apsis/ui-components*/');
var stylusImportPaths = [
            'nib',
            stylusIncludePath + 'helpers/*.styl',
            stylusIncludePath + 'settings/*.styl'
];


sequence('default', [ 'clean', [ 'stylus', 'eslint' ], 'watch', 'serve' ]);

// TASKS
watch({ name: 'watch', watchers: [
    { path: 'src/stylesheets/*.styl', tasks: ['stylus'] },
    { path: 'src/**/*.js', tasks: ['eslint'] }
]});

stylus({
    name: 'stylus',
    src: 'src/stylesheets/*.styl',
    dest: 'src/stylesheets',
    stylus: {
        use: nib(),
        include: stylusIncludePath,
        import: stylusImportPaths,
        compress: false
    }
});

serve({
    port: 9000,
    startPath: 'demo/',
    files: [
        'demo/*.html',
        'demo/*.js',
        'src/javascript/*.js',
        'src/images/**/*',
        'src/templates/*.html',
        'src/stylesheets/*.css'
    ],
    server: {
        baseDir: ['./'],
        middleware: (req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
        }
    }
});

clean({ paths: 'dist/' });
eslint({ src: 'src/**/*.js' });
