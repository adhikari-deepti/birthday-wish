$(function() {
  
  var unsplashURL = "letter/";
  var images = ["1.png",
                "2.png",
                "3.png",
                "10.png",
                "6.png",
                "7.png",
                "5.png",
                "8.png",
                "9.png",
                "4.png"
                ];
  var urlGETParameters = { "ixlib": "rb-1.2.1",
                           "q": 80,
                           "fm": "jpg",
                           "crop": "entropy",
                           "cs": "tinysrgb",
                           "fit": "max",
                           "ixid": "eyJhcHBfaWQiOjE0NTg5fQ",
                           "w": 400
                           }
  var iteration = 0;
  for (const imageName of images) {
    var image = document.createElement('img');
    $(image).attr("id",imageName);
    $(image).attr("src",constructImgURL(imageName));
    $(image).addClass("thumb");
    switch(iteration) {
      case 0:
        $(image).addClass("center bottom");
        break;
      case 1:
        $(image).addClass("center bottom-25");
        break;
      case 2:
        $(image).addClass("center bottom-50");
        break;
      case 3:
        $(image).addClass("center top");
        break;
      case 4:
        $(image).addClass("left bottom-12_5");
        break;
      case 5:
        $(image).addClass("right bottom-12_5");
        break;
      case 6:
        $(image).addClass("left bottom-37_5");
        break;
      case 7:
        $(image).addClass("right bottom-37_5");
        break;
      case 8:
        $(image).addClass("left bottom-62_5");
        break;
      case 9:
        $(image).addClass("right bottom-62_5");
        break;
    }
    $("#honeygrid").append($(image));
    iteration++;
  }
  
  function constructImgURL(imageName) {
    var parameterString = "";
    var firstParam = true;
    for (const paramName in urlGETParameters) {
      var param = urlGETParameters[paramName];
      parameterString += (firstParam) ? "?" + paramName + "=" + param : "&" + paramName + "=" + param;
      firstParam = false;
    }
    return unsplashURL + imageName + parameterString;
  }

  $("img.thumb").click(function() {
    var id = $(this).attr("id");
    openPhotoFor(id);
  });
  $("#enlargedPhotoDiv").click(function() {
    $("img.thumb").css("animation-play-state", "running");
    $("#image-wheel").css("animation-play-state", "running");
    $(this).hide();
    $("#enlargedPhoto").remove();
  });
  $(window).resize(function() {});

  function openPhotoFor(id) {
    var enlargedPhoto = document.createElement("img");
    $(enlargedPhoto).attr("id","enlargedPhoto");
    var divWidth = $("#enlargedPhotoDiv").width();
    var divHeight = $("#enlargedPhotoDiv").height();
    urlGETParameters["w"] = divWidth - 100;
    urlGETParameters["h"] = divHeight;
    $(enlargedPhoto).attr("src", constructImgURL(id));
    $("#enlargedPhotoDiv").append($(enlargedPhoto));
    $("#enlargedPhotoDiv").show();
    $("img.thumb").css("animation-play-state", "paused");
    $("#image-wheel").css("animation-play-state", "paused");
  }
  
});