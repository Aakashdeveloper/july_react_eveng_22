import React,{Component} from 'react';
import {connect} from 'react-redux';
import { latestNews,articleNews,galleriesNews} from '../action/actionFile';
import LatestNews from '../component/Home/LatestDisplay';
import ArticleNews from '../component/Home/ArticleDisplay';
import GalleryNews from '../component/Home/GalleryDisplay';

class Home extends Component {
    // call action 
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleriesNews())
    }

    render(){
        return(
            <div>
                <LatestNews ldata={this.props.datalist.latestNews}/>
                <ArticleNews adata={this.props.datalist.articleNews}/>
                <GalleryNews gdata={this.props.galList.galleryNews}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        datalist:state.article,
        galList:state.gallery
    }
}

export default connect(mapStateToProps)(Home)