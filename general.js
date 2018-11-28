function bg_Galaxy ()
{
	document.getElementById("header").style.backgroundImage= "url('Galaxy')";
	setTimeout(bg_a, 4000);
}

function bg_a ()
{
	document.getElementById("header").style.backgroundImage = "url('a.jpg')";
	setTimeout(bg_b, 4000);
}

function bg_b ()
{
	document.getElementById("header").style.backgroundImage = "url('b.jpg')";
	setTimeout(bg_Galaxy, 4000);
}

function resize_title()
{
	if (window.innerWidth < 500)
		document.getElementById("title").style.fontSize="2em";
	else
		document.getElementById("title").style.fontSize="3em";
}

setTimeout(bg_a, 2000);
// JavaScript Document