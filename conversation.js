var chatMessages = [{
    name: "ms1",
    msg: "I really like you, Midori. A lot.",
    delay: 500,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms2",
    msg: "How much is a lot?",
    delay: 500,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms3",
    msg: "Like a spring bear,",
    delay: 500,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms4",
    msg: "A spring bear?",
    delay: 500,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms5",
    msg: "What’s that all about? A spring bear.",
    delay: 1000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms6",
    msg: "You’re walking through a field all by yourself one day in spring,",
    delay: 1000,
    align: "right",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms7",
    msg: "and this sweet little bear cub with velvet fur and shiny little eyes comes walking along.",
    delay: 2000,
    align: "right",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms8",
    msg: "And he says to you,",
    delay: 2000,
    align: "right",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms9",
    msg: "\"Hi, there, little lady. Want to tumble with me?\"",
    delay: 5000,
    align: "right",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms10",
    msg: "So you and the bear cub spend the whole day in each other’s arms,",
    delay: 2000,
    align: "right",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms11",
    msg: "tumbling down this clover-covered hill.",
    delay: 2000,
    align: "right",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms12",
    msg: "Nice, huh?",
    delay: 1000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms14",
    msg: "Yeah. Really nice",
    delay: 2000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms15",
    msg: "That’s how much I like you.",
    delay: 3000,
    align: "right",
    showTime: true,
    time: "19:58"
  }
];
  var chatDelay = 0;
  
  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight')
    });
  };
  $.each(chatMessages, function(index, obj) {
    chatDelay = chatDelay + 4000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = " ";
    msgname = "." + obj.name;
    msginner = ".messageinner-" + obj.name;
    spinner = ".sp-" + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
    }
    $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
  });