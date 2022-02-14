import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarBody = 'navbarBody';




  ////////////////////////NAVBARLINKS/////////////////////
  navbarLink = 'navbarLink';
  navbarLink2 = 'navbarLink2';
  navbarLink3 = 'navbarLink3';
  navbarLink4 = 'navbarLink4';

  arrayObjetos: any[] = ['../assets/navbar/logoafadima.png'];


  ////////////////////////NAVBAR-ITEM-DROPDOWN/////////////////////
  itemDrop = 'itemDrop';
  itemDrop2 = 'itemDrop';
  itemDrop3 = 'itemDrop';
  itemDrop4 = 'itemDrop';
  itemDrop5 = 'itemDrop';



  constructor() {}




  //////////////////////////////pagina reducida///////////////////////////////////////////////////////////////////

  ////////////////////////////////HOVER DE LOS ITEMS DESPLEGABLES/////////////////////////////////////////////////

  hoverLink() {
    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.navbarLink = 'itemDropChange';
    }
  }

  normalLink() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.navbarLink = 'navbarLink';
      console.log('works');
    }
  }

  hoverLink2() {
    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.navbarLink2 = 'itemDropChange';
    }
  }

  normalLink2() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.navbarLink2 = 'navbarLink2';
      console.log('works');
    }
  }





  hoverLink3() {
    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.navbarLink3 = 'itemDropChange';
    }
  }

  normalLink3() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.navbarLink3 = 'navbarLink3';
      console.log('works');
    }
  }

  hoverLink4() {
    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.navbarLink4 = 'itemDropChange';
    }
  }

  normalLink4() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.navbarLink4 = 'navbarLink4';
      console.log('works');
    }
  }


  /////////////////////////// HOVER DE LOS LINKS DE LA NAVBAR////////////////////
  hover() {
    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop = 'itemDropChange';
    }
  }

  normal() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop = 'itemDrop';
      console.log('works');
    }
  }

  hover2() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop2 = 'itemDropChange';
    }
  }

  normal2() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop2 = 'itemDrop';
      console.log('works');
    }
  }


  hover3() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop3 = 'itemDropChange';
    }
  }

  normal3() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop3 = 'itemDrop';
      console.log('works');
    }
  }


  hover4() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop4 = 'itemDropChange';
    }
  }

  normal4() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop4 = 'itemDrop';
      console.log('works');
    }
  }

  hover5() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop5 = 'itemDropChange';
    }
  }

  normal5() {

    var ancho = window.pageXOffset || document.documentElement.offsetWidth;
    if (ancho < 992) {
      this.itemDrop5 = 'itemDrop';
      console.log('works');
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////pagina-normal////////////////////////////////////////////////


  Scroll() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    var ancho = window.pageXOffset || document.documentElement.offsetWidth;

    if (ancho < 992) {
      top = 0;
    }
    if (top > 1) {
      this.navbarBody = 'change';
      this.navbarLink = 'navbarLinkChange';
      this.navbarLink2= 'navbarLinkChange';
      this.navbarLink3= 'navbarLinkChange';
      this.navbarLink4= 'navbarLinkChange';
      this.arrayObjetos = ['../assets/navbar/logoafadima-blanco.png'];
    }
    if (top == 0) {
      this.navbarBody = 'navbarBody';
      this.navbarLink = 'navbarLink';
      this.navbarLink2 = 'navbarLink2';
      this.navbarLink3= 'navbarLink3';
      this.navbarLink4= 'navbarLink4';

      this.arrayObjetos = ['../assets/navbar/logoafadima.png'];
    }
  }




  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {}
}

