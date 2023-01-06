var a;
function show_hide() {
    if (a==1)
        {
            document.getElementById("nav__ul").style.visibility="hidden";
            document.getElementById("nav__ul").style.display="none";
            return a=0;
        }
    else {
        document.getElementById("nav__ul").style.visibility="visible";
        document.getElementById("nav__ul").style.display="block";
        return a=1;
    }
}