const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    //Xử lý mã hóa
    //1. Đọc file 
    //2. Mã hóa file
    //3. Generate key + mã hóa k
    //

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
        return res.status(500).send(err);
    }

    res.json({ fileName: file.name});
    });
});

//  Download Endpoint

app.listen(5000, () => console.log('Server Started...'));