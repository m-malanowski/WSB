(function(){

class Application {
  constructor(container, image) {
    this.images = [
      image
    ]
    this.speed = 0;
    this.s = 100;
    this.container = document.querySelector(container);
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.renderer = new PIXI.autoDetectRenderer(this.width, this.height, {
      transparent: true,
      antialias: true
    });
    this.renderer.autoResize = true;
  }
  init() {
    this.count = 0;
    this.imageURL = this.images[this.count]
    this.dispURL = 'https://res.cloudinary.com/dvxikybyi/image/upload/v1486634113/2yYayZk_vqsyzx.png'
    this.container.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();

    this.texture = PIXI.Texture.fromImage(this.imageURL);
    this.sprite = new PIXI.Sprite(this.texture);
    this.sprite.scale.set(0.7, 0.7)
    this.sprite.anchor.set(0.2, 0.2);

    this.displacementSprite = PIXI.Sprite.fromImage(this.dispURL);
    this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);

    this.displacementSprite.scale.x = 0.5;
    this.displacementSprite.scale.y = 0.5;

    this.stage.addChild(this.sprite);
    this.stage.addChild(this.displacementSprite);
    setInterval(() => {
      this.count++;

      if (this.count > this.images.length - 1) {
        this.count = 0;
      }



    }, 500)
    this.container.addEventListener('mouseenter', (e) => this.animateContainer(e))
    this.animate()
  }
  animate() {
    requestAnimationFrame(() => this.animate())
    this.speed += 1;
    this.imageURL = this.images[this.count]

    this.stage.filters = [this.displacementFilter]
    this.renderer.render(this.stage)

    TweenMax.to(this.displacementFilter.scale, 1, {
      x: this.s
    })


    this.displacementSprite.x = this.speed;
    this.displacementSprite.y = this.speed;


  }
  animateContainer(e) {
    TweenMax.to(this.displacementFilter.scale, 1, {
      x: 0
    })
  }
}





window.onload = () => {

  let app = new Application('.square', 'assets/img/egzekucja2.jpg');
  app.init()

  let app2 = new Application('.square2', 'assets/img/home.jpg');
  app2.init()

  let app3 = new Application('.square3', 'assets/img/odszkodowania.jpg');
  app3.init()

  let app4 = new Application('.square4', 'assets/img/texture2.jpg');
  app4.init()



}


function animate() {
  requestAnimationFrame(animate);

}



var falaUpdate;
falaUpdate = function() {
  var hour = (new Date()).getHours();
  const fala = document.getElementById('fala');

  if (hour >= 18 || hour <= 8) {
    fala.classList.remove('fala');
    fala.classList.add('falaAfterDark')
    console.log("///////////////////////// \n DOBRY WIECZÓR! \n /////////////////////////")
  } else if (hour >= 9) {
    fala.classList.remove('falaAfterDark');
    fala.classList.add('fala');
    console.log(" ///////////////////////// \n DZIEŃ DOBRY! \n /////////////////////////")

  }
  setInterval(falaUpdate, 1000 * 60);

}

falaUpdate();





const anty = document.querySelector('.antyegzekucja');
const furman = document.querySelector('.furman');
const homies = document.querySelector('.homies');
const odszkodowania = document.querySelector('.odszkodowania');

anty.addEventListener('mouseover', function() {
  document.querySelector('.work-antyegzekucja').style.opacity = 1;
  anty.addEventListener('mouseleave', function() {
    document.querySelector('.work-antyegzekucja').style.opacity = 0;
  })
});

furman.addEventListener('mouseover', function() {
  document.querySelector('.work-furman').style.opacity = 1;
  furman.addEventListener('mouseleave', function() {
    document.querySelector('.work-furman').style.opacity = 0;
  })
});

homies.addEventListener('mouseover', function() {
  document.querySelector('.work-nieruchomosci').style.opacity = 1;
  homies.addEventListener('mouseleave', function() {
    document.querySelector('.work-nieruchomosci').style.opacity = 0;
  })
});
odszkodowania.addEventListener('mouseover', function() {
  document.querySelector('.work-odszkodowania').style.opacity = 1;
  odszkodowania.addEventListener('mouseleave', function() {
    document.querySelector('.work-odszkodowania').style.opacity = 0;
  })
});


$(function() {
  var pageTitle = $("title").text();
  $(window).blur(function() {
    var emoji = String.fromCodePoint(0x1F61C);
    $("title").text(emoji);
  });
  $(window).focus(function() {
    $("title").text(pageTitle);
  });
});

})()
