const sidebar = document.getElementById('sidebar');
const logo = document.getElementById('logo');
const close = document.getElementById('close');
const block = document.querySelector('.block');

logo.addEventListener('click', function () {
    sidebar.style.right = 0;
    block.style.display = 'inline';
});
close.addEventListener('click', function () {
    sidebar.style.right = '-500px';
    block.style.display = 'none';
});
block.addEventListener('click', function () {
    sidebar.style.right = '-500px';
    block.style.display = 'none';
});