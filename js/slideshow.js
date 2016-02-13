
/*

Code from: http://www.siteforinfotech.com/2014/11/multiple-slideshows-on-one-page-javascript.html

Modified by Tiago Ângelo
*/


function SlideShow(slideList, image, speed, name)          
{
  this.slideList = slideList;
  this.image = image;
  this.speed = speed;
  this.name = name;
  this.current = 0;
  this.timer = 0;
}

function switchImage(imgName, imgSrc) 
{
  if (document.images)
  {
    if (imgSrc != "none")
    {
      document.images[imgName].src = imgSrc;
    }
  }
}

SlideShow.prototype.play = SlideShow_play;  
function SlideShow_play()       
{
  with(this)
  {
    if(current++ == slideList.length-1) current = 0;
    switchImage(image, slideList[current]);
    clearTimeout(timer);
    timer = setTimeout(name+'.play()', speed);
  }
}
