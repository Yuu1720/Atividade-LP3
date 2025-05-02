
const express = require('express');
const app = express ();
const path = require('path');
const localhost = '127.0.0.1'
const port = 3000;

// arquivos públicos (css, imagens)
app.use('/public', express.static(path.join(__dirname, '/Public/')));

// rotas para as páginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Src/Pages/ThuumHub.html'));
});

app.get('/ProdutoA', (req, res) => {
  res.sendFile(path.join(__dirname,  '/Src/Pages/ProdutoA.html'));
});

app.get('/ProdutoB', (req, res) => {
  res.sendFile(path.join(__dirname,  '/Src/Pages/ProdutoB.html'))
});
app.get('/ProdutoC', (req, res) => {
  res.sendFile(path.join(__dirname,  '/Src/Pages/ProdutoC.html'))
});
app.get('/ProdutoD', (req, res) => {
  res.sendFile(path.join(__dirname,  '/Src/Pages/ProdutoD.html'))
});
 
app.listen(port, () => {
  console.log(`Servidor rodando em http://${localhost}:${port}`);
});
