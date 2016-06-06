function createDiv(){

  maDiv= document.createElement('div');
  maDiv.setAttribute('id','contact');
  divDroits= document.createElement('div');
  divDroits.setAttribute('class','copyright');
  divDroits.innerHTML='<h5>© Tous droits réservés</h5>';
  monFoot= document.createElement('footer');
  monFoot.setAttribute('id','footer');
  monFoot.innerHTML='<ul class="nameMail"><li>Irina Jacquin</li><li>irina.jacquin@gmail.com</li><li>06 28 37 42 77</li></ul><ul class="reseaux"><li><a href="https://www.behance.net/irinajac">Behance</a></li><li><a href="https://www.instagram.com/irinajac/">Instagram</a></li></ul>';
  document.body.appendChild(maDiv);
  maDiv.appendChild(divDroits);
  maDiv.appendChild(monFoot);

  var photos=["images/DSCN0446.JPG","images/DSCN0728.JPG","images/DSCN0926.JPG","images/DSCN1042.JPG",
  "images/DSCN1044.JPG","images/DSCN1048.JPG","images/DSCN1147.JPG","images/DSCN1375.JPG",
  "images/DSCN1747.JPG","images/DSCN1787.JPG","images/DSCN2666.JPG"];



  var images=[];
  var nbrePhotos=11;

  for (var i = 0; i < nbrePhotos; i++) {
    var index= Math.floor(Math.random()*photos.length);
    var newImg= photos.splice(index,1);
    images.push(newImg[0]);

    mesImg= document.createElement('img');
    mesImg.setAttribute('class', 'photos');
    mesImg.setAttribute('src', images[i]);
    maDiv.appendChild(mesImg);
  }

}

function seeAbout(){
  document.getElementsByTagName("NAV")[0].removeAttribute("class");
  document.getElementById("menu").setAttribute('class','about');
  document.getElementsByTagName("H3")[0].innerHTML="<h3></h3>";
  document.getElementsByTagName("H3")[2].innerHTML="<h3></h3>";
  document.getElementsByTagName("H3")[4].innerHTML="<h3></h3>";
  document.getElementById("title").style.color="darkblue";
  document.getElementsByTagName("NAV")[0].innerHTML="<div class='animTexte'><h2>Bienvenue sur ma galerie !</h2></br><p>J'ai réuni ici quelques photos que j'ai réalisées pour montrer la richesse du ciel et des nuages.</br>On a tendance à ne plus les voir, on les regarde surtout pour tenter de déchiffrer les caprices du ciel, on en oublie leur beauté.</p></br><h2>Bonne visite !</h2></div>"
  document.getElementById('croix').style.display="block";
}

function hideAbout(){
  document.getElementsByTagName("NAV")[0].setAttribute("class","menu");
  document.getElementsByTagName("NAV")[0].innerHTML="<h3><a href='#'>ACCUEIL</a></h3><h3 onclick='seeAbout()'>A PROPOS</h3><h3><a href='#footer'>CONTACT</a></h3>";
  document.getElementById("title").style.color="lightpink";
  document.getElementById('croix').style.display="none";
}
