// Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
// setup 1: get base value of the triangle
// setup 2: added an id in the base input field 
// setup 3: use getElementById to access the input fiend
// setup 4: get value  from the input fiend. (value is string now)
// setup 5: convard the value to a number. use parseFloat 

function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);


    // get triangel height value
    const triangelHeihtInput = document.getElementById('triangle-height');
    const triangelHeighatText = triangelHeihtInput.value;
    const height = parseFloat(triangelHeighatText);
    console.log(height);


    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is :', area);


    // display triangle area
    const triangelAreaSpan = document.getElementById('triangle-area');
    triangelAreaSpan.innerText = area;

}