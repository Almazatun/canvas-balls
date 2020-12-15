
document.body.style.padding = "0"
document.body.style.margin = "0"


const app = document.getElementById('app')
app.classList.add('app')
app.setAttribute("style", `
height: 100vh;
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e5d798;
`);
const canvas = document.createElement('canvas')
canvas.classList.add('💥')
canvas.setAttribute("style", `
    border:1px solid #000000;
    height: 800px;
    width: 1600px;
`);
app.appendChild(canvas)
const ctx = canvas.getContext('2d')

//forms and their geometry property

//first circle
let x = 40;
let y = 40;
let r = 15;
let vx = 2;
let vy = 1;
let moveSpeedCircle = 10

//second circle
let x2 = 200;
let y2 = 20;
let vx2 = 2;
let vy2 = 3;

//third circle
let x3 = 100;
let y3 = 30;
let r3 = 30
let vx3 = 1;
let vy3 = 1;


function createCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (x > canvas.width - r || x < r) {
        vx = -vx
    }
    if (y > canvas.height - r || y < r) {
        vy = -vy
    }
    x += vx
    y += vy

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fillStyle = 'orange'
    ctx.fill()
    ctx.stroke()

    //second circle
    if (x2 > canvas.width - r || x2 < r) {
        vx2 = -vx2
    }
    if (y2 > canvas.height - r || y2 < r) {
        vy2 = -vy2
    }
    x2 += vx2
    y2 += vy2

    //circle 2
    ctx.beginPath()
    ctx.arc(x2, y2, r + 5, 0, 2 * Math.PI)
    ctx.fillStyle = '#68c53c'
    ctx.fill()
    ctx.stroke()

    //third circle
    if (x3 > canvas.width - r3 || x3 < r3) {
        vx3 = -vx3
    }
    if (y3 > canvas.height - r3 || y3 < r3) {
        vy3 = -vy3
    }
    x3 += vx3
    y3 += vy3

    //circle 3
    ctx.beginPath()
    ctx.arc(x3, y3, r3, 0, 2 * Math.PI)
    ctx.fillStyle = '#be3cc5'
    ctx.fill()
    ctx.stroke()
}


createCircle()
setInterval(createCircle, moveSpeedCircle)

