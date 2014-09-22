module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ["dist", '.tmp'],

        copy: {
            main: {
                expand: true,
                cwd: '',
                src:['app/**','scripts/web-server.js','!app/lib/**','!app/modules/**/*.js','!app/js/**','!app/css/**'],
                dest: 'dist/'
            }
        },

        useminPrepare: {
            html: 'app/index.html'
        },

        usemin: {
            html: ['dist/app/index.html']
        },

        uglify: {
            options: {
                report: 'min',
                mangle: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('adjustBuiltLinks', 'Performing Final Cleanups', function() {

        var indexDist='dist/app/index.html';

        grunt.log.writeln('Performing Final Cleanups');

        var indexContent=grunt.file.read(indexDist);

        indexContent=indexContent.replace('<link rel="stylesheet" href="app/built/app.min.css"/>','<link rel="stylesheet" href="built/app.min.css"/>');

        indexContent=indexContent.replace('<script src="app/built/app.min.js"></script>','<script src="built/app.min.js"></script>');

        grunt.file.write(indexDist, indexContent);

    });


    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
       'clean', 'copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin','adjustBuiltLinks'
    ]);

};