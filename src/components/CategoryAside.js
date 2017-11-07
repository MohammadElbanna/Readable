import React from "react";
import styles from "./CategoryAside.css";

const CategoryAside = props => {
  return (
    <div className={styles.categoriesAside}>
      <h2 className={styles.header}>Categories</h2>
      <ul className={styles.categoriesList}>
        <li className={styles.categoryItem}>
          <a href="#">React</a>
        </li>
        <li className={`${styles.categoryItem} ${styles.selectedCategory}`}>
          <a href="#">Cryptography and Programming</a>
        </li>
        <li className={styles.categoryItem}>
          <a href="#">Philosophy</a>
        </li>
        <li className={styles.categoryItem}>
          <a href="#">Psychology</a>
        </li>
      </ul>
    </div>
  );
};

export default CategoryAside;

/**
 
li:not(:last-child):after {
    content: " ";
    display: block;
    border: 1px solid #edeef1;
    width: 35%;
    margin: 15px auto 0;
}

li:last-child {
    margin-bottom: 15px;
}

.Post__info___3dyd8 {
    color: #a1a8af;
}

 */

/*

<div class="Main__wrapper___3e3yI App__mainPadding___3C1Jy"><a href="#" class="Button__iconBtn___3Kclq Button__normal___3MhTk"><i class="font-awesome__fa___2otTb font-awesome__fa-plus-circle___1SAMg Button__new___wmAni" aria-hidden="true"></i>&nbsp; Add post</a><main class="Main__main___YX5KL" style="
    display: flex;
"><div class="main" style="
    width: calc(100% - 320px);
    margin-right: 20px;
"><div class="Post__body___2kL7B"><div><div class="Post__postActions___1hqw0"><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-pencil-square___3f_4W Button__edit___29jml" aria-hidden="true"></i>&nbsp; Edit</a><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-eye___3XRn0 Button__view___3y5vh" aria-hidden="true"></i>&nbsp; View</a></div><h3 class="Post__title___35H1n">This is my title</h3><span class="Post__info___3dyd8">Posted by ELBANNA in DOWNLOADS</span><p class="Post__summary___mdhbB">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div><div class="PostVotingControls__container___3El8E"><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-up___12gpU" aria-hidden="true"></i></a><div class="PostVotingControls__voteCount___3CQdX">13</div><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-down___2zqoH" aria-hidden="true"></i></a></div></div><div class="Post__body___2kL7B"><div><div class="Post__postActions___1hqw0"><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-pencil-square___3f_4W Button__edit___29jml" aria-hidden="true"></i>&nbsp; Edit</a><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-eye___3XRn0 Button__view___3y5vh" aria-hidden="true"></i>&nbsp; View</a></div><h3 class="Post__title___35H1n">This is my title</h3><span class="Post__info___3dyd8">Posted by ELBANNA in DOWNLOADS</span><p class="Post__summary___mdhbB">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div><div class="PostVotingControls__container___3El8E"><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-up___12gpU" aria-hidden="true"></i></a><div class="PostVotingControls__voteCount___3CQdX">13</div><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-down___2zqoH" aria-hidden="true"></i></a></div></div><div class="Post__body___2kL7B"><div><div class="Post__postActions___1hqw0"><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-pencil-square___3f_4W Button__edit___29jml" aria-hidden="true"></i>&nbsp; Edit</a><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-eye___3XRn0 Button__view___3y5vh" aria-hidden="true"></i>&nbsp; View</a></div><h3 class="Post__title___35H1n">This is my title</h3><span class="Post__info___3dyd8">Posted by ELBANNA in DOWNLOADS</span><p class="Post__summary___mdhbB">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div><div class="PostVotingControls__container___3El8E"><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-up___12gpU" aria-hidden="true"></i></a><div class="PostVotingControls__voteCount___3CQdX">13</div><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-down___2zqoH" aria-hidden="true"></i></a></div></div></div>
<div class="aside"><aside class="Main__aside___17i2H">
<div class="Post__body___2kL7B" style="
    display: block;
    padding: 0;
">
    <h2 style="
    text-align: center;
    margin: 0;
    border-bottom: 1px solid #edeef1;
    padding: 10px 5px;
    color: #434c5b;
">Categories</h2>
    <ul style="
    list-style: none;
    padding: 0;
    margin: 0;
">
    <li style="">React</li>

    <li>Cryptography and Programming</li>

    <li id="memo">Philosophy</li>
    <li>Psychology</li>

    </ul>

</div>
</aside></div>

</main></div>












<div class="Main__wrapper___3e3yI App__mainPadding___3C1Jy"><a href="#" class="Button__iconBtn___3Kclq Button__normal___3MhTk"><i class="font-awesome__fa___2otTb font-awesome__fa-plus-circle___1SAMg Button__new___wmAni" aria-hidden="true"></i>&nbsp; Add post</a><main class="Main__main___YX5KL" style="
    display: flex;
"><div class="main" style="
    width: calc(100% - 320px);
    margin-right: 20px;
"><div class="Post__body___2kL7B"><div><div class="Post__postActions___1hqw0"><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-pencil-square___3f_4W Button__edit___29jml" aria-hidden="true"></i>&nbsp; Edit</a><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-eye___3XRn0 Button__view___3y5vh" aria-hidden="true"></i>&nbsp; View</a></div><h3 class="Post__title___35H1n">This is my title</h3><span class="Post__info___3dyd8">Posted by ELBANNA in DOWNLOADS</span><p class="Post__summary___mdhbB">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div><div class="PostVotingControls__container___3El8E"><a href="#" style="
    color: black;
"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-up___12gpU" aria-hidden="true"></i></a><div class="PostVotingControls__voteCount___3CQdX">13</div><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-down___2zqoH" aria-hidden="true"></i></a></div></div><div class="Post__body___2kL7B"><div><div class="Post__postActions___1hqw0"><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-pencil-square___3f_4W Button__edit___29jml" aria-hidden="true"></i>&nbsp; Edit</a><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-eye___3XRn0 Button__view___3y5vh" aria-hidden="true"></i>&nbsp; View</a></div><h3 class="Post__title___35H1n">This is my title</h3><span class="Post__info___3dyd8">Posted by ELBANNA in DOWNLOADS</span><p class="Post__summary___mdhbB">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div><div class="PostVotingControls__container___3El8E"><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-up___12gpU" aria-hidden="true"></i></a><div class="PostVotingControls__voteCount___3CQdX">13</div><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-down___2zqoH" aria-hidden="true"></i></a></div></div><div class="Post__body___2kL7B"><div><div class="Post__postActions___1hqw0"><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-pencil-square___3f_4W Button__edit___29jml" aria-hidden="true"></i>&nbsp; Edit</a><a href="#" class="Button__iconBtn___3Kclq Button__small___2sFjH"><i class="font-awesome__fa___2otTb font-awesome__fa-eye___3XRn0 Button__view___3y5vh" aria-hidden="true"></i>&nbsp; View</a></div><h3 class="Post__title___35H1n">This is my title</h3><span class="Post__info___3dyd8">Posted by ELBANNA in DOWNLOADS</span><p class="Post__summary___mdhbB">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div><div class="PostVotingControls__container___3El8E"><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-up___12gpU" aria-hidden="true"></i></a><div class="PostVotingControls__voteCount___3CQdX">13</div><a href="#"><i class="font-awesome__fa___2otTb font-awesome__fa-arrow-down___2zqoH" aria-hidden="true"></i></a></div></div></div>
<div class="aside"><aside class="Main__aside___17i2H">
<div class="Post__body___2kL7B" style="
    display: block;
    padding: 0;
">
    <h2 style="
    text-align: center;
    margin: 0;
    border-bottom: 1px solid #edeef1;
    padding: 10px 5px;
    color: #434c5b;
">Categories</h2>
    <ul style="
    list-style: none;
    padding: 0;
    margin: 0;
">
    <li style="">React</li>

    <li>Cryptography and Programming</li>

    <li id="memo">Philosophy</li>
    <li>Psychology</li>

    </ul>

</div>
</aside></div>

</main></div>
 */
