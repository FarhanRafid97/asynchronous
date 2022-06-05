const fs = require('fs-extra');
const dataUser = [{ id: 1, nama: 'farhan', lokasi: 'padang' }];
const dataJson = { user: dataUser };
const dataUser2 = { id: 2, nama: 'rafid', lokasi: 'padang' };

const newDataJson = dataUser.push(dataUser2);

const today = () => {
  let todayDate = new Date();
  const dd = String(todayDate.getDate()).padStart(2, '0');
  const mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = todayDate.getFullYear();

  return mm + '/' + dd + '/' + yyyy;
};

function main() {
  fs.outputFileSync('data/user.txt', `Nama = farhan \n lokasi:padang \n true`);
  fs.outputJsonSync('data/user.json', dataUser);
  fs.copySync('data/user.txt', 'data/userBackup.txt');
  fs.appendFileSync('data/userBackup.txt', `\nBackup data user ${today()}`);

  const user = fs.readFileSync('data/userBackup.txt', 'utf8');
  console.log(user);
}

main();

module.exports = { dataUser, today };
