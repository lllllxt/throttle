import babel from 'rollup-plugin-babel';
import {
    uglify
} from "rollup-plugin-uglify";
export default {
    input: 'src/throttle.js',
    output: {
        file: 'throttle.min.js',
        format: 'umd',
        name: 'throttle'
    },
    plugins: [
        babel(),
        uglify()
    ]
};