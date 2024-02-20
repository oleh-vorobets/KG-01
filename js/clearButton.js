document.querySelector('.clear-btn').addEventListener('click', function () {
    const canvas = document.querySelector('.myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
