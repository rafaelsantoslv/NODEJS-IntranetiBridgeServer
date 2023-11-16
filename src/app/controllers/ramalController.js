const getAllUsers = async (req, res) => {
  console.log("endpoint ramal");
  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getAllUsers,
};
