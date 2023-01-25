
const HomeController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Produtos' });
      }
}

module.exports = HomeController;