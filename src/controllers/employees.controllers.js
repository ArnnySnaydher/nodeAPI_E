
import { Pool } from '../db.js'
export const getEmployees = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await Pool.query('SELECT * FROM employee WHERE id = ?', [id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employeee not found'
        })
        res.send(rows[0])
        console.log(id)
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }

}

export const postEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body
        const [rows] = await Pool.query('INSERT INTO employee (name,salary) VALUES (?,?)', [name, salary])
        res.send({ id: rows.insertId, name, salary })
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }

}

export const patchtEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const { name, salary } = req.body
        const [result] = await Pool.query('UPDATE employee SET name=IFNULL(?,name) , salary=IFNULL(?,salary) WHERE id = ?', [name, salary, id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: "Employee not found"
        })

        const [rows] = await Pool.query('SELECT * FROM employee WHERE id =?', id)
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }

}

export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const [result] = await Pool.query('DELETE FROM employee WHERE id=?', [id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: "employee not found"
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }

}