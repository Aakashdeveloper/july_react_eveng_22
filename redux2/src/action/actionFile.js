const base_url = "http://localhost:7800";

export function latestNews(){
    const output = fetch(`${base_url}/articles?_end=3`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'LATEST_NEWS',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${base_url}/articles?_start=3&_end=10`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'ARTICLE_NEWS',
        payload:output
    }
}

export function galleriesNews(){
    const output = fetch(`${base_url}/galleries?_limit=2`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GALLERY_NEWS',
        payload:output
    }
}