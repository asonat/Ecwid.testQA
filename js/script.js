Ecwid.init();
Ecwid.OnAPILoaded.add;

  var count;

  function getCountProductInCart() {
    Ecwid.Cart.get(function(cart) {
    count = cart.productsQuantity;
    });
  }

  function inner() {
    if (count >= 5) {
    document.getElementById('carProduct').innerHTML = "Вы собрали автомобиль";
    }
  }

  function getValue() {
    setTimeout(getCountProductInCart, 300);
    setTimeout(inner, 300);
    }


  function addFirstProduct() {
    Ecwid.Cart.addProduct(165641891);
    getValue();
  }

  function addSecondProduct() {
    Ecwid.Cart.addProduct(165641893);
    getValue();
  }

  function addThirdProduct() {
    Ecwid.Cart.addProduct(165642848);
    getValue();
  }

  function addFourthProduct() {
    Ecwid.Cart.addProduct(165646885);
    getValue();
  }

  function addFifthProduct() {
    Ecwid.Cart.addProduct(165642851);
    getValue();
  }
