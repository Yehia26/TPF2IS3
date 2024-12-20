import { get } from "http"
import { getTypeExercises, getDifficultyExercises, getMuscleExercices, getAll, getCollection, getAlltypes, getAllMuscles, getAllDifficulties } from "../services/Api-services.js"
import fs from 'fs/promises'

export const CollectionController = async (req, res) => {
    try {
        const save = await getCollection(); 
        if(save.status !=  200){
            return res.status(400).json({message: 'impossible de récupérer les données'})
        }
        else{
            return res.status(200).json({message: save.message})
        }

    } catch (error) {
        console.log('Impossible de récupèrer les données: ', error)
        return res.status(500).json({message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.'})
    }
 }

export const HomeController = async (req, res) => {
   
        try {
              const result = await getAll()
                if(result.status != 200){
                    return res.status(400).json({message: 'impossible de récupérer les données'})
                }
                else if(!result.data) {
                    return res.status(404).json({message: 'Les données demandées sont introuvables.'})
                }
                console.log('les données sont envoyées')
                return res.status(200).json(result.data)

        } catch (error) {
            console.log('Impossible de récupèrer les données: ', error)
            return res.status(500).json({message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.'})
        }
}


export const TypeController = async (req, res) => {

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




export const DifficultyController = async (req, res) => {
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


export const MuscleController = async (req, res) => {
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
        return res.status(500).json({message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.'})
    }
}


export const AllTypesController = async (req, res) => { 
    try {
        const result = await getAlltypes()
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

export const AllMusclesController = async (req, res) => {

    try {
        const result = await getAllMuscles()
        if(result.status != 200){
            return res.status(400).json({message: 'impossible de récupérer les données'})
        } 
        else if(!result.data) {
            return res.status(404).json({message: 'Les données demandées sont introuvables.'})
        }
        return res.status(200).json(result.data)
    } catch (error) {
        return res.status(500).json({message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.'})
    }

 }

 export const AllDifficultiesController = async (req, res) => { 

    try {
        const result = await getAllDifficulties()
        if(result.status != 200){
            return res.status(400).json({message: 'impossible de récupérer les données'})
        } 
        else if(!result.data) {
            return res.status(404).json({message: 'Les données demandées sont introuvables.'})
        }
        return res.status(200).json(result.data)
    } catch (error) {
        return res.status(500).json({message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.'})
    }

 }