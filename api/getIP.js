module.exports = (req, res) => {
  res.send(req.header["x-real-ip"])
}
