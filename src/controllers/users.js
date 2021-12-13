const pool = require('../config/index');

const getUsers = (request, response) => {
    try {
        pool.query('SELECT * FROM users', (error, result) => {
            if(error) {
                throw errors
            }
            response.status(200).json(result.rows);
        })
    } catch (error) {
        console.log(error.message)
    }
}

const getUsersById = (request, response) => {
    try {
        const id = parseInt(request.params.id);

        pool.query('SELECT * FROM users WHERE id = $1', [id], (error, result) => {
            if(error){
                throw error
            }
            response.status(200).json(result.rows)
        })
    } catch (error) {
        console.log(error.message);
    }
}

const createUser = (request, response) => {
    try {
        const {name, email} = request.body;

        pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, result) => {
            if (error){
                throw error
            }
            console.log({result, row:result.rows});
            response.status(201).send('user successfully created');
        })
    } catch (error) {
        console.log(error.message);
    }
}

const updateUser = (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const {name, email} = request.body;

        pool.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3',
            [name, email, id],
            (error, result) => {
                if(error) {
                    throw error
                }
                response.status(200).send('user successfully updated');
            }
        )

    } catch (error) {
        console.log(error.message);
    }
}
const deleteUser = (request, response) => {
    try {
        const id = parseInt(request.params.id);

        pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
            if (error){
                throw error
            }
            response.status(200).json({message: 'user have been deleted'});
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {getUsers, getUsersById, createUser, updateUser, deleteUser};