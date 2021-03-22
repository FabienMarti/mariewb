var header = '';

header += '<div class="row">';
//Logo
header += '<div class="col-lg-2 text-center"><a href="index.html" ><img src="assets/img/logo.png" title="Logo" alt="Le logo du site" /></a></div>';
header += '<div class="col my-auto">';
header += '<div class="row">';
//Réseaux Sociaux
header += '<div class="col my-md-3 text-center text-md-left">';
header += '<a href="#"><i class="fab fa-linkedin fa-3x mx-2"></i></a>';
header += '<a href="#"><i class="fab fa-facebook-square fa-3x mx-2"></i></a>';
header += '<a href="#"><i class="fab fa-instagram fa-3x mx-2"></i></a>';
header += '</div>';
//Barre de navigation
header += '<nav class="navbar navbar-expand-lg navbar-light bg-light col-12 my-3">';
header += '<a class="navbar-brand d-none" href="#">Navbar</a>';
header += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"';
header += 'aria-label="Toggle navigation">';
header += '<span class="navbar-toggler-icon"></span>';
header += '</button>';
header += '<div class="collapse navbar-collapse" id="navbarNavDropdown">';
header += ' <ul class="navbar-nav">';
header += '<li class="nav-item active">';
header += '<a class="nav-link" href="#">Accueil <span class="sr-only">(current)</span></a>';
header += '</li>';
header += '<li class="nav-item dropdown">';
header += '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Coaching de vie</a>';
header += '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">';
header += ' <a class="dropdown-item" href="#">Individuel</a>';
header += '<a class="dropdown-item" href="#">Couple</a>';
header += '<a class="dropdown-item" href="#">Famille</a>';
header += ' </div>';
header += ' </li>';
header += '<li class="nav-item dropdown">';
header += '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vos besoins</a>';
header += ' <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">';
header += '<a class="dropdown-item" href="#">Action</a>';
header += '<a class="dropdown-item" href="#">Another action</a>';
header += '<a class="dropdown-item" href="#">Something else here</a>';
header += ' </div>';
header += '</li>';
header += '<li class="nav-item">';
header += '<a class="nav-link" href="#">Me découvrir</a>';
header += '</li>';
header += '<li class="nav-item">';
header += '<a class="nav-link" href="#">Contact</a>';
header += '</li>';
header += '</ul>';
header += '</div>';
header += '</nav>';
header += '</div>';
header += '</div>';
header += '</div>';

document.write(header);