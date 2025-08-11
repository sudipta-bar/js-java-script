# projects related to DOM

## project link
[click here](
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js
)

### project 1 

``` javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach( (button) => {
  // console.log(button)
  button.addEventListener('click',function(e){
    // console.log(e);
    // console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
} )

```
### project2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi < 18.6){
      const under_w = document.querySelector('#UW')
      under_w.innerHTML = `Under Weight `
    }
    else if( 18.6 < bmi && bmi < 24.9){
      const normar_r = document.querySelector('#NR')
      normar_r.innerHTML = `Normal Range`
    }
    else if(bmi > 24.9){
      const over_w = document.querySelector('#OW')
      over_w.innerHTML = `Overweight`
    }
  }

});