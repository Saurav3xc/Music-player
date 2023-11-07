let song= document.getElementById('audio');
let seek= document.getElementById('progress');
let titles=document.getElementById('title');
let artists=document.getElementById('artist');
let img=document.getElementById('img');
let playpause= document.getElementById('plays');
let nextbtn= document.querySelector('.fa-forward');
let prevbtn= document.querySelector('.fa-backward');
 let mutes= document.getElementById('mutes');
let loops= document.querySelector('.fa-random');
let container = document.querySelector ('.container');

let  songs=[
  {
    name:"gone girl ",
     artist:"Badshah",
     source:"gone-girl",
     img:"gone.jpeg"
  },
 
  {
    name: "Sanam ",
    artist: "Unknown-artist",
    source: "sanam",
    img:"sanam.jpg"
  },
  {
    name: "jis-din ",
    artist: "Unknown-artist",
    source: "din",
    img:"jis.jpeg"
  },
  {
    name: "Bolbam ",
    artist: "Paradox",
    source: "bolbam",
    img:"bolbam.jpeg"
  },
  {
    name: "Pagal ",
    artist: "Badshah",
    source: "pagal",
    img: "pagal.jpg"
  }
  ]
  
  song.addEventListener('loadedmetadata',()=>{
    
    song.play();
    progress.max = song.duration;
   
  });
  
  playpause.addEventListener('click', () => {
  
    setInterval(() => {
      progress.max = song.duration;
      progress.value = song.currentTime;
    }, 500)
    if (song.paused)
    {
      song.play();
      playpause.classList.replace('fa-play','fa-pause');
      container.classList.add('bg');
    }
    else {
      song.pause();
      playpause.classList.replace('fa-pause','fa-play');
    }
  });
  
  seek.onchange= function (){
  song.currentTime= seek.value;
  song.play();
  playpause.classList.replace('fa-play','fa-pause')
  }
  
  function loadsongs(songs){
    titles.innerHTML=songs.name;
    artists.innerHTML=songs.artist;
    img.src=songs.img;
    song.src=`/${songs.source}.mp3`;
  }
  let songindex=0;
  
  nextbtn.addEventListener('click',()=>{
    songindex= (songindex + 1)%songs.length;
    loadsongs(songs[songindex]);
    song.play();
    playpause.classList.replace('fa-play','fa-pause')
    
  });
  prevbtn.addEventListener('click',()=>{
    songindex= (songindex -1 +songs.length)%songs.length;
    loadsongs(songs[songindex]);
    song.play();
    playpause.classList.replace('fa-play','fa-pause')
    
  });
  
  loops.addEventListener('click',()=>{
    song.loop=true;
    alert('Ok This song will repeated')
  });
  mutes.addEventListener('click',()=>{
     if(!song.muted){
       song.muted=true;
       mutes.classList.replace('fa-volume-up', 'fa-volume-off')
     }else{
       song.muted=false;
       mutes.classList.replace('fa-volume-off', 'fa-volume-up')
     }
     
  })
  song.addEventListener('ended',()=>{
    songindex= (songindex + 1)%songs.length;
    loadsongs(songs[songindex]);
    song.play();
  })
  