function fileName1 () {
  const photo1 = document.getElementById('photo1').files[0].name;

  document.getElementById('fileName1').textContent = photo1;
}
function fileName2 () {
  const photo2 = document.getElementById('photo2').files[0].name;

  document.getElementById('fileName2').textContent = photo2;
}
function fileName3 () {
  const photo3 = document.getElementById('photo3').files[0].name;

  document.getElementById('fileName3').textContent = photo3;
}