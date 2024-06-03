export default function handler(req, res) {
    res.status(500).json({ message: 'This is a simmulation of an error' });
    // res.status(200).json({ message: 'Hello!!!' });
  }
  