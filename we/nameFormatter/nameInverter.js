const nameInverter = function(name) {
  if (typeof name === 'undefined') {
    throw 'Error';
  }

  if (name === '') {
    return '';
  }

  name = name.split(' ');

  for (let i = 0; i < name.length; i++) {
    name[i] = name[i].replace(/\s/g, '');

    if (name[i] === '') {
      name.splice(i, 1);
    }
  }

  const honorific = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
  let holdHonorific;

  for (const title of honorific) {
    if (name[0] === title) {
      if (name.length <= 1) {
        return '';
      }
      holdHonorific = title;
      name.shift();
    }
  }
  name.push(name[0]);
  name.splice(0, 1);
  name = name.join(', ');

  if (holdHonorific !== undefined) {
    name = `${holdHonorific} ${name}`;
  }

  return name;
};

module.exports = nameInverter;