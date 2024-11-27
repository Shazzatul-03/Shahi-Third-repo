const offerEnds = "31 December 2024";

function Countdown (){
          const offerDats = new Date(offerEnds);
          const currentOffer = new Date()
          
          const totalseconds = (offerDats-currentOffer)/1000;
          
          const days = Math.floor(totalseconds / (24*60*60));
          const hours = Math.floor(totalseconds % (24*3600)/3600);
          const minits = Math.floor(totalseconds % 3600/60);
          const seconds = Math.floor(totalseconds % 60);

          console.log("Days:",days,"Hours:",hours,"Minuts:",minits,"Seconds:",seconds);

          document.getElementById('days').innerText = formateTime(days)
          document.getElementById('hours').innerText = formateTime(hours)
          document.getElementById('minits').innerText = formateTime(minits)
          document.getElementById('seconds').innerText = formateTime(seconds)

          function formateTime (time){
                    return time < 10 ? (`0 ${time}`) : time
          }
          
}

Countdown();
setInterval(Countdown , 1000)