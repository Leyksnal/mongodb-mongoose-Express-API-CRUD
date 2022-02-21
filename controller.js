// import the model from the model file
const model = require('./model')


// Creat an object and send it to the database
const poster = async (req, res) =>{
    try{
        // declaring the create method
        const usersInput = await model.create({
            // mapping the schema to the postman body
            rank: req.body.rank,
            fullname: req.body.fullname,
            course: req.body.course,
            age: req.body.age
        })
        
        res.status(201).json({message: "Created Succefully", data: usersInput})
    }catch(err){
        res.status(404).json({message: err.message})
    }
}


// To get all the names from the database
const getAll = async (req, res) =>{

    try{
        // Apply the find method
        const all = await model.find()
        res.status(200).json({message: `The names of people we have in the database`, data: all})
    }catch(err){

        res.status(404).json({message: err.message})
    }
}



module.exports = {
    poster,
    getAll
}










// To read one
// const getOne = async (req, res)=>{

//     try{

//         // rank for url parameters
//         const id = parseInt(req.params.id)
//         // get hold of the ranks
//         const person = model.find((el) => el.rank === id)
        
//         if(!rank){
//             res.status(404).json({message: `your request cannot be completed: ${rank}`})
//         }else{
//             res.status(200).json({message: `yes we have the name`, data: person})
//         }
        
//     }catch(err){
//         res.status(404).json({message: err.message})
//     }
// }