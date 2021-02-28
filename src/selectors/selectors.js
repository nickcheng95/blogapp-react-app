import React from 'react';

export default (posts=[],filters={}) => {
    const {text='',sortBy='up'} = filters
    if(sortBy==='up'){
        return posts.filter((val)=>{
            return val.postTitle.includes(text)
        }).sort((a,b)=>{
            const nameA = a.postTitle.toLowerCase()
            const nameB = b.postTitle.toLowerCase()
            if(nameA<nameB){return -1};
            if(nameA>nameB){return 1};
            return 0;
        })
    }else if(sortBy==='down'){
        return posts.filter((val)=>{
            return val.postTitle.includes(text)
        }).sort((a,b)=>{
            const nameA = a.postTitle.toLowerCase()
            const nameB = b.postTitle.toLowerCase()
            if(nameA<nameB){return -1};
            if(nameA>nameB){return 1};
            return 0;
        }).reverse()
    }
    
}
