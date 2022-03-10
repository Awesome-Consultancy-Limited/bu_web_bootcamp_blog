const models = require("../models");

module.exports = {
    createCategory: async (req, res) => {
        try {
            let result = await models.categories.create(req.body);
            if (result) return res.json({ success: true, data: result });
        } catch (error) {
            console.log(error);
            res.json({ success: false, data: error });
        }
    },

    updateCategory: async (req, res) => {
        try {
            let updated = await models.categories.update(req.body,
                { where: { id: req.params.id } });
            if (updated[0] == 1) {
                let result = await models.categories.findOne({ where: { id: req.params.id } })
                if (result) return res.json({ success: true, data: result });
            } else {
                return res.json({ success: false, data: "Something went wrong!" });
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, data: error });
        }
    },

    getAllCategories: async (req, res) => {
        try {
            let result = await models.categories.findAll();
            if (result) return res.json({ success: true, data: result });
        } catch (error) {
            console.log(error);
            res.json({ success: false, data: error });
        }
    },

    getCategoryById: async (req, res) => {
        try {
            let result = await models.categories.findOne({ where: { id: req.params.id } });
            if (result) { 
                return res.json({ success: true, data: result });
            } else {
                return res.json({ success: false, data: "Something went wrong" });
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, data: error });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            let result = await models.categories.destroy({ where: { id: req.params.id } });
            if (result) return res.json({ success: true, data: "Deleted Succesfuly" });
        } catch (error) {
            console.log(error);
            res.json({ success: false, data: error });
        }
    }
}
