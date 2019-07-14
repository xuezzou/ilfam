// messages
let greeting = [{
  name: "ee",
  msg: "Nice to meet you :-D",
  delay: 500,
  align: "left",
  showTime: false,
  time: "19:58"
},
// {
//   name: "ee",
//   msg: "One day ",
//   delay: 1000,
//   align: "left",
//   showTime: false,
//   time: "19:58"
// },
{
  name: "last",
  msg: "You'll have stars that can laugh",//🌟
  delay: 500,
  align: "left",
  showTime: true,
  time: "19:58"
}];

let choiceWhoAmI = [{
  name: "ms1",
  msg: "Who are you",
  delay: 500,
  align: "right",
  showTime: true,
  time: "20:03"
}];

let whoAmI = [{
  name: "ms1",
  msg: "A piano player who can't write good code and good poetry",
  delay: 500,
  align: "left",
  showTime: false,
  time: "19:58"
}, {
  name: "ms1",
  msg: "And...",
  delay: 500,
  align: "left",
  showTime: false,
  time: "19:58"
}, {
  name: "ms1",
  msg: "A reed who does not want to die of thirst",
  delay: 500,
  align: "left",
  showTime: false,
  time: "19:58"
}, {
  name: "githubLink",
  msg: "Here's my <a target='_blank' href='https://github.com/xuezzou'>Github</a>",
  delay: 500,
  align: "left",
  showTime: false,
  time: "19:58"
}, {
  name: "last",
  msg: "And my <a target='_blank' href='xue_zou_resume_July1.pdf'>resume</a> if you are interested <br/> (๑¯◡¯๑)",
  delay: 500,
  align: "left",
  showTime: true,
  time: "20:05"
}];

let choiceTellAStory = [{
  name: "ms1",
  msg: "Tell a story",
  delay: 500,
  align: "right",
  showTime: true,
  time: "20:06"
}];

let storyLittlePrince = [{
  name: "ee",
  msg: "One day",
  delay: 500,
  align: "left",
  showTime: false,
  time: "19:58"
}, {
  name: "dd",
  msg: "I saw the sunset forty-four times",
  delay: 500,
  align: "left",
  showTime: false,
  time: "19:58"
}, {
  name: "notlast",
  msg: "...",
  delay: 500,
  align: "right",
  showTime: false,
  time: "19:58"
}, {
  name: "notlast",
  msg: "You know, one loves the sunset",
  delay: 1500,
  align: "left",
  showTime: false,
  time: "19:58"
}, {
  name: "last",
  msg: "when one is so sad...",
  delay: 500,
  align: "left",
  showTime: true,
  time: "20:08"
}
  // ,{
  //   name: "last",
  //   msg: "Were you so sad, then?",
  //   delay: 500,
  //   align: "right",
  //   showTime: false,
  //   time: "19:58"
  // }, {
  //   name: "last",
  //   msg: "...",
  //   delay: 500,
  //   align: "left",
  //   showTime: false,
  //   time: "19:58"
  // }
];

// prepared to load the conversation
function onRowAdded() {
  $('.chat-container').animate({
    scrollTop: $('.chat-container').prop('scrollHeight')
  });
};

// a global variable that controls the user interaction flow 
let choiceOption = 0;

// chatDelay var controls the time of display of messages
let chatDelay = 0;

function displayMessages(chatArea, chatMessages) {
  $.each(chatMessages, function (index, obj) {
    chatDelay = chatDelay + 1000; // control the gerneral delayed time
    let chatDelay2 = chatDelay + obj.delay;
    let chatDelay3 = chatDelay2 + 10;
    let scrollDelay = chatDelay;
    let chatTimeString = " ";
    let msgname = "." + obj.name;
    let msginner = ".messageinner-" + obj.name;
    let spinner = ".sp-" + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
    }
    $(chatArea).append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
    // display user option if is the last one
    displayUserOption(chatDelay3, index, obj, chatMessages);
  });
}

// display the user option
function displayUserOption(chatDelay3, index, obj, chatMessages) {
  if (index === chatMessages.length - 1 && obj.name === "last") {
    $(".user-message").delay(chatDelay3 + 1000).queue(function (n) {
      if (choiceOption % 2 === 0) {
        $(this).html(choiceWhoAmI[0].msg);
      } else if (choiceOption % 2 === 1) {
        $(this).html(choiceTellAStory[0].msg);
      }
      autoType(".type-js", 100);
      isMessaging = false;
      ++choiceOption;
      n(); // to dequeue
    });
  }
};

// a flag to stop propogation of click
let isMessaging = false;

$('.user-message').on("click", function () {
  if (!isMessaging) {
    chatDelay = 0; // set chatDelay back to 0 in new conversation
    if (this.innerText === choiceWhoAmI[0].msg) {
      displayMessages(".chat-message-list", choiceWhoAmI);
      displayMessages(".chat-message-list", whoAmI);
      isMessaging = true;
      $(this).css("cursor", "text");
    } else if (this.innerText === choiceTellAStory[0].msg) {
      displayMessages(".chat-message-list", choiceTellAStory);
      displayMessages(".chat-message-list", storyLittlePrince);
      isMessaging = true;
      $(this).css("cursor", "text");
    }
  }
});

// typing effect
function autoType(elementClass, typingSpeed) {
  var thhis = $(elementClass);
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function () {
    thhis.css("opacity", 1);
    thhis.text("");
    for (var i = 0; i < amntOfChars; i++) {
      (function (i, char) {
        setTimeout(function () {
          newString += char;
          thhis.text(newString);
          if (i === amntOfChars - 1) {
            $(".user-message").css("cursor", "pointer");
            $(".user-message").css("font-weight", "bold");
          }
        }, i * typingSpeed);
      })(i + 1, text[i]);
    }
  }, 1500);
}

// call the main function to load 
displayMessages(".chat-message-list", greeting);

// unused messages
let quoteTrumanCaopte = [{
  name: "hey",
  msg: "Think of nothing things",
  delay: 1000,
  align: "left",
  showTime: false,
  time: "19:58"
}, {
  name: "hey",
  msg: "Think of wind",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58"
}, {
  name: "last",
  msg: "--Truman Capote, Shut a Final Door",
  delay: 1500,
  align: "left",
  showTime: true,
  time: "19:58"
}];

let storyNorwegianWood = [{
  name: "ms1",
  msg: "...",
  delay: 500,
  align: "left",
  showTime: true,
  time: "19:58"
}, {
  name: "ms1",
  msg: "I really like you, Midori. A lot.",
  delay: 500,
  align: "right",
  showTime: true,
  time: "19:58"
}, {
  name: "ms2",
  msg: "How much is a lot?",
  delay: 500,
  align: "left",
  showTime: true,
  time: "19:58"
}, {
  name: "ms3",
  msg: "Like a spring bear,",
  delay: 500,
  align: "right",
  showTime: true,
  time: "19:58"
}, {
  name: "ms4",
  msg: "A spring bear?",
  delay: 500,
  align: "left",
  showTime: false,
  time: "19:58"
}, {
  name: "ms5",
  msg: "What’s that all about? A spring bear.",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58"
}, {
  name: "ms6",
  msg: "You’re walking through a field all by yourself one day in spring,",
  delay: 1000,
  align: "right",
  showTime: false,
  time: "19:58"
}, {
  name: "ms7",
  msg: "and this sweet little bear cub with velvet fur and shiny little eyes comes walking along.",
  delay: 2000,
  align: "right",
  showTime: false,
  time: "19:58"
}, {
  name: "ms8",
  msg: "And he says to you,",
  delay: 2000,
  align: "right",
  showTime: false,
  time: "19:58"
}, {
  name: "ms9",
  msg: "\"Hi, there, little lady. Want to tumble with me?\"",
  delay: 5000,
  align: "right",
  showTime: false,
  time: "19:58"
}, {
  name: "ms10",
  msg: "So you and the bear cub spend the whole day in each other’s arms,",
  delay: 2000,
  align: "right",
  showTime: false,
  time: "19:58"
}, {
  name: "ms11",
  msg: "tumbling down this clover-covered hill.",
  delay: 2000,
  align: "right",
  showTime: false,
  time: "19:58"
}, {
  name: "ms12",
  msg: "Nice, huh?",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "19:58"
}, {
  name: "ms14",
  msg: "Yeah. Really nice",
  delay: 2000,
  align: "left",
  showTime: true,
  time: "19:58"
}, {
  name: "last",
  msg: "That’s how much I like you.",
  delay: 3000,
  align: "right",
  showTime: true,
  time: "19:58"
}];
