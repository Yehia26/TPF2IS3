import { getTypeExercises, getDifficultyExercises, getMuscleExercices, getAll } from "../services/Api-services.js"


export const ControllerHome = async (req, res) => {
        try {
                const result = await getAll();

                if(result.status != 200){
                    return res.status(400).json({message: 'impossible de récupérer les données'})
                } 
                else if(!result.data) {
                    return res.status(404).json({message: 'Les données demandées sont introuvables.'})
                }
                return res.status(200).json(result.data) 
        } catch (error) {
            console.log('Impossible de récupèrer les données: ', error)
            return res.status(500).json({message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.'})
        }
}


export const ControlllerType = async (req, res) => {

    try {
            const type = req.params.type // récuperation du paramètre
            
            const result =  await getTypeExercises(type) // resultat du service
            if(result.status != 200){
                return res.status(400).json({message: 'impossible de récupérer les données'})
            } 
            else if(!result.data) {
                return res.status(404).json({message: 'Les données demandées sont introuvables.'})
            }
            return res.status(200).json(result.data) 
  
    }catch(error) {
        console.log('Impossible de récupèrer les données: ', error)
        return res.status(500).json({message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.'})
    }
}




export const ControllerDifficulty = async (req, res) => {
    try {
        const level = req.params.level
        
        const result =  await getDifficultyExercises(level)
        if(result.status != 200){
           return res.status(400).json({message: 'impossible de récupérer les données'})
        } 
        else if(!result.data) {
            return res.status(404).json({message: 'Les données demandées sont introuvables.'})
        }
        return res.status(200).json(result.data) 

}catch(error) {
    console.log('Impossible de récupèrer les données: ', error)
    return res.status(500).json({message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.'})
}
}


export const ControllerMuscle = async (req, res) => {
    try {
        const muscle = req.params.muscle
        
        const result =  await getMuscleExercices(muscle)
        if(result.status != 200){
           return res.status(400).json({message: 'impossible de récupérer les données'})
        }      
        else if(!result.data) {
            return res.status(404).json({message: 'Les données demandées sont introuvables.'})
        }
        return res.status(200).json(result.data) 
    } catch (error) {
        
    }
}


