//Template for header and navbar

const header = document.getElementById("template_header");
header.innerHTML = `

<div id="header">
        
<h1 class="maintitle"><a href="index.html">Louisville Jazz Initiative</a></h1>
<nav class="navbar">
    <ul>
        <li><a href="about.html" > About Us </a></li>
        <li><a href="music.html" > Music </a></li>
        <li><a href="education.html" > Education </a></li>
        <li><a href="connect.html" > Connect </a></li>
        <li><a href="#" > Donate </a></li>
    </ul>
</nav>

</div>

`

//Template for footer

const footer = document.getElementById("template_footer");
footer.innerHTML = `

<p class="copyright">&copy; Copyright 2020 - Louisville Jazz Initiative</p>

`

//Other templates below