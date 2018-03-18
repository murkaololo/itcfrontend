function loadJson() {
    const ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://www.reddit.com/top.json');
    ourRequest.onload = function() {
        const ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
        const posts = ourData.data.children;
        console.log(posts);
    };
    ourRequest.send(); 
    const card     = document.createElement('div');
    const image    = document.createElement('img');
    const title    = document.createElement('a');
    const comments = document.createElement('a');
    const preview  = document.createElement('div');
    const info     = document.createElement('p');
    
    title.innerHTML     = posts.data.title; //не работает сука. 
    image.innerHTML     = posts.data.url;
    comments.innerHTML  = posts.data.permalink;
}

loadJson();