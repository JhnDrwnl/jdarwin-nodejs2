const main = {
    index:(req, res) => {
        res.render('index');
    },
    john:(req, res) => {
        res.render('john');
    },
    darwin:(req, res) => {
        res.render('darwin');
    },
    jd:(req, res) => {
        res.render('jd');
    },
    lambon:(req, res) => {
        res.render('lambon');
    }
}

module.exports = main;