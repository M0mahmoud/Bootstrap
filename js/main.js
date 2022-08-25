//  Team Section
const div = document.querySelectorAll(".team .click");

div.forEach((e) => {
  e.onclick = () => {
    e.querySelector('img').classList.toggle('d-none')
  };
});
