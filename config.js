import { name as PWD } from './package';

const Paths = {
	images:'app/assets/img/**/*.{jpg,png,gif,svg}',
	styles:'app/assets/sass/**/*.scss',
	scripts:['app/assets/js/**/*.js','!node_modules/**'],
	views:'app/views/**/*.pug'
};

export {Paths};
