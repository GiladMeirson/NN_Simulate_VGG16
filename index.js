var can;
var ctx;
var mouse = { x: null, y: null, radius: innerWidth/25.6,power:innerWidth/1280 };
var particleArray = [];
var animation;
var amount=0;
var toggle=false;
var disLimitCon=95;
const partColorArray = [


//   " #ff3333",
//   " #ff4d4d",
//   " #ff6666",
//   " #ff8080",
//   " #ff9999",
//   " #ffb3b3",
//   " #ff6666",
//   " #ff8080",
//   " #ff9999",
//   " #ffb3b3",
// "#d0e6fb",
// "#b9d9f9",
// "#a1ccf7",
// "#8abff5",
"#c2f0c2",
"#adebad",
"#99e699",
"#85e085",


// "#196619",
// "#0f3d0f",
// "#0a290a",
// "#145214",
];
const conecttorsColorArray = [

//   "#d0e6fb",
//   "#b9d9f9",
//   "#a1ccf7",
//   "#8abff5",


//   "#196619",
//   "#0f3d0f",
//   "#0a290a",
//   "#145214",

"#c2f0c2",
"#adebad",
"#99e699",
"#85e085",



];


function init(body) {
    
  can = document.getElementById("Can");
  ctx = can.getContext("2d");
  // amount=Math.floor(innerWidth/4.8);
  can.width = innerWidth;
  can.height = innerHeight;
  window.addEventListener("resize", resizeCanvas);
  // window.addEventListener("mousemove", function (e) {
  //   mouse.x = e.x;
  //   mouse.y = e.y;
  // });

//   window.addEventListener("contextmenu", (e) => {e.preventDefault();AddSome();});
//   window.addEventListener('mousedown',()=>{mouse.radius=innerWidth/7.7;mouse.power=innerWidth/147.7});
//   window.addEventListener('mouseup',()=>{mouse.radius=innerWidth/25.6;mouse.power=innerWidth/1280});
//   window.addEventListener('keydown',(e)=>{
//     if (e.key==='d') {
//     for (let i = 0; i < 5; i++) {
//         particleArray.pop();
//     }

    
//   }
//   if (e.key==='=') {
//     disLimitCon++;
//     //console.log(e.key,disLimitCon)
//   }
//   if (e.key==='-') {
//     disLimitCon--;
//   }


// });
let ajustY=300



  // CreateLayer(X,Y,radius,amount,color,layer)
  CreateLayer(50,-285+ajustY,6,100,'green',1);
  CreateLayer(60,-285+ajustY,6,100,'red',1);
  CreateLayer(70,-285+ajustY,6,100,'blue',1);

  CreateLayer(225,3+ajustY,6,23,'yellow',2);
  CreateLayer(230,3+ajustY,6,23,'yellow',2);
  CreateLayer(235,3+ajustY,6,23,'yellow',2);
  CreateLayer(240,3+ajustY,6,23,'yellow',2);
  CreateLayer(245,3+ajustY,6,23,'yellow',2);

  
  CreateLayer(400,3+ajustY,6,23,'rgba(240,255,230,0.8)',3);
  CreateLayer(405,3+ajustY,6,23,'rgba(240,255,230,0.8)',3);
  CreateLayer(410,3+ajustY,6,23,'rgba(240,255,230,0.8)',3);

  CreateLayer(575,70+ajustY,6,12,'rgba(220,220,50)',4);
  CreateLayer(580,70+ajustY,6,12,'rgba(220,220,50)',4);
  CreateLayer(585,70+ajustY,6,12,'rgba(220,220,50)',4);
  CreateLayer(590,70+ajustY,6,12,'rgba(220,220,50)',4);
  CreateLayer(595,70+ajustY,6,12,'rgba(220,220,50)',4);


  CreateLayer(750,70+ajustY,6,12,'rgba(220,220,50)',5);
  CreateLayer(755,70+ajustY,6,12,'rgba(220,220,50)',5);
  CreateLayer(760,70+ajustY,6,12,'rgba(220,220,50)',5);
  CreateLayer(765,70+ajustY,6,12,'rgba(220,220,50)',5);
  CreateLayer(770,70+ajustY,6,12,'rgba(220,220,50)',5);


  CreateLayer(925,70+ajustY,6,12,'rgba(140,180,50)',6);
  CreateLayer(930,70+ajustY,6,12,'rgba(140,180,50)',6);
  CreateLayer(935,70+ajustY,6,12,'rgba(140,180,50)',6);
  CreateLayer(940,70+ajustY,6,12,'rgba(140,180,50)',6);
  CreateLayer(945,70+ajustY,6,12,'rgba(140,180,50)',6);
  CreateLayer(950,70+ajustY,6,12,'rgba(140,180,50)',6);
  CreateLayer(955,70+ajustY,6,12,'rgba(140,180,50)',6);
  CreateLayer(960,70+ajustY,6,12,'rgba(140,180,50)',6);


  CreateLayer(1100,100+ajustY,6,6,'rgba(170,30,190,0.8)',7);
  CreateLayer(1105,100+ajustY,6,6,'rgba(170,30,190,0.8)',7);
  CreateLayer(1110,100+ajustY,6,6,'rgba(170,30,190,0.8)',7);
  CreateLayer(1115,100+ajustY,6,6,'rgba(170,30,190,0.8)',7);
  CreateLayer(1120,100+ajustY,6,6,'rgba(170,30,190,0.8)',7);
  CreateLayer(1125,100+ajustY,6,6,'rgba(170,30,190,0.8)',7);
  CreateLayer(1130,100+ajustY,6,6,'rgba(170,30,190,0.8)',7);
  CreateLayer(1135,100+ajustY,6,6,'rgba(170,30,190,0.8)',7);


  CreateLayer(1275,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1280,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1285,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1290,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1295,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1300,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1305,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1310,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1315,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1320,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1325,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);
  CreateLayer(1330,100+ajustY,6,6,'rgba(170,30,250,0.7)',8);


  CreateLayer(1425,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1430,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1435,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1440,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1445,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1450,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1455,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1460,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1465,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1470,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1475,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1480,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1485,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);
  CreateLayer(1490,115+ajustY,6,3,'rgba(170,30,250,0.7)',9);

  CreateLayer(1600,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1605,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1610,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1615,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1620,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1625,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1630,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1635,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1640,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1645,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1650,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1655,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1660,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);
  CreateLayer(1665,115+ajustY,6,3,'rgba(75,100,255,0.7)',10);

  CreateLayer(1700,-285+ajustY,6,100,'rgba(245,255,245,0.7)',11);

  CreateLayer(1820,-160+ajustY,6,75,'rgba(245,255,245,0.7)',12);

  CreateLayer(1910,-20+ajustY,6,50,'rgba(245,255,245,0.7)',13);

  CreateLayer(2000,195+ajustY,6,3,'rgba(245,200,30,0.7)',14);

  
  Animate();

  
}
// function Start(btn) {
//     btn.parentNode.remove();
//     requestFullScreen(document.body)
// }
/* Get into full screen */
// function requestFullScreen(element) {
//     // Supports most browsers and their versions.
//     var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

//     if (requestMethod) { // Native full screen.
//         requestMethod.call(element);
//     } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
//         var wscript = new ActiveXObject("WScript.Shell");
//         if (wscript !== null) {
//             wscript.SendKeys("{F11}");
//         }
//     }
// }

function resizeCanvas() {
  particleArray = [];
  can.width = window.innerWidth;
  can.height = window.innerHeight;
  cancelAnimationFrame(animation);
  //CreateParticle(10);
  Animate();
}

class Particle {
  constructor(x,y,rad,color,layer) {
    this.radius = rad;
    this.x = x;
    this.y = y;
    this.color=color;
    this.layer=layer;
    
    // this.color = GetRandColor('red');
  }
  Render() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle='black';
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    
    
  

    if (this.x - this.radius < 0) {
      // this hits left wall
      this.x = this.radius;
      this.angle = Math.PI - this.angle;
    } else if (this.x + this.radius > can.width) {
      // this hits right wall
      this.x = can.width - this.radius;
      this.angle = Math.PI - this.angle;
    }
    if (this.y < this.radius) {
      // this hits top wall
      this.y = this.radius;
      this.angle = Math.PI * 2 - this.angle;
    } else if (this.y + this.radius > can.height) {
      // this hits bottom wall
      this.y = can.height - this.radius;
      this.angle = Math.PI * 2 - this.angle;
    }

    // if (dis < mouse.radius) {
    //   this.x -= dirX;
    //   this.y -= dirY;
    //   this.angle+=0.67;
    // }
  }
}

function Animate() {
  ctx.clearRect(0, 0, can.width, can.height);
  connect1(1,2,51);
  connect1(2,3,7);
  connect1(3,4,5);
  connect1(4,5,11);
  connect1(5,6,14);
  connect1(6,7,14);
  connect1(7,8,14);
  connect1(8,9,7);
  connect1(9,10,7);
  connect1(10,11,5)
  connect1(11,12,7)
  connect1(12,13,14)
  connect1(13,14,1)





  particleArray.forEach((p) => {
    p.update();
    p.Render();
  });

  animation = requestAnimationFrame(Animate);
}

function CreateParticle(num) {
  for (let i = 0; i < num; i++) {
    particleArray.push(new Particle());
  }
}

function CreateLayer(x,y,rad,amount,color,layer) {
  if (layer>5) {
    x+=-75
  }
  if (layer>=8) {
    x+=-75
  }
  if (layer==5) {
    x+=-50
  }
  if (layer==9) {
    x+=-80
  }
  if (layer==10) {
    x+=-90
  }
  if (layer>5 && layer<9) {
    x+=-75
  }
x+=-25
  for (let i = 0; i < amount; i++) {
    y+=rad*1.5;
    
    particleArray.push(new Particle(x,y,rad,color,layer));
  }
}

function connect1(layer1,layer2,modol) {
  let opacityVal = 0.2;
  for (let i = 0; i < particleArray.length; i++) {
    if (particleArray[i].layer==layer1) {
      for (let b = 0; b < particleArray.length; b++) {
        
        if (particleArray[b].layer==layer2 && b%modol==0) {
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(255,255,255,'+opacityVal+')';
        if (toggle) {
          Sim(layer1);
        }
          
          ctx.beginPath();
          ctx.moveTo(particleArray[i].x, particleArray[i].y);
          ctx.lineTo(particleArray[b].x, particleArray[b].y);
          ctx.stroke();
        }
        
      }
    }
    
  }



  // opacityVal = 1 - dis / disLimitCon;
  // // ctx.strokeStyle='rgba(255,255,255,'+opacityVal+')';
  // ctx.strokeStyle = convertHex(GetRandColor('blue'),opacityVal);
  // ctx.lineWidth = 2;
  // ctx.beginPath();
  // ctx.moveTo(particleArray[a].x, particleArray[a].y);
  // ctx.lineTo(particleArray[b].x, particleArray[b].y);
  // ctx.stroke();

}

function GetRandColor(spec) {
    if (spec==='red') {
        return partColorArray[Math.floor(Math.random()*partColorArray.length)];
    }else{
        return conecttorsColorArray[Math.floor(Math.random()*conecttorsColorArray.length)];
    }
}

function convertHex(hexCode, opacity=1){
    var hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);

    /* Backward compatibility for whole number based opacity values. */
    if (opacity > 1 && opacity <= 100) {
        opacity = opacity / 100;   
    }
    
    return 'rgba('+r+','+g+','+b+','+opacity+')';
}

function AddSome() {
    for (let i = 0; i < 10; i++) {
        particleArray.push(new Particle());
    }
    
}

function Sim(layer) {
  stoplimit=0.97
  if (layer>=10) {
    stoplimit=0.899
  }
  if (Math.random()>stoplimit) {
    ctx.strokeStyle=convertHex('#efcc33')
    
  }
}

function IsClick(btn) {
  if (toggle==false) {
    toggle=true;
  }
  else{
    toggle=false;
  }
}