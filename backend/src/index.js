const app = require('./server')

const port = process.env.port || 3000

// start listening on port
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})

// dotenv modul importja, konfigurációs file beállítása hiányzik még, logolás finomítandó