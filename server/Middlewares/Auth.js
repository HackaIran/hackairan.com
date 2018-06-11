class Auth{

    static mustBeLoggedIn(req,res,next){
        if(!req.isAuthenticated()) return res.redirect('/user/login?redirect='+req.path);
        res.locals.user = req.user;        
        next();
    }

    static mustNotBeLoggedIn(req,res,next){
        if(req.isAuthenticated()) return res.redirect('/user/panel');
        next();
    }
    
}

module.exports = Auth;