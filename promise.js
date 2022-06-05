const fs = require('fs-extra');
const { dataUser, today } = require('./sync');

function mainPromise() {
  fs.outputFile('dataPromise/promise.txt', 'hallo ini pormise')
    .then(() => {
      return fs.copy(
        'dataPromise/promise.txt',
        'dataPromise/promiseBackup.txt'
      );
    })
    .then(() => {
      return fs.appendFile(
        'dataPromise/promiseBackup.txt',
        `\nIni file di backup ${today()}`
      );
    })
    .then(() => {
      return fs.readFile('dataPromise/promiseBackup.txt', 'utf8');
    })
    .then((data) => {
      console.log(data);
    });
  fs.outputJson('dataPromise/promise.json', dataUser)
    .then(() => fs.readJson('dataPromise/promise.json'))
    .then((data) => {
      console.log(data); // => JP
    });
}

mainPromise();
