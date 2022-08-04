<<<<<<< HEAD:projects/eyes/eyes-script.js

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

=======
// #region  H E A D E R
// <copyright file="eyes.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE Incorporated Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MIT xPRO: WEEK 8  - Eyes Exercise
 *      Module:   Modules (MicroCODE:eyes.js)
 *      Project:  MicroCODE Common Library
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     February 2022
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2022 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the HTML code for the MIT xPRO: WEEK 8  - Eyes Exercise.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MIT xPRO: WEEK 8  - Eyes Exercise
 *         https://student.emeritus.org/courses/3291/assignments/166906?module_item_id=944587
 *
 *
 *      DEMONSTRATION VIDEOS:
 *      --------------------
 *
 *      1. ...
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  07-Mar-2022   TJM-MCODE  {0001}    New module for common reusable Javascript files for web pages.
 *
 *
 */
"use strict";

// #endregion
// #endregion
// #endregion

// #region  J A V A S C R I P T
// #region  F U N C T I O N S

// #region  C O N S T A N T S

const NUMBER_OF_EYES = 2;  // Number of eyes on the screen

// #endregion

// #region  P R I V A T E   F I E L D S

var balls = document.getElementsByClassName("ball");

// #endregion

// #region  E N U M E R A T I O N S

// #endregion

// #region  M E T H O D S – P U B L I C

/**
 * followTheMouse() – updates Eye Balls on the screen to follow the mouse.
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

>>>>>>> aa9341e20719a8594bb007be368e45930e67deb2:projects/eyes.js
