function runIt(){
  $(".update").velocity({
    rotateZ: ["80deg","easeInOutCubic","0deg"],
    backgroundColor: "#4abae2",
    borderRadius: "40%"
  },1500)
  .velocity({
    rotateZ: ["200deg","easeInOutCubic","80deg"],
    width: "450px",
    height: "450px",
    backgroundColor: "#2593BB",
    
  },1500)
  .velocity({
    rotateZ: ["290deg","easeInOutCubic","200deg"],
    width: "350px",
    height: "350px",
    backgroundColor: "#4abae2",
    borderRadius: "35%"
  },1500)
  .velocity({
    rotateZ: ["360deg","easeInOutCubic","290deg"],
    backgroundColor: "#2593BB"
  },1500);
  setTimeout(runIt,1500);
}

runIt();