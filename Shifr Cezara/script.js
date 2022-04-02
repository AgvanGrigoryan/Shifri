/* let step =+prompt('input Encrypting/Decoding Step: '); */
document.getElementById('encrypting').oninput = function(){
let step = +document.getElementById('encryptStep').value;
let str=this.value;
let out = '';
	for(let i=0;i<str.length;i++){
  	let code = str.charCodeAt(i);
    code = code + step;
    out += String.fromCharCode(code);
  }
  document.getElementById('outShifr').innerText = out;
};

document.getElementById('decoding').oninput = function(){
let step = +document.getElementById('decodeStep').value;
let str=this.value;
let out = '';
	for(let i=0;i<str.length;i++){
  	let code = str.charCodeAt(i);
    code = code - step;
    out += String.fromCharCode(code);
  }
  document.getElementById('outText').innerText = out;
}