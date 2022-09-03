const express = require('express');
const app = express();

const PORT = process.env.PORT || 9000


app.use(express.json())

const _payloadSs = {
    "name": "ss",
    "count": 0,
};
const _payloadGg = {
    "name": "gg",
    "count": 0,
};

app.get('/counter/:id/add', async (req, res) => {
    const { id } = req.params

    const nameId = id;
    let payload = {};
    if (nameId == 'ss') {
        _payloadSs.count++;
        payload = _payloadSs;
    } else if (nameId == 'gg') {
        _payloadGg.count++;
        payload = _payloadGg;
    } else {
        // no-case
        res.json({ err: 'no-id' }).end();
        console.log('-- no-case --');
        return;
    }

    // const { id } = req.params;
    // res.json({ id });
    // res.send('1');
    res.send(payload.count + '');
});
app.get('/counter/:id/show', (req, res) => {
    const { id } = req.params

    const nameId = id;
    // let payload = {};
    if (nameId == 'ss') {
        res.json(_payloadSs).end();
    } else if (nameId == 'gg') {
        res.json(_payloadGg).end();
    } else {
        // no-case
        res.json({ err: 'no-id' }).end();
        console.log('-- no-case --');
        return;
    }
});
app.get('/counter/:id/clear', (req, res) => {
    const { id } = req.params;
    const nameId = id;
    if (nameId == 'ss') {
        _payloadSs.count = 0;
        res.json(_payloadSs).end();
    } else if (nameId == 'gg') {
        _payloadGg.count = 0;
        res.json(_payloadGg).end();
    } else {
        // no-case
        res.json({ err: 'no-id' }).end();
        console.log('-- no-case --');
        return;
    }
});

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}: : 127.0.0.1:${PORT}`)
})