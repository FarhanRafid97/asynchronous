const fs = require('fs-extra');
const { dataUser, today } = require('./sync');

async function main() {
  await fs.outputFile(
    'dataAsyncAwait/user.txt',
    `Nama = farhan \n lokasi:padang \n true`
  );
  await fs.copy('dataAsyncAwait/user.txt', 'dataAsyncAwait/userBackup.txt');
  await fs.appendFile(
    'dataAsyncAwait/userBackup.txt',
    `\ndata user  di Backup pada tanggal = ${today()}`
  );
  await fs.outputJson('dataAsyncAwait/user.json', dataUser);
  const dataJson = await fs.readJson('dataAsyncAwait/user.json');
  console.log(dataJson);

  const data = await fs.readFile('dataAsyncAwait/userBackup.txt', 'utf8');
  console.log(data);
}

main();
