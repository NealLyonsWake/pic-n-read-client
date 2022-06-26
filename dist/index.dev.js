"use strict";

var uploader = document.querySelector('#uploader');
var playPauseBTN = document.querySelector('#play-pause');
var resultParagraph = document.querySelector('#result');

function testRequest(e) {
  var formData, key, endPoint, unlock, apiKey, options, sentImg, response, txtExtract, utterance, errorMSG, _utterance;

  return regeneratorRuntime.async(function testRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          formData = new FormData();
          formData.append('image', uploader.files[0]);
          console.log(uploader.files[0]);
          resultParagraph.innerHTML = 'Loading...Please wait...';
          key = 'https://pic-n-read-server.herokuapp.com/requestkey'; // const key = 'http://localhost:3000/requestkey'; // Used for development

          endPoint = 'https://api.api-ninjas.com/v1/imagetotext';
          _context.prev = 6;
          _context.next = 9;
          return regeneratorRuntime.awrap(fetch(key, {
            method: 'GET'
          }));

        case 9:
          unlock = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(unlock.json());

        case 12:
          apiKey = _context.sent;
          options = {
            method: 'POST',
            headers: {
              'X-Api-Key': apiKey.key
            },
            body: formData
          };
          _context.next = 16;
          return regeneratorRuntime.awrap(fetch(endPoint, options));

        case 16:
          sentImg = _context.sent;
          _context.next = 19;
          return regeneratorRuntime.awrap(sentImg.json());

        case 19:
          response = _context.sent;
          txtExtract = response.map(function (word) {
            return word.text;
          }).join(' ');
          console.log(txtExtract);
          utterance = new SpeechSynthesisUtterance(txtExtract);
          speechSynthesis.speak(utterance);
          resultParagraph.innerHTML = txtExtract;
          _context.next = 34;
          break;

        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](6);
          console.log(_context.t0);
          errorMSG = 'There was an error! Try again with a valid PNG or JPG file';
          _utterance = new SpeechSynthesisUtterance(errorMSG);
          speechSynthesis.speak(_utterance);
          resultParagraph.innerHTML = errorMSG;

        case 34:
          ;

        case 35:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 27]]);
}

;
playPauseBTN.addEventListener('click', testRequest);