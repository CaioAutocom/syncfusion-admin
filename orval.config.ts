import { defineConfig } from 'orval';

export default defineConfig({
    syncfusionAdmin: {
        output: {
            mode: 'tags-split',
            mock: true,
            target: './src/api/Identity.ts',
            schemas: './src/interfaces/api/Identity',
            client: 'vue-query',
            override: {
                mutator: {
                  path: './src/api/api-interceptor.ts',
                  name: 'customInstance',
                },
              },
        },
        input: {
            target: './src/api/swagger.json'
        }
    }
});
