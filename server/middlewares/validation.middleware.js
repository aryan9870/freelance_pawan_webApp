const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, {
    abortEarly: true, // first error hi show kare
  });

  if (error) {
    const message = error.details[0].message.replace(/"/g, "");

    return res.status(400).json({
      success: false,
      message: message,
    });
  }
  

  next();
};

export default validate;