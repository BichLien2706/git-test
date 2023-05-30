const loginBtn = document.querySelector('.loginBtn')
const closeLogin = document.querySelector('.closeLogin')
const cancelLogin = document.querySelector('.cancelLogin')
const reserveTable = document.querySelector('.reserveTable')
const closeTable = document.querySelector('.closeTable')
const cancelTable = document.querySelector('.cancelTable')

$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
});

$("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});

loginBtn.addEventListener("click",showLogin);
// closeLogin.addEventListener("click",showLogin)
// cancelLogin.addEventListener("click", showLogin)

function showLogin(){
    $('#loginModal').modal('toggle');
}

reserveTable.addEventListener("click", showTable)
// closeTable.addEventListener("click", showTable)
// cancelTable.addEventListener("click", showTable)

function showTable(){
    $('#reserveform').modal('toggle');
}