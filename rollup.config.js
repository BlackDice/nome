import babel from 'rollup-plugin-babel'

export default {
	entry: 'src/nome.js',
	format: 'cjs',
	plugins: [babel()],
	dest: 'dist/nome.js',
}
