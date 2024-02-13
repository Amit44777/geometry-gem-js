function calculateRactangleArea(){
    // get w of the rectangle
    const lengthInput = document.getElementById('rectangle-lenght');
    const lenghtText = lengthInput.value;
    const lenght = parseFloat(lenghtText);
    console.log(lenght);


    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);


    // calculate rectangle area
    const area = lenght * width;
    console.log('Area of the Rectangle :', area);


    // display rectangle area
    const rectangleSpanArea = document.getElementById('rectangle-area');
    rectangleSpanArea.innerText = area;

}