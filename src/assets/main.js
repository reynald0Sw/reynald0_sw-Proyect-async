const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCDCq_4XxhMHIAG850pHcM9A&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5fcd83950msha8847a7d5d143f0p1cf618jsn24c23f2c1f04',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//automaticamneta carga la funcion
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
             <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>  
             
        `).slice(0, 4).join('')}            
        `;
        content.innerHTML = view;
        //cantidad de videos mostrados en lastvideos (slice(0,4))
        
    }catch {
        console.log("error");            
    }

})();