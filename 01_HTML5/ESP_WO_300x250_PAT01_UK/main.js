var startTime;
var fadeTime1 = .2;
var fadeTime2 = .6;
var fadeTime3 = .6;

//var easeIn			= 'Bounce.easeOut';


// Sets times for frame changes - steps

//var frameDelays = [0,.5,.5,.5,.5,.5,.5,.5];

var frameDelays = [0,1.0,2.5,2.5,1.5,1.8,1.9,2.5];

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

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f3_text1 = "ICE HOCKEY";

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f5_text1 = "EVERY SECOND OF THE";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f5_text2 = "ICE HOCKEY";

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f6_text1 = "EXCLUSIVELY ON";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f6_text2 = "EUROSPORT PLAYER";

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f7_text1 = "ICE HOCKEY PASS";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].f7_text2 = "€9.99";
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].cta = "SIGN UP";

    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Default = false;
    devDynamicContent.BundesligaDynamicGameSpecific_300x250[0].Active = true;
    Enabler.setDevDynamicContent(devDynamicContent);


    document.getElementById('f1_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f1_text1
    document.getElementById('f1_text2').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f1_text2
    document.getElementById('f3_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f3_text1
    document.getElementById('f5_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f5_text1
    document.getElementById('f5_text2').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f5_text2
    document.getElementById('f6_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f6_text1
    document.getElementById('f6_text2').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f6_text2
    document.getElementById('f7_text1').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f7_text1
    document.getElementById('f7_text2').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].f7_text2
    document.getElementById('ctaText').innerHTML = dynamicContent.BundesligaDynamicGameSpecific_300x250[0].cta


    document.getElementById('main_container').style.visibility = 'visible';



   startAnim();

}


function step1 (){

           TweenMax.set(['#f1_text1'], {rotation:0.01,transformOrigin:"50% 35%"});
           TweenMax.set(['#f1_text2'], {rotation:0.01,transformOrigin:"50% 50%"});

           TweenMax.set(['#f2_text1'], {rotation:0.01,transformOrigin:"50% 50%"});
           TweenMax.set(lineOne, {autoAlpha:0, scaleX:0.05, transformOrigin:"right"})
           TweenMax.set(lineTwo, {autoAlpha:0, scaleX:0.05, transformOrigin:"left"})
           TweenMax.set(['#f2_text2'], {rotation:0.01,transformOrigin:"50% 50%"});

           TweenMax.fromTo(mountain_01, 1.20, {x:0, y:0}, {x:0, y:-212}, Quint.easeOut);
           TweenMax.fromTo(mountain_02, 0.80, {x:2, y:0}, {delay:0.3, x:2, y:-207}, Quint.easeOut);
           TweenMax.fromTo(mountain_03, 0.75, {x:0, y:0}, {delay:0.45, x:0, y:-237}, Quint.easeOut);
           TweenMax.fromTo(mountain_04, 0.60, {x:0, y:0}, {delay:0.5, x:0, y:-82}, Quint.easeOut);

}

function step2 (){

           //Show Frame 1 Copy

           TweenMax.set('#f1_text1', {autoAlpha:1, scale:0.01});
           TweenMax.set('#f1_text2', {autoAlpha:1});

           TweenMax.to('#f1_text1', 0.8, {scale:1, ease: Bounce.easeOut, delay:0.01 });
           TweenMax.fromTo('#f1_text2', 0.6, {scale: 0.01}, {delay:0.40, scale:1.0}, {ease: Quint.easeOut });
}

function step3 (){

           //Hide Frame 1 Copy
           TweenMax.set('#f2_text1', {autoAlpha:1});
           TweenMax.set('#f2_text2', {autoAlpha:1});

           TweenMax.to(['#f1_text1','#f1_text2'], 0.2, {autoAlpha:0,ease:Power4.easeOut})

           TweenMax.to(mountain_01, 3.30, {x:0, y:212}, Quint.easeIn);
           TweenMax.to(mountain_02, 2.25, {delay:0, x:2, y:207}, Quint.easeIn);
           TweenMax.to(mountain_03, 1.95, {delay:0, x:0, y:237}, Quint.easeIn);
           TweenMax.to(mountain_04, 1.60, {delay:0, x:0, y:172}, Quint.easeIn);

           //Show Frame 2 Copy

           TweenMax.fromTo('#f2_text1', 0.3, {scale: 0.01}, {delay:0.1, scale:1.0}, {ease: Quint.easeOut });
           TweenMax.to(lineOne, 0.8, {delay:0.35, autoAlpha:1, scaleX:1.0, transformOrigin:"right"}, {ease: Quint.easeInOut });
           TweenMax.to(lineTwo, 0.8, {delay:0.35, autoAlpha:1, scaleX:1.0, transformOrigin:"left"}, {ease: Quint.easeInOut });

           TweenMax.fromTo('#f2_text2', 0.3, {scale: 0.01}, {delay:1.0, scale:1.0}, {ease: Quint.easeOut });
}

function step4 (){

           TweenMax.to(['#f2_text1','#f2_text2',lineOne,lineTwo], 0.2, {autoAlpha:0,ease:Power4.easeOut})

           TweenMax.fromTo(mountain_01, 1.20, {x:0, y:0}, {x:0, y:-162}, Quint.easeOut);
           TweenMax.fromTo(mountain_02, 0.80, {x:2, y:0}, {delay:0.3, x:2, y:-157}, Quint.easeOut);
           TweenMax.fromTo(mountain_03, 0.75, {x:0, y:0}, {delay:0.45, x:0, y:-187}, Quint.easeOut);
           TweenMax.fromTo(mountain_04, 0.60, {x:0, y:0}, {delay:0.5, x:0, y:-32}, Quint.easeOut);

           TweenMax.set(['#f3_text1'], {rotation:0.01,transformOrigin:"50% 50%"});
           TweenMax.set(['#f3_text1'], {autoAlpha:1, scale:0.01});
           TweenMax.to(['#f3_text1'], 0.7, {scale:1, ease: Bounce.easeOut, delay:0.3 });

}

function step5 (){

           TweenMax.to(['#f3_text1'], 0.6, {scale:0.01, autoAlpha:0, ease: Quint.easeOut, delay:0 });

           TweenMax.set(['#f4_icon'], {rotation:0.01,transformOrigin:"50% 50%"});
           TweenMax.set(['#f4_icon'], {autoAlpha:1, scale:0.01});
           TweenMax.to(['#f4_icon'], 0.7, {scale:1, ease: Bounce.easeOut, delay:0.3 });

}

function step6 (){

           TweenMax.to(['#f4_icon'], 0.6, {scale:0.01, autoAlpha:0, ease: Quint.easeOut, delay:0 });

           TweenMax.set(['#f5_text1'], {rotation:0.01,transformOrigin:"50% 40%"});
           TweenMax.set(['#f5_text1'], {autoAlpha:1, scale:0.001});
           TweenMax.to(['#f5_text1'], 0.7, {scale:1, ease: Bounce.easeOut, delay:0.3 });

           TweenMax.set(['#f5_text2'], {rotation:0.01,transformOrigin:"50% 50%"});
           TweenMax.set(['#f5_text2'], {autoAlpha:1, scale:0.001});
           TweenMax.to(['#f5_text2'], 0.7, {scale:1, ease: Bounce.easeOut, delay:0.6 });

}

function step7 (){

           TweenMax.to(['#f5_text1','#f5_text2'], 0.6, {scale:0.01, autoAlpha:0, ease: Quint.easeOut, delay:0 });

           TweenMax.to(mountain_01, 3.30, {x:0, y:212}, Quint.easeIn);
           TweenMax.to(mountain_02, 2.25, {delay:0, x:2, y:207}, Quint.easeIn);
           TweenMax.to(mountain_03, 1.95, {delay:0, x:0, y:237}, Quint.easeIn);
           TweenMax.to(mountain_04, 1.60, {delay:0, x:0, y:172}, Quint.easeIn);

           TweenMax.set(['#f6_text1'], {rotation:0.01,transformOrigin:"50% 40%"});
           TweenMax.set(['#f6_text1'], {autoAlpha:1 , delay:0.5});
           TweenMax.to(['#f6_text1'], 0.8, {y:-30, ease: Quint.easeOut, delay:0.5 });

           TweenMax.set(['#f6_text2'], {rotation:0.01,transformOrigin:"50% 50%"});
           TweenMax.set(['#f6_text2'], {autoAlpha:1 ,delay:1.3});
           TweenMax.to(['#f6_text2'], 0.8, {y:-28, ease: Quint.easeOut, delay:1.3 });

}

function step8 (){

           var tl = new TimelineMax();

           TweenMax.fromTo(mountain_01, 1.20, {x:0, y:0}, {x:0, y:-212}, Quint.easeOut);
           TweenMax.fromTo(mountain_02, 0.80, {x:2, y:0}, {delay:0.3, x:2, y:-207}, Quint.easeOut);
           TweenMax.fromTo(mountain_03, 0.75, {x:0, y:0}, {delay:0.45, x:0, y:-237}, Quint.easeOut);
           TweenMax.fromTo(mountain_04, 0.60, {x:0, y:0}, {delay:0.5, x:0, y:-82}, Quint.easeOut);


           //Hide Frame  3
           TweenMax.to(['#f6_text1','#f6_text2'], 0.01, {autoAlpha:0, ease: Quint.easeOut, delay:0.5 });


           //Show Frame 4

           TweenMax.set(['#f7_text1'], {rotation:0.01,transformOrigin:"50% 40%"});
           TweenMax.set(['#f7_text1'], {autoAlpha:1 , delay:0.5});
           TweenMax.to(['#f7_text1'], 0.6, {y:-22, ease: Quint.easeOut, delay:2.0 });

           TweenMax.set(['#f7_text2'], {rotation:0.01,transformOrigin:"50% 50%"});
           TweenMax.set(['#f7_text2'], {autoAlpha:1 ,delay:0.5});
           TweenMax.to(['#f7_text2'], 0.6, {y:-22, ease: Quint.easeOut, delay:1.9 });

           TweenMax.set(['#cta'], {rotation:0.01,transformOrigin:"50% 35%"});
           TweenMax.set(['#cta'], {autoAlpha:1, scale:0.001});

           tl.add(TweenMax.to(['#cta'], 0.6, {
               opacity: 1, delay:1.8,
               scale:1,
               ease: Quint.easeOut,
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
