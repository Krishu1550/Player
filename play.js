console.log("Hello Shailesh");
// initalizating element
let songIndex=0
let myprogress=document.getElementById("myProgressBar");
let play=document.getElementById("play");
let back=document.getElementById("back");
let next=document.getElementById("forward");
let gif=document.getElementById("gif")
let sname=document.getElementsByClassName("sname");
let time= document.getElementsByClassName("time");
let tname= document.querySelector(".tgif");
let a=[
    {
        song:'Legion' ,filePath:'/songs/1.mp3', coverPath: '/covers/1.jpg'
    },
    {
        song:'Trap' ,filePath:'/songs/2.mp3', coverPath: '/covers/2.jpg'
    },
    {
        song:'They Mad' ,filePath:'/songs/3.mp3', coverPath: '/covers/3.jpg'
    },
    {
        song:'Rich the Kid' ,filePath:'/songs/4.mp3', coverPath: '/covers/4.jpg'
    },
    {
        song:'Song title' ,filePath:'/songs/5.mp3', coverPath: '/covers/5.jpg'
    },
    {
        song:'Safe dance' ,filePath:'/songs/6.mp3', coverPath: '/covers/6.jpg'
    },
    {
        song:'Back it up' ,filePath:'/songs/7.mp3', coverPath: '/covers/7.jpg'
    },
    {
        song:'Love me' ,filePath:'/songs/8.mp3', coverPath: '/covers/8.jpg'
    },
    {
        song:'Forever' ,filePath:'/songs/9.mp3', coverPath: '/covers/9.jpg'
    },
    {
        song:'Dance' ,filePath:'/songs/10.mp3', coverPath: '/covers/10.jpg'
    }
]

let audioElement=new Audio('/songs/1.mp3');
// Event listener 
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value=progress;
    time[songIndex].innerText=(audioElement.currentTime/60).toFixed(2);
    tname.innerText= a[songIndex].song;

})
myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value*audioElement.duration/100

})
play.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        time[songIndex].innerText=(audioElement.currentTime/60).toFixed(2);
        tname.innerText= a[songIndex].song;
        play.classList.remove('fa-play');
        play.classList.remove('fa-play-circle')
        play.classList.add('fa-pause-circle');
        gif.style.opacity= 2;

    }
    else{
        audioElement.pause()
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
        gif.style.opacity= -1;

    }
})
next.addEventListener('click',()=>{
    if(songIndex===10 ){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`/songs/${songIndex+1}.mp3`;
    gif.style.opacity= 2;
    audioElement.play();
})
back.addEventListener('click',()=>{
   if(songIndex==0){
       songIndex=10;
             }
   else{
       songIndex-=1;
   }
   audioElement.src= `/songs/${songIndex+1}.mp3`;
   gif.style.opacity= 2;
   audioElement.play();
} )
for(var i=0;i<10;i++){
   sname[i].innerText=a[i].song

}
