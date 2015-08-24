/* eslint-env node */
import { watch, serve, stylus, clean, eslint, sequence } from 'strawpedo';

// If you need nib and ui-components, install nib and glob via npm and uncomment
// these lines.

// import nib from 'nib';
// import glob from 'glob';

// let stylusIncludePath = glob.sync(process.cwd() + '/jspm_packages/apsis/ui-components*/');
// let stylusImportPaths = [
//             'nib',
//             stylusIncludePath + 'helpers/*.styl',
//             stylusIncludePath + 'settings/*.styl'
// ]
//
// stylusOptions = {
    // use: nib(),
    // include: stylusIncludePath,
    // import: stylusImportPaths,
    // compress: false
// }

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
