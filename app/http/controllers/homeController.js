const Menu = require('../../models/menu')


function homeController(){
    // factory functions - object creation pattern
    return {
        async index(req, res) {
            const items = await Menu.find()
            console.log(items);
            return res.render('home', {items: items})

            // Menu.find().then(function(items){
            //     console.log(items)
            //     return res.render('home', {items: items})
            // })
        }
    }
}

module.exports = homeController