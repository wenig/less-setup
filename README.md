# less-setup
***light node.js template to just start coding***

###used libraries:
 - [dot](https://github.com/olado/doT)
 - [express](https://github.com/strongloop/expressjs.com)
 - [knex](https://github.com/tgriesser/knex)
 - [moron](https://github.com/Vincit/moron.js/)
 - [pg](https://github.com/brianc/node-postgres)

###how to create new views/endpoints
1) create a new file (```example_file.js```) in ```./endpoints```
```javascript
module.exports = {a_key:'a value'};
```
2) create a new file (same title: ```example_file.dot```) in ```./views```
```html
<div>{{=it.a_key}}</div>
```
3) create a new endpoint in ```./server.js``` and reference to ```example_file```
```javascript
app.get('/example_endpoint', function(req, res){
  res.send(ve.render('example_file')); //reference to example_file.js and example_file.dot
})
```
```ve_mapper.js``` is doing the rest

4) open ```localhost:3000/example_endpoint``` in your browser after starting your server
```
a value
```

###The MIT License (MIT)

Copyright (c) 2015 Phillip Wenig

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.