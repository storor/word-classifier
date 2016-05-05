### Project conventions

Editor settings described in `.editorconfig` file. In `.eslintrc` described linting rules for .js code.
Checkout [eslint](http://eslint.org/) and [editorconfig](http://editorconfig.org/) for more info.

### Install
    
    npm install

### Test
    
To test code use ether
    
    jasmine
    
 or
 
    gulp test
    

Gulp task will also lint source code and throw error if linting rules are violated.

### Minify

To minify code run

    gulp minify
    
It will show size of original file and compiled to compare.
