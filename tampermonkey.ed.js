// ==UserScript==
// @name         ED Auto Answer 2
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
            elements[i].checked = true;

        }
    elements = document.querySelectorAll('[for="question-1_answer-2"]');
        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", "background-color: orange;");
            elements[i].click();
        }
       elements = document.querySelectorAll('[for="question-2_answer-5"]');
        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", "background-color: orange;");
            elements[i].checked = true;
            elements[i].click();
        }
        elements = document.querySelectorAll('[for="question-3_answer-7"]');
        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", "background-color: orange;");
            elements[i].checked = true;
            elements[i].click();
        }
        elements = document.querySelectorAll('[type="checkbox"]');

        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", "background-color: orange;");
           elements[i].checked = true; //prOpenEnded__qaItem_inputW

        } //
        elements = document.querySelectorAll('[class="layout__mediaPlayPause layout__mediaPlayPause--play CTrackerPlayBtnD"]');

        for(i = 0; i < elements.length; i++){
            elements[i].click();

        }
        elements = document.querySelectorAll('[class="DDLOptions__selected"]');

        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("id", "DDLOptions__selected_aid_13");

        }
         elements = document.querySelectorAll('[class="prOpenEnded__qaItem_inputW"]');
        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("class", "prOpenEnded__qaItem_inputW prOpenEnded__qaItem_inputW--vCheck");
        }
        elements = document.querySelectorAll('[class="prOpenEnded__qaItemText prOpenEnded__qaItemText--input ng-valid ng-dirty ng-touched"]');
        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("ng-reflect-model", "a");
        }
    } setInterval(doSomething, 100);
})();
