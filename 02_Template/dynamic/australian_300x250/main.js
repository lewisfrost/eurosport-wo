var startTime;
var fadeTime1 = .2;
var fadeTime2 = .6;

// Sets times for frame changes - steps 

//var frameDelays = [0,1,1,1];
var frameDelays = [0,1.9,5,6];

var svgScale = .7
var svgWidth = 80;
var svgHeight = 100;

var svgNewX = -50
var svgNewY = -30
var svgNewScale = 3.5


var triangleSVG = '<svg id="Layer1" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMinYMin slice" x="0px" y="0px" width="80px" height="100px" viewBox="0 0 80 100"><defs><g id="trSVG"><path id="triangleSVGId" stroke="none" d="M0 0 L0 100 80 50 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlink:href="#trSVG"/></g></svg>';


document.getElementById('triangle').innerHTML = '<div id="svgHolder">' + triangleSVG + '</div>';

var svgPath = '#triangle div svg use';


var width = document.getElementById('main_container').offsetWidth;
var height = document.getElementById('main_container').offsetHeight;

var svgX = width / 2 - (svgWidth*svgScale / 2)
var svgY = height / 2 - (svgHeight*svgScale / 2)

var rect = document.getElementById('left_bracket').getBoundingClientRect();
var origLeftBracketPos = rect.left

var rect = document.getElementById('right_bracket').getBoundingClientRect();
var origRightBracketPos = rect.left

//console.log('width = ' + width);
//console.log('height = ' + height);

//console.log('svgX = ' + svgX);
//console.log('svgY = ' + svgY);


var bgExit = document.getElementById('background-exit');


/*

DC stuff

*/


//Function confirm if the creative is visible 
enablerInitHandler = function(e) {
    
  // Add listeners
  addListeners();
    
    if(Enabler.isVisible()) {
     init();
    } else {
     Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, init);
    } 
};

//Add Event Listeners
addListeners = function(e) {
  bgExit.addEventListener('touchEnd', bgExitHandler, false);
  bgExit.addEventListener('click', bgExitHandler, false);
};

//Add exits
bgExitHandler = function(e) { 
    //endFrame();
  Enabler.exit('Clickthrough');
};

//Wait for the content to load to call the start od the ad
window.onload = function(){
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
};  






/*

Animation code

*/


function init() {
    
    
    // Dynamic Content variables and sample values

    Enabler.setProfileId(10023004);
    var devDynamicContent = {};

    devDynamicContent.TennisDynamic_300x250= [{}];
    devDynamicContent.TennisDynamic_300x250[0]._id = 0;
    devDynamicContent.TennisDynamic_300x250[0].Unique_ID = 1;
    devDynamicContent.TennisDynamic_300x250[0].Reporting_Label = "uk_01";
    devDynamicContent.TennisDynamic_300x250[0].Start_Date = {};
    devDynamicContent.TennisDynamic_300x250[0].Start_Date.RawValue = "2017/11/22 00:00 +00:00";
    devDynamicContent.TennisDynamic_300x250[0].Start_Date.UtcValue = 1511308800000;
    devDynamicContent.TennisDynamic_300x250[0].End_Date = {};
    devDynamicContent.TennisDynamic_300x250[0].End_Date.RawValue = "2017/12/08 00:00 +00:00";
    devDynamicContent.TennisDynamic_300x250[0].End_Date.UtcValue = 1512691200000;
    devDynamicContent.TennisDynamic_300x250[0].bg1 = {};
    devDynamicContent.TennisDynamic_300x250[0].bg1.Url = "https://s0.2mdn.net/creatives/assets/2441742/nadal_300x250.jpg";
    devDynamicContent.TennisDynamic_300x250[0].f1_text1 = "RAFAEL<br\/>NADAL";
    devDynamicContent.TennisDynamic_300x250[0].f1_text2 = "-";
    devDynamicContent.TennisDynamic_300x250[0].f1_text3 = "KEVIN<br\/>ANDERSON";
    devDynamicContent.TennisDynamic_300x250[0].f2_text1 = "THIS<br\/> FRIDAY<br\/> AT 20:30";
    devDynamicContent.TennisDynamic_300x250[0].f2_text2 = "LIVE AT<br\/> EUROSPORT<br\/> PLAYER";
    devDynamicContent.TennisDynamic_300x250[0].fe_text1 = "<br\/>MORE TEXT <br\/>HERE";
    devDynamicContent.TennisDynamic_300x250[0].fe_text2 = "ON THE<br\/>EXTRA FRAME";
    devDynamicContent.TennisDynamic_300x250[0].f3_text1 = "AUSTRALIAN OPEN LIVE";
    devDynamicContent.TennisDynamic_300x250[0].f3_text2 = "4,99\u20AC*";
    devDynamicContent.TennisDynamic_300x250[0].f3_text3 = "PER <\/br>MONTH";
    devDynamicContent.TennisDynamic_300x250[0].f3_text4 = "*T&C\'S APPLY";
    devDynamicContent.TennisDynamic_300x250[0].cta = "SUBSCRIBE NOW";
    devDynamicContent.TennisDynamic_300x250[0].Default = true;
    devDynamicContent.TennisDynamic_300x250[0].Active = true;
    Enabler.setDevDynamicContent(devDynamicContent);


document.getElementById('bg1').src = dynamicContent.TennisDynamic_300x250[0].bg1.Url;
document.getElementById('f1_text1').innerHTML = dynamicContent.TennisDynamic_300x250[0].f1_text1
document.getElementById('f1_text2').innerHTML = dynamicContent.TennisDynamic_300x250[0].f1_text2;
document.getElementById('f1_text3').innerHTML = dynamicContent.TennisDynamic_300x250[0].f1_text3
    
document.getElementById('fe_text1').innerHTML = dynamicContent.TennisDynamic_300x250[0].fe_text1
document.getElementById('fe_text2').innerHTML = dynamicContent.TennisDynamic_300x250[0].fe_text2
    
document.getElementById('f2_text1').innerHTML = dynamicContent.TennisDynamic_300x250[0].f2_text1
document.getElementById('f2_text2').innerHTML = dynamicContent.TennisDynamic_300x250[0].f2_text2
document.getElementById('f3_text1').innerHTML = dynamicContent.TennisDynamic_300x250[0].f3_text1
document.getElementById('f3_text2').innerHTML = dynamicContent.TennisDynamic_300x250[0].f3_text2
document.getElementById('f3_text3').innerHTML = dynamicContent.TennisDynamic_300x250[0].f3_text3
document.getElementById('f3_text4').innerHTML = dynamicContent.TennisDynamic_300x250[0].f3_text4
document.getElementById('ctaText').innerHTML = dynamicContent.TennisDynamic_300x250[0].cta
    
    
    
        
  /* 

//Offline Test

document.getElementById('bg1').src = "bg1.jpg";
document.getElementById('f1_text1').innerHTML = "BORUSSIA MÖNCHENGLADBACH"
document.getElementById('f1_text1').innerHTML = "<font style=\'font-size:23px;line-height: 23px;\'>BORUSSIA MÖNCHENGLADBACH<\/font>"
document.getElementById('f1_text2').innerHTML = "-";
//document.getElementById('f1_text3').innerHTML = "SV WERDER <br/>BREMEN"
document.getElementById('f1_text3').innerHTML = "BORUSSIA MÖNCHENGLADBACH"
document.getElementById('f2_text1').innerHTML = "DIESEN<br/> FREITAG<br/> UM 20:30 UHR"
document.getElementById('f2_text1').innerHTML = "HEUTE <br/>ABEND UM <br/>20:30 UHR"
//document.getElementById('f2_text1').innerHTML = "DIESEN <br/>SONNTAG UM <br/>13:30 UHR"
document.getElementById('f2_text2').innerHTML = "LIVE UM<br/> EUROSPORT<br/> PLAYER"
document.getElementById('f3_text1').innerHTML = "DIE FREITAGS-SPIELE<br/>LIVE FÜR NUR<br/><font style='font-family: ESPAlphaHeadlineTab-Bold, Helvetica, Arial, sans-serif;font-size:36px; line-height: 36px;'>4,99*</font><br/><font style='font-size:13px;'>PRO MONAT</font>";
document.getElementById('f3_text2').innerHTML = "*INKL. MWST."
document.getElementById('ctaText').innerHTML = "JETZT ABONNIEREN";
*/  
    

   document.getElementById('main_container').style.visibility = 'visible';
    
   TweenMax.set(['#cover'], {x:-width});    
    
   TweenMax.set(['#triangle'], {x:svgX,y:svgY,scale:svgScale});
    
    
    console.log('dynamicContent.TennisDynamic_300x250[0].fe_text1'+dynamicContent.TennisDynamic_300x250[0].fe_text1)
    console.log('dynamicContent.TennisDynamic_300x250[0].fe_text2'+dynamicContent.TennisDynamic_300x250[0].fe_text2)
    
    
    if(dynamicContent.TennisDynamic_300x250[0].fe_text1 != "" && dynamicContent.TennisDynamic_300x250[0].fe_text2 != ""){
        addExtraFrame(); 
    }

            
   startAnim();

}


function step1 (){
    
           //Show Frame 1 Animation
    
    transTime = .3

    var tl = new TimelineMax();
    
     tl.add(TweenMax.set(['#triangle'],{opacity:1,delay:transTime}));
     tl.add(TweenMax.set(['#triangle'],{opacity:0,delay:transTime}));
     tl.add(TweenMax.set(['#triangle'],{opacity:1,delay:transTime}));
     tl.add(TweenMax.set(['#triangle'],{opacity:0,delay:transTime}));
     tl.add(TweenMax.set(['#triangle'],{opacity:1,delay:transTime}));

    tl.add(TweenMax.to(['#triangle'], .1, {
        scale: svgNewScale,
        x: svgNewX,
        y: svgNewY,
        ease: Power4.easeIn,
        delay:transTime
    }));
    
}

function step2 (){
    
           //Show Frame 1 Copy
           
          TweenMax.to(['#f1_text1','#f1_text2','#f1_text3'],fadeTime1,{opacity:1})
}


function step3 (){
                
           //Hide Frame 1 Copy
           TweenMax.to(['#f1_text1','#f1_text2','#f1_text3'], fadeTime1, {autoAlpha:0,ease:Power4.easeOut})
            
           //Show Frame 2 Copy
           TweenMax.to(['#f2_text1','#f2_text2'], fadeTime1, {opacity:1,ease:Power4.easeOut,delay:fadeTime1 })
}

function step4 (){
                
           //Hide Frame 2 Copy
           TweenMax.to(['#f2_text1','#f2_text2'], fadeTime1, {autoAlpha:0,ease:Power4.easeOut})
            
           //Show Frame 3 Copy
           TweenMax.to(['#fe_text1','#fe_text2'], fadeTime1, {opacity:1,ease:Power4.easeOut,delay:fadeTime1 })
}


function step5 (){
    
            var tl = new TimelineMax();
            
           //Hide Frame  2
    
           tl.add(TweenMax.to(['#f2_text1','#f2_text2','#fe_text1','#fe_text2','#logo_shadow1'], fadeTime1, {autoAlpha: 0}))
    
           tl.add(TweenMax.to(['#cover'], fadeTime2, {x: 0,ease:Power4.easeOut}))
           tl.add(TweenMax.to(['#triangle'], fadeTime2, {x: width+svgNewX,ease:Power4.easeOut,delay:-fadeTime2}))
            
           //Show Frame 3  
           
            tl.add( TweenMax.to(['#left_bracket','#right_bracket'],fadeTime2, {
               opacity: 1
           }))
           tl.add(TweenMax.to([ '#left_bracket'], fadeTime2, {
               left: 135,
               ease: Power4.easeOut
           }))
           tl.add(TweenMax.to(['#right_bracket'], fadeTime2, {
               left: 165,
               ease: Power4.easeOut,
               delay:-fadeTime2
           }))
    
           tl.add(TweenMax.to([ '#left_bracket'], fadeTime2, {
               left: origLeftBracketPos,
               ease: Power4.easeOut
           }))
           tl.add(TweenMax.to(['#right_bracket'], fadeTime2, {
               left: origRightBracketPos,
               ease: Power4.easeOut,
               delay:-fadeTime2
           }))
           


           tl.add(TweenMax.to(['#f3_text1','#f3_text2','#f3_text3','#f3_text4'], fadeTime2, {
               opacity: 1,delay:-fadeTime2/2,
               ease: Power4.easeOut
           }))

           tl.add(TweenMax.to(['#cta'], fadeTime2 / 2, {
               opacity: 1,delay:-fadeTime2,
               onComplete: endAnimation
           }))
}



/*

Utility functions

*/
function addExtraFrame(){
    
   frameDelays = [0,1.9,5,5,6];
    
}

function startAnim(){
    
   startTime = new Date();
    
   var delay = 0;
    
   for (var i = 0; i< frameDelays.length; i++){
       
     delay += frameDelays[i]
       
       if(frameDelays.length==4 && i == 3 ){
           TweenMax.delayedCall(delay, window["step"+(i+2)]);
       }else{
           TweenMax.delayedCall(delay, window["step"+(i+1)]);
       }
       
   }
    
}

function endAnimation() {
    
    var endTime = new Date()
    
    console.log('Animation duration: ' + ((endTime - startTime) / 1000) + ' seconds');
    
}

