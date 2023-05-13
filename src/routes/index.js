const searchRouter = require("./search");  

function route(app){
    
    app.use('/search',searchRouter);

    app.get('/', (req, res) => {
        res.render('table_courses');
    });
    app.get('/search', (req, res) => {
        res.render('search');
    });
    app.post('/search', (req, res) => {
        res.send('');
    });
}

module.exports = route;