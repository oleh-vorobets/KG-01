document.querySelector('.btn-build').addEventListener('click', function () {
    const rightTop = {
        x: +document.querySelector('.right-top-x').value + 400,
        y: 800 - (+document.querySelector('.right-top-y').value + 400),
    };
    const rightBottom = {
        x: +document.querySelector('.right-bottom-x').value + 400,
        y: 800 - (+document.querySelector('.right-bottom-y').value + 400),
    };

    if (rightTop.x < rightBottom.x || rightTop.y >= rightBottom.y) return;

    const vector = {
        x: rightBottom.x - rightTop.x,
        y: rightBottom.y - rightTop.y,
    };

    const oppositeVector = {
        x: vector.y,
        y: -vector.x,
    };

    const leftTop = {
        x: rightTop.x - oppositeVector.x,
        y: rightTop.y - oppositeVector.y,
    };
    const leftBottom = {
        x: rightBottom.x - oppositeVector.x,
        y: rightBottom.y - oppositeVector.y,
    };

    // Draw square
    const canvas = document.querySelector('.myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.globalAlpha = 1;
    ctx.moveTo(rightTop.x, rightTop.y);
    ctx.lineTo(rightBottom.x, rightBottom.y);
    ctx.lineTo(leftBottom.x, leftBottom.y);
    ctx.lineTo(leftTop.x, leftTop.y);
    ctx.lineTo(rightTop.x, rightTop.y);
    ctx.strokeStyle = document.querySelector('.square-color').value;
    ctx.lineWidth = 3;
    ctx.stroke();

    if (document.querySelector('.is-circle').checked) {
        const circleCenter = {
            x: (rightTop.x + leftBottom.x) / 2,
            y: (rightTop.y + leftBottom.y) / 2,
        };

        const radius = Math.sqrt(
            (rightTop.x - circleCenter.x) ** 2 +
                (rightTop.y - circleCenter.y) ** 2
        );

        // Draw circle
        ctx.beginPath();
        ctx.globalAlpha = 0.2;
        ctx.arc(circleCenter.x, circleCenter.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = document.querySelector('.circle-color').value;
        ctx.fill();
    }
    ctx.closePath();
});
