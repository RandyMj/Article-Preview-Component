const modal = document.getElementById('modal');
const btn = document.getElementById('share_btn');
const dos = modal.style.display;
console.log(dos);

btn.addEventListener('click', () => {
    var dis = modal.style.display;
    if(dis === "") {
        modal.style.display = 'flex';
    } else if(dis === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
});