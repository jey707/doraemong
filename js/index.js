let eyeEgg = function (selector) {
  let eye = document.querySelector(selector),
    pupil = eye.querySelector(".pupil"),
    eyeArea = eye.getBoundingClientRect();
  let roteEye = function (mouseX, mouseY) {
    let radian = Math.atan2(
      mouseY - (eyeArea.y + eyeArea.height * 0.5),
      mouseX - (eyeArea.x + eyeArea.width * 0.5)
    );
    pupil.style.transform =
      "rotate(" + ((180 * radian) / Math.PI - 90) + "deg)";
  };
  return { degEye: roteEye };
};

const leftEye = eyeEgg(".eye-1");
const rightEye = eyeEgg(".eye-2");
window.addEventListener("mousemove", function (e) {
  leftEye.degEye(e.pageX, e.pageY);
  rightEye.degEye(e.pageX, e.pageY);
});
