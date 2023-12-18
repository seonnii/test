// p_click을 클릭했을 때, t_clic,r_click의 border-top값은 사라지고, p_click의 border-top값이 나와야한다. p_click을 클릭했을 때, post_list가 활성화되고, tag_list, reels_list는 사라져야한다. (조건) 

let Pclick = document.querySelector(".p_click")
let Tclick = document.querySelector(".t_click")
let Rclick = document.querySelector(".r_click")
let Postlist = document.querySelector(".post_list")
let Reelslist = document.querySelector(".reels_list")
let Taglist = document.querySelector(".tag_list")

function PostClick(){
    Pclick.style.borderTop="3px solid #aaa";
    Rclick.style.borderTop="0";
    Tclick.style.borderTop="0";
    Postlist.style.display="flex";
    Reelslist.style.display="none";
    Taglist.style.display="none";
}
Pclick.addEventListener("click", PostClick);

function ReelsClick(){
    Pclick.style.borderTop="0";
    Rclick.style.borderTop="3px solid #aaa";
    Tclick.style.borderTop="0";
    Postlist.style.display="none";
    Reelslist.style.display="flex";
    Taglist.style.display="none";
}
Rclick.addEventListener("click",ReelsClick);

function TagClick(){
    Pclick.style.borderTop="0";
    Rclick.style.borderTop="0";
    Tclick.style.borderTop="3px solid #aaa";
    Postlist.style.display="none";
    Reelslist.style.display="none";
    Taglist.style.display="flex";
}
Tclick.addEventListener("click",TagClick);

for(let i=1; i<=9; i++){
    let PostList=document.querySelector(".post_list");
    let Post = document.createElement("div");
    Post.className="post_list_wrap";
   
    Post.innerHTML = `
        <img src="./img/explore_img${i}.jpg" alt="x">
            <ul class="hover">
                <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
                <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
            </ul>
    `
   PostList.appendChild(Post);
}

for(let i=1; i<=9; i++){
    let ReelsList=document.querySelector(".reels_list");
    let Reels = document.createElement("div");
    Reels.className="reels_list_wrap" ;
    // class태그(html)가 같아야 값이 맞게 나옴
    Reels.innerHTML = `
        <img src="./img/explore_img${i}.jpg" alt="x">
            <ul class="hover">
                <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
                <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
            </ul>
    `
   ReelsList.appendChild(Reels);
}

for(let i=1; i<=9; i++){
    let TagList=document.querySelector(".tag_list");
    let Tag = document.createElement("div");
    Tag.className="reels_list_wrap" ;
    Tag.innerHTML = `
        <img src="./img/explore_img${i}.jpg" alt="x">
            <ul class="hover">
                <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
                <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
            </ul>
    `;
    TagList.appendChild(Tag);
}








