export const validateMemberData = (req, res, next) => {
  const member = req.body;

  if (!member.name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  if (member.name.length > 25) {
    return res.status(400).json({
      message: "Name length must be less than 25 characters",
    });
  }
  next();
};
