'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0181465084b6c2b9264f86d6471c7b73",
"assets/assets/fonts/Heebo-Bold.ttf": "ede6fdf4ecf8c32c21701823004343f4",
"assets/assets/fonts/Heebo-Medium.ttf": "6c57263dbdee325394e471a12499e64c",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/images/1.jpg": "cb88fb01a601f18484f9bf7844c1434c",
"assets/assets/images/2.jpg": "29c23ad1fa167fcdc1db01220d3e3fe9",
"assets/assets/images/3.jpg": "61d29bb1fc599262ba5af14c243a8a29",
"assets/assets/images/4.jpg": "94c9a5cc9349d9b7fd0c31492fdd6c1a",
"assets/assets/images/factory.jpg": "4d6e753dc1018e7ea955226f4d59985f",
"assets/assets/images/factory2.jpg": "ac8d01be83e4b00e50166155c52c0592",
"assets/assets/images/factory3.jpg": "3e25958f617a638742877cf5efb4ce01",
"assets/assets/images/factory4.png": "2d3e44e796b88894f2c377e2a0efaec8",
"assets/assets/images/factory5.jpg": "709cd0a7774c299c650b638ae7f2132d",
"assets/assets/images/logo.jpg": "b7831930db7ad03a8dd404d8015a7393",
"assets/assets/images/menu.jpg": "b0ab7eeb1663c0f67b32716bda8e203a",
"assets/assets/images/profile-bg.jpg": "85b35d367ad98bc305c5101ed97a074a",
"assets/FontManifest.json": "ee9b4074b00abbfe5f761f4635be0e79",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/MesDashboardIconAPQ.ttf": "c2147f96cb2ce31a577f05c015f9eba1",
"assets/fonts/MesDBFactoryStatus.ttf": "c7182321c39a255c38d7222430eed645",
"assets/fonts/MyFlutterApp.ttf": "469e04ceee0377157e019fb8e867bc8e",
"assets/fonts/supermarket.ttf": "d09ce84743ec49eb45311a1717a49f8c",
"assets/fonts/WaterCup.ttf": "34d912b3699b196a17ea194996d454a9",
"assets/images/airplane.png": "4de8ca33d5532527863e21b892ef4f9b",
"assets/images/athletics.png": "606a492a01697c86ff61193af97f1c86",
"assets/images/axis_feature.png": "7d383ec825835cdc2442437948ec0280",
"assets/images/axis_types.png": "42260cbdd03a50f330aa2aab041c5cda",
"assets/images/axis_types.svg": "90032f895cd4956c042841aa3982045a",
"assets/images/back.png": "67b2e68c59b6c01c22939944ba697be3",
"assets/images/ball.png": "d29cb732af2a432c69d58e415ae2c5b4",
"assets/images/barcode.png": "770b27de2695fdf9f56f6ca88835a479",
"assets/images/bike.png": "815d5fe99c5f263c698323586d48892d",
"assets/images/bike_legend.png": "b323d01ce28cd347d5fb8bfbcad61ec8",
"assets/images/book.png": "f4ca58847383a3378b55ef121220ec4b",
"assets/images/calendar.png": "e7da9c17d1ee344423042099dfc8c827",
"assets/images/car.png": "12c754611a32632b77c692412e33e8c3",
"assets/images/cartesian.svg": "c8a5fabe3b96be611af249402b4bcdbb",
"assets/images/cartesian_types.png": "e5d22ace312b92e03996b5caa73f7164",
"assets/images/car_legend.png": "c053e460ca6466b76bf2810ae081203e",
"assets/images/circle_gauge.png": "56444ed86c91672c6c63822d24f95b33",
"assets/images/circle_gauge.svg": "94093a90571c91a3aba11f42875bbb73",
"assets/images/circle_series.png": "bbff3b81fdfb74b410f0bc686d76268a",
"assets/images/circle_series.svg": "7b37ce849d8fb5748eceffd2981103da",
"assets/images/close.png": "c7e2a43786925bb1ba25d66f575e4e38",
"assets/images/code.png": "1b9c82930460d4a666f2db9feb49d6af",
"assets/images/code.svg": "3744ac80f74ef6b71220faa0f82bcd0b",
"assets/images/cycle_legend.png": "ce3bc98993ed3f1fa1cb9cf9e8f5549a",
"assets/images/dark_theme_gauge.png": "cb350bec49d622f92cb77c680486e328",
"assets/images/dashline.png": "07855a68e7fb8ec5f07c0b025b75d22b",
"assets/images/Date_range_picker.png": "3f09aecac805fd6f66aec6b6d9e85b00",
"assets/images/documentation.png": "66dd8986f40c729bae5c79c3377144dd",
"assets/images/external.png": "d49f2912e83502c98e20b5dd9da7e7bc",
"assets/images/fullscreen.png": "e3c4c422d6b10eba388749fe454cb11f",
"assets/images/funnel.png": "5d3d0b84d0446a2f71bf3c75ba41aee4",
"assets/images/funnel.svg": "02ff7fd8da7b8063b9b69a8a0ba9ed3f",
"assets/images/golfball.png": "718f272789a1d8179d1474f0e0789c5a",
"assets/images/golfball2.png": "dcc3e355c239fadf69d861fac9fad0ec",
"assets/images/golfball3.png": "6bdef200521926e4cc86e6fa80d6d588",
"assets/images/home.png": "582e4349238d6518d43f4b29f469bde6",
"assets/images/image_nav_banner.png": "03f48db27424d51b033c2d59a092fff0",
"assets/images/image_nav_banner_darktheme.png": "ce6aa4634f35ce5db96dead06c958b6b",
"assets/images/img_JS.png": "68beac803bd5a87ee1b502afc3809a79",
"assets/images/img_xamarin.png": "4ca17d98df6db44c339acc6681432876",
"assets/images/img_xamarin_ui.png": "d7753f3efb7863182d9576bffd916201",
"assets/images/info.png": "d153c08a4b1014edc5d81dd284b32942",
"assets/images/information.svg": "6cc644c9b72d10015accf1c19c72104c",
"assets/images/legend.png": "c59c099c473fc27089831cfbd68f34a3",
"assets/images/legend.svg": "56b49465f632bab4d58960ec8ea5a339",
"assets/images/live_update.png": "9512f3ca2a55996fe87746663dd535fb",
"assets/images/live_update.svg": "d514382eeb515672706d3023fae6d4ef",
"assets/images/man1.png": "14335fe7cab02cda6863f9cd395d5310",
"assets/images/man2.png": "d4686f19631e1512c7a6c86a0f28d5f8",
"assets/images/man3.png": "dfc639c8d4e0cb8186606e9424f25f65",
"assets/images/menu.png": "95e3c27f6bb0e06c2debaeb0616ee44e",
"assets/images/open_arrow.png": "558d93ad18859d8ef01dc956cc67e4a4",
"assets/images/other_features.png": "488324f6b844690f82f84aeb6ea49605",
"assets/images/other_features.svg": "d79ac9b41710ba3de53fd19a7a1b3c15",
"assets/images/pdf/certificate.jpg": "a615006599cc6e253111f9d8cb250eb5",
"assets/images/pdf/Pdf_Succinctly_img_1.jpg": "c1fcd3c589ea855adc1fc8c4ae06706b",
"assets/images/pdf/Pdf_Succinctly_img_2.jpg": "988cc8d0d6b41729dabf504b9ded2deb",
"assets/images/pdf/Pdf_Succinctly_img_3.jpg": "0adce59365166e26012c6e9c704c41a5",
"assets/images/pdf/Pdf_Succinctly_img_4.jpg": "2dc8691a2c1b2b9ec3e16e04903e131c",
"assets/images/pdf/Pdf_Succinctly_img_5.jpg": "edcd911d0a250290a244a2f810e72159",
"assets/images/pdf.png": "26e7f142089d6e1598fa2ef3feb2bae9",
"assets/images/person.png": "c7ed75c0fc451352ade741e05ad72bc8",
"assets/images/personal_loan.png": "510d52fff7f5d8695805251e9fa2cca6",
"assets/images/product.png": "ff5e97be025410ea087ea42ba51ccacd",
"assets/images/pyramid.png": "d2a194468a6303550e97b65cc2feaa26",
"assets/images/pyramid.svg": "4cb2b96086fcc614e25505648ef300b0",
"assets/images/range_selector.png": "8808b2b933871fa5c39de6e62613f496",
"assets/images/range_slider.png": "883635b167755502bfba7893b12c8bdd",
"assets/images/settings.png": "2e19b744463bba165f82f292ebd6d6f7",
"assets/images/settings.svg": "ced485ea0f837e80aee912a37468995e",
"assets/images/shotput.png": "60ced46648353b7dad9377da6b525288",
"assets/images/sun.png": "526fb20eca521243a35c378de356c629",
"assets/images/syncfusion.png": "9636837ed6d3558c53ca89d2f8370778",
"assets/images/syncfusion_dark.png": "f675093578cced80eab33cad19cbf590",
"assets/images/truck.png": "35ca7393daf4abf9591ddf2267e61f5e",
"assets/images/truck_legend.png": "1394a8aad840267c7307ffe28b16871f",
"assets/images/user_interaction.png": "64bb5e099afb109be06d32932cc12e44",
"assets/images/user_interaction.svg": "f3ff97bef907f7f67627175810cdbcbc",
"assets/images/whatsnew.png": "5f12c9d22f2c679061ef5d7b4e393b68",
"assets/lib/sample_details.json": "a179c62961d1fd5f16fc39492aa872c4",
"assets/LICENSE": "e5d795190cd6fce552272d870edc0f15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"BingSiteAuth.xml": "6aefd51e4a9463d55ee8d73a5c028e20",
"favicon.png": "0ff0e0cdd689c586ae5c1aa7ac7c9dcb",
"googlec03dd4bc003151bc.html": "d8ee63ac530b376c19042286c0935849",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a808f277377415c65030f93c05880dc8",
"/": "a808f277377415c65030f93c05880dc8",
"main.dart.js": "1b1c1d1fe9a57b47b5de5cc785862315",
"manifest.json": "67478f512fe8e6580625403521d9ae9d",
"naver335c61fba11bdb4a502b86bfe2e8db08.html": "85f86c5a9f9bac1ffe7952c2c28fc294",
"robots.txt": "08b240c509cc01a214805b7d6009c9cf",
"sitemap.xml": "919fb0f49d218269393252105be9210a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
