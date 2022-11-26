


(function () {


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }




  /**
   * masquer texte expe eni
   */
  let togg2 = document.getElementById("BTExpeE");
  let d2 = document.getElementById("ExpeENI");
  let d2_2 = document.getElementById("ExpeENI_2");
  let pi2_2 = document.getElementById("PIconeExpeE");
  let mi2_2 = document.getElementById("MIconeExpeE");

  togg2.addEventListener("click", () => {
    if (getComputedStyle(d2).display != "none") {
      d2.style.display = "none";
      d2_2.style.display = "none";
      pi2_2.style.display = "block";
      mi2_2.style.display = "none";

    } else {
      d2.style.display = "block";
      d2_2.style.display = "block";
      pi2_2.style.display = "none";
      mi2_2.style.display = "block";

    }
  })

  ExpeENI.style.display = "none";
  ExpeENI_2.style.display = "none";
  mi2_2.style.display = "none";

  let togg3 = document.getElementById("Expe1-bi-plus-circle-fill");
  let d3_1 = document.getElementById("Expe1_1");
  let d3_2 = document.getElementById("Expe1_2");
  let d3_3 = document.getElementById("Expe1_3");
  togg3.addEventListener("click", () => {
    if (getComputedStyle(d3_1).display != "none") {
      d3_1.style.display = "none";
      d3_2.style.display = "none";
      d3_3.style.display = "none";
    } else {
      d3_1.style.display = "block";
      d3_2.style.display = "block";
      d3_3.style.display = "block";
    }
  })

  Expe1_1.style.display = "none";
  Expe1_2.style.display = "none";
  Expe1_3.style.display = "none";



  let togg4 = document.getElementById("Expe2-bi-plus-circle-fill");
  let d4_1 = document.getElementById("Expe2_1");
  let d4_2 = document.getElementById("Expe2_2");

  togg4.addEventListener("click", () => {
    if (getComputedStyle(d4_1).display != "none") {
      d4_1.style.display = "none";
      d4_2.style.display = "none";

    } else {
      d4_1.style.display = "block";
      d4_2.style.display = "block";

    }
  })

  Expe2_1.style.display = "none";
  Expe2_2.style.display = "none";

  // cacher experience RT//
  let togg5 = document.getElementById("Expe3-bi-plus-circle-fill");
  let d5 = document.getElementById("Expe3");

  togg5.addEventListener("click", () => {
    if (getComputedStyle(d5).display != "none") {
      d5.style.display = "none";

    } else {
      d5.style.display = "block";

    }
  })
  Expe3.style.display = "none";

    // cacher experience 2014-2021//
    let togg3bis = document.getElementById("BTExpeD");
    let pi3 = document.getElementById("PIconeExpeD");
    let mi3 = document.getElementById("MIconeExpeD");
    togg3bis.addEventListener("click", () => {
      if (getComputedStyle(d5).display != "none") {
        d3_1.style.display = "none";
        d3_2.style.display = "none";
        d3_3.style.display = "none";
        d4_1.style.display = "none";
        d4_2.style.display = "none";
        d5.style.display = "none";
        pi3.style.display = "block";
        mi3.style.display = "none";
  
      } else {
        
        d3_1.style.display = "block";
        d3_2.style.display = "block";
        d3_3.style.display = "block";
        d4_1.style.display = "block";
        d4_2.style.display = "block";
        d5.style.display = "block";
        pi3.style.display = "none";
        mi3.style.display = "block";
      }
    })
    Expe3.style.display = "none";
    mi3.style.display = "none";
    // end - cacher experience 2014-2021//

  let togg6 = document.getElementById("BTExpeC");
  let d6_1 = document.getElementById("Expe4_1");
  let d6_2 = document.getElementById("Expe4_2");
  let pi6 = document.getElementById("PIconeExpeC");
  let mi6 = document.getElementById("MIconeExpeC");
  togg6.addEventListener("click", () => {
    if (getComputedStyle(d6_1).display != "none") {
      d6_1.style.display = "none";
      d6_2.style.display = "none";
      pi6.style.display = "block";
      mi6.style.display = "none";
    } else {
      d6_1.style.display = "block";
      d6_2.style.display = "block";
      pi6.style.display = "none";
      mi6.style.display = "block";
    }
  })
  Expe4_1.style.display = "none";
  Expe4_2.style.display = "none";
  mi6.style.display = "none";

  let togg_b = document.getElementById("BTExpeB");
  let d_b = document.getElementById("ExpeB");
  let pib = document.getElementById("PIconeExpeB");
  let mib = document.getElementById("MIconeExpeB");
  togg_b.addEventListener("click", () => {
    if (getComputedStyle(d_b).display != "none") {
      d_b.style.display = "none";
      pib.style.display = "block";
      mib.style.display = "none";
    } else {
      d_b.style.display = "block";
      pib.style.display = "none";
      mib.style.display = "block";
    }
  })
  ExpeB.style.display = "none";
  mib.style.display = "none";

  let togg_a = document.getElementById("BTExpeA");
  let d_a = document.getElementById("ExpeA");
  let pia = document.getElementById("PIconeExpeA");
  let mia = document.getElementById("MIconeExpeA");
  togg_a.addEventListener("click", () => {
    if (getComputedStyle(d_a).display != "none") {
      d_a.style.display = "none";
      pia.style.display = "block";
      mia.style.display = "none";
    } else {
      d_a.style.display = "block";
      pia.style.display = "none";
      mia.style.display = "block";
    }
  })
  ExpeA.style.display = "none";
  mia.style.display = "none";

  /**
   * masquer texte expe eni
   */
   let togg1 = document.getElementById("competenceENI-circle-fill");
   let d1 = document.getElementById("competenceENI");
   let pi1 = document.getElementById("ENI-bi-plus-circle-fill");
   let mi1 = document.getElementById("ENI-bi-moins-circle-fill");
   togg1.addEventListener("click", () => {
     if (getComputedStyle(d1).display != "none") {
       d1.style.display = "none";
       pi1.style.display = "block";
       mi1.style.display = "none";
     } else {
       d1.style.display = "block";
       pi1.style.display = "none";
       mi1.style.display = "block";
     }
   })
   competenceENI.style.display = "none";
   mi1.style.display = "none";

   let toggcnam = document.getElementById("cnam-circle-fill");
   let d1cnam = document.getElementById("cnam");
   let d2cnam = document.getElementById("cnam2");
   let picnam = document.getElementById("cnam-bi-plus-circle-fill");
   let micnam = document.getElementById("cnam-bi-moins-circle-fill");
   toggcnam.addEventListener("click", () => {
     if (getComputedStyle(d1cnam).display != "none") {
       d1cnam.style.display = "none";
       d2cnam.style.display = "none";
       picnam.style.display = "block";
       micnam.style.display = "none";
     } else {
       d1cnam.style.display = "block";
       d2cnam.style.display = "block";
       picnam.style.display = "none";
       micnam.style.display = "block";
     }
   })
   cnam.style.display = "none";
   cnam2.style.display = "none";
   micnam.style.display = "none";

//test cacher class//
//let montestBtn = document.getElementById("SkillsBar-bi-plus-circle-fill");
let montestClass = document.getElementsByClassName("progress-bar");

let CacherSkills = document.getElementById("SkillsSecond");
let CacherBarSkills = document.getElementById("SkillsBarEval");

//testID.style.display = "none";
hiddenByClass('progress-bar', document, '*')
hiddenByClass('val', document, '*')
//tailleImgByClass('ImageSkill', document, '*')
zoomByClass('ImageSkill', document, '*')
//tailleImgByClass('ImageSkill2nd', document, '*')
//zoomByClass('ImageSkill2nd', document, '*')
hiddenByClass('secondaire', document, '*')
var compteur=0;

CacherBarSkills.addEventListener("click", () => {

 /* if (SkillsSecond.innerHTML == 'Afficher plus de compétences') {
    showHideSkills2nd()
  }*/
 
 // showHideBarSkills()

 //showHideSkills2nd()

  if (getComputedStyle(montestClass[1]).display != "none") {
    //showSkills2nd()
    //hideSkills2nd()
    showSkills2nd()
    hideSkills2nd()

    showBarSkills()
    console.debug("test");
  } else {
    showSkills2nd()
    hideSkills2nd()

    hideBarSkills()
  }

})

  //filtrer skills important
  //let CMS = document.getElementById("CMSWordPress");

  //CMSWordPress.style.display = "none";
  //vbnet.style.display = "none";
  
  
CacherSkills.addEventListener("click", () => {

  //showHideSkills2nd()

  if (SkillsSecond.innerHTML != 'Afficher plus de compétences') {
    showSkills2nd()
  } else {
    hideSkills2nd()
  }
  
})

/*
function showHideBarSkills ()
{
 //tailleImgByClass('secondaire', document, '*')
  
 if (getComputedStyle(montestClass[1]).display != "none") {

  hiddenByClass('progress-bar', document, '*')
  hiddenByClass('val', document, '*')
  zoomByClass('ImageSkill', document, '*')
  zoomByClass('ImageSkill2nd', document, '*')
  document.getElementById('SkillsBarEval').innerHTML = 'Afficher mon auto-évaluation';

} else {
  showByClass('progress-bar', document, '*')
  showByClass('val', document, '*')
  dezoomByClass('ImageSkill', document, '*')
  if (SkillsSecond.innerHTML != 'Afficher plus de compétences') {
    dezoomByClass('ImageSkill2nd', document, '*')
  } else {
    
  }
  
  
  document.getElementById('SkillsBarEval').innerHTML = 'Masquer mon auto-évaluation';
}
}
*/

function showBarSkills ()
{


  hiddenByClass('progress-bar', document, '*')
  hiddenByClass('val', document, '*')
  zoomByClass('ImageSkill', document, '*')
  zoomByClass('ImageSkill2nd', document, '*')
  document.getElementById('SkillsBarEval').innerHTML = 'Afficher mon auto-évaluation';

}

function hideBarSkills ()
{
  showByClass('progress-bar', document, '*')
  showByClass('val', document, '*')
  dezoomByClass('ImageSkill', document, '*')
  if (SkillsSecond.innerHTML != 'Afficher plus de compétences') {
    dezoomByClass('ImageSkill2nd', document, '*')
  } else {
    
  }
  
  
  document.getElementById('SkillsBarEval').innerHTML = 'Masquer mon auto-évaluation';
}

/*
function showHideSkills2nd ()
{

  if (SkillsSecond.innerHTML != 'Afficher plus de compétences') {
    
    hiddenByClass('secondaire', document, '*')
    //tailleImgByClass('secondaire', document, '*')
    document.getElementById('SkillsSecond').innerHTML = 'Afficher plus de compétences';
  } else {
    showByClass('secondaire', document, '*')
    showByClass('ImageSkill2nd', document, '*')
    if (SkillsBarEval.innerHTML == 'Masquer mon auto-évaluation') {
      
    } else {
      if (compteur==0 && 
        document.getElementById('SkillsSecond').innerHTML != 'Masquer des compétences') {
        zoomByClass('ImageSkill2nd', document, '*')
        compteur=1;
      }
    }
  
      document.getElementById('SkillsSecond').innerHTML = 'Masquer des compétences';    
  }

}
*/

function showSkills2nd ()
{


    
    hiddenByClass('secondaire', document, '*')
    //tailleImgByClass('secondaire', document, '*')
    document.getElementById('SkillsSecond').innerHTML = 'Afficher plus de compétences';


}

function hideSkills2nd ()
{
    showByClass('secondaire', document, '*')
    showByClass('ImageSkill2nd', document, '*')
    if (SkillsBarEval.innerHTML == 'Masquer mon auto-évaluation') {
      
    } else {
      if (compteur==0 && 
        document.getElementById('SkillsSecond').innerHTML != 'Masquer des compétences') {
        zoomByClass('ImageSkill2nd', document, '*')
        compteur=1;
      }
    }
  
      document.getElementById('SkillsSecond').innerHTML = 'Masquer des compétences';    
  

}

//let montestID = document.getElementById("testID");

function getElementsByClass(searchClass, node, tag)
{
  var classElements = new Array();
  if(node == null) node = document;
  if(tag == null) tag = '*';
  
  var els = node.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
  
  for(i = 0, j = 0; i < elsLen; i++)
  {
    if(pattern.test(els[i].className) )
      { 
        classElements[j] = els[i];
        j++;
      }
  }
  
  return classElements;
}

function hiddenByClass(searchClass, node, tag)
{
 
	var elm = getElementsByClass(searchClass, node, tag);
	
	for(var i = 0; i < elm.length; i++)
	{
		elm[i].style.display = "none";
    }
}
function showByClass(searchClass, node, tag)
{
 
	var elm = getElementsByClass(searchClass, node, tag);
	
	for(var i = 0; i < elm.length; i++)
	{
		elm[i].style.display = "block";
    }
}

function zoomByClass(searchClass, node, tag)
{
  var tmpHeight =0 ;
  var strHeight;
	var elm = getElementsByClass(searchClass, node, tag);
	
	for(var i = 0; i < elm.length; i++)
	{
    
    //console.debug(elm[i].clientHeight + 200);
    // tmpHeight = elm[i].clientHeight + 200;
    // strHeight= (tmpHeight) + "px";
    // console.debug(strHeight);
    //elm[i].style.Height =  (200)+'px';

    
    //elm[i].style.Height =  (elm[i].clientHeight + 200) + "px";
    //elm[i].style.width =  (elm[i].clientwidth + 200) + "px";
    elm[i].height = elm[i].clientHeight * 2.0;
    elm[i].width = elm[i].clientWidth * 2.0;
    //elm[i].style.width= 'auto';
    //elm[i].width = elm[i].clientwidth * 1.5;
    //elm[i].style.height = "100px";
    //elm[i].style.width= "100px";
    //console.debug(elm[i].clientHeight);
    }
}

function dezoomByClass(searchClass, node, tag)
{
  var tmpHeight =0 ;
  var strHeight;
	var elm = getElementsByClass(searchClass, node, tag);
	
	for(var i = 0; i < elm.length; i++)
	{
    //elm[i].style.height = "25px";
    //elm[i].style.width= 'auto';
    elm[i].height = elm[i].clientHeight / 2.0;
    //elm[i].style.width= 'auto';
    elm[i].width = elm[i].clientWidth / 2.0;
    }
}

//gdeTailleImgByClass('ImageSkill')

function gdeTailleImgByClass(searchClass)
{
  var tmpHeight =0 ;
  var strHeight;
	var elm = getElementsByClass(searchClass, document, '*');
	
	for(var i = 0; i < elm.length; i++)
	{
    //elm[i].style.height = "25px";
    //elm[i].style.width= 'auto';

        
        elm[i].style.height = "100px";
        elm[i].width= 'auto';
    //elm[i].width = elm[i].clientwidth / 1.5;
    }
}

//petiteTailleImgByClass('ImageSkill')

function petiteTailleImgByClass(searchClass)
{
  var tmpHeight =0 ;
  var strHeight;
	var elm = getElementsByClass(searchClass, document, '*');
	
	for(var i = 0; i < elm.length; i++)
	{
    //elm[i].style.height = "25px";
    //elm[i].style.width= 'auto';

        
        elm[i].style.height = "25px";
        elm[i].width= 'auto';
    //elm[i].width = elm[i].clientwidth / 1.5;
    }
}


//----zoomer image carousel
let d_carouselId1 = document.getElementById("carouselId1");
let d_carouselId2 = document.getElementById("carouselId2");;
let bloc_carousel = document.getElementById("carouselId");
//carousel.width= "640px"
//carousel.height= "450px"
//let d1cnam = document.getElementById("cnam");
d_carouselId1.addEventListener("click", () => {
  zoomerImageCarousel()
})
d_carouselId2.addEventListener("click", () => {
  zoomerImageCarousel()
})

//
/*
function handle(evnt){
  //alert("l'événement resize a été déclenché." );
  //return true;
  if (document.body.clientWidth > 768) {
    console.log(document.body.clientWidth)
    bloc_carousel.style.maxWidth = "640px";
    //bloc_carousel.style.maxHeight = "400px";
  } else {
    console.log(document.body.clientWidth)
    bloc_carousel.style.maxWidth = "220px";
    //bloc_carousel.style.maxHeight = "300px";
  
  }
}*/
//window.onresize = handle;
bloc_carousel.style.maxWidth = "640px";

function zoomerImageCarousel() {


  /*var larg;
  var haut;
  console.debug("d1h " + d_carouselId1.clientHeight)
  console.debug("d2h " + d_carouselId2.clientHeight)
  console.debug("d1l " + d_carouselId1.clientWidth)
  console.debug("d2l " + d_carouselId2.clientWidth)*/

  /*if (d_carouselId1.clientWidth != 0) {
    haut = d_carouselId1.clientHeight;
    larg = d_carouselId1.clientWidth ;
  } else {
    haut = d_carouselId2.clientHeight ;
    larg = d_carouselId2.clientWidth ;
  }*/

  /*console.log(document.body.clientWidth)*/
if (document.body.clientWidth > 1200) {

  if (d_carouselId1.clientWidth > 700 || d_carouselId2.clientWidth > 700) {
    d_carouselId1.style.height = "450px";
    d_carouselId1.style.width = "640px";
    d_carouselId2.style.height = "450px";
    d_carouselId2.style.width = "640px";
    bloc_carousel.style.maxWidth = "640px";
    //bloc_carousel.style.maxHeight = "450px";
  } else {
        /*d_carouselId1.height = haut * 1.5;
    d_carouselId1.width = larg * 1.5;
    d_carouselId2.height = haut * 1.5;
    d_carouselId2.width = larg * 1.5;*/
    bloc_carousel.style.maxWidth = "960px";
    //bloc_carousel.style.maxHeight = "675px";
    d_carouselId1.style.height = "675px";
    d_carouselId1.style.width = "960px";
    d_carouselId2.style.height = "675px";
    d_carouselId2.style.width = "960px";
  }
} else {
  
}

}



//----------------------------------------souris info-bulle------------------------------------
//$(document).tooltip({show: {effect:"none", delay:0}});

/*
let centrerMap = document.getElementById("photoA");
centrerMap.addEventListener("click", () => {

  //console.debug("test");
  centrerMap.style.display = "none";
  
})
//photoA.style.display = "none";
*/



})()


