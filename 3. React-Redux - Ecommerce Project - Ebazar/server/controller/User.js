const { User } = require("../model/User.js");

exports.fetchUserById = async (req, res) => {
  const { id } = req.user;
  try {
    const data = await User.findById(id, "name email id addresses role phone image orders address").exec();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json({
      id:data.id,
      email:data.email,
      role:data.role,
      addresses:data.addresses,
      address:data.address,
      name:data.name,
      phone:data.phone,
      image:data.image,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};


