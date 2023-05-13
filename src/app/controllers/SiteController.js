
class SiteController{
    
    index(req,res){
        res.render('table_courses');
    }
    search(req,res){
        res.render('search');
    }

}

module.exports = new SiteController;

