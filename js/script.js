const screens=[...document.querySelectorAll(".screen")];
const dots=[...document.querySelectorAll(".dot")];
let current=1, sweet=0, thinking=0;

const sweetLines=[
  "Có những người chẳng cần làm gì đặc biệt...",
  "...chỉ cần cười một cái là đủ khiến một ngày của anh đẹp hơn.",
  "Và thật trùng hợp... người đó lại đang nhìn vào màn hình này. 😌"
];

function show(n){
  screens.forEach(s=>s.classList.remove("active"));
  document.getElementById("screen"+n).classList.add("active");
  dots.forEach((d,i)=>d.classList.toggle("active",i===n-1));
  current=n;
}
function verifyGirl(){
  document.getElementById("verifyText").textContent="Xác minh thành công. Vậy thì... anh nói nhé. 🌷";
  setTimeout(()=>show(2),850);
}
function nextSweet(){
  const el=document.getElementById("sweetText"), hint=document.getElementById("sweetHint");
  if(sweet<sweetLines.length){el.textContent=sweetLines[sweet++];}
  if(sweet===sweetLines.length){hint.textContent="Đến đây chắc em biết anh đang nói ai rồi nhỉ? 🤭";setTimeout(()=>show(3),1000);}
}
function acceptDate(){
  document.getElementById("dateText").textContent="Anh sẽ nhớ câu trả lời này. 😌❤️";
  setTimeout(()=>show(4),800);
}
function maybeDate(){
  document.getElementById("dateText").textContent="Được thôi. Anh chờ câu trả lời của em, không vội. 🌷";
}
function think(){
  thinking++;
  const texts=[
    "Anh hiểu. Anh không muốn em thấy áp lực đâu. 🥺",
    "Cứ suy nghĩ thật kỹ nhé. Anh vẫn muốn được nói chuyện với em. 🌷",
    "Vậy anh xin phép tiếp tục ghi điểm một chút nữa. 😌"
  ];
  document.getElementById("thinkText").textContent=texts[Math.min(thinking-1,2)];
}
function accepted(){
  document.getElementById("finalTitle").textContent="Cảm ơn em đã cho anh một cơ hội. ❤️";
  show(5);confetti();
}
function restart(){
  sweet=0;thinking=0;
  document.getElementById("sweetText").textContent=sweetLines[0];
  document.getElementById("sweetHint").textContent="Anh còn vài câu chưa dám nói.";
  document.getElementById("dateText").textContent="";
  document.getElementById("thinkText").textContent="";
  show(1);
}
function petal(){
  const p=document.createElement("div");p.className="petal";
  p.textContent=["🌸","🌷","💕","✨"][Math.floor(Math.random()*4)];
  p.style.left=Math.random()*100+"vw";
  p.style.fontSize=12+Math.random()*19+"px";
  p.style.animationDuration=5+Math.random()*7+"s";
  document.getElementById("petals").appendChild(p);
  setTimeout(()=>p.remove(),13000);
}
setInterval(petal,650);

function confetti(){
  const c=document.getElementById("confetti"),ctx=c.getContext("2d");
  c.width=innerWidth;c.height=innerHeight;
  const pieces=Array.from({length:160},()=>({x:innerWidth/2,y:innerHeight/2,vx:(Math.random()-.5)*14,vy:(Math.random()-.5)*14-5,s:4+Math.random()*7,l:1}));
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    pieces.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.18;p.l-=.012;ctx.globalAlpha=Math.max(0,p.l);ctx.fillStyle=["#ff4f81","#ff8fab","#ffd166","#fff"][Math.floor(Math.random()*4)];ctx.fillRect(p.x,p.y,p.s,p.s)});
    if(pieces.some(p=>p.l>0))requestAnimationFrame(draw);
  }draw();
}
