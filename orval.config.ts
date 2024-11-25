import { defineConfig } from 'orval';

export default defineConfig({
    syncfusionAdmin: {
        output: {
            mode: 'tags-split',
            mock: true,
            target: './src/services/apiService.ts',
            schemas: './src/interfaces/api',
            client: 'axios',
            override: {
                mutator: {
                  path: './src/api/api-interceptor.ts',
                  name: 'setupApi',
                },
              },
        },
        input: {
            target: './src/api/swagger.json'
        },
        generateEachHttpStatus: true
    }
});
