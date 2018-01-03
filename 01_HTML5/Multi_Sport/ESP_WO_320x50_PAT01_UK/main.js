var startTime;
var fadeTime1 = .2;
var fadeTime2 = .6;
var fadeTime3 = .6;

loopcount=0;
numOfLoops=1;

// Sets times for frame changes - steps
//var frameDelays = [0,0.5,0.5,0.5,2.0];
var frameDelays = [0,3.0,3.0,3.0,2.6];

var svgScale = .7
var svgWidth = 90;
var svgHeight = 100;

var svgNewX = -60
var svgNewY = -35
var svgNewScale = 3.5


var width = document.getElementById('main_container').offsetWidth;
var height = document.getElementById('main_container').offsetHeight;

var svgX = width / 2 - (svgWidth*svgScale / 2)
var svgY = height / 2 - (svgHeight*svgScale / 2)


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
    Enabler.setProfileId(10022555);
    var devDynamicContent = {};


    devDynamicContent.BundesligaDynamicGameSpecific_300x250= [{}];
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0]._id = 0;
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Unique_ID = 1;
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Reporting_Label = "this_friday";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Start_Date = {};
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Start_Date.RawValue = "2017/11/29 00:00 +01:00";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Start_Date.UtcValue = 1511910000000;
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].End_Date = {};
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].End_Date.RawValue = "2017/12/01 00:00 +01:00";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].End_Date.UtcValue = 1512082800000;

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f1_text1 = "I WANT IT";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f1_text2 = "ALL";

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f5_text1 = "EVERY SECOND OF";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f5_text2 = "PYEONGCHANG 2018";

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f6_text1 = "EXCLUSIVELY ON EUROSPORT PLAYER";

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f7_text1 = "30 DAY";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f7_text2 = "FREE TRIAL";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].cta = "SIGN UP";

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Default = false;
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Active = true;
    Enabler.setDevDynamicContent(devDynamicContent);

    document.getElementById('f1_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f1_text1
    document.getElementById('f1_text2').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f1_text2
    document.getElementById('f5_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f5_text1
    document.getElementById('f5_text2').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f5_text2
    document.getElementById('f6_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f6_text1
    document.getElementById('f7_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f7_text1
    document.getElementById('f7_text2').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f7_text2
    document.getElementById('ctaText').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].cta


    document.getElementById('main_container').style.visibility = 'visible';




   startAnim();

}


function step1 (){

          TweenMax.fromTo(mountain_01, 0.70, {x:0, y:0}, {delay:0.4, x:0, y:-73}, Quint.easeOut);
          TweenMax.fromTo(mountain_02, 0.80, {x:0, y:0}, {delay:0.3, x:0, y:-73}, Quint.easeOut);
          TweenMax.fromTo(mountain_03, 0.90, {x:0, y:0}, {delay:0.2, x:0, y:-60}, Quint.easeOut);
          TweenMax.fromTo(mountain_04, 1.10, {x:0, y:0}, {delay:0.0, x:0, y:-60}, Quint.easeOut);
          TweenMax.fromTo(mountain_05, 0.70, {x:0, y:0}, {delay:0.25, x:0, y:-56}, Quint.easeOut);
          TweenMax.fromTo(mountain_06, 0.80, {x:0, y:0}, {delay:0.2, x:0, y:-72}, Quint.easeOut);
          TweenMax.fromTo(mountain_07, 0.90, {x:2, y:0}, {delay:0.1, x:0, y:-60}, Quint.easeOut);
          TweenMax.fromTo(mountain_08, 0.60, {x:0, y:0}, {delay:0.2, x:0, y:-66}, Quint.easeOut);
          TweenMax.fromTo(mountain_09, 0.60, {x:0, y:0}, {delay:0.2, x:0, y:-72}, Quint.easeOut);

          TweenMax.to(mountain_01, 0.90, {delay:2.70, x:0, y:73}, Quint.easeIn);
          TweenMax.to(mountain_02, 1.05, {delay:2.70, x:0, y:73}, Quint.easeIn);
          TweenMax.to(mountain_03, 1.25, {delay:2.70, x:0, y:60}, Quint.easeIn);
          TweenMax.to(mountain_04, 1.7, {delay:2.60, x:0, y:60}, Quint.easeIn);
          TweenMax.to(mountain_05, 0.90, {delay:2.60, x:0, y:56}, Quint.easeIn);
          TweenMax.to(mountain_06, 1.00, {delay:2.60, x:0, y:72}, Quint.easeIn);
          TweenMax.to(mountain_07, 1.25, {delay:2.60, x:0, y:60}, Quint.easeIn);
          TweenMax.to(mountain_08, 1.7, {delay:2.60, x:0, y:66}, Quint.easeIn);
          TweenMax.to(mountain_09, 1.7, {delay:2.60, x:0, y:72}, Quint.easeIn);
}

function step2 (){
          TweenMax.set(['#f1_text1'], {rotation:0.01,transformOrigin:"50% 35%"});
          TweenMax.set(['#f1_text2'], {rotation:0.01,transformOrigin:"50% 50%"});
          TweenMax.set('#f1_text1', {autoAlpha:1, scale:0.01});
          TweenMax.set('#f1_text2', {autoAlpha:1});

          TweenMax.to('#f1_text1', 0.8, {scale:1, ease: Bounce.easeOut, delay:0.01 });
          TweenMax.fromTo('#f1_text2', 0.6, {scale: 0.01}, {delay:0.40, scale:1.0}, {ease: Quint.easeOut });
}


function step3 (){

           TweenMax.to(['#f1_text1','#f1_text2'], 0.2, {autoAlpha:0,ease:Power4.easeOut})

           TweenMax.set(['#f5_text1'], {rotation:0.01,transformOrigin:"50% 40%"});
           TweenMax.set(['#f5_text1'], {autoAlpha:1, scale:0.001});
           TweenMax.to(['#f5_text1'], 0.7, {scale:1, ease: Bounce.easeOut, delay:0.3 });

           TweenMax.set(['#f5_text2'], {rotation:0.01,transformOrigin:"50% 50%"});
           TweenMax.set(['#f5_text2'], {autoAlpha:1, scale:0.001});
           TweenMax.to(['#f5_text2'], 0.7, {scale:1, ease: Bounce.easeOut, delay:0.6 });
}

function step4 (){

           TweenMax.to(['#f5_text1','#f5_text2'], 0.6, {scale:0.01, autoAlpha:0, ease: Quint.easeOut, delay:0 });

           TweenMax.set(['#f6_text1'], {rotation:0.01,transformOrigin:"50% 40%"});
           TweenMax.set(['#f6_text1'], {autoAlpha:1 , delay:0.5});
           TweenMax.to(['#f6_text1'], 0.8, {y:-40, ease: Quint.easeOut, delay:0.5 });

}

function step5 (){

           var tl = new TimelineMax();

           //Hide Frame  3
           TweenMax.to(['#f6_text1'], 0.01, {autoAlpha:0, ease: Quint.easeOut, delay:0.5 });
           TweenMax.to(['#f6_text1'], 0.01, {y:40, ease: Quint.easeOut, delay:0.6 });

           //Show Frame 4
           TweenMax.set(['#f7_text1'], {rotation:0.01,transformOrigin:"50% 40%"});
           TweenMax.set(['#f7_text1'], {autoAlpha:1 , delay:0.5});
           TweenMax.to(['#f7_text1'], 0.6, {x:-25, ease: Quint.easeOut, delay:1.4 });

           TweenMax.set(['#f7_text2'], {rotation:0.01,transformOrigin:"50% 50%"});
           TweenMax.set(['#f7_text2'], {autoAlpha:1 ,delay:0.5});
           TweenMax.to(['#f7_text2'], 0.6, {x:-25, ease: Quint.easeOut, delay:1.4 });

           TweenMax.set(['#cta'], {rotation:0.01,transformOrigin:"50% 35%"});
           TweenMax.set(['#cta'], {autoAlpha:1, scale:0.001});
           TweenMax.to(['#cta'], 0.6, {opacity: 1, delay:1.3,scale:1, ease: Quint.easeOut, delay:1.3 });

           tl.add(TweenMax.to(['#cta'], 0.6, {
               delay:2.6,
               onComplete: endAnimation
           }))

}




/*

Utility functions

*/

function startAnim(){

   startTime = new Date();

   var delay = 0;

   for (var i = 0; i< frameDelays.length; i++){

     delay += frameDelays[i]

     TweenMax.delayedCall(delay, window["step"+(i+1)]);
   }

}

function endAnimation() {

    var endTime = new Date()

    console.log('Animation duration: ' + ((endTime - startTime) / 1000) + ' seconds');

    if (loopcount<numOfLoops){
        loopcount++;
        TweenMax.delayedCall(2, fadeOut);
    }

}
function fadeOut(){

    //Fade Out Tween Code !!!!!!!

    TweenMax.to(['#f7_text1','#f7_text2','#cta'], 0.60, {autoAlpha:0, ease: Quint.easeOut, delay:0 });
    TweenMax.set(['#f7_text1'], {x:0, delay:1.5 });
    TweenMax.set(['#f7_text2'], {x:0, delay:1.5 });

    TweenMax.delayedCall(1, startAnim);
}
