const Box = require('../models/Box');

class BoxController {
    async store(req, res) {

        //const box = Box.create({title: "Rocket seat"});
        console.log(req.body);
        const box = Box.create(req.body)

        return res.json(await box);

    }
    async show(req, res) {
        console.log('Teste')
        //const box = await Box.findById(req.params.id).populate('files');
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } } //-1 decrescente e 1 crescente
        });
        if (box)
            return res.json(box);
        else
            return res.send('retornou nulo');
    }
}



module.exports = new BoxController();