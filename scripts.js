function showMenu() {
    var y = -50;
    var x = 0;
    var menu = document.getElementById("menu");
    var text = document.getElementById("textDesc");
    var img = document.getElementById("imgLogo")
    if (menu.style.top === x +'vh') {
      text.style.display = "none";
      img.style.display = "inline-block";
    menu.style.top = y +'vh';
    } else {
      img.style.display = "none";
      text.style.display = "inline-block";
        menu.style.top = x +'vh';
    }
  }
  function showText() {
          var x = document.getElementById("textInfo");
          var y = document.getElementById("textInfoA");
          var z = document.getElementById("textInfoB");
          var c = document.getElementById("textInfoC");
          var d = document.getElementById("textInfoD");
          var e = document.getElementById("textInfoE");
          var b0 = document.getElementById("btn0")
          var b1 = document.getElementById("btn1")
          var b2 = document.getElementById("btn2")
          var b3 = document.getElementById("btn3")
          var b4 = document.getElementById("btn4")
          var b5 = document.getElementById("btn5")
    if (x.style.display === "inline-block") {
      x.style.display = "none";
        b0.style.textDecoration = "none";
    } else {
      x.style.display = "inline-block";
      y.style.display = "none";
      z.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      b0.style.textDecoration = "underline";
      b1.style.textDecoration = "none";
      b2.style.textDecoration = "none";
      b3.style.textDecoration = "none";
      b4.style.textDecoration = "none";
      b5.style.textDecoration = "none";
    }
  }
  function showTextA() {
    var x = document.getElementById("textInfoA");
    var y = document.getElementById("textInfo");
    var z = document.getElementById("textInfoB");
    var c = document.getElementById("textInfoC");
    var d = document.getElementById("textInfoD");
    var e = document.getElementById("textInfoE");
    var b0 = document.getElementById("btn0")
    var b1 = document.getElementById("btn1")
    var b2 = document.getElementById("btn2")
    var b3 = document.getElementById("btn3")
    var b4 = document.getElementById("btn4")
    var b5 = document.getElementById("btn5")
    if (x.style.display === "inline-block") {
      x.style.display = "none";
      b1.style.textDecoration = "none";
    } else {
      x.style.display = "inline-block";
      y.style.display = "none";
      z.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      b1.style.textDecoration = "underline";
      b0.style.textDecoration = "none";
      b2.style.textDecoration = "none";
      b3.style.textDecoration = "none";
      b4.style.textDecoration = "none";
      b5.style.textDecoration = "none";
    }
  }
  
  function showTextB() {
    var x = document.getElementById("textInfoA");
    var y = document.getElementById("textInfo");
    var z = document.getElementById("textInfoB");
    var c = document.getElementById("textInfoC");
    var d = document.getElementById("textInfoD");
    var e = document.getElementById("textInfoE");
    var b0 = document.getElementById("btn0")
    var b1 = document.getElementById("btn1")
    var b2 = document.getElementById("btn2")
    var b3 = document.getElementById("btn3")
    var b4 = document.getElementById("btn4")
    var b5 = document.getElementById("btn5")
    if (z.style.display === "inline-block") {
      z.style.display = "none";
      b2.style.textDecoration = "none";
    } else {
      z.style.display = "inline-block";
      y.style.display = "none";
      x.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      b2.style.textDecoration = "underline";
      b1.style.textDecoration = "none";
      b0.style.textDecoration = "none";
      b3.style.textDecoration = "none";
      b4.style.textDecoration = "none";
      b5.style.textDecoration = "none";
    }
  }
  
  function showTextC() {
    var x = document.getElementById("textInfoA");
    var y = document.getElementById("textInfo");
    var z = document.getElementById("textInfoB");
    var c = document.getElementById("textInfoC");
    var d = document.getElementById("textInfoD");
    var e = document.getElementById("textInfoE");
    var b0 = document.getElementById("btn0")
    var b1 = document.getElementById("btn1")
    var b2 = document.getElementById("btn2")
    var b3 = document.getElementById("btn3")
    var b4 = document.getElementById("btn4")
    var b5 = document.getElementById("btn5")
    if (c.style.display === "inline-block") {
      c.style.display = "none";
      b3.style.textDecoration = "none";
    } else {
      c.style.display = "inline-block";
      y.style.display = "none";
      x.style.display = "none";
      z.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      b3.style.textDecoration = "underline";
      b1.style.textDecoration = "none";
      b2.style.textDecoration = "none";
      b0.style.textDecoration = "none";
      b4.style.textDecoration = "none";
      b5.style.textDecoration = "none";
    }
  }
  
  function showTextD() {
    var x = document.getElementById("textInfoA");
    var y = document.getElementById("textInfo");
    var z = document.getElementById("textInfoB");
    var c = document.getElementById("textInfoC");
    var d = document.getElementById("textInfoD");
    var e = document.getElementById("textInfoE");
    var b0 = document.getElementById("btn0")
    var b1 = document.getElementById("btn1")
    var b2 = document.getElementById("btn2")
    var b3 = document.getElementById("btn3")
    var b4 = document.getElementById("btn4")
    var b5 = document.getElementById("btn5")
    if (d.style.display === "inline-block") {
      d.style.display = "none";
      b4.style.textDecoration = "none";
    } else {
      d.style.display = "inline-block";
      y.style.display = "none";
      x.style.display = "none";
      z.style.display = "none";
      c.style.display = "none";
      e.style.display = "none";
      b4.style.textDecoration = "underline";
      b1.style.textDecoration = "none";
      b2.style.textDecoration = "none";
      b3.style.textDecoration = "none";
      b0.style.textDecoration = "none";
      b5.style.textDecoration = "none";
    }
  }
  
  function showTextE() {
    var x = document.getElementById("textInfoA");
    var y = document.getElementById("textInfo");
    var z = document.getElementById("textInfoB");
    var c = document.getElementById("textInfoC");
    var d = document.getElementById("textInfoD");
    var e = document.getElementById("textInfoE");
    var b0 = document.getElementById("btn0")
    var b1 = document.getElementById("btn1")
    var b2 = document.getElementById("btn2")
    var b3 = document.getElementById("btn3")
    var b4 = document.getElementById("btn4")
    var b5 = document.getElementById("btn5")
    if (e.style.display === "inline-block") {
      e.style.display = "none";
      b5.style.textDecoration = "none";
    } else {
      e.style.display = "inline-block";
      y.style.display = "none";
      x.style.display = "none";
      z.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      b5.style.textDecoration = "underline";
      b1.style.textDecoration = "none";
      b2.style.textDecoration = "none";
      b3.style.textDecoration = "none";
      b4.style.textDecoration = "none";
      b0.style.textDecoration = "none";
    }
  }
  function show1() {
    var un = document.getElementById("subtextInfo1");
    var deux = document.getElementById("subtextInfo2");
    var trois = document.getElementById("subtextInfo3");
      var zero = document.getElementById("subtextInfo0");
      var btn1 = document.getElementById('smlbtn1')
      var btn2 = document.getElementById('smlbtn2')
      var btn3 = document.getElementById('smlbtn3')
    if (un.style.display === "inline-block") {
      un.style.display = "none";
      zero.style.display = "inline-block";
      btn1.style.textDecoration = "none";
    } else {
      un.style.display = "inline-block";
      btn1.style.textDecoration = "underline";
      deux.style.display = "none";
      trois.style.display = "none";
          zero.style.display = "none";
              btn2.style.textDecoration = "none";
                  btn3.style.textDecoration = "none";
  
  }
  }
  function show2() {
    var un = document.getElementById("subtextInfo1");
    var deux = document.getElementById("subtextInfo2");
    var trois = document.getElementById("subtextInfo3");
      var zero = document.getElementById("subtextInfo0");
      var btn1 = document.getElementById('smlbtn1')
      var btn2 = document.getElementById('smlbtn2')
      var btn3 = document.getElementById('smlbtn3')
    if (deux.style.display === "inline-block") {
      deux.style.display = "none";
          zero.style.display = "inline-block";
              btn2.style.textDecoration = "none";
    } else {
      deux.style.display = "inline-block";
          btn2.style.textDecoration = "underline";
      un.style.display = "none";
      trois.style.display = "none";
          zero.style.display = "none";
          btn1.style.textDecoration = "none";
              btn3.style.textDecoration = "none";
  
  }
  }
  function show3() {
    var un = document.getElementById("subtextInfo1");
    var deux = document.getElementById("subtextInfo2");
    var trois = document.getElementById("subtextInfo3");
    var zero = document.getElementById("subtextInfo0");
    var btn1 = document.getElementById('smlbtn1')
    var btn2 = document.getElementById('smlbtn2')
    var btn3 = document.getElementById('smlbtn3')
    if (trois.style.display === "inline-block") {
      trois.style.display = "none";
      zero.style.display = "inline-block";
          btn3.style.textDecoration = "none";
    } else {
      trois.style.display = "inline-block";
          btn3.style.textDecoration = "underline";
      un.style.display = "none";
      deux.style.display = "none";
      zero.style.display = "none";
      btn2.style.textDecoration = "none";
          btn1.style.textDecoration = "none";
  }
  }
  

/*------------------------------------------------JS---------------------------------------------*/

var menuBtn = document.getElementById("menuBtn");
        var sidenav = document.getElementById("sidenav");
        var menu = document.getElementById("menu");

        sidenav.style.right = "-250px";

        menuBtn.onclick = function(){
            if (sidenav.style.right == "-250px"){
                sidenav.style.right = "0";
                // menu.src = "img/menuClose.png";
            }
            else{
                sidenav.style.right = "-250px";
                // menu.src = "img/menu.png";
            }            
        }

        function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    const textArray = [
      "aux points",
      "est un collectif multidisciplinaire",
      "situé dans les Basses-Laurentides",
      "voué à l'exploration",
      "ainsi qu'à la rencontre artistique et culturelle."
    ];
  
    const originalText = "aux points est un collectif multidisciplinaire situé dans les Basses-Laurentides, voué à l'exploration ainsi qu'à la rencontre artistique et culturelle.";
  
    let currentIndex = 0;
    const animatedTextElement = document.getElementById('animatedText');
  
    function updateText() {
      animatedTextElement.textContent = textArray[currentIndex];
      currentIndex++;
  
      // Check if we have displayed all items, and if so, clear the interval
      if (currentIndex === textArray.length) {
        clearInterval(intervalId);
        // Set the text back to the original after the animation completes
        setTimeout(() => {
          animatedTextElement.textContent = originalText;
        }, 2000); // Adjust the delay as needed
      }
    }
  
    // Initial call to start the animation
    updateText();
  
    // Set interval to update text every 2000 milliseconds (2 seconds)
    const intervalId = setInterval(updateText, 2000);