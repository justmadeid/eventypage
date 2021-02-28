<template>
        <section class="floatbutton">

<!-- <div class="btn-share fixed-top">
    
    <a href="https://www.facebook.com/sharer/sharer.php?u=www.dribbble.com/raunaqpatel" target="_blank">
        <div>
          <p>Share</p>
          <img src="https://www.leapoffaith.co.uk/theme/Live/img/social_icons/facebook.png?1445251338">
          
        </div>
    </a>
  </div> -->
        </section>
</template>

<script>
export default {
  name: "FloatButton"
};
</script>

<style scoped>
.btn-share{
  height: 100%;
  position: relative;
  background:#f2f2f2;
}
h2{
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin:0px;
  padding-top:20px;
  color:#212121;
}

h3{
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin:0px;
  padding-top:20px;
  color:#727272;
  font-weight:400;
  font-style:italic;
}

div.btn-share > a{
  margin: 0;
  position: absolute;
  top: calc(50% - 17px);
  left:-85px;
  -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}

div.btn-share > a:hover{
  -webkit-transform: translate(85px,0);
    -moz-transform: translate(85px,0);
    -o-transform: translate(85px,0);
    -ms-transform: translate(85px,0);
    transform: translate(85px,0);
}


a  > div{
  width:150px;
  height:35px;
  text-align:center;
  display:inline;
}
a  > div > img{
  width:35px;
  background-color:#f2f2f2;
  float:right;
  display:inline-table;
}

a  > div > p{
  height:35px;
  width:85px;
  vertical-align:middle;
  display:table-cell;
  margin:0px;
  background-color:#212121;
  color:#f2f2f2;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: 'Roboto', sans-serif;
  font-size:14px;
}
a,
a:focus,
a:hover,
a:active,
a:visited{
  text-decoration:none;
  color:#f2f2f2;
}
</style>