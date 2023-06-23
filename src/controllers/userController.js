import User from "../models/userModel.js";

export const CreateUser = async (req, res) => {
    try {
         console.log('ashish');
        const { Name, email, Contact } = req.body;

        const user = new User({
            Name: Name,
            email: email,
            Contact: Contact
        });

        await user.save();
        res.status(201).json({ message: 'User saved successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}


export const updateUser = async(req,res)=>{
    try {
        await User.findOneAndUpdate({Name:'ashish'},{$set:{Contact:123456780}})
        res.status(201).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
}


export const getUser = async(req,res)=>{
  try {
    const {id} = req.params
    console.log(id);
      const userData = await User.findById({_id:id})
      res.status(201).json({ message: userData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to read user' });
  }
}


export const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params

        await User.deleteOne({_id:id})
        res.status(201).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
}