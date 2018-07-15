window.addEventListener("load",function(){
initRippleJS(document.getElementsByClassName("ripple-js-dark"));
initRippleJS(document.getElementsByClassName("ripple-js-light"));
},false);


function initRippleJS(rippleElements){console.log("a");
  for(var i = 0; i < rippleElements.length; i++) {
    rippleElements[i].addEventListener("click",function(e) {
      // var X = e.pageX - this.offsetLeft;
      // var Y = e.pageY - this.offsetTop;
      rect = this.getBoundingClientRect();
      var X = e.clientX - rect.left;
      var Y = e.clientY - rect.top;
      var rippleDiv = document.createElement("div");
      rippleDiv.classList.add('ripple-js-elem');
      rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
      this.appendChild(rippleDiv);
      setTimeout(function(){
        rippleDiv.parentElement.removeChild(rippleDiv);
      }, 900);
    },false);
  }
}