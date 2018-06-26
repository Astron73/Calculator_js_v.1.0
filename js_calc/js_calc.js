'use strict'
//var w = 281; // ширина вікна
//var h = 310; // висота вікна
//
//function(){
//winW = window.innerWidth;
//winH = window.innerHeight;
//    
// var url=window.location.href;
//window.open ( url, "new_window", "width = " + w + ", height = " + h);
//window.close();
//}
//----------------========================
var a = 0;
var i = 0;
var next_p = 0;
var temp_N1 = "";
var temp_N2 = "";
var temp_N3 = "";
var temp_Op = "";
var N0 = document.getElementById('N0');
var N1 = document.getElementById('N1');
var N2 = document.getElementById('N2');
var N3 = document.getElementById('N3');
var N4 = document.getElementById('N4');
var N5 = document.getElementById('N5');
var N6 = document.getElementById('N6');
var N7 = document.getElementById('N7');
var N8 = document.getElementById('N8');
var N9 = document.getElementById('N9');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var ActEqual = document.getElementById('ActEqual');
var ActRes = document.getElementById('ActRes');
var Clear = document.getElementById('Clear');
var root = document.getElementById('root');
var arrow = document.getElementById('arrow');
var CE = document.getElementById('CE');

//==================БЛОК МАТРИЦІ ВИБОРУ ЦИФР============

N0.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N0.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = temp_N1;
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N0.value;
//            ActRes.innerHTML = "" + temp_N2;
            ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "="; 
        };
    };
};

N1.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N1.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = temp_N1;
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N1.value;
           ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "="; 
        };
    };
};

N2.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N2.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = Number(temp_N1);
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N2.value;
            ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "="; 
        };
    };
};

N3.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N3.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = Number(temp_N1);
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N3.value;
            ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "="; 
        };
    };
};

N4.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N4.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = Number(temp_N1);
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N4.value;
            ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "="; 
        };
    };
};

N5.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N5.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = Number(temp_N1);
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N5.value;
            ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "="; 
        };
    };
};

N6.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N6.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = Number(temp_N1);
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N6.value;
            ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "="; 
        };
    };
};

N7.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N7.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = Number(temp_N1);
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N7.value;
            ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "="; 
        };
    };
};

N8.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N8.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = Number(temp_N1);
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N8.value;
            ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "="; 
        };
    };
};

N9.onclick = function () {
    if (next_p == 0) {
        temp_N1 = temp_N1 + N9.value;
        temp_N3 = temp_N1;
        ActRes.innerHTML = Number(temp_N1);
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + N9.value;
            ActRes.innerHTML = temp_N1 + " " + temp_Op + " " + Number(temp_N2) + "=";           
        };
    };
};

//==================КІНЕЦЬ БЛОКУ МАТРИЦІ ВИБОРУ ЦИФР============
 
//=========ПОЧАТОК БЛОКУ ВИБОРУ ОПЕРАЦІЙ І ВИВОДУ РЕЗУЛЬТАТУ======
//===========ДІЛЕННЯ=====================
divide.onclick = function () {
    temp_Op = divide.value;
//    ActRes.innerHTML = "" + temp_Op;
    a = a + 4;
//    console.log("from divide " + " " + a);
    next_p = 1;
//====початок блоку повторного вибору оперії===================
if (temp_Op == '/' && a == 8) {
    temp_N1 = Number(temp_N1) / Number(temp_N2);
    temp_N2 = "";
    a = 4;
};
//====кінець блоку повторного вибору оперії===================
ActEqual.onclick = function () {
    if (a == 4) {
        ActRes.innerHTML = Number(temp_N1) / Number(temp_N2);
        temp_N3 = Number(temp_N1) / Number(temp_N2);
        next_p = 0;
        temp_N1 = "";
};
};
       
};
//=============МНОЖЕННЯ===================
multiply.onclick = function () {
    temp_Op = multiply.value;
//    ActRes.innerHTML = "" + temp_Op;
    a = a + 4;
//    console.log("from multiply" + " " + a);
    next_p = 1;
//====початок блоку повторного вибору оперії===================

if (temp_Op == '*' && a == 8) {
    temp_N1 = Number(temp_N1) * Number(temp_N2);
    temp_N2 = "";
    a = 4;
};
//====кінець блоку повторного вибору оперії===================
ActEqual.onclick = function () {
    if (a == 4) {
        ActRes.innerHTML = Number(temp_N1) * Number(temp_N2);
        temp_N3 = Number(temp_N1) * Number(temp_N2);
        next_p = 0;
        temp_N1 = "";
    };
};
    
};
//===============ВІДНІМАННЯ===============
minus.onclick = function () {
    temp_Op = minus.value;
//    ActRes.innerHTML = "" + temp_Op;
    a = a + 4;
    next_p = 1;
//====початок блоку повторного вибору оперії===================
if (temp_Op == '-' && a == 8) {
    temp_N1 = Number(temp_N1) - Number(temp_N2);
    temp_N2 = "";
    a = 4;

};
//====кінець блоку повторного вибору оперії===================
ActEqual.onclick = function () {
    if (a == 4) {
        ActRes.innerHTML = Number(temp_N1) - Number(temp_N2);
        temp_N3 = Number(temp_N1) - Number(temp_N2);
        next_p = 0;
        temp_N1 = "";
    };
};
    
};
//===============ДОДАВАННЯ================
plus.onclick = function () {
    temp_Op = plus.value;
//    ActRes.innerHTML = "" + temp_Op;
*    a = a + 4;
    next_p = 1;
//====початок блоку повторного вибору оперії=============
if (temp_Op == '+' && a == 8) {
    temp_N1 = Number(temp_N1) + Number(temp_N2);
    temp_N2 = "";
    a = 4;
};
    
//====кінець блоку повторного вибору оперії================
ActEqual.onclick = function () {
    if (a == 4) {
        ActRes.innerHTML = Number(temp_N1) + Number(temp_N2);
        temp_N3 = Number(temp_N1) + Number(temp_N2);
        next_p = 0;
        temp_N1 = "";
    };
};
    
};
//================plusMinus================
plusMinus.onclick = function () {
  if (next_p == 0) {
        temp_N1 = temp_N1 + "-";
        temp_N3 = temp_N1;
        ActRes.innerHTML = temp_N1;
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + "-";
            ActRes.innerHTML = "" + temp_N2;
        };
    };  
};
//===========КОРІНЬ КВАДРАТНИЙ=============
root.onclick = function () {
    ActRes.innerHTML = "sqrt (" + temp_N3 +")";
    temp_N3 = Math.sqrt(Number(temp_N3));
    console.log(temp_N3);
    temp_N2 = "";
ActEqual.onclick = function () {
    ActRes.innerHTML = temp_N3;
   };
};
//===============ДРІБ================
fraction.onclick = function () {
    ActRes.innerHTML = "1/" + temp_N3 +"";
    temp_N3 = 1/Number(temp_N3);
    console.log(temp_N3);
    temp_N2 = "";
ActEqual.onclick = function () {
    ActRes.innerHTML = temp_N3;
    if( temp_N3 == "Infinity") {
    alert('Ділити на нуль не можна!');   
    };
   };
};
//===============КРАПКА================
dot.onclick = function (){
    if (next_p == 0) {
        temp_N1 = temp_N1 + ".";
        temp_N3 = temp_N1;
        ActRes.innerHTML = temp_N1;
    } else {
        if (next_p == 1) {
            temp_N2 = temp_N2 + ".";
            ActRes.innerHTML = "" + temp_N2;
        };
    };
};
arrow.onclick = function () {
   if (next_p == 0 ) {
        i = temp_N1.length
        temp_N1 = temp_N1.slice(0,i-1);
        ActRes.innerHTML = temp_N1;
    } else {
        if (next_p == 1) {
            i = temp_N2.length
            temp_N2 = temp_N2.slice(0,i-1);
            ActRes.innerHTML = "" + temp_N2;
        };
    };  
};
CE.onclick = function () {
    if (next_p == 0) {
        temp_N1 = "";
        ActRes.innerHTML = Number(temp_N1);
    } else {
        if (next_p == 1) {
            temp_N2 = "";
            ActRes.innerHTML = "" + Number(temp_N2);           
        };
    };
}
Clear.onclick = function () {
        ActRes.innerHTML = "0";
        a = 0;
        next_p = 0;
        temp_N1 = "";
        temp_N2 = "";
        temp_Op = "";   
    };
//===========КІНЕЦЬ БЛОКУ ВИБОРУ ОПЕРАЦІЙ І ВИВОДУ РЕЗУЛЬТАТУ============





