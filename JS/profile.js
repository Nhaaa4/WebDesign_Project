const profileHtml = document.getElementById('profile');
let count = true, mouse = true;

let menuIcon =  document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
var x = window.matchMedia("(max-width: 800px)");
var y = window.matchMedia("(min-width: 801px)");

// function mouseover()
// {
//     if (x.matches) {
//         if (mouse == true)
//             {
//                 navbar.style.display = 'grid';
//                 mouse = false;
//             }else{
//                 navbar.style.display = 'none';
//                 mouse = true;
//             } 
//     }
// }

function clickcloseAccount()
{
    if (count == true)
    {
        profileHtml.style.display = 'block';
        count = false;
    }else{
        profileHtml.style.display = 'none';
        count = true;
    }
}
function clickcloseProfile()
{
    profileHtml.style.display = 'none';
    count = true;
}