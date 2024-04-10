function somar(n1, n2) {
  if (n1 || n2 !== Number) {
    return "NÃO FOI INSERIDO UM NÚMERO";
  } else {
    return n1 + n2;
  }
}

exports.somar = somar;
