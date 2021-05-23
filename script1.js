var oddEvenChoice;
var over;
var ballsforBating;
var ballsforBalling;
var TotalScorebot =0;
var TotalScorehuman=0;
var overPlayed = "Not played";

var choiceOpt;
var imageDatabase;
var batState = "Not Played";
var ballState = "Not Played";

function overs(playerChoiceOfOver){
    if (playerChoiceOfOver.value === "0"){
        return;
    }
    else if (playerChoiceOfOver.value === "1") {
        ov1();
    } else if( playerChoiceOfOver.value === "2") {
        console.log(playerChoiceOfOver.value);
        ov2();
    } else if( playerChoiceOfOver.value === "3") {
        ov3();
    } else if( playerChoiceOfOver.value === "5") {
        ov5();
    }

}

function ov1(){
    overPlayed = "Played";
    over= 1;
    document.getElementById('option').remove();
    document.getElementById('dropbtn').remove();

    //document.getElementById('dropdown-content').remove();
}

function ov2(){
    overPlayed = "Played";
    over=2;
    console.log(over);
    document.getElementById('option').remove();
    document.getElementById('dropbtn').remove();
    //document.getElementById('dropdown-content').remove();
}

function ov3(){
    overPlayed = "Played";
    over=3;
    document.getElementById('option').remove();
    document.getElementById('dropbtn').remove();
    //document.getElementById('dropdown-content').remove();
}

function ov5(){
    overPlayed = "Played";
    over= 5;
    document.getElementById('option').remove();
    document.getElementById('dropbtn').remove();

   // document.getElementById('dropdown-content').remove();
}

function check(choice)
{
    if (overPlayed =="Not played") {
       
        return;
        
    } else {
        
    
     var playerChoice = choice.id;
     oddEvenChoice= playerChoice;
     console.log(playerChoice);
     document.getElementById('odd').remove();
     document.getElementById('even').remove();
     document.getElementById('select').innerHTML ='<img src="https://i.pinimg.com/originals/93/ae/ca/93aecae6d156f82e7be74c0de2c3c2b5.jpg" height=100 width = 100 id ="1" alt="1" onclick= "oddeven(this)"><img src="https://pbs.twimg.com/media/Bm2HNiICQAAAbsv.jpg" height=100 width=100 alt="2" id="2" onclick="oddeven(this)"><img src="https://cdn.pixabay.com/photo/2012/04/24/17/18/hand-40513_1280.png" height=100 width = 100 id ="3" alt="3" onclick= "oddeven(this)"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0NWHfiovIph7iugFmKq8etyIcHddMWIx1w&usqp=CAU" height=100 width=100 alt="4" id="4" onclick="oddeven(this)"><img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Hand3.png" height=100 width = 100 id ="5" alt="5" onclick= "oddeven(this)"><img src="https://i.pinimg.com/originals/ce/5c/1b/ce5c1b9277be2efcbc25a27dde862f7b.jpg" height=100 width=100 alt="6" id="6" onclick="oddeven(this)"><img src="https://www.joshuanava.biz/creating-action-figures/images/1772_56_50-how-draw-human-wrist.jpg" height=100 width = 100 id ="10" alt="10" onclick= "oddeven(this)">';
     
    }
     
}



function oddeven(Yourchoice)
{//geting over from the user and converting it into balls.
   // overs=prompt('How many over game do you want?');
    //over= parseInt(overs,10);
    console.log('over:'+over);
    var ball= (over*6);
    ballsforBalling= parseInt(ball,10);
    ballsforBating= parseInt(ball,10);
    
    
    var humanchoice, botchoice;
    humanchoice = Yourchoice.id;
    console.log(humanchoice);
    botchoice = numToChoice(botAnswer());
    console.log(botchoice);
    var humannum, botnum;
    humannum = parseInt(humanchoice,10);
    botnum = parseInt(botchoice,10);
    console.log(humannum+ botnum);
    var totalSum = humannum + botnum;
    message = decidetheWinner(oddEvenChoice,totalSum);
    console.log(message);

     imageDatabase = {
        '1': document.getElementById('1').src,
        '2': document.getElementById('2').src,
        '3': document.getElementById('3').src,
        '4': document.getElementById('4').src,
        '5': document.getElementById('5').src,
        '6': document.getElementById('6').src,
        '10': document.getElementById('10').src,
        
    }
    document.getElementById('1').remove();
    document.getElementById('2').remove();
    document.getElementById('3').remove();
    document.getElementById('4').remove();
    document.getElementById('5').remove();
    document.getElementById('6').remove();
    document.getElementById('10').remove();

    var humandiv= document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv= document.createElement('div');
    var buttondiv = document.createElement('div');

    buttondiv.setAttribute('id','button');
    humandiv.setAttribute('id','human');
    botdiv.setAttribute('id','bot');
    messagediv.setAttribute('id','message');
    humandiv.innerHTML = '<img src="'+ imageDatabase[humanchoice]+'"width=150 height= 150 box-shadow: 0px 10px 50px rgba(37,50,233,1);">'
    messagediv.innerHTML = '<h3 style= "color:green; font-size: 60px; padding: 30px">'+ message +'</h3> ';
    botdiv.innerHTML = '<img src="'+ imageDatabase[botchoice]+'"width=150 height= 150 box-shadow: 0px 10px 50px rgba(243,38,24,1);">'
     
  document.getElementById('select').appendChild(humandiv);
  document.getElementById('select').appendChild(messagediv);
  document.getElementById('select').appendChild(botdiv);
 
   if (message == "You Won") {
         buttondiv.innerHTML = '<h3 style= "color:blue; font-size: 60px; padding: 30px"> What do you want to play first?</h3><br> <button class="btn btn-success" id="bat" onclick="bat()">Bat</button><br><br><button class="btn btn-success" id="ball" onclick="ball()">ball</button>';
         document.getElementById('select').appendChild(buttondiv);
         } 
  else {
         choiceOpt =AnswertoChoice(compBatBallAnswer());
         buttondiv.innerHTML = '<h3 style= "color:blue; font-size: 60px; padding: 30px"> Computer selected to '+ choiceOpt +'</h3><br><button class="btn btn-success" id="start" onclick="optfunc()">Start</button>';
         document.getElementById('select').appendChild(buttondiv);
         
   }


}

function optfunc(){
    if (choiceOpt =='bat'){
        //console.log('bat');
        ball();
    }
    else {
        bat();
        //console.log('ball');
    }
}

function botAnswer()
{
    return Math.floor(Math.random() * 6);
}


function numToChoice(number){
    return ['1','2','3','4','5','10'][number];
}
function decidetheWinner(OddEvenChoice,TotalSum){

    if (OddEvenChoice == "odd") {
        // console.log('hey');
         if ((TotalSum%2) !=0) {
             console.log('you won');
             return("You Won");
             
         } else {
             console.log('you lost')
             return("You lost");
         }
         
     } else {
         //console.log('hii');
         if ((TotalSum%2) === 0) {
             console.log('you won');
             return("You Won");
             
         } else {
             console.log('you lost');
             return("You lost");
         }
         
     }

}

function compBatBallAnswer(){
    return Math.floor(Math.random()*2);
}

function AnswertoChoice(num){
    return['bat','ball'][num];
}


function bat(){
    if (ballsforBating == 0) {
        console.log('over over');
        document.getElementById('select').innerHTML = '<h3 style= "color: red; font-size: 60px; padding: 30px"> Overs finished </h3> ';
       
        var statusdiv = document.createElement('div');
        statusdiv.setAttribute('id','status');
           if (ballState == "Not Played") {
               statusdiv.innerHTML= '<button class= "btn btn-success" onclick= "ball()">Ball</button>';
               document.getElementById('select').appendChild(statusdiv);
           } else {
               statusdiv.innerHTML='<button class= "btn btn-danger" onclick="result()"> Result</button>';
               document.getElementById('select').appendChild(statusdiv);
           }
    } else
    { console.log(ballsforBating + 'balls');
    
    
    if (ballState == "Not Played") {
        document.getElementById('status').innerHTML= '<h4 style= " font-size: 40px; padding: 30px"> Player Score: '+ TotalScorehuman+'</h4>';
               
    } else {
        if (TotalScorehuman > TotalScorebot) {
            document.getElementById('status').innerHTML='<button class="btn btn-danger" onclick="result()">Result</button>';
            document.getElementById('select').remove();
            //result();
        } else {
            
        var requiredrun = TotalScorebot - TotalScorehuman;
        document.getElementById('status').innerHTML='<h4 style= " font-size: 40px; padding: 30px"> Runs Required: '+ requiredrun +'</h4>';
        }
    }
    ballsforBating=ballsforBating-1;
    document.getElementById('select').innerHTML ='<img src="https://i.pinimg.com/originals/93/ae/ca/93aecae6d156f82e7be74c0de2c3c2b5.jpg" height=100 width = 100 id ="1" alt="1" onclick= "playerRunbat(this)"><img src="https://pbs.twimg.com/media/Bm2HNiICQAAAbsv.jpg" height=100 width=100 alt="2" id="2" onclick="playerRunbat(this)"><img src="https://cdn.pixabay.com/photo/2012/04/24/17/18/hand-40513_1280.png" height=100 width = 100 id ="3" alt="3" onclick= "playerRunbat(this)"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0NWHfiovIph7iugFmKq8etyIcHddMWIx1w&usqp=CAU" height=100 width=100 alt="4" id="4" onclick="playerRunbat(this)"><img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Hand3.png" height=100 width = 100 id ="5" alt="5" onclick= "playerRunbat(this)"><img src="https://i.pinimg.com/originals/ce/5c/1b/ce5c1b9277be2efcbc25a27dde862f7b.jpg" height=100 width=100 alt="6" id="6" onclick="playerRunbat(this)"><img src="https://www.joshuanava.biz/creating-action-figures/images/1772_56_50-how-draw-human-wrist.jpg" height=100 width = 100 id ="10" alt="10" onclick= "playerRunbat(this)">';
  
  }
}

function ball(){ 
    if (ballsforBalling == 0) {
        console.log('over over');
        document.getElementById('select').innerHTML = '<h3 style= "color: red; font-size: 60px; padding: 30px"> Overs finished </h3> ';
       
        var statusdiv = document.createElement('div');
        statusdiv.setAttribute('id','status');
           if (batState == "Not Played") {
               statusdiv.innerHTML= '<button class= "btn btn-success" onclick= "bat()">Bat</button>';
               document.getElementById('select').appendChild(statusdiv);
           } else {
               statusdiv.innerHTML='<button class= "btn btn-danger" onclick="result()"> Result</button>';
               document.getElementById('select').appendChild(statusdiv);
           }
    } else
    { console.log(ballsforBalling + 'balls');

    if (batState == "Not Played") {

        document.getElementById('status').innerHTML= '<h4 style= " font-size: 40px; padding: 30px"> Computer Score: '+ TotalScorebot+'</h4>';
              
    } else {
        if (TotalScorebot > TotalScorehuman) {
            document.getElementById('status').innerHTML='<button class="btn btn-danger" onclick="result()">Result</button>';
            document.getElementById('select').remove();
            //result();
        } else {
            
        var requiredrun = TotalScorehuman - TotalScorebot;
        document.getElementById('status').innerHTML='<h4 style= " font-size: 40px; padding: 30px"> Runs Required: '+ requiredrun +'</h4>';
        }
    }
    ballsforBalling=ballsforBalling-1;
    document.getElementById('select').innerHTML ='<img src="https://i.pinimg.com/originals/93/ae/ca/93aecae6d156f82e7be74c0de2c3c2b5.jpg" height=100 width = 100 id ="1" alt="1" onclick= "playerRunball(this)"><img src="https://pbs.twimg.com/media/Bm2HNiICQAAAbsv.jpg" height=100 width=100 alt="2" id="2" onclick="playerRunball(this)"><img src="https://cdn.pixabay.com/photo/2012/04/24/17/18/hand-40513_1280.png" height=100 width = 100 id ="3" alt="3" onclick= "playerRunball(this)"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0NWHfiovIph7iugFmKq8etyIcHddMWIx1w&usqp=CAU" height=100 width=100 alt="4" id="4" onclick="playerRunball(this)"><img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Hand3.png" height=100 width = 100 id ="5" alt="5" onclick= "playerRunball(this)"><img src="https://i.pinimg.com/originals/ce/5c/1b/ce5c1b9277be2efcbc25a27dde862f7b.jpg" height=100 width=100 alt="6" id="6" onclick="playerRunball(this)"><img src="https://www.joshuanava.biz/creating-action-figures/images/1772_56_50-how-draw-human-wrist.jpg" height=100 width = 100 id ="10" alt="10" onclick= "playerRunball(this)">';
  
  }
}


 function playerRunbat(YourRun){
    
   batState ="Played";
    document.getElementById('1').remove();
    document.getElementById('2').remove();
    document.getElementById('3').remove();
    document.getElementById('4').remove();
    document.getElementById('5').remove();
    document.getElementById('6').remove();
    document.getElementById('10').remove();
     var humanRan, botRan;
     humanRan= YourRun.id;
     console.log(humanRan);
     humanscore= parseInt(humanRan,10);
     botRan = numToChoice(botAnswer());
     botscore= parseInt(botRan,10);
     console.log(botRan);
     var mess;
     if (humanscore === botscore) {
          mess= "Out";
          console.log('out');
         
     } else {
         TotalScorehuman= TotalScorehuman + humanscore;
          mess ="Runs: "+ humanscore + "\n"+ "Total Score of player: "+ TotalScorehuman +"\n"+ "Balls Remaining: "+ ballsforBating;
          console.log(mess);
          console.log(humanscore);
     }
     var humandiv= document.createElement('div');
     var botdiv = document.createElement('div');
     var messagediv= document.createElement('div');
     var buttondiv = document.createElement('div');
 
     buttondiv.setAttribute('id','button');
     humandiv.setAttribute('id','human');
     botdiv.setAttribute('id','bot');
     messagediv.setAttribute('id','message');

     humandiv.innerHTML = '<img src="'+ imageDatabase[humanRan]+'"width=150 height= 150 box-shadow: 0px 10px 50px rgba(37,50,233,1);">';
     messagediv.innerHTML = '<h5 style= "color:green; font-size: 60px; padding: 30px"><br>'+ mess +'<br></h5> ';
     botdiv.innerHTML = '<img src="'+ imageDatabase[botRan]+'"width=150 height= 150 box-shadow: 0px 10px 50px rgba(243,38,24,1);">';
      
   document.getElementById('select').appendChild(humandiv);
   document.getElementById('select').appendChild(messagediv);
   document.getElementById('select').appendChild(botdiv);
   if (mess == 'Out') {
       buttondiv.innerHTML = '<h4 style="color:yellow; font-size: 60px; padding:30px">Total Score: '+ TotalScorehuman +'</h4>';
       document.getElementById('select').appendChild(buttondiv);
       if (ballState == "Not Played") {
           humandiv.innerHTML ='<button class= "btn btn-success" onclick="ball()">ball</button>';
           document.getElementById('select').appendChild(humandiv);
           document.getElementById('bot').remove();
       } else {
        humandiv.innerHTML ='<button class= "btn btn-danger" onclick="result()">Result</button>';
        document.getElementById('select').appendChild(humandiv);
        document.getElementById('bot').remove();
       }
    } else {
    buttondiv.innerHTML = '<button class= "btn btn-success" onclick= "bat()"> Next Ball</button>';
    document.getElementById('select').appendChild(buttondiv);
   
    }
 }

 function playerRunball(YourRun){
    
   ballState = "Played";
    document.getElementById('1').remove();
    document.getElementById('2').remove();
    document.getElementById('3').remove();
    document.getElementById('4').remove();
    document.getElementById('5').remove();
    document.getElementById('6').remove();
    document.getElementById('10').remove();
     var humanRan, botRan;
     humanRan= YourRun.id;
     humanscore= parseInt(humanRan,10);
     console.log(humanscore);
     botRan = numToChoice(botAnswer());
     botscore= parseInt(botRan,10);
     console.log(botscore);
     var mess;
     if (botscore === humanscore) {
          mess= "Out";
          console.log('out');
         
     } else {
         TotalScorebot= TotalScorebot + botscore;
          mess ="Runs: "+ botscore + "\n" +" Total Score of bot: "+ TotalScorebot +"\n"+ "Balls Remaining: "+ ballsforBalling;
          console.log(mess);
          console.log(botscore);
     }
     var humandiv= document.createElement('div');
     var botdiv = document.createElement('div');
     var messagediv= document.createElement('div');
     var buttondiv = document.createElement('div');
 
     buttondiv.setAttribute('id','button');
     humandiv.setAttribute('id','human');
     botdiv.setAttribute('id','bot');
     messagediv.setAttribute('id','message');

     humandiv.innerHTML = '<img src="'+ imageDatabase[humanRan]+'"width=150 height= 150 box-shadow: 0px 10px 50px rgba(37,50,233,1);">';
     messagediv.innerHTML = '<h5 style= "color:green; font-size: 60px; padding: 30px"><br>'+ mess +'<br></h5> ';
     botdiv.innerHTML = '<img src="'+ imageDatabase[botRan]+'"width=150 height= 150 box-shadow: 0px 10px 50px rgba(243,38,24,1);">';
      
   document.getElementById('select').appendChild(humandiv);
   document.getElementById('select').appendChild(messagediv);
   document.getElementById('select').appendChild(botdiv);
   if (mess == 'Out') {
       buttondiv.innerHTML = '<h4 style="color:yellow; font-size: 60px; padding:30px">Total Score: '+ TotalScorebot +'</h4>';
       document.getElementById('select').appendChild(buttondiv);
       if (batState == "Not Played") {
           humandiv.innerHTML ='<button class= "btn btn-success" onclick="bat()">bat</button>';
           document.getElementById('select').appendChild(humandiv);
           document.getElementById('bot').remove();
       } else {
        humandiv.innerHTML ='<button class= "btn btn-danger" onclick="result()">Result</button>';
        document.getElementById('select').appendChild(humandiv);
        document.getElementById('bot').remove(); 
       }
    } else {
    buttondiv.innerHTML = '<button class= "btn btn-success" onclick= "ball()"> Next Ball</button>';
    document.getElementById('select').appendChild(buttondiv);
   
    }
 }
 

 function result(){
     console.log("result");
     if(TotalScorehuman>TotalScorebot){
         var byRuns = TotalScorehuman-TotalScorebot;
         document.getElementById('status').innerHTML='<h3 style= "color: blue; font-size: 60px; padding: 30px"> You Won!!<br> by '+ byRuns +' Runs </h3>';

     }else{
         var byRuns = TotalScorebot-TotalScorehuman;
         document.getElementById('status').innerHTML='<h3 style= "color: blue; font-size: 60px; padding: 30px"> Bot Won!!<br> by '+ byRuns +' Runs </h3>';
     }
    
     

 }