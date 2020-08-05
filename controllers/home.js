exports.get_home = function(req, res, next) {
    res.render('home', { title: 'Home' });
}
exports.submit_lead = function(req, res, next) {
    console.log("Lead Email :", req.body.lead_email);
    res.redirect('/');
}