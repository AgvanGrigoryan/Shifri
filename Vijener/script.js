var vizhener = {
  ru : "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ ".split(""),
  en : "ABCDEFGHIJKLMNOPQRSTUVWXYZ ".split(""),
  // am : "ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔևՕՖ".split(""),
  square : [],
  genSqViz : function (lang) {
      var l = this[lang], square = [];
      for (var i = 0; i < l.length; i++) {
        this.square[i] = l.slice(i).concat(l.slice(0, i));
      }
  },
  
  encryption : function (lang, text, key) {
    let fullKey = key;
      if (lang !== "ru" && lang !== "en" || text.length !== key.length) {
        if(text.length > key.length){
          for(var i = 1;i<text.length/key.length;i++){
            fullKey += fullKey.length<text.length?key:"";
          };
        };
        fullKey = fullKey.slice(0,text.length);
      };
      
    this.genSqViz(lang);
    var s = "";
    for (var i = 0; i < text.length; i++) {
        s += this.square[this[lang].indexOf(text[i])][this[lang].indexOf(fullKey[i])];
    }
    return s;
  },
  decryption : function (lang, key, shifr) {
    let fullKey = key;
    if (lang !== "ru" && lang !== "en" || shifr.length !== key.length) {
      if(shifr.length > key.length){
        for(var i = 1;i<shifr.length/key.length;i++){
          fullKey += fullKey.length<shifr.length?key:"";
        };
      };
      fullKey = fullKey.slice(0,shifr.length);
    };
      this.genSqViz(lang);
      var s = "";
      for (var i = 0; i < shifr.length; i++) {
          var row = this[lang].indexOf(fullKey[i]);
              coll = this.square[row].indexOf(shifr[i]);
          s += this[lang][coll];
      }
      return s;
  }
};

// document.write (vizhener.encryption("en", "ATTACKATDAWN", "LEMONLEMONLE") + "<br>"); //(en) шифруем
// document.write (vizhener.decryption("en", "LEMONLEMONLE", "LXFOPVEFRNHR") + "<br>"); //(en) расшифровываем

// document.write (vizhener.encryption("ru", "ПОЖАРГОРИМ", "ЖОПАЖОПАЖО") + "<br>"); //(ru) шифруем
// document.write (vizhener.decryption("ru", "ЖОПАЖОПАЖО", "ЦЭЦАЧСЮРПЫ") + "<br>"); //(ru) расшифровываем

let button = document.getElementById('btn');
let keyarea = document.getElementById('key');
let textarea = document.getElementById('encrypting');
button.addEventListener("click",Go);
function Go(){
    let text = textarea.value.toUpperCase()
    let out;
    let action = document.getElementById('Do').value;
    let language = document.getElementById('language').value;
    let key = keyarea.value.toUpperCase();

    switch (action) {
      case 'encryption':
        out = vizhener.encryption(language,text,key);
        break;
      case 'decryption':
        out = vizhener.decryption(language,key,text);
        break;
      default:
        break;
    }
    document.getElementById('out').innerText = out;
  };
  
