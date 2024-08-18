const radius = [ 3,1,2,4]; // declaring the array here and containg radius 
const calculateArea = function(radius){// function declaration named calculateArea take parameter radius
    const output = [];// creating empty array named output storing area of the circles
    for(let i=0;i<radius.length;i++)// for loop for each itreate through each element radius array
    {//i starts with 0 and goes up to the last index of the radius array(radius.length-1)
        output.push(Math.PI*radius[i]*radius[i]);// for each radius value (radius[i]) the area of the circle is calculated using the formula Area = π * r² (where r is the radius).
        //Pushing the Calculated Area: The calculated area is then pushed into the output array.
    } return output;
};//After the loop finishes, the function returns the output array, which now contains the areas of all the circles.
console.log(calculateArea(radius));
