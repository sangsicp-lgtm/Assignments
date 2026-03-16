<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fruit Ninja Game</title>
    <style>
        body { margin: 0; overflow: hidden; background: #222; }
        canvas { display: block; margin: 0 auto; background: #333; }
        #score { position: absolute; top: 10px; left: 10px; color: #fff; font-size: 24px; }
    </style>
</head>
<body>
    <div id="score">Score: 0</div>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const scoreDiv = document.getElementById('score');
        let fruits = [];
        let score = 0;
        let slicing = false;
        let mouse = { x: 0, y: 0 };
        let sliceTrail = [];

        function randomFruit() {
            const types = [
                { color: 'red', name: 'apple' },
                { color: 'yellow', name: 'banana' },
                { color: 'orange', name: 'orange' },
                { color: 'green', name: 'melon' }
            ];
            const type = types[Math.floor(Math.random() * types.length)];
            return {
                x: Math.random() * 700 + 50,
                y: 600,
                radius: 30,
                vx: (Math.random() - 0.5) * 6,
                vy: -Math.random() * 12 - 8,
                gravity: 0.4,
                color: type.color,
                name: type.name,
                sliced: false
            };
        }

        function spawnFruit() {
            fruits.push(randomFruit());
        }

        function drawFruit(fruit) {
            ctx.beginPath();
            ctx.arc(fruit.x, fruit.y, fruit.radius, 0, Math.PI * 2);
            ctx.fillStyle = fruit.sliced ? '#888' : fruit.color;
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }

        function drawSliceTrail() {
            ctx.save();
            ctx.strokeStyle = 'cyan';
            ctx.lineWidth = 4;
            ctx.beginPath();
            for (let i = 0; i < sliceTrail.length - 1; i++) {
                ctx.moveTo(sliceTrail[i].x, sliceTrail[i].y);
                ctx.lineTo(sliceTrail[i + 1].x, sliceTrail[i + 1].y);
            }
            ctx.stroke();
            ctx.restore();
        }

        function updateFruits() {
            for (let fruit of fruits) {
                fruit.x += fruit.vx;
                fruit.y += fruit.vy;
                fruit.vy += fruit.gravity;
            }
            fruits = fruits.filter(fruit => fruit.y < 650 && !fruit.sliced);
        }

        function checkSlice() {
            if (!slicing || sliceTrail.length < 2) return;
            for (let fruit of fruits) {
                if (fruit.sliced) continue;
                for (let i = 0; i < sliceTrail.length - 1; i++) {
                    const p1 = sliceTrail[i];
                    const p2 = sliceTrail[i + 1];
                    // Check if fruit is near the slice line segment
                    const dist = pointLineDistance(fruit.x, fruit.y, p1.x, p1.y, p2.x, p2.y);
                    if (dist < fruit.radius) {
                        fruit.sliced = true;
                        score += 1;
                        scoreDiv.textContent = 'Score: ' + score;
                        break;
                    }
                }
            }
        }

        function pointLineDistance(px, py, x1, y1, x2, y2) {
            const A = px - x1;
            const B = py - y1;
            const C = x2 - x1;
            const D = y2 - y1;
            const dot = A * C + B * D;
            const len_sq = C * C + D * D;
            let param = -1;
            if (len_sq !== 0) param = dot / len_sq;
            let xx, yy;
            if (param < 0) { xx = x1; yy = y1; }
            else if (param > 1) { xx = x2; yy = y2; }
            else { xx = x1 + param * C; yy = y1 + param * D; }
            const dx = px - xx;
            const dy = py - yy;
            return Math.sqrt(dx * dx + dy * dy);
        }

        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            updateFruits();
            for (let fruit of fruits) drawFruit(fruit);
            drawSliceTrail();
            checkSlice();
            requestAnimationFrame(gameLoop);
        }

        canvas.addEventListener('mousedown', e => {
            slicing = true;
            sliceTrail = [];
            mouse.x = e.offsetX;
            mouse.y = e.offsetY;
            sliceTrail.push({ x: mouse.x, y: mouse.y });
        });

        canvas.addEventListener('mousemove', e => {
            if (slicing) {
                mouse.x = e.offsetX;
                mouse.y = e.offsetY;
                sliceTrail.push({ x: mouse.x, y: mouse.y });
                if (sliceTrail.length > 20) sliceTrail.shift();
            }
        });

        canvas.addEventListener('mouseup', e => {
            slicing = false;
            sliceTrail = [];
        });

        setInterval(spawnFruit, 1200);

        gameLoop();
    </script>
</body>
</html>