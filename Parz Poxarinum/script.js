const aybuben = [
      'A','B','C','D','E','F',
      'G','H','I','J','K','L',
      'M','N','O','P','Q','R',
      'S','T','U','V','W','X',
      'Y','Z','1','2','3','4','5','6','7','8','9','0',' '
      ];
      
const poxacaybuben = [
      '1','D','C','B','A','0',
      'H','2','G','9',' ','F',
      'E','L','3','K','J','I',
      'P','8','O','4','N','6',
      '7','M','T','S','5','Q','X','W','V','U','Z','Y','R'
      ];


document.getElementById('encrypting').oninput = function(){
let str=this.value;
let position ='';
let out = '';
	for(let i=0;i<str.length;i++){
  let include = aybuben.includes( str[i].toUpperCase() );
        console.log(include);
        if (include){      
           position = aybuben.indexOf( str[i].toUpperCase() );
        }
    let code = poxacaybuben[position];
    out += code;
  }
  document.getElementById('outShifr').innerText = out;
};


document.getElementById('decoding').oninput = function(){
let str=this.value;
let position ='';
let out = '';
	for(let i=0;i<str.length;i++){
  let include = poxacaybuben.includes( str[i].toUpperCase() );
        console.log(include);
        if (include){      
           position = poxacaybuben.indexOf( str[i].toUpperCase() );
        }
    let code = aybuben[position];
    out += code;
  }
  document.getElementById('outText').innerText = out;
};
