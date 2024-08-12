const pool = require('./db');

exports.getBanner = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM banner LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
};

exports.updateBanner = async (req, res) => {
  const { description, timer, link, isVisible } = req.body;
  try {
    await pool.query(
      'UPDATE banner SET description = $1, timer = $2, link = $3, "isVisible" = $4 WHERE id = 1',
      [description, timer, link, isVisible]
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database update failed' });
  }
};
