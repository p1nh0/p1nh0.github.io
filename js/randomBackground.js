var images = new Array();
images[0] = "media/pics/backgrounds/point_cloud_1.png";
images[1] = "media/pics/backgrounds/point_cloud_2.png";
images[2] = "media/pics/backgrounds/point_cloud_3.png";
images[3] = "media/pics/backgrounds/point_cloud_4.png";
images[4] = "media/pics/backgrounds/point_cloud_5.png";
images[5] = "media/pics/backgrounds/point_cloud_6.png";
images[6] = "media/pics/backgrounds/point_cloud_7.png";
images[7] = "media/pics/backgrounds/point_cloud_8.png";

function loadRandomBackground() {
  // Chooses a random link:
  var i = Math.floor(Math.random() * images.length);
  
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundSize= "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.background = images[i];

}