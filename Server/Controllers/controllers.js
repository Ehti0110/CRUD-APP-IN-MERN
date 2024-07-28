import userModel from "../Schema/userSchema.js";


// Add User
export const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new userModel(user);
    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// Get All Users
export const getUsers = async (request, response) => {
    try {
        const users = await userModel.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

// Get User By ID
export const getUser = async (request, response) => {
    // console.log(request.params.id)
    try {
        //   const user = await  userModel.find({_id: request.params.id});
        // OR 
        const user = await userModel.findById(request.params.id)
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

// Edit User By ID
export const editUser = async (request, response) => {
    const user = request.body;
    const edituser = new userModel(user);
    try {
        await userModel.updateOne({_id: request.params.id}, edituser)
        response.status(201).json(editUser);


    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// Delete User By ID
export const deleteUser = async (request, response) => {
    try {
        await userModel.deleteOne({_id: request.params.id})
        response.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}