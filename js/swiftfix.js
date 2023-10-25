document.getElementById("menu_services").addEventListener("mouseover",()=>{
    document.getElementById("container_sous_menu").style.display="block";
});
document.getElementById("menu_services").addEventListener("mouseout",()=>{
    document.getElementById("container_sous_menu").style.display="none";
});
document.getElementById("click_navbar").addEventListener("click",() => {
    var nav = document.getElementsByTagName("nav")[0];
    if (nav.style.display === "block") nav.style.display = "none";
    else nav.style.display = "block";
})

document.getElementsByClassName("fa-search")[0].addEventListener("click",() => {
    var search_text = document.getElementById("text_search");
    var search_icon = document.getElementsByClassName("fa-search")[0];
    if (search_text.style.display === "block"){
        search_text.style.display = "none";
        search_icon.style.display = "block";
    } 
    else {
        search_text.style.display = "block";
        search_icon.style.display = "none";
    }
})

        