function generateSnowflake() {
    for (i = 0; i < 10; i++) {
        let snowflake = document.createElement('img')
        let size = Math.floor(Math.random() * 60)
        let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * window.innerHeight)
        snowflake.src = "snowflake.png"
        snowflake.style.width = `${size}px`
        snowflake.style.height = `${size}px`
        snowflake.style.left = `${x}px`
        snowflake.style.top = `${y}px`
        snowflake.classList.add("snowflake")
        document.body.appendChild(snowflake)
    }
}
setInterval(generateSnowflake, 1000);

let colors = ["#BB2214", "#83B055", "#C66B01", "#FED502"];
let greet = document.getElementById('greet');
(function changeSnowman() {

        let i = 1;
        let snowman = document.getElementById('snowman-image')
        let next = document.getElementById('next')
        let prev = document.getElementById('prev')
        next.addEventListener('click', () => {
            if (i < 4) {
                i++;
                greet.style.color = colors[i - 1]
                snowman.src = `snowman-0${i}.png`
            }
            else if (i === 4) {
                i = 1
                snowman.src = `snowman-01.png`
            }
        })
        prev.addEventListener('click', () => {
            if (i > 1) {
                i--;
                console.log(i)
                snowman.src = `snowman-0${i}.png`
                console.log("less")
            }
            else if (i === 1) {
                i = 4
                snowman.src = `snowman-04.png`
            }
        })

    })()

let greetingForm = document.getElementById('greeting-form');
function greeting() {
    let name = document.getElementById('name').value
    if (!name) {
        alert('Enter your name')
    }
    else {
        greet.innerHTML = `Hello ${name}`
        greetingForm.style.display = 'none';
    }
}
greetingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    greeting()
})


document.getElementById('link').addEventListener('click',()=>{
    window.href = "index2.html"
    console.log('df')
}
)