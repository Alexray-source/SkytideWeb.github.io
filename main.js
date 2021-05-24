class RedFireHeader extends HTMLElement {
   connectedCallback() {
       this.innerHTML = `
      <head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./styles.css">
    <link rel="icon" href="./img/RedFireLogoNoText.png">
</head>
<header>
    <div class="logo-container">
        <img src="./img/RedFireLogo.png" alt="logo">
    </div>
    <nav>
        <ul class="nav-links">
          <li><a class="nav-link" href="./index.html">Home</a></li>  
          <li><a class="nav-link" href="./ourprojects.html">Our projects</a></li>
          <li><a class="nav-link" href="./contact.html">Contact</a></li>
        </ul>
    </nav>
</header>  
`
   }
}

customElements.define('redfire-header', RedFireHeader)

class RedFireFooter extends HTMLElement {
   connectedCallback() {
       this.innerHTML = `
       <footer>
       <p>© 2021 RedFire</p>
   </footer>
   `
   }
}

customElements.define('redfire-footer', RedFireFooter)