const url = window.location.search;
const urlParams = new URLSearchParams(url);
const x = urlParams.get('x');
const y = urlParams.get('y');
const z = urlParams.get('z');
if(x != null && y != null && z != null){
    document.getElementById('x').innerHTML = 'x = ' + x;
    document.getElementById('y').innerHTML = 'y = ' + y;
    document.getElementById('z').innerHTML = 'z = ' + z;
}
