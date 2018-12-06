function bg_1 ()
{
	document.getElementById("header").style.backgroundImage = "url('Galaxy.jpg')";
	setTimeout(bg_2, 4000);
}

function bg_2 ()
{
	document.getElementById("header").style.backgroundImage = "url('a.jpg')";
	setTimeout(bg_3, 4000);
}

function bg_3 ()
{
	document.getElementById("header").style.backgroundImage = "url('b.jpg')";
	setTimeout(bg_1, 4000);
}

function resize_title()
{
	if (window.innerWidth < 500)
		document.getElementById("title").style.fontSize="2em";
	else
		document.getElementById("title").style.fontSize="3em";
}

setTimeout(bg_1, 2000);
function show_popup ( source, description )
{
	var p = document.getElementById("popup");
	p.style.display = "block";
	p.style.opacity = "0";
	setTimeout(popup_fade_in, 5);

	document.getElementById("popup_image").src = source;
	document.getElementById("popup_image").alt = description;
	document.getElementById("popup_caption").innerHTML = description;
}

function popup_fade_in ()
{
	document.getElementById("popup").style.opacity = "100";
}

function hide_popup ()
{
	document.getElementById("popup").style.opacity = "0";
	setTimeout(popup_display_none, 500);
}

function popup_display_none ()
{
	document.getElementById("popup").style.display = "none";
}
// JavaScript Document
