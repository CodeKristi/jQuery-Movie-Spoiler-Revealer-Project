// Problem: Prevent spoilerphodes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction


// 1. HIDE SPOILER
&(".spoiler span").hide();

// 2. ADD BUTTON
&(".spoiler").append("<button>Reveal Spoiler!</button>"); // in 'append' you can add content: html string / element / array / jQuery

// 3. WHEN BUTTON PRESSED:
&("button").click(function() { // uses empty and unnamed function
    // 3.1 SHOW SPOILER NEXT TO BUTTON CLICKED
    &(this).prev().show(); //shows the immediately preceding sibling of element - thus only opens button that's clicked
    // 3.2 GET RID OF BUTTON
    &(this).remove(); // 'this' refers to the object that something is happening to
 });