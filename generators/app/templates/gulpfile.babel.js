/* eslint-env node */
import { bump, clean, copy, eslint, exec, sequence, serve, stylus, watch } from 'strawpedo';

// If you need nib and Tenko, install nib and glob via npm and uncomment
// these lines.

// NIB AND TENKO
import nib from 'nib';
import glob from 'glob';

const stylusIncludePath = glob.sync(process.cwd() + '/jspm_packages/apsis/tenko*/');


// SEQUENCE TASKS
sequence('default', [ 'npm:install', 'clean', [ 'stylus', 'eslint' ], 'watch', 'serve' ]);
sequence('release', [ 'clean', [ 'stylus:dist', 'eslint' ], 'copy:dist', 'bump' ]);


watch({ name: 'watch', watchers: [
    { path: 'src/stylesheets/*.styl', tasks: ['stylus'] },
    { path: 'src/**/*.js', tasks: ['eslint'] },
]});


/**
 * Compile stylus files.
 *
 * If you are using Nib and Tenko make sure to uncomment that section up top and
 * the three option keys below.
 */
stylus({
    name: 'stylus',
    src: 'src/stylesheets/*.styl',
    dest: 'src/stylesheets',
    stylus: {
        use: nib(),
        include: stylusIncludePath,
        compress: false,
    },
});


stylus({
    name: 'stylus:dist',
    src: 'src/stylesheets/*.styl',
    dest: 'dist/stylesheets',
    stylus: {
        use: nib(),
        include: stylusIncludePath,
        compress: true,
    },
});


/**
 * Kick-off a server instance with the demo
 */
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


/**
 * Clean out the dist folder
 */
clean({ paths: 'dist/' });


/**
 * Lint the JS in the src directory
 */
eslint({ src: 'src/**/*.js' });


/**
 * Copy all JS and HTML files to the dist directory
 */
copy({
    name: 'copy:dist',
    src: [ 'src/**/*.js', 'src/**/*.html' ],
    dest: 'dist/',
});

bump({});

exec({
    name: 'npm:install',
    cmd: 'npm install',
    message: 'Starting npm install. This takes a while, a full record of the operation will be printed to stdout once it completes.',
    stdout: true,
});
