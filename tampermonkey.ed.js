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
    //Du doan dap an dung
    var elements = document.querySelectorAll('[for="question-1_answer-1"]');
        for(var i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", "background-color: green;");
            elements[i].checked = true;

        }
    //Auto pick trong practice abcd
    elements = document.querySelectorAll('[for="question-1_answer-2"]');
        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", "background-color: orange;");
            elements[i].click();
        }
      //Auto pick trong practice abcd neu co 2 cau hoi
       elements = document.querySelectorAll('[for="question-2_answer-5"]');
        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", "background-color: orange;");
            elements[i].click();
        }
       //Auto pick trong practice abcd neu co 3 cau hoi
        elements = document.querySelectorAll('[for="question-3_answer-7"]');
        for(i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", "background-color: orange;");
            elements[i].click();
        }
        //Auto pick loai nhieu dap an
        elements = document.querySelectorAll('[type="checkbox"]');

        for(i = 0; i < elements.length; i++){
           elements[i].checked = true; 

        } //
        
        //Tu bat listening trong bai explore
        elements = document.querySelectorAll('[class="layout__mediaPlayPause layout__mediaPlayPause--play CTrackerPlayBtnD"]');

        for(i = 0; i < elements.length; i++){
            elements[i].click();

        }
    } setInterval(doSomething, 100);
})();
