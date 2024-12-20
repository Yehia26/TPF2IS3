import axios from "axios";
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from "url";
import fs  from 'fs/promises'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({path: path.resolve(__dirname, '..', '..', '.env')})



//Instances axios
const ApiExercices = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'X-Api-Key': process.env.API_KEY
    }
})
export async function getCollection(){
    let exercises = [];
    const type = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'strength', 'strength']
    const muscle = ['abdominals', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps']

    // Collection de données selon le type
    for (const t of type) {
        const result = await ApiExercices.get('', {
            params: {
                type: t
            }
        });
        result.data.map((item) => { 
            exercises.push(item)
        })
    }
    

    // Collection de données selon le muscle
    for (const m of muscle) {
        const result = await ApiExercices.get('', {
            params: {
                muscle: m
            }
        });
        result.data.map((item) => {
            exercises.push(item)
        })  
    }

    let data = await fs.readFile('./data/db.json', 'utf-8');
    if(data.trim().length == 0){
       data = JSON.stringify(exercises, null, 2)
       fs.writeFile('./data/db.json', data, 'utf-8')
    }
    else {
        const dataFile = JSON.parse(data)
        exercises.map((item) => {
            dataFile.push(item)
        })
        fs.writeFile('./data/db.json', JSON.stringify(dataFile, null, 2), 'utf-8')
    }
  
    return {status: 200, message: 'Les données ont été sauvegardées avec succès'};
}

// Sauvegarde des données dans un fichier json
async function saveTojson(collection){
    try {
        const data = await fs.readFile('./data/db.json', 'utf-8')
        return true;
        
    } catch (error) {    
            throw new Error('Impossible de sauvegarder les données', error)
    }
}
  
       
    
// Récupération des données

export async function getAll() {
    try {
        let data = [];
        const dataFile = await fs.readFile('./data/db.json', 'utf-8');
        
        if (dataFile.trim().length == 0) {
            return { status: 404, message: 'Les données demandées sont introuvables.' };
        } else {
            const exercises = JSON.parse(dataFile);
            exercises.map((item) => {
                data.push(item);
            });
            return { status: 200, data: data };
        }
    } catch (error) {
        return { status: 502, message: 'Le service est temporairement indisponible' };
    }
}
    // Récupération des données selon le type
    export async function getTypeExercises (name){
        try {
           const dataFile = await fs.readFile('./data/db.json', 'utf-8');

           if(dataFile.trim().length == 0){
               return {status: 404, message: 'Les données demandées sont introuvables.'}

              }
              else {
                const exercises = JSON.parse(dataFile)
                const result = exercises.filter((item) => item.type == name)
                return {status: 200, data: result}
              }

        } catch (error) {
            return {status: 502, message: 'Le service est temporairement indisponible'}
        }
    }
    // Récupération des données selon la difficulté
   export async function getDifficultyExercises(level){
        try {
            const datFile = await fs.readFile('./data/db.json', 'utf-8');
            if(datFile.trim().length == 0){
                return {status: 404, message: 'Les données demandées sont introuvables.'}
            }
            else {
                const exercises = JSON.parse(datFile)
                const result = exercises.filter((item) => item.difficulty == level)
                return {status: 200, data: result}
            }
            
        } catch (error) {
            return {status: 502, message: 'Le service est temporairement indisponible'}
        }
    }
   
    // Récupération des données selon le muscle
export const  getMuscleExercices= async (muscle) => {
    try {
            const dataFile = await fs.readFile('./data/db.json', 'utf-8');
            if(dataFile.trim().length == 0){
                return {status: 404, message: 'Les données demandées sont introuvables.'}
            }
            else {
                const exercises = JSON.parse(dataFile)
               const result = exercises.filter((item) => item.muscle == muscle)
                return {status: 200, data: result}  
            }

    } catch (error) {
        return {status: 502, message: 'Le service est temporairement indisponible'}
    }
}

export const getAlltypes = async () => {
    try {
            const dataFile = await fs.readFile('./data/db.json', 'utf-8');

            if(dataFile.trim().length == 0){
                return {status: 404, message: 'Les données demandées sont introuvables.'}
            }
            else {
                let result = [];
                const exercises = JSON.parse(dataFile)
                 exercises.map((item) => {
                    if(item.type){
                        if(!result.includes(item.type)){
                            result.push(item.type)
                        }
                    }
                })
                return {status: 200, data: result}  
            }

    } catch (error) {
        return {status: 502, message: 'Le service est temporairement indisponible'}
    }
}


export const getAllMuscles = async () => { 
    try {
        const dataFile = await fs.readFile('./data/db.json', 'utf-8');
        if(dataFile.trim().length == 0){
            return {status: 404, message: 'Les données demandées sont introuvables.'}
        }
        else {
            let result = [];
            const exercises = JSON.parse(dataFile)
            exercises.map((item) => {
                if(item.muscle){
                    if(!result.includes(item.muscle)){
                        result.push(item.muscle)
                    }
                }
            })
            console.log('les données sont envoyées')
            return {status: 200, data: result}  
        }

} catch (error) {
        return {status: 502, message: 'Le service est temporairement indisponible'}
}
}

export const getAllDifficulties = async () => { 
    try {
        const dataFile = await fs.readFile('./data/db.json', 'utf-8');
        if(dataFile.trim().length == 0){
            return {status: 404, message: 'Les données demandées sont introuvables.'}
        }
        else {
            let result = [];
            const exercises = JSON.parse(dataFile)
            exercises.map((item) => {
                if(item.difficulty){
                    if(!result.includes(item.difficulty)){
                        result.push(item.difficulty)
                    }
                }
            })
            return {status: 200, data: result}  
        }

} catch (error) {
        return {status: 502, message: 'Le service est temporairement indisponible'}
}
}