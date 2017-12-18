var startTime;
var fadeTime1 = .2;
var fadeTime2 = .6;

//var easeIn			= 'Bounce.easeOut';


// Sets times for frame changes - steps

//var frameDelays = [0,1,1,1];
var frameDelays = [0,2.5,2.5,2.5];

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

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f3_text1 = "ICE HOCKEY PASS";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f3_text2 = "€9.99";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].cta = "SIGN UP";

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Default = false;
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Active = true;
    Enabler.setDevDynamicContent(devDynamicContent);


document.getElementById('f1_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f1_text1
document.getElementById('f1_text2').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f1_text2;
document.getElementById('f3_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f3_text1
document.getElementById('f3_text2').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f3_text2
document.getElementById('ctaText').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].cta





 document.getElementById('main_container').style.visibility = 'visible';








   startAnim();

}



function step1 (){

  TweenLite.set(['#f1_text1'], {rotation:0.01,transformOrigin:"50% 30%"});
  TweenLite.set(['#f1_text2'], {rotation:0.01,transformOrigin:"50% 40%"});

  TweenLite.set(['#f2_text1'], {rotation:0.01,transformOrigin:"50% 50%"});
  TweenLite.set(['#f2_text2'], {rotation:0.01,transformOrigin:"50% 50%"});

  TweenLite.fromTo(mountain_01, 1.30, {x:0, y:0}, {x:0, y:-207}, Quint.easeOut);
  TweenLite.fromTo(mountain_02, 1.10, {x:0, y:0}, {delay:0.3, x:0, y:-207}, Quint.easeOut);
  TweenLite.fromTo(mountain_03, 1.10, {x:0, y:0}, {delay:0.4, x:0, y:-237}, Quint.easeOut);


}

function step2 (){

           //Show Frame 1 Copy
           TweenLite.set('#f1_text1', {autoAlpha:1, scale:0.01});
           TweenLite.set('#f1_text2', {autoAlpha:1});

           TweenLite.to('#f1_text1', 1.2, {scale:1, ease: Elastic.easeOut.config(1, 0.3), delay:0.3 });
           TweenLite.fromTo('#f1_text2', 0.3, {scale: 0.01}, {delay:0.4, scale:1.0}, {ease: Bounce.easeOut });

}


function step3 (){

           //Hide Frame 1 Copy

           TweenMax.to(['#f1_text1','#f1_text2'], 0.1, {autoAlpha:0,ease:Power4.easeOut})


           //Show Frame 2 Copy
           TweenLite.set('#f2_text1', {autoAlpha:1});
           TweenLite.set('#f2_text2', {autoAlpha:1});

           TweenLite.fromTo('#f2_text1', 0.3, {scale: 0.01}, {delay:0.1, scale:1.0}, {ease: Bounce.easeOut });
           TweenLite.fromTo('#f2_text2', 0.3, {scale: 0.01}, {delay:0.4, scale:1.0}, {ease: Bounce.easeOut });
}


function step4 (){

            var tl = new TimelineMax();

           //Hide Frame  2
           tl.add(TweenMax.to(['#f2_text1','#f2_text2'], fadeTime1, {autoAlpha: 0}))

           //Show Frame 3




           tl.add(TweenMax.to(['#f3_text1','#f3_text2'], fadeTime2, {
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

}
