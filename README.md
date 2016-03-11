# less-setup
***light node.js template to just start coding***

###used libraries:
 - [express](https://github.com/strongloop/expressjs.com)
 - [interpol](https://github.com/kode4food/interpol)
 - [knex](https://github.com/tgriesser/knex)
 - [moron](https://github.com/Vincit/moron.js/)
 - [pg](https://github.com/brianc/node-postgres)

###how to create new views/endpoints
1) create a new file (```example_file.js```) in ```./endpoints```
```javascript
module.exports = {a_key:'a value'};
```
2) create a new file (same title: ```example_file.html```) in ```./views```
```html
<div>a_key</div>
```
3) create a new endpoint in ```./server.js``` and reference to ```example_file```
```javascript
app.get('/example_endpoint', function(req, res){
  res.send(ve.render('example_file')); //reference to example_file.js and example_file.html
})
```
```ve_mapper.js``` is doing the rest

4) open ```localhost:3000/example_endpoint``` in your browser after starting your server
```
a value
```
