const fs = require('fs-extra');
const { dataUser, today } = require('./sync');

function main() {
  fs.outputFile(
    'dataCallback/callback.txt',
    'hallo ini callback data Author : farhan',
    () => {
      fs.copy(
        'dataCallback/callback.txt',
        'datacallback/callbackBackup.txt',
        () => {
          fs.appendFile(
            'dataCallback/callbackBackup.txt',
            `\nIni file callback di backup  ${today()}`,
            () => {
              fs.outputJson('dataCallback/callback.json', dataUser, () => {
                fs.readJson(
                  'dataCallback/callback.json',
                  dataUser,
                  (err, dataJson) => {
                    console.log(dataJson);
                    fs.readFile(
                      'dataCallback/callbackBackup.txt',
                      'utf8',
                      (err, data) => {
                        console.log(data);
                      }
                    );
                  }
                );
              });
            }
          );
        }
      );
    }
  );
}

main();
