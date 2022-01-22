module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(422).json({
      error: err.message,
    });
  }

  if (err.isError) {
    return res.status(422).json({
      error: { message: err.message },
    });
  }

  console.error(err);

  return res.status(500).json({
    error: {
      message: `Internal server error: ${err.message}`,
    },
  });
};
