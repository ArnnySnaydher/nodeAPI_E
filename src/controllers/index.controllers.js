import {Pool} from '../db.js'

export const getDatabase = async (req,res) => {
    const [result] = await Pool.query('SELECT "HELLO WORLD" AS RESULT')
    res.json(result)
}