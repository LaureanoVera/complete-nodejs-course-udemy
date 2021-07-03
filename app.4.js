const fs = require('fs');

// read file
fs.readFile('./note.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
})

// write file
fs.writeFile('./note.txt', 'Hello Laureano Vera',(err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('New message created');
  }
})

// append file
fs.appendFile('./note.txt', 'How Are You?\r\n',(err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('New message created');
  }
})

// create folder
if (!fs.existsSync('fsFolder')) {
  fs.mkdir('fsFolder', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('A new folder created');
    }
  })
} else {
  console.log('The folder already exist');
}

// delete folder
if (fs.existsSync('fsFolder')) {
  fs.rmdir('fsFolder', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('cddfThe folder deleted');
    }
  })
} else {
  console.log('The folder already deleted');
}

// delete file
if (fs.existsSync('newNote.txt')) {
  fs.unlink('newNote.txt', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('cddfThe file deleted');
    }
  })
} else {
  console.log('The file already exist');
}