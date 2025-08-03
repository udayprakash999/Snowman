let toggle = document.getElementById('toggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark')
    toggle.classList.toggle('dark')
}
toggle.addEventListener('click', toggleDarkMode)

function galleryBox() {
    let gallery = document.querySelector('.gallery-box')
    for (i = 1; i <= 9; i++) {
        let image = document.createElement('img')
        image.classList.add("gallery-img")
        image.src = `gallery/wall_${i}.jpg`;
        let source = image.src;
        gallery.appendChild(image)
        image.addEventListener('click', ()=> imageClick(source))
    }
}
galleryBox()

let wallpaper = document.getElementById('wallpaper')

function imageClick(source) {
    console.log(source)
    wallpaper.src = source
}

function download(){
    const url = wallpaper.src;
    const a = document.createElement('a')
    a.href = url;
    a.download = "wallpaper";
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
let downloadBtn = document.getElementById('download')
downloadBtn.addEventListener('click', ()=> download())

