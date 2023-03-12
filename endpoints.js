module.exports = function (app) {

    app.get('/users/:id', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint to get a user.'
        // #swagger.parameters['id'] = { description: 'User ID.' }
    
        /* #swagger.parameters['filter'] = {
               in: 'query',
               description: 'Any filter.',
               type: 'string'
        } */
        const filter = req.query.filter
    
        if(false)
            return res.status(404).send(false)
      
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/User" },
               description: 'User found.' 
        } */
        return res.status(200).send(data)
    
    })
    
    app.post('/users', (req, res) => {
        /* #swagger.tags = ['User']
           #swagger.description = 'Endpoint to add a user.' */
    
        /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'User information.',
               required: true,
               schema: { $ref: "#/definitions/AddUser" }
        } */
    
        const newUser = req.body
    
        if (true) {
            // #swagger.responses[201] = { description: 'User registered successfully!' }
            return res.status(201).send(data)
        }
        return res.status(500)    // #swagger.responses[500]
    })
    app.get('/users', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint to get all users.'
        
        if (true) {
            /* #swagger.responses[200] = { 
                   schema: { $ref: "#/definitions/Users" },
                   description: 'List of all users.' 
            } */
            return res.status(200).send(data)
        }
        return res.status(500)    // #swagger.responses[500]
    })

    app.get('/customers/:customerId/orders', (req, res) => {
        // #swagger.tags = ['Orders']
        // #swagger.description = 'Endpoint to get all orders for a customer.'
        // #swagger.parameters['customerId'] = { description: 'Customer ID.' }
        
        const customerId = req.params.customerId;
        
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Orders" },
               description: 'List of all orders for the customer.' 
        } */
        return res.status(200).send(data);
    });

    app.post('/orders', (req, res) => {
        // #swagger.tags = ['Orders']
        // #swagger.description = 'Endpoint to create a new order.'
        
        /* #swagger.parameters['newOrder'] = {
               in: 'body',
               description: 'Order information.',
               required: true,
               schema: { $ref: "#/definitions/AddOrder" }
        } */
        
        const newOrder = req.body;
        
        if (true) {
            // #swagger.responses[201] = { description: 'Order created successfully!' }
            return res.status(201).send(data);
        }
        return res.status(500);    // #swagger.responses[500]
    });

    app.get('/products', (req, res) => {
        // #swagger.tags = ['Products']
        // #swagger.description = 'Endpoint to get all products.'
        
        if (true) {
            /* #swagger.responses[200] = { 
                   schema: { $ref: "#/definitions/Products" },
                   description: 'List of all products.' 
            } */
            return res.status(200).send(data);
        }
        return res.status(500);    // #swagger.responses[500]
    });

    app.get('/products/:productId', (req, res) => {
        // #swagger.tags = ['Products']
        // #swagger.description = 'Endpoint to get a specific product.'
        // #swagger.parameters['productId'] = { description: 'Product ID.' }
        
        const productId = req.params.productId;
        
        if(false)
            return res.status(404).send(false);
      
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Product" },
               description: 'Product found.' 
        } */
        return res.status(200).send(data);
    });
    
    app.put('/orders/:orderId', (req, res) => {
        // #swagger.tags = ['Orders']
        // #swagger.description = 'Endpoint to update an existing order.'
        // #swagger.parameters['orderId'] = { description: 'Order ID.' }
        
        /* #swagger.parameters['updateOrder'] = {
               in: 'body',
               description: 'Order information to be updated.',
               required: true,
               schema: { $ref: "#/definitions/UpdateOrder" }
        } */
        
        const updateOrder = req.body;
        
        if (true) {
            // #swagger.responses[204] = { description: 'Order updated successfully!' }
            return res.status(204).send();
        }
        return res.status(500);    // #swagger.responses[500]
    });
    
    
    
    
    app.put('/users/:id', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint to update a user.'
        // #swagger.parameters['id'] = { description: 'User ID.' }
        
        /* #swagger.parameters['updateUser'] = {
               in: 'body',
               description: 'User information to be updated.',
               required: true,
               schema: { $ref: "#/definitions/UpdateUser" }
        } */
        
        const updateUser = req.body
        
        if (true) {
            // #swagger.responses[204] = { description: 'User updated successfully!' }
            return res.status(204).send()
        }
        return res.status(500)    // #swagger.responses[500]
    })
    
    app.delete('/users/:id', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint to delete a user.'
        // #swagger.parameters['id'] = { description: 'User ID.' }
        
        if (true) {
            // #swagger.responses[204] = { description: 'User deleted successfully!' }
            return res.status(204).send()
        }
        return res.status(500)    // #swagger.responses[500]
    })
    app.get('/api/devices/:id', (req, res) => {
        // #swagger.tags = ['Device']
        // #swagger.description = 'Endpoint to get a device by ID.'
        // #swagger.parameters['id'] = { description: 'Device ID.', in: 'path', required: true }
        // #swagger.responses[200] = { description: 'Device found.', content: { 'application/json': { schema: { $ref: '#/components/schemas/Device' } } } }
        // #swagger.responses[404] = { description: 'Device not found.' }
        Device.findById(req.params.id, (err, device) => {
          return err ? res.status(404).send(err) : res.send(device);
        });
      });
      
      app.put('/api/devices/:id', (req, res) => {
        // #swagger.tags = ['Device']
        // #swagger.description = 'Endpoint to update a device by ID.'
        // #swagger.parameters['id'] = { description: 'Device ID.', in: 'path', required: true }
        // #swagger.requestBody = { description: 'Device information to be updated.', required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/DeviceInput' } } } }
        // #swagger.responses[204] = { description: 'Device updated successfully.' }
        // #swagger.responses[404] = { description: 'Device not found.' }
        // #swagger.responses[500] = { description: 'Error message.' }
        const { name, user, sensorData } = req.body;
        Device.findByIdAndUpdate(
          req.params.id,
          { name, user, sensorData },
          { new: true },
          (err, device) => {
            return err
              ? res.status(404).send(err)
              : res.status(204).send(device);
          }
        );
      });
      
      app.delete('/api/devices/:id', (req, res) => {
        // #swagger.tags = ['Device']
        // #swagger.description = 'Endpoint to delete a device by ID.'
        // #swagger.parameters['id'] = { description: 'Device ID.', in: 'path', required: true }
        // #swagger.responses[204] = { description: 'Device deleted successfully.' }
        // #swagger.responses[404] = { description: 'Device not found.' }
        // #swagger.responses[500] = { description: 'Error message.' }
        Device.findByIdAndDelete(req.params.id, (err, device) => {
          return err
            ? res.status(404).send(err)
            : res.status(204).send('Successfully deleted device.');
        });
      });
            
}    