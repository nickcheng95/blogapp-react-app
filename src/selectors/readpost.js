import database from '../firebase/firebase'

export default (uid,id) => {
    
    return database.ref(`users/${uid}/posts/${id}`)
    .once('value')

}
