
"use strict";



const NUMBER_OF_EYES = 2;  // Number of eyes on the screen



var balls = document.getElementsByClassName("ball");


 *
 * @api public
 *
 * @param {object} event mouse event args.
 * @returns {side-effects} - updates 'balls' array objects.
 *
 * @example
 *
 *      document.onmousemove = () =>
 *       {
 *          followTheMouse(event);
 *       };
 */
function followTheMouse(event)
{
    let x = (event.clientX * 100) / window.innerWidth + "%";
    let y = (event.clientY * 100) / window.innerHeight + "%";

    for (let eyeIndex = 0; eyeIndex < NUMBER_OF_EYES; eyeIndex++)
    {
        balls[eyeIndex].style.left = x;
        balls[eyeIndex].style.top = y;
        balls[eyeIndex].transform = "translate(-" + x + ",-" + y + ")";
    }
}

