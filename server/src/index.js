import app from './app';

async function main() {
  // configuracion del puerto
  const port = process.env.port || 4000;
  await app.listen(port);
  console.log(`Running on port: ${port}`)
}

main();