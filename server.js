const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/employees', require('./routes/employees'));
app.use('/workflows', require('./routes/workflows'));
app.use('/tasks', require('./routes/tasks'));
app.use('/approvals', require('./routes/approvals'));
app.use('/logs', require('./routes/logs'));

app.get('/', (req, res) => {
  res.json({ message: "HRFlow API Running Successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));