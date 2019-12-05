const burger = document.querySelector('.burger');
const navOpen = document.querySelector('.nav-open');
const navUl = document.querySelector('.nav-links ul');

const tl = new TimelineLite({ paused: true, reversed: true });
tl.to(navUl, 1, {
  opacity: 1,
  pointerEvents: 'initial'
});

burger.addEventListener('click', function(e) {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(tl);
});
function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
