<template>
  <div>
    <div class="post-main">
      <header class="post">
        <div class="overlay">
          <div class="top">
            <p class="breadcrumbs">
              <RouterLink to="/">Home</RouterLink> > <RouterLink :to="'/' + route.user">{{route.user}}</RouterLink> > {{post.title}}
            </p>
            <div id="hide-title-card" class="hover-fx">
              <a href="#" class="tiny"><VisibilityIcon size="40"/> Hide title card</a>
            </div>
          </div>
          <div class="bottom">
            <h1>{{post.title}}</h1>
            <!-- <p>
              {{route.user}}
              {{route.date}}
            </p> -->
            <p>
              {{pubDate}}
            </p>
          </div>
        </div>

        <!-- Annotations header -->
        <div class="annot-wrapper">
          <div class="blur-overlay"></div>
          <img :src="post.images[0].url" alt="">
        </div>
      </header>
    </div>
  </div>
</template>

<script setup>
import VisibilityIcon from 'vue-material-design-icons/EyeOutline.vue';
  
</script>

<script>
export default {
  data () {
    return {
      route: {
        user: null,
        date: null,
      },

      // this is temporary information
      post: {
        user: "Anonymous",   // Partition
        //date: 1234567890,   // Sort
        title: "Untitled",
        description: "lorem impsum dolar sin", 
        likes: 10,
        //post_discussions: requestJSON.post_discussions, // array of discussions of the post 
        images: [
          {
            url: "https://i.redd.it/piqmdrogs4t81.png",
            caption: "Put the finishing touches on my nature inspired setup",
            annotations: [
              {
                x: 300,
                y: 350,
                item: "Ikea Leaves"
              }
            ]
          }
        ]
      }
    }
  },
  computed: {
    // a computed getter
    pubDate() {
      var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      
      d.setUTCSeconds(this.route.date);
      
      return d.toLocaleDateString("en-US", options);
    },
  },

  created() {
    this.route.user = this.$route.params.user;
    this.route.date = this.$route.params.date;

    this.$http
      .get(
        /* TODO: Fix lambda function, 
          * if goes to /posts --> fine
          * if goes to /posts/ --> error
        */
        `${import.meta.env.VITE_API_URL}/posts/${this.user}/${this.date}`
      )
      .then((response) => {
        this.post = response.data
        console.log(response)
      })
      .catch((error) => {
        console.log('Unable to get published projects from setUpon api: error...😭 ' + error);
      });
  },

  mounted() {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    let overlay = document.querySelector("header .overlay")
    let overlay_blur = document.querySelector("header .blur-overlay")

    function doSomething(scrollPos) {
      if (scrollPos < 50) {
        overlay.style.opacity = 1;
        overlay_blur.style.opacity = 1;
        
      } else {
        /* overlay.style.display = 'flex'
        overlay_blur.style.display = 'flex' */
        overlay.style.opacity = 0;
        overlay_blur.style.opacity = 0;
        /* setTimeout(()=> {
          overlay.style.display = 'none'
          overlay_blur.style.display = 'none'
        }, 250) */
      }
    }

    document.addEventListener('scroll', function(e) {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });

  },

  beforeCreate: function() {
    document.body.className = 'post';
  }
}
</script>

<style lang="scss" scoped>
  .material-design-icon {
    display: flex;
  }
  .breadcrumbs {
    z-index: 1;
  }
  .post-main {
    margin-left: 1em;
    min-height: 120vh;
  }

  .post {
    position: relative;
  }

  #hide-title-card {
    a {
      display: flex;
      font-weight: bold;
      text-decoration: none;
      gap: 0.6em;
      color: #fff;
      //align-items: center;
    }
  }

  .annot-wrapper {
    width: 100%;

    img {
      min-width: 100%;
    }
  }

  header.post {
    background: #D7CCC8;
    display: flex;

    .top {
      display: flex;
      justify-content: space-between;
    }

    .overlay {
      user-select: none;
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 600;
      color: #fff;
      position: absolute;

      > * {
        padding: 2em 2em 1em;
      }
    }

    .blur-overlay {
      -webkit-mask-box-image: linear-gradient(213deg, transparent 87%, black, black);
      height: 1000%;
      backdrop-filter: blur(10px) contrast(0.5);
      position: absolute;
      z-index: 4;
      bottom: 0;
      left: 0;
      width: 100%;
      user-select: none;
      opacity: 0;
    }
  }
</style>