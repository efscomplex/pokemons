/** @type {import("snowpack").SnowpackUserConfig } */
import env from './env.mjs'

export default {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-sass',
        [
            '@snowpack/plugin-typescript',
            {
                ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
            },
        ],
    ],
    alias: {
        '@': './src',
        ui: './src/components/ui',
    },
    env,
    routes: [
        {
            match: 'routes',
            src: '.*',
            dest: '/index.html',
        },
    ],
}
