function homeController(){
    // factory functions - object creation pattern
    return {
        index(req, res){
            res.render('home')
        }
    }
}

module.exports = homeController