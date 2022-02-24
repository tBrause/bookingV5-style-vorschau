// VARS
const sys_url = `${window.location.origin}${location.pathname}`;
const li_elements_height = 40;

// BUCHUNGSMASKE
document.write(
  '<div class="astrotel_connect"><div id="astrotel_close"><a id="mask_close" href="#astrotel_close"><span>Zur&uuml;ck zur Homepage</span></a></div><div id="mask_iframe"><iframe id="i_quelle" src="' +
    sys_url +
    '/astrotel_connect/start.php" scrolling"auto"></iframe></div></div>'
);

// SEITLICHE NAVIGATION
document.write(
  "<script src='" + sys_url + "/astrotel_connect/libraries/snav.js'></script>"
);
document.write(
  "<script src='" + sys_url + "/astrotel_connect/libraries/snavm.js'></script>"
);

var check_mobile = function () {
  var checkMobileDevice = function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk|ideatab/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  var is_mobile_device = checkMobileDevice(
    navigator.userAgent || navigator.vendor || window.opera
  );

  if (is_mobile_device == true) {
    $("div#mask_iframe").css({ "overflow-y": "scroll" });
  }
};

// BUTTONS SEITLICHE NAVIGATION HOVER
var snav_buttons = function () {
  $("#astrotel_nav > ul > li").hover(
    function () {
      if ($(this).queue("fx").length == 0) {
        $(this).stop().animate(
          {
            left: "-260px",
          },
          "slow"
        );
      }
    },
    function () {
      $(this).stop().animate(
        {
          left: "0px",
        },
        "fast"
      );
    }
  );
};

// BUTTONS MOBILE SEITLICHE NAVIGATION CLICK
var snav_buttons_m = function () {
  var win_inner_width = parseInt($(window).innerWidth());

  $(document).on(
    "click touchstart touchend",
    "#astrotel_nav_m > ul",
    function (event) {
      var li_elements = $("#astrotel_nav_m > ul > li").length;
      var li_elements_aus = li_elements_height * li_elements + 200;
      var ul_width = $(this).innerWidth();
      $("#astrotel_nav_m").css({ height: li_elements_aus + "px" });
      $("#mclose").css({ display: "block" });
      $("#astrotel_nav_m > ul").css({
        position: "absolute",
        left: "10px",
        top: "50px",
        right: "0px",
      });
      $("#astrotel_nav_m > ul > li").css({ width: "100%" });
      $("#astrotel_nav_m > ul > li > span.icons_extern").css({
        cursor: "auto",
      });
      $("#astrotel_nav_m > ul > li > span.stxt").css({
        display: "block",
        left: "60px",
      });
      /*$("#astrotel_nav_m > ul > li > span.stxt").animate({
			left: '60px'
		}, 'slow');*/
    }
  );
};

// BUTTONS MOBILE SEITLICHE NAVIGATION SCHLIESSEN
var mclose = function () {
  $(document).on("click touchstart touchend", "#mclose", function (event) {
    $("#astrotel_nav_m").css({ height: "70px" });
    $("#mclose").css({ display: "none" });
    $("#astrotel_nav_m > ul").css({
      position: "relative",
      left: "auto",
      top: "auto",
    });
    $("#astrotel_nav_m > ul > li").css({ float: "right", width: "60px" });
    $("#astrotel_nav_m > ul > li:first-child").css({ width: "40px" });
    $("#astrotel_nav_m > ul > li > span.icons_extern").css({
      cursor: "pointer",
    });
    $("#astrotel_nav_m > ul > li > span.stxt").css({
      display: "none",
      right: "-100%",
    });
  });
};

// ANFRAGEMASKE SCHLIESSEN
var mask_close = function () {
  $("a#mask_close").click(function () {
    check_mobile();
    var win_inner_width = parseInt($(window).innerWidth());
    if (win_inner_width >= 1024) {
      $("#astrotel_nav").css({ display: "block" });
    } else {
      $("#astrotel_nav_m").css({ display: "block" });
      $("#astrotel_nav_m").css({ height: "70px" });
      $("#mclose").css({ display: "none" });
      $("#astrotel_nav_m > ul").css({
        position: "relative",
        left: "auto",
        top: "auto",
      });
      $("#astrotel_nav_m > ul > li").css({ float: "right", width: "60px" });
      $("#astrotel_nav_m > ul > li > span.icons_extern").css({
        cursor: "pointer",
      });
      $("#astrotel_nav_m > ul > li > span.stxt").css({
        display: "none",
        left: "-100%",
      });
    }

    $("div.astrotel_connect").css({ display: "none" });
    //$("body").css({ "overflow" : "auto" });
    $("#mask_iframe").html(
      '<iframe id="i_quelle" src="' +
        sys_url +
        '/astrotel_connect/start.php"></iframe>'
    );
  });
};

// MASKE AUS FORMULR OEFFNEN
var mask_open_form = function () {
  $("#mask_form").submit(function (event) {
    var form_anreise_mkw = $("#form_anreise_mk").val();
    var form_abreise_mkw = $("#form_abreise_mk").val();
    $("#astrotel_nav").css({ display: "none" });
    $("div.astrotel_connect").css({
      display: "block",
      "z-index": "998",
      position: "fixed",
      top: "0px",
      left: "0px",
      right: "0px",
      bottom: "0px",
      background: "rgba(0,0,0,0,2)",
    });
    $("#mask_iframe").html(
      '<iframe id="i_quelle" src="https://www.vorschau3.net-booking.de/reservierungsanfrage-reservierungsanfragen-anfragen.php?lg=1&id=20190320204100&amp;form_anreise=' +
        form_anreise_mkw +
        "&amp;form_abreise=" +
        form_abreise_mkw +
        '"></iframe>'
    );
    event.preventDefault();
  });
};

// MASKE DATUM OEFFNEN
var mask_open = function () {
  $(".mask_main").click(function () {
    check_mobile();
    var source = $(this).attr("href").substr(1);

    $("div.astrotel_connect").css({ display: "block" });
    $("#astrotel_nav, #astrotel_nav_m").css({ display: "none" });

    //$("body").css({ "position":"absolute", "width":"auto", "height":"auto", "right":"0px", "bottom":"0px", "overflow" : "hidden" });

    $.get(
      "" + sys_url + "/astrotel_connect/anfrage.php?anf_id=" + source + "",
      function (data) {
        $("div#mask_iframe").html(data);
      }
    );
  });
};

// MASKE ANGEBOTE OEFFNEN
var arr_open = function () {
  $(".mask_arr").click(function () {
    check_mobile();
    var source = $(this).attr("href").substr(1);

    $("div.astrotel_connect").css({ display: "block" });
    $("#astrotel_nav, #astrotel_nav_m").css({ display: "none" });

    //$("body").css({ "position":"absolute", "width":"auto", "height":"auto", "right":"0px", "bottom":"0px", "overflow" : "hidden" });

    $.get(
      "" + sys_url + "/astrotel_connect/angebote.php?arr_id=" + source + "",
      function (data) {
        $("div#mask_iframe").html(data);
      }
    );
  });
};

// MASKE PRODUKTE OEFFNEN
var pro_open = function () {
  $(".mask_pro").click(function () {
    check_mobile();
    var source = $(this).attr("href").substr(1);

    $("div.astrotel_connect").css({ display: "block" });
    $("#astrotel_nav, #astrotel_nav_m").css({ display: "none" });

    $("body").css({
      position: "absolute",
      width: "auto",
      height: "auto",
      right: "0px",
      bottom: "0px",
      overflow: "hidden",
    });

    $.get(
      "" + sys_url + "/astrotel_connect/produkte.php?pro_id=" + source + "",
      function (data) {
        $("div#mask_iframe").html(data);
      }
    );
  });
};

// MASKE TISCHRESERVIERUNG OEFFNEN
var tr_open = function () {
  $(".mask_tr").click(function () {
    check_mobile();
    var source = $(this).attr("href").substr(1);

    $("div.astrotel_connect").css({ display: "block" });
    $("#astrotel_nav, #astrotel_nav_m").css({ display: "none" });

    $("body").css({
      position: "absolute",
      width: "auto",
      height: "auto",
      right: "0px",
      bottom: "0px",
      overflow: "hidden",
    });

    $.get(
      "" +
        sys_url +
        "/astrotel_connect/tischreservierung.php?tr_id=" +
        source +
        "",
      function (data) {
        $("div#mask_iframe").html(data);
      }
    );
  });
};

// MASKE KONTAKT OEFFNEN
var kon_open = function () {
  $(".mask_kon").click(function () {
    check_mobile();
    var source = $(this).attr("href").substr(1);

    $("div.astrotel_connect").css({ display: "block" });
    $("#astrotel_nav, #astrotel_nav_m").css({ display: "none" });

    $("body").css({
      position: "absolute",
      width: "auto",
      height: "auto",
      right: "0px",
      bottom: "0px",
      overflow: "hidden",
    });

    $.get(
      "" + sys_url + "/astrotel_connect/kontakt.php?kon_id=" + source + "",
      function (data) {
        $("div#mask_iframe").html(data);
      }
    );
  });
};

var navigation_zeta_aendern = function () {
  $("div#nav").each(function (index, element) {
    $(this)
      .find("a")
      .each(function (index, element) {
        var source = $(this).attr("href");
        if (source == "#reservierung") {
          $(this).addClass("mask_main");
          $(this).attr("id", "a_20190320204100");
        }
      });
  });
};

//////////////////////////////////
// READY
//////////////////////////////////

$(document).ready(function () {
  console.log("jQuery Version: " + jQuery.fn.jquery);

  snav_buttons();
  snav_buttons_m();

  mask_open();
  pro_open();
  arr_open();
  tr_open();
  kon_open();
  //mask_open_form();

  mask_close();
  mclose();

  navigation_zeta_aendern();
});

//////////////////////////////////
// RISIZE
//////////////////////////////////

var switsh_snav = function () {
  var astrotel_connect_on = $("div.astrotel_connect").css("display");
  console.log(astrotel_connect_on);

  if (astrotel_connect_on == "none") {
    var win_inner_width = parseInt($(window).innerWidth());
    var win_inner_height = parseInt($(window).innerHeight());
    if (win_inner_width >= 1024) {
      $("#astrotel_nav").css({ display: "block" });
      $("#astrotel_nav_m").css({ display: "none" });
    } else {
      $("#astrotel_nav").css({ display: "none" });
      $("#astrotel_nav_m").css({ display: "block" });
    }

    if (win_inner_height < 420) {
      $("#astrotel_nav_m").css({ display: "none" });
    }
  }
};

$(window).resize(function () {
  switsh_snav();
});

//////////////////////////////////
// SCROLL
//////////////////////////////////

// BEI MOBILE - AKTIVEN BUTTON ZURUECK SETZEN
var scroll = function () {
  $("div#astrotel_nav > ul")
    .find("li")
    .each(function (index, element) {
      var snav_left = parseInt($(this).css("left"));
      if (snav_left < 0) {
        $(this).css({ left: "0px" });
      }
    });
};

$(window).on("orientationchange", function (event) {
  scroll();
});

$(window).scroll(function () {
  //scroll ();
});
