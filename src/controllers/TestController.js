class TestController {
    static async create(req, res) {
        const data = req.body;

        res.status(200).json({
            message: 'created test home page',
            data: true
        });
      }

}

module.exports = TestController;