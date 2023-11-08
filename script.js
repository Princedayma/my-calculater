let string = "";
let buttons = document.querySelectorAll('.button');
const container = document.querySelector('.container'); // Select the container element

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
    
    changeBackgroundColor(); // Call the background color function on every button click
  });
});

function changeBackgroundColor() {
  container.style.backgroundColor = 'lightblue'; // Change this to the desired background color
}
