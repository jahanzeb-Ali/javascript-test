import {auth,app} from "./firebase.mjs"
import { onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore,collection,addDoc,getDocs,doc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
const db = getFirestore(app);
let logout = document.getElementById("logout");
logout.addEventListener("click", function(){
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          window.location.href="dashboard.html"
          // ...
        } else {
          window.location.href="index.html"
          console.log('"Out')
        }
      }); 
})


const addBlogForm =document.querySelector(".add-blog-form");
const discription = document.getElementById("discription");
const showBlog = document.getElementById("blogs")
addBlogForm.addEventListener("submit", async function(e){
    e.preventDefault()
    try {
        const obj = {
            user_name: addBlogForm.username.value,
            discription: discription.value
        }
        const docRef = await addDoc(collection(db, "blog-data"), obj);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      location.reload()
})


const querySnapshot = await getDocs(collection(db, "blog-data"));
querySnapshot.forEach((doc) => {
    const dataInsnap = doc.data()
    showBlog.innerHTML +=`<div class="card" style=" margin-top:20px; color:black;">
  <div class="card-body">
    <h5 class="card-title">${dataInsnap.user_name}</h5>
    
    <p class="card-text">${dataInsnap.discription}</p>
    <button type="button" class="btn btn-danger delete-btn" id='${doc.id}'>Delete</button>
  </div>
</div>`
console.log(document.getElementById(`${doc.id}`));
});
const deleleBtn = document.querySelector(".delete-btn");
deleleBtn.addEventListener("click",async function(){
    await deleteDoc(doc(db, "blog-data",id))
})

