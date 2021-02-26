import database from '../firebase/firebase'
import uuid from 'uuid'

export const addPost = ({postTitle='',postContent=''}={})=>({
    type: 'ADD_POST',
    post:{postTitle,postContent,id:uuid()}
})

export const editPost = (id,updates)=>({
    type: 'EDIT_POST',
    id,
    updates
})

export const removePost = ({id})=>({
    type: 'REMOVE_POST',
    id
})