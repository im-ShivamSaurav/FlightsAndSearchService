const { CityService }= require("../services/index");

const cityService = new CityService;

const create = async (req , res ) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(200).json({
            data:city,
            status:  true,
            message: "City successfully created.",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            status: false,
            message: "Failed to create city",
            err: error
        })
    }
}

const destroy = async (req , res ) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            status:  true,
            message: "City successfully deleted.",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            status: false,
            message: "Failed to delete city",
            err: error
        })
    }
}

const update = async (req , res ) => {
    try {
        const city = cityService.updateCity(req.body,req.params.id);
        return res.status(200).json({
            data:city,
            status:  true,
            message: "City successfully updated.",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            status: false,
            message: "Failed to update city",
            err: error
        })
    }
}

const get = async (req , res ) => {
    try {
        const response = cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            status:  true,
            message: "City successfully fetched.",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            status: false,
            message: "Failed to fetch city",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}