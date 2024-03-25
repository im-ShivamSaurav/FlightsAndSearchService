const { CityRespository } = require ('../repository/index');

class CityService{
    constructor(){
        this.cityRespository = new CityRespository();
    }

    async createCity(data){
        try {
            const city = await this.cityRespository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went  wrong in the service layer.");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const response = await this.cityRespository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went  wrong in the service layer.");
            throw {error};
        }
    }

    async updateCity(data, cityId){
        try {
            const city = await this.cityRespository.updateCity(data,cityId);
            return city;
        } catch (error) {
            console.log("Something went  wrong in the service layer.");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await this.CityRespository.getCity(cityId);
        } catch (error) {
            console.log("Something went  wrong in the service layer.");
            throw {error};
        }
    }
}
module.exports = CityService;