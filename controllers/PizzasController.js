const sabor = {
    listar:(req, res) => {
        res.render('pizzas.ejs',{pizzas, buscar:''})
    },
    mostrar:(req, res) => {
        let id = req.params.id

        let posicao = pizzas.indexOf (pizzas)

        let idProxima = null
        if (posicao < pizzas.length - 1) {
            idProxima = pizzas[posicao + 1].id
        }

        let idAnterior = null 
        if (posicao > 0) {
            idAnterior = pizzas[posicao - 1].id
        }
        const pizza = pizzas.find(buscar)
        res.render('pizza.ejs',{pizza, posicao})

        let buscar = pizzas => {
            if(pizzas.id == id){
                return true; 
            }else {
                false;
            } 
        };
       
    },
    buscar: (req,res) =>{
        let busca = req.query.q;
        if (busca){
            let result = pizzas.filter(p => p.nome.toUpperCase().includes(busca.toUpperCase()));
            return res.render('../views/pizzas.ejs', { pizzas: result,busca});
        }else{
            return res.redirect('/');
        }
 
     }
        
    
        


}


const pizzas = require('../database/Pizzas.json')


module.exports = sabor