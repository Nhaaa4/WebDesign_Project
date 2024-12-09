const profileHtml = document.getElementById('profile');
let count = true;

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