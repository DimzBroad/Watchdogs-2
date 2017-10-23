/*
---------------
Hidden Elements
---------------
*/

$("#bgImg2").hide();
$("#bgImg3").hide();
$("#bgImg4").hide();

$("#play").hide();
$("#stop").hide();

$(".homeHacked1").hide();
$(".homeHacked2").hide();
$(".sectionOne").hide();
$(".sectionTwo").hide();

$("#overviewContainer").hide();
$("#plotContainer").hide();
$("#gameplayContainer").hide();


$("#hackerConsoleId").hide();
$("#iconHelpClose").hide();
$("#audioBtnClose").hide();

$("#myIconInfo1").hide();
$("#myIconInfo2").hide();
$("#myIconInfo3").hide();
$("#myIconInfo4").hide();
$("#myIconInfo5").hide();
$("#myIconInfo6").hide();

/*
--------------
Audio Elements
--------------
*/

var song = document.getElementById('songAudio');
var audio1 = document.getElementById('dialogue1');
var audio2 = document.getElementById('dialogue2');
var audio3 = document.getElementById('dialogue3');

/*
--------------
Audio Controls
--------------
*/

$('#play').click(function () {
    song.play();
});

//pause the song

$('#stop').click(function () {
    song.pause();
});


/*
-------------------
OPEN AUDIO CONTROLS
-------------------
*/

$("#audioBtnOpen").click(function () {
    $("#audioBtnOpen").fadeOut(1000);
    $("#audioBtnClose").delay(1000).fadeIn(1000);
    $("#stop").delay(1000).fadeIn(1000);
    $("#play").delay(1000).fadeIn(1000);
});

/*
--------------------
CLOSE AUDIO CONTROLS
--------------------
*/

$("#audioBtnClose").click(function () {
    $("#audioBtnClose").fadeOut(1000);
    $("#audioBtnOpen").delay(1000).fadeIn(1000);
    $("#stop").fadeOut(1000);
    $("#play").fadeOut(1000);
});

/*
------------
Audio Volume
------------
*/

song.volume = 0.15;
audio1.volume = 1;
audio2.volume = 1;
audio3.volume = 1;

/*
----------------
Count Down Clock
----------------
*/

var countDownDate = new Date("Dec 5, 2017 15:37:25").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById("wd2Countdown").innerHTML = days + " DAYS " + hours + " HOURS " +
        minutes + " MINUTES ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("wd2Countdown").innerHTML = "RELEASED";
    }
}, 1000);

/*
------------------
Open Hacked Secion
------------------
*/

$("#btn1").click(function () {
    audio1.play();
    $("#bgImg1").fadeOut(1000);
    $(".homeContainer").fadeOut(1000);
    $("#bgImg2").delay(1000).fadeIn(1000);
    $(".homeHacked1").delay(18000).fadeIn(1000);
});

/*
-------------------
Skip The Experience
-------------------
*/

$("#skipBtn").click(function () {
    $(".homeHacked1").fadeOut(1000);
    $(".homeHacked2").fadeOut(1000);
    $("#bgImg2").fadeOut(1000);
    $("#bgImg1").delay(1000).fadeIn(1000);
    $(".homeContainer").delay(1000).fadeIn(1000);
    audio2.play();
});

/*
-------------------
Join The Experience
-------------------
*/

$("#enterBtn").click(function () {
    $(".homeHacked1").fadeOut(1000);
/*    $("#bgImg2").fadeOut(1000);*/
    $(".homeHacked2").delay(23000).fadeIn(1000);
/*    $(".sectionOne").delay(1000).fadeIn(1000);
    $("#bgImg3").delay(1000).fadeIn(1000);*/
    audio3.play();
});

/*
-------------------
REPEAT SUGGESTIONS
-------------------
*/

$("#repeatBtn").click(function () {
    audio3.play();
});

/*
-------------
let's do this
-------------
*/

$("#beginBtn").click(function () {
    $(".homeHacked2").fadeOut(1000);
    $("#bgImg2").fadeOut(1000);
    $(".sectionOne").delay(1000).fadeIn(1000);
    $("#bgImg3").delay(1000).fadeIn(1000);
});


/*
-------------------------------
click "?" to open help info box
-------------------------------
*/

$("#iconHelpOpen").click(function () {
    $("#iconHelpOpen").fadeOut(500);
    $("#hackerConsoleId").fadeIn(1000);
    $("#iconHelpClose").delay(500).fadeIn(500);
});


/*
--------------------------------
click "x" to close help info box
--------------------------------
*/

$("#iconHelpClose").click(function () {
    $("#hackerConsoleId").fadeOut(1000);
    $("#iconHelpClose").fadeOut(500);
    $("#iconHelpOpen").delay(500).fadeIn(500);
});


/*
--------------------
Mini Game Login Area
--------------------
*/

var pwOption = ["bound","blade","plaid","fuzzy","whizz","dizzy","pizza","jumpy","quick","jerky","zinky","brave","baffy","apple","graze","axman","alien","blaze","praise","cloud"];
    
document.getElementById("displayPwOptions").innerHTML = 
    pwOption[0] + " , " + pwOption[1] + " , "+ pwOption[2] + " , " +
    pwOption[3] + " , "+ pwOption[4] + " , "+ pwOption[5] + " , " +
    pwOption[6] + " , "+ pwOption[7]+ " , " + pwOption[8]  + " , " +
    pwOption[9] + " , "+ pwOption[10] + " , "+ pwOption[11] + " , " +
    pwOption[12] + " , "+ pwOption[12]  + " , "+ pwOption[14]  + " , " +
    pwOption[15] + " , "+ pwOption[16]  + " , "+ pwOption[17]  + " , " +
    pwOption[18] + " , "+ pwOption[19];

var correctPw =pwOption[6];

var userInput = document.getElementById('user');

console.log(correctPw);

document.querySelector('form.myForm').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
    
    if (userInput.value === correctPw) {
        document.getElementById('displayOutcome').innerHTML = "Correct Password";
        $(".sectionOne").fadeOut(1500);
        $(".sectionTwo").delay(1500).fadeIn(1000);
        
    } else {
        document.getElementById('displayOutcome').innerHTML = "Incorrect Password, Try Again"; 
        reset;
    }
});

/*
------------------
Overview Functions
------------------
*/

$("#myIcon1").click(function () {
    $("#myIconInfo1").fadeIn(500);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
});

$("#next1").click(function () {
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
    $("#ctosContentHide").fadeOut(1000);
    $("#overviewContainer").delay(1000).fadeIn(1000);
});

$("#exitOverview").click(function () {
    $("#overviewContainer").fadeOut(1000);
    $("#ctosContentHide").delay(1000).fadeIn(1000);
});

/*
--------------
Plot Functions
--------------
*/

$("#myIcon2").click(function () {
    $("#myIconInfo2").fadeIn(500);
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
});

$("#next2").click(function () {
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
    $("#ctosContentHide").fadeOut(1000);
    $("#plotContainer").delay(1000).fadeIn(1000);
});

$("#exitPlot").click(function () {
    $("#plotContainer").fadeOut(1000);
    $("#ctosContentHide").delay(1000).fadeIn(1000);
});

/*
------------------
Gameplay Functions
------------------
*/

$("#myIcon3").click(function () {
    $("#myIconInfo3").fadeIn(500);
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);    
    $("#myIconInfo5").fadeOut(1000);    
    $("#myIconInfo6").fadeOut(1000);
});

$("#next3").click(function () {
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
    $("#ctosContentHide").fadeOut(1000);
    $("#gameplayContainer").delay(1000).fadeIn(1000);
});

$("#exitGameplay").click(function () {
    $("#gameplayContainer").fadeOut(1000);
    $("#ctosContentHide").delay(1000).fadeIn(1000);
});

/*
----------------
Official Trailer
----------------
*/

$("#myIcon4").click(function () {
    $("#myIconInfo4").fadeIn(500);
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
});

$("#next4").click(function () {
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
});

/*
----------------
Gameplay trailer
----------------
*/

$("#myIcon5").click(function () {
    $("#myIconInfo5").fadeIn(500);
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
});

$("#next5").click(function () {
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
});


/*
------------------
social media icons
------------------
*/

$("#myIcon6").click(function () {
    $("#myIconInfo6").fadeIn(500);
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
});

$("#next6").click(function () {
    $("#myIconInfo1").fadeOut(1000);
    $("#myIconInfo2").fadeOut(1000);
    $("#myIconInfo3").fadeOut(1000);
    $("#myIconInfo4").fadeOut(1000);
    $("#myIconInfo5").fadeOut(1000);
    $("#myIconInfo6").fadeOut(1000);
});
