function drop() {
    var list_item = document.getElementById("list-item");
    var wrp_sub_item = document.getElementById("wrp-sub-item");
    wrp_sub_item.style.display = "none";
    list_item.addEventListener("mouseover", function () {
        wrp_sub_item.style.display = "block";
    });
    wrp_sub_item.addEventListener("mouseover", function () {
        wrp_sub_item.style.display = "block";
    });

    list_item.addEventListener("mouseout", function () {
        wrp_sub_item.style.display = "none";
    });
    wrp_sub_item.addEventListener("mouseout", function () {
        wrp_sub_item.style.display = "none";
    });
}

var wrp_search_box = document.getElementById("wrp-search-box");
var wrp_search = document.getElementById("wrp-search");
var search = document.getElementById("searc");
var sub_list = document.getElementById("wrp-search-list");

function focus_search() {


    search.addEventListener("focus", function () {
        wrp_search.style.display = "block";
        sub_list.style.display = "block";
    });
}

function test() {
    wrp_search.style.display = "none";
    sub_list.style.display = "none";
}

function sub_list() {
    search.addEventListener("focus", function () {
        sub_list.style.display = "block";

    });
}
var block=document.getElementById("wrp-search-box3");
var block2=document.getElementById("wrp-search-mobile1");
var block3 = document.getElementById("back-arrow");
block2.style.display="none";
function sublist1(){
block.addEventListener("click",function (){

        block2.style.display="block";

});
block3.addEventListener("click",function (){
    block2.style.display="none";
});
}
var block4=document.getElementById("wrp-menu-mobile");
var block5 = document.getElementById("wrp-menu-icon");
var block6=document.getElementById("wrp-left");
function menu(){
    block5.addEventListener("click",function (){
        if (block4.style.display="none"){
            block4.style.display="flex";

        }
        else {
            block4.style.display="none";
        }

    });
    block6.addEventListener("click",function (){
        block4.style.display="none";
    });
}
var block7 = document.getElementById("wrp-item4");
var block8 = document.getElementById("icon-item4");
var block9 = document.getElementById("icon-item5");
var block10 = document.getElementById("wrp-sub-list-menu");
var block11= document.getElementById("para-item");

    block10.style.display="none";
function sub_menu(){

block7.addEventListener("click",function (){
    if(block10.style.display==="none"){
        block8.style.display="none";
        block9.style.display="block";
        block10.style.display="block";
        block11.style.color="#8e44ad";
    }
    else {
        block8.style.display="block";
        block9.style.display="none";
        block10.style.display="none";
        block11.style.color="#000";
    }
});
}
sub_menu();
menu();
drop();
focus_search();
sublist1();
sub_list();

