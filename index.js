const uploader = document.querySelector('#uploader');
const playPauseBTN = document.querySelector('#play-pause');
const resultParagraph = document.querySelector('#result')

async function testRequest(e) {
    const formData = new FormData();
    formData.append('image', uploader.files[0]);
    console.log(uploader.files[0]);
    resultParagraph.innerHTML ='Loading...Please wait...';

    const key = 'https://pic-n-read-server.herokuapp.com/requestkey';
    // const key = 'http://localhost:3000/requestkey'; // Used for development
    const endPoint = 'https://api.api-ninjas.com/v1/imagetotext';

    try {
        const unlock = await fetch(key, { method: 'GET' });
        const apiKey = await unlock.json();

        const options = {
            method: 'POST',
            headers: { 'X-Api-Key': apiKey.key },
            body: formData
        };

        const sentImg = await fetch(endPoint, options);
        const response = await sentImg.json();
        const txtExtract = response.map((word) => {
            return word.text
        }).join(' ');

        console.log(txtExtract);

        const utterance = new SpeechSynthesisUtterance(txtExtract);
        speechSynthesis.speak(utterance);

        resultParagraph.innerHTML = txtExtract;
       
    }
    catch (e) {
        console.log(e);

        const errorMSG = 'There was an error! Try again with a valid PNG or JPG file';

        const utterance = new SpeechSynthesisUtterance(errorMSG);
        speechSynthesis.speak(utterance);
       
        resultParagraph.innerHTML = errorMSG;
      
    };

};

playPauseBTN.addEventListener('click', testRequest);