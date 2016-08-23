module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
		main: {
			files: [
			  // includes files within path
			  {expand: true, src: ["./ts/**","!./**/*.ts"], dest: "js/", filter: "isFile"}
			],
		},
	},
	clean: {
	  js: ["./ts/**/*.js"]
	},
	ts: {
      default : {
        src: ["**/*.ts", "!typings/**","!components/**","!utils/**","!less/**","!dist/**","!node_modules/**"],
		tsconfig: './tsconfig.json',
		options: {
			sourceMap: false
		}
      }
    },
	less:{
		development: {
			options: {
			  paths: ['./less/']
			},
			files: {
			  './less/rootcss.css': './less/rootcss.less'
			}
		}
	}
  });

  // Load the plugin that provides the "defined tasks [grunt-contrib-copy,grunt-ts]" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks("grunt-ts");

  // Default task(s).
  //grunt.registerTask('default', ['ts','copy','clean']);// use this for release from command line with options as buildType="release"
  grunt.registerTask('default', ['ts','less']);

};