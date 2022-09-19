export default function(state={},action){
    switch(action.type) {
        case 'LATEST_NEWS':
            return {...state, latestNews:action.payload}
        case 'ARTICLE_NEWS':
            return {...state, articleNews:action.payload}
        default:
            return state
    }
}