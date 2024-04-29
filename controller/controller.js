var usermodel = require('../model/usermodel');

exports.insert = async (req,res) => {
    var data = await usermodel.create(req.body)
        res.status(200).json({
            status:"data insert",
            data
        })
}

// all-data-show
exports.find = async (req, res) => {
    const data= await usermodel.find()
    res.status(200).json({
        status:"data find",
        data
    })
}

// id-data-find 
exports.findid = async (req, res) => {
    const id= req.params.id
    const data= await usermodel.findById(id);
    res.status(200).json({
        status:"data find",
        data
    })
}

// update-data
exports.update_data = async (req, res) => {
    const id= req.params.id;
    const data= await usermodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:"data update",
    })
}

// delete-data
exports.delete_data = async (req, res) => {
    const id= req.params.id
    const data= await usermodel.findByIdAndDelete(id);
    res.status(200).json({
        status:"data delete",
    })
}