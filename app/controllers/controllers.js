import ApiServe from "../services/Api-server"

const exercicesApi = new ApiServe()

const   getType = async (req, res) => {
    const type = req.params.type
    const result = await this.apiCars.get(`type=${type}`)
    return res.send(result.data)
}


const getDifficulty = (req, res) => {

}

