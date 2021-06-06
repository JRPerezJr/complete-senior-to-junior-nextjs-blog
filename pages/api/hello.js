const handler = (req, res) => {
  res.status(200).json({ text: 'Hello from the other side of the world.' });
};

export default handler;
