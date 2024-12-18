import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()


class ApiServe {
    constructor(){
        this.apiCars = axios.create({
            baseURL: process.env.BASE_URL,
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        })
    }


    async getType (type){
        try {
            const result = await this.apiCars.get(`type=${type}`)
            return result.data;
        } catch (error) {
            
        }
    }
    async getDifficulty(level){
        try {
            const result = await this.apiCars.get(`difficulty=${level}`)
            return result.data;
            
        } catch (error) {
            
        }
    }
   
}

export default ApiServe;