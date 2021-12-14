Steps: 
```
1. npm init -y
2. npm i typescript
```
To create the tsconfig.json
````
3. npx tsc --init --rootdir src --outdir lib
````
To start the ts compiler in watch mode
```
4. npx tsc --watch
```

5. Create your very first TS file at src/index.ts
6. Check the JS version at lib/index.js

To execute the JS file
```
node lib/index.js
```

Understand the convention used
```
Pascal Case
camelCase
```

Built-in class in JS
```
let regexp = new RegExp('ab+c')
let array = [ 1, 2, 3];
let set = new Set([1,2,3]);
```