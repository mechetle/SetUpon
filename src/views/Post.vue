<template>
  <div>
    <div class="post-main">
      <header class="post">
        <div class="overlay">
          <div class="top">
            <p class="breadcrumbs">
              <RouterLink to="/">Home</RouterLink> > <RouterLink :to="'/' + route.user">{{route.user}}</RouterLink> > {{post_temp.title}}
            </p>
            <div id="hide-title-card" class="hover-fx">
              <a href="#" class="tiny"><VisibilityIcon size="40"/> Hide title card</a>
            </div>
          </div>
          <div class="bottom">
            <h1>{{post_temp.title}}</h1>
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
        <div 
          v-for="(annotation, index) in post_temp.images[0].annotations"
          class="pointer"
          :style="p_cords[0][index]"
          @click="openSidebar('annotation', annotation)"
        >
        </div>

        <div class="annot-wrapper">
          <div class="blur-overlay"></div>

          <template v-if="state == 'view'">
            <img :src="post_temp.images[0].url" alt="">
          </template>

          <template v-else>
            <div class="img-upload-zone">
              <h3>Upload image to header</h3>
            </div>
          </template>
          
        </div>
      </header>

      <section class="post_desc">
        <Container>
          <blockquote>
            "{{post_temp.description}}"
          </blockquote>
        </Container>
      </section>

      <article>
        <Container>
          <GridX class="grid-margin-x">
            <template v-for="(images, i) in post_temp.images.slice(1)">
              <Cell class="large-9">
                <div class="image-wrapper">
                  <!-- Annotations .image-wrapper  -->
                  <div 
                    v-for="(annotation, j) in images.annotations"
                    class="pointer"
                    :style="p_cords[i + 1][j]"
                    @click="openSidebar('annotation', annotation)"
                  >
                  </div>

                  <div class="annot-wrapper">
                    <div class="blur-overlay"></div>

                    <template v-if="state == 'view'">
                      <img :src="images.url" alt="">
                    </template>

                    <template v-else>
                      <h5>Upload image</h5>
                    </template>
                  </div>
                </div>
              </Cell>
              <Cell class="large-3">
                <p class="caption">
                  {{images.caption}}
                </p>
                <!-- <p>
                  Index: {{i}}, 
                  Index_corrected: {{i + 1}}, 
                  {{p_cords[i + 1][0]}}
                </p> -->
              </Cell>
            </template>
          </GridX>
        </Container>
      </article>

      <Transition name="sidebar">
        <Sidebar v-if="sidebar.opened" :title="sidebar.title" :data="sidebar.data"></Sidebar>
      </Transition>
      <Transition name="scale_in">
        <div class="action-button flat" v-if="sidebar.opened" @click="sidebar.opened = false">
          <CloseIcon size="45"></CloseIcon>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import VisibilityIcon from 'vue-material-design-icons/EyeOutline.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import Sidebar from '@/components/layout/sidebar.vue';
import Container from '@/components/layout/grid/container.vue';
import GridX from "@/components/layout/grid/grid-x.vue";
import Cell from '@/components/layout/grid/cell.vue';
  
</script>

<script>
export default {
  data () {
    return {
      route: {
        user: null,
        date: null,
      },

      state: 'view',

      sidebar: {
        opened: false,
        title: "null",
        data: {
          user: 'Jikens Jikens',
          personal_comments: "This chair is magnificelty comfortable, i'm 76 years old and it makes me feel like im 6 again, why are you reading this? 😅"
        },
      },
      
      post: null,

      rendered_img_dims: [],
      natural_img_dims: [],

      // this is temporary information -- remove later
      post_temp: {
        user: "Anonymous",   // Partition
        //date: 1234567890,   // Sort
        title: "Untitled",
        description: "Putting the finishing touches on my nature inspired setup.", 
        likes: 10,
        //post_discussions: requestJSON.post_discussions, // array of discussions of the post 
        images: [
          {
            url: "https://i.redd.it/piqmdrogs4t81.png",
            caption: "Put the finishing touches on my nature inspired setup",
            annotations: [
              {
                x: 400,
                y: 150,
                item: "Ikea Leaves",
                personal_comments: "these are my favourite leaves from ikea and they look so real too!"
              },
              {
                x: 570,
                y: 450,
                item: "Sceptre 24-Inch Curved 165Hz Gaming Monitor",
                personal_comments: "This is the best gaming monitor I have used so far"
              }
              
            ]
          },
          {
            url: "https://i.redd.it/if4evdmyfee61.png",
            caption: "This is another test for the index",
            annotations: [
              {
                x: 450,
                y: 250,
                item: "Ikea HEKTOGRAM",
                personal_comments: "these are my favourite leaves from ikea and they look so real too!"
              },
              {
                x: 1100,
                y: 350,
                item: "My pet llama",
                personal_comments: "i forgor where i got them"
              }
              
            ]
          },
          {
            url: "https://i.redd.it/piqmdrogs4t81.png",
            caption: "Oh heres my set up again, i'm just testing for scalability",
            annotations: [
              {
                x: 400,
                y: 150,
                item: "Ikea Leaves",
                personal_comments: "these are my favourite leaves from ikea and they look so real too!"
              },
              {
                x: 570,
                y: 450,
                item: "Sceptre 24-Inch Curved 165Hz Gaming Monitor",
                personal_comments: "This is the best gaming monitor I have used so far"
              }
              
            ]
          },
        ]
      },

      posting_post: {
        user: null,   // Partition
        date: null,   // Sort
        title: null,
        description: null, 
        likes: 0,
        images: [],
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

    multiplier() {
      let multiplier = Array(this.post_temp.images.length).fill(1);

      try {
        for (let i = 0; i < this.post_temp.images.length; i++) {
          multiplier[i] = this.rendered_img_dims[i].width / this.natural_img_dims[i].width;
        }
      } catch (e) {
        console.log("rendered and natural _img_dims hasn't been loaded in yet on first load", e)
      }

      return multiplier;
    },

    p_cords() {
      //return `transform: translate(${this.post.images[0].annotations[0]},${this.post.images[0].annotations[0].y})`

      /* This returns an array, 
       * lol this might be too intensive (O(n^2)) but i couldn't be bothered with anything else atm hahahaha, 
       */
      let img_arr = [];
      this.post_temp.images.forEach((image, i) => {
        let img_arr_annot = []
        image.annotations.forEach(annotation => {
          console.log("The index:", i)
          img_arr_annot.push(`transform: translate(${annotation.x * this.multiplier[i]}px,${annotation.y  * this.multiplier[i]}px)`)
        });
        img_arr.push(img_arr_annot)
      });
      
      return img_arr
    }
  },

  created() {
    this.route.user = this.$route.params.user;
    this.route.date = this.$route.params.date;

    if (this.$route.name == "create_post") {
      document.body.className = 'post create'
      this.state = 'create'
    } else {
      this.state = 'view'
    }

    this.$http
      .get(
        /* TODO: Fix lambda function, 
          * if goes to /posts --> fine
          * if goes to /posts/ --> error
        */
        `${import.meta.env.VITE_API_URL}/posts/${this.route.user}/${this.route.date}`
      )
      .then((response) => {
        this.post = response.data.Item
        console.log(response.data)
      })
      .catch((error) => {
        console.log('Unable to get published posts from setUpon api: error...😭 ' + error);
      });
  },

  mounted() {
    setTimeout(() => {
      this.scrollToTop() 
    }, 500)

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

    // This will store an array of dom elements of image that are for annotation
    let imagesForAnnotation;

    // initiate the dims of every image in the the main: (won't happen during create mode)
    imagesForAnnotation = document.querySelectorAll(".annot-wrapper img");
    imagesForAnnotation.forEach(el => {
      el.onload = () => {
        setTimeout(() => {
          this.push_rendered_img_dims(el)  
        }, 1000)
        this.push_natural_img_dims(el);
      }
    });
    
    // This is to detect window resize and update the "rendered images' dimensions in dom"
    let movePointers;
    window.addEventListener('resize', (event) => {
      clearTimeout(movePointers);
      movePointers = setTimeout(() => {
        console.log("resizing changing this width:", this.rendered_img_dims[0].width);
        // do stuff here
        for (let i = 0; i < imagesForAnnotation.length; i++) {
          this.rendered_img_dims[i].width = imagesForAnnotation[i].width;
        }
      }, 150);
    });

  },

  beforeCreate: function() {
    document.body.className = 'post'
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    openSidebar: function (type, data, event) {
      this.sidebar.opened = true;

      switch (type) {
        case 'annotation':
          console.log(data.item, data.personal_comments)
          this.sidebar.title = data.item;
          this.sidebar.data = {
            user: this.post.user,
            personal_comments: data.personal_comments,
          }
          break;
      
        default:
          break;
      }
    }, 
    push_natural_img_dims(el) {
      let dims = {
        width: el.naturalWidth,
        //height: el.naturalHeight,
      }
      this.natural_img_dims.push(dims)
    },
    push_rendered_img_dims(el) {
      let dims_rendered = {
        width: el.width,
        //height: el.height,
      }
      console.log(dims_rendered);
      this.rendered_img_dims.push(dims_rendered)
    }
  }
}
</script>

<style lang="scss" scoped>
  section.post_desc {
    margin: 4em 0px;
  }

  .caption {
    position: sticky;
    top: 2em; 
  }

  .scale_in-enter-active,
  .scale_in-leave-active {
    transition: all 0.35s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.2s;
  }

  .scale_in-enter-from,
  .scale_in-leave-to {
    transform: scale(0);
  }
  .sidebar-enter-active,
  .sidebar-leave-active {
    transition: all 0.35s;
  }

  .sidebar-enter-from,
  .sidebar-leave-to {
    transform: translateY(150%);
  }
  .pointer {
    height: 20px;
    width: 20px;
    margin-left: -10px;
    margin-top: -10px;

    background: #fafafa;
    border-radius: 100%;
    outline: #cfd8dc85 0.5em solid;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;

    transition-timing-function: cubic-bezier(0.79, -0.91, 0.07, 1.86);

    &:hover {
      outline-width: 0.75em;
      outline-offset: -0.25em;
      transition-timing-function: ease-in;
    }

    &:active {
      transition-duration: 0.05s;
      outline-width: 0.25em;
      outline-offset: 0.75em;
    }
  }
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

  .image-wrapper {
    position: relative;
    display: flex;
    background: #D7CCC8;
  }

  body:not(.post) {
    .sidebar {
      transition-duration: 0.4s;
      transform: translateY(200%);
    }
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

    .img-upload-zone {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .top {
      display: flex;
      justify-content: space-between;
    }

    .overlay {
      user-select: none;
      max-height: 100%;
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 5;
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