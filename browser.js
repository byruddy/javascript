// check sessionStorage/localStorage (Web Storage)
if (typeof(Storage) !== 'undefined') {
  console.log('support');
} else {
  console.log('no-support');
}
