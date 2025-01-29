const url = 'https://any-anime.p.rapidapi.com/v1/anime/png/1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b02162cddcmshd12b7fd23f7bad1p1e5a3ajsnde99d90dc0b3',
		'x-rapidapi-host': 'any-anime.p.rapidapi.com'
	}
};
const PicContainer = document.getElementById("PicContainer");
async function fetchPic() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result);
        const randPic = document.createElement("img");
        randPic.src = data.images;
        randPic.class = "PicBox"
        console.log(randPic);
        PicContainer.prepend(randPic);
        console.log("ALL GUD");

    } catch (error) {
        console.error(error);
    }
}

