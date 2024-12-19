import axios from "axios";
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from "url";

const __filename =fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({path: path.resolve(__dirname, '..', '..', '.env')})



  
        const ApiExercices = axios.create({
            baseURL: process.env.BASE_URL,
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        })
    


    export async function getTypeExercises (name){
        try {
            const result = await ApiExercices.get('',{
                params: {
                    type: name
                }
            })
            return result;
        } catch (error) {
            return {status: 502, message: 'Le service est temporairement indisponible'}
        }
    }
   export async function getDifficultyExercises(level){
        try {
            const result = await ApiExercices.get('', {
                params: {
                    difficulty: level
                }
            })
            return result;
            
        } catch (error) {
            return {status: 502, message: 'Le service est temporairement indisponible'}
        }
    }
   
export const  getMuscleExercices= async (muscle) => {
    try {
            const result = await ApiExercices.get('', {
                params: {
                    muscle: muscle
                }
            })
            return result;

    } catch (error) {
        return {status: 502, message: 'Le service est temporairement indisponible'}
    }
}

