module.exports = (req, res) => {
  res.send(req.headers["x-real-ip"])
}
