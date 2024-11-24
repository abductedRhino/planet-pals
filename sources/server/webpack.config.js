import {resolve} from 'path'
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

export default {
    mode: 'production',
    entry: './background/src/main.js',
    output: {
        path: resolve(import.meta.dirname, 'public', 'js'),
        filename: 'background.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            },
        ],
    },
    optimization: {
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        // Lossless optimization with custom option
                        // Feel free to experiment with options for better result for you
                        plugins: [
                            ["jpegtran", {progressive: true}],
                            ["optipng", {optimizationLevel: 5}],
                        ],
                    },
                },
            }),
        ],
    },
};
