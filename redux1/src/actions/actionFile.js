export function movieList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Avengers'},
            {id:2,name:'Jab we Met'},
            {id:3,name:'Mad Max'}
        ]
    }
}