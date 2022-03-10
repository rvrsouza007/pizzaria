const sabor = {
    listar:(req, res) => {
        res.render('pizzas.ejs',{pizzas})
    },
    mostrar:(req, res) => {
        let id = req.params.id

        let buscar = pizzas => {
            if(pizzas.id == id){
                return true; 
            }else {
                false;
            } 
        };
        const pizza = pizzas.find(buscar)
        res.render('pizza.ejs',{pizza})
    },
    buscar:(req, res) => {
        let trechoBuscado = req.query.busca;
        if(busca = ''){
            return res.redirect('/')
        }
    }


}


const pizzas = require('../database/Pizzas.json')


module.exports = sabor