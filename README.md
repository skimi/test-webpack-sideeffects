Two chunks `chunk1.js` and `chunk2.js`.

Each importing a function of lodash using the package index.js

`import { join } from 'lodash';`

`import { last } from 'lodash';`

Before the option `sideEffects` existed we would expect the complete content of `lodash` to be imported as a single module and not split in the different chunk.
So the recommendation was `import join from 'lodash/join';` to import each module separately.

That's the result of `npm run build-sideEffect` and `/dist-side-effect`.

Now with `sideEffects` option on the chunk1 will contain `join` and chunk2 `last`.
All other functions will be tree-shaked successfully.

That's the result of `npm run build` and `/dist`.
