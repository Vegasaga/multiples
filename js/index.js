$(document).ready(function () {
  $(".btn .fa-play-circle-o").on(`click`, function () {
    $(this).hide();
    $(".fa-pause-circle-o").fadeIn();
    $("#myMusic")[0].play();
  });

  $(".btn .fa-pause-circle-o").on(`click`, function () {
    $(this).hide();
    $(".fa-play-circle-o").fadeIn();
    $("#myMusic")[0].pause();
  });
});
