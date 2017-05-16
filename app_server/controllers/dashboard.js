module.exports.home = function(req, res) {
    res.render('home', {
        title: 'Graff Veterinary Clinic'
    });
}
