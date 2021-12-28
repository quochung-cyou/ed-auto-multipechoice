// ==UserScript==
// @name         ED Auto Answer
// @version      28.12.2021
// @description  Auto ed multipe choice answer
// @author       quochungbn
// @include     *
// @run-at      document-start
//@license MIT

// ==/UserScript==
(function() {
    'use strict';

    function doSomething() {
    var elements = document.querySelectorAll('[for="question-1_answer-1"]');
        for(var i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", "background-color: green;");
        }
    } setInterval(doSomething, 500);
})();
