<template>
  <div>
    <div class="post-main">
      <header class="post">
        <div class="overlay">
          <div class="top">
            <p class="breadcrumbs">
              <RouterLink to="/">Home</RouterLink> > <RouterLink :to="'/' + route.user">
                <template v-if="!createMode">
                  <span>{{route.user}}</span>
                </template>
                <template v-else>
                  <span>{{post.user}}</span>
                </template>
              </RouterLink> > {{post.title}}
            </p>
            <div id="hide-title-card" class="hover-fx">
              <a href="#" class="tiny" @click="hideTitleCard()">
                <template v-if="showTitleCard"><VisibilityIcon :size="30"/> Hide</template>
                <template v-else><VisibilityIconOff :size="30"/> Show</template>
                title card
              </a>
            </div>
          </div>
          <div class="bottom" v-show="showTitleCard">
            <h1 class="input" placeholder="My beautiful workspace" :contenteditable="createMode" @input="onInput($event, 'title')" @keydown="preventInput($event, 30)" @paste="processPaste">{{post.title}}</h1>
            <p>
              {{pubDate}}
            </p>
          </div>
        </div>


        <!-- Annotations header -->
        <!-- <template v-if="post.images[0].url != null || post.images.url != null"></template> -->
        <template v-if="checkIfImageExists">
          <div 
            v-for="(annotation, index) in post.images[0].annotations"
            class="pointer"
            :style="p_cords[0][index]"
            @click="openSidebar('annotation', annotation)"
          >
          </div>
        </template>
        <template v-else>
          <div class="upload-zone">
            <input type="file" @change="fileUpload($event, 0)">
          </div> 
        </template>

        <div class="annot-wrapper">
          <div class="toggle-vis-blur" v-show="showTitleCard">
            <div class="blur-overlay"></div>
          </div>

          <template v-if="state == 'view'">
            <img :src="post.images[0].url" alt="">
          </template>
          <template v-else>
            <div class="img-upload-zone">
              <h3>Upload image to header</h3>
              <p>Drag and drop, or click the button at the top</p>
            </div>
          </template>
          
        </div>
      </header>

      <section class="post_desc">
        <Container>
          <blockquote>
            "<span class="input" placeholder="My beautiful workspace" :contenteditable="createMode" @input="onInput($event, 'description')" @keydown="preventInput($event, 230)" @paste="processPaste">{{post.description}}</span>"
          </blockquote>
        </Container>
      </section>

      <article>
        <Container>
          <GridX class="grid-margin-x">
            <template v-if="post.images.length > 0" v-for="(images, i) in post.images.slice(1)">
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
                      <img :src="images.url" alt="">

                    <!-- <template v-if="state == 'view'">
                    </template> -->

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
import VisibilityIconOff from 'vue-material-design-icons/EyeOffOutline.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import Sidebar from '@/components/layout/sidebar.vue';
import Container from '@/components/layout/grid/container.vue';
import GridX from "@/components/layout/grid/grid-x.vue";
import Cell from '@/components/layout/grid/cell.vue';
</script>

<script>
export default {
  props: ["currentUser"],

  data () {
    return {
      route: {
        user: null,
        date: null,
      },

      state: 'view',
      editing: false,

      showTitleCard: true,
      sidebar: {
        opened: false,
        title: "null",
        data: {
          user: 'Jikens Jikens',
          personal_comments: "This chair is magnificelty comfortable, i'm 76 years old and it makes me feel like im 6 again, why are you reading this? 😅"
        },
      },

      img_dims: {
        rendered: [],
        natural: [],
      },

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

      post: {
        user: null,   // Partition
        date: null,   // Sort
        title: null,
        description: null, 
        likes: 0,
        images: null // if i pre-alloacte the first index of this the first index will only work due to caching
      } 
    }
  },
  computed: {
    createMode() {
      let bool = false
      if (this.state == 'create') {
        bool = true
      }

      return bool;
    },
    checkIfImageExists() {
      let bool = false;

      try {
        bool = this.post.images[0].annotations.length > 0 || this.post.images.length > 0
      } catch (e) {
        bool = false
      }
      
      return bool;
    },
    pubDate() {
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      if (this.state == "view") {
        var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(this.route.date);
      } else {
        // if it's in create mode and the date is unknown set the post date to something 
        var d = new Date(); // Current date
        this.post.date = Date.parse(d); // convert to epoch
      }
      
      return d.toLocaleDateString("en-US", options);
    },

    multiplier() {
      let multiplier = Array(this.post.images.length).fill(1);

      try {
        for (let i = 0; i < this.post.images.length; i++) {
          multiplier[i] = this.img_dims.rendered[i].width / this.img_dims.natural[i].width;
        }
      } catch (e) {
        console.log("rendered and natural _img_dims hasn't been loaded in yet on first load \n", e)
      }

      return multiplier;
    },

    p_cords() {
      //return `transform: translate(${this.post.images[0].annotations[0]},${this.post.images[0].annotations[0].y})`

      /* This returns an array, 
       * lol this might be too intensive (O(n^2)) but i couldn't be bothered with anything else atm hahahaha, 
       */
      let img_arr = [];
      this.post.images.forEach((image, i) => {
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

    //only fetch when in edit or view mode:
    if (this.state == "view" || this.editing) {
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
    } else {
      console.log("Creating new post mode")
      this.post.images = {
        url: "",
        caption: "",
        annotations: []
      }
    }

  },

  mounted() {
    setTimeout(() => {
      this.scrollToTop() 
    }, 500)

    let lastKnownScrollPosition = 0;
    let ticking = false;

    // Scrolling methods:
    let overlay = document.querySelector("header .overlay")
    let overlay_blur = document.querySelector("header .blur-overlay")
    const doSomething = (scrollPos) => {
      //console.log("edfsdfsefasef")
      if (scrollPos < 50) {
        overlay.style.opacity = 1;
        overlay_blur.style.opacity = 1;
      } else {
        overlay.style.opacity = 0;
        overlay_blur.style.opacity = 0;
      } 
    }
    document.addEventListener('scroll', (e) => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          doSomething(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });

    // Do stuff specifically for create mode;
    if (this.state == 'create') {
      // not editing:
      if (!this.editing) {
        // set the user for this new post
        this.post.user = this.currentUser.displayName;
      }
    }

    // This will store an array of dom elements of image that are for annotation
    let imagesForAnnotation = document.querySelectorAll(".annot-wrapper img");
    console.log("imagesForAnnotation", imagesForAnnotation)

    // initiate the dims of every image in the the main: (won't happen during create mode)
    if (this.state == 'view') {
      imagesForAnnotation.forEach(el => {
        el.onload = () => {
          setTimeout(() => {
            this.push_rendered_img_dims(el)  
          }, 1000)
          this.push_natural_img_dims(el);
        }
      });
    }
    
    // This is to detect window resize and update the "rendered images' dimensions in dom"
    let movePointers;
    window.addEventListener('resize', (event) => {
      clearTimeout(movePointers);
      movePointers = setTimeout(() => {
        console.log("resizing changing this width:", this.img_dims.rendered[0].width);
        // do stuff here
        for (let i = 0; i < imagesForAnnotation.length; i++) {
          this.img_dims.rendered[i].width = imagesForAnnotation[i].width;
        }
      }, 150);
    });

  },

  beforeCreate: function() {
    document.body.className = 'post'
  },

  methods: {
    fileUpload(e, index) {
      // get the pre-signed url from the lambda function through the api gateway
      this.$http.post(`${import.meta.env.VITE_API_URL}/su-s3`, {
        "extension": "jpg",
        "mime": "application/json"
      }, { 
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${this.currentUser.at}`
        } 
      })
      .then((response) => {
        // replicating this: https://www.youtube.com/watch?v=1GGVpE7NOc8
        const presigned_url = response.data.uploadUrl
        console.log(presigned_url);

        // store the file in a temp variable:
        console.log(e.target.files[0])
        const imagefile = e.target.files[0]
        // Preparing data: <--- Note to self this causes file curruption 
        // --> https://stackoverflow.com/questions/59537252/how-do-i-upload-a-file-to-a-pre-signed-url-in-aws-using-node-js-and-axios
        // let formData = new FormData();
        // formData.append("image", imagefile);

        // Then upload file to the presigned url so it actually gets uploaded to s3
        this.$http.put(presigned_url, imagefile, {
          // https://stackoverflow.com/questions/14150854/aws-s3-display-file-inline-instead-of-force-download
          headers: {"Content-Type" : "image/jpeg"}
        })
        .then((response) => {
          console.log("S3: Image uploaded through presigned_url", response.data)
          console.log(presigned_url.split('?')[0])
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        console.log(error);
      });

    },

    // for the create page:
    onInput(e, data) {
      //console.log(e.target.innerText);
      this.post[data] = e.target.innerText
    },
    preventInput(e, max_char = 140) {
      // if user presses enter don't do anything
      if (e.keyCode === 13) {
        e.preventDefault();
      }
      if (e.target.innerText.length == max_char && e.keyCode != 8) {
        e.preventDefault();
      }
    },
    processPaste(e) {
      e.preventDefault();

    // Get the copied text from the clipboard
    const text = e.clipboardData
        ? (e.originalEvent || e).clipboardData.getData('text/plain')
        : // For IE
        window.clipboardData
        ? window.clipboardData.getData('Text')
        : '';

    if (document.queryCommandSupported('insertText')) {
        document.execCommand('insertText', false, text);
    } else {
        // Insert text at the current position of caret
        const range = document.getSelection().getRangeAt(0);
        range.deleteContents();

        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.selectNodeContents(textNode);
        range.collapse(false);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
    },

    // scroll to the top:
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
      this.img_dims.natural.push(dims)
    },
    push_rendered_img_dims(el) {
      let dims_rendered = {
        width: el.width,
        //height: el.height,
      }
      console.log(dims_rendered);
      this.img_dims.rendered.push(dims_rendered)
    },
    hideTitleCard() {
      this.showTitleCard = !this.showTitleCard;
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
  .upload-zone {
    z-index: 8;
  }

  header.post {
    background: #D7CCC8;
    display: flex;


    .img-upload-zone {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
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
/*   @keyframes psuedoCarret {
    0%   {transform: scaleY(1.26) scaleX(5) translateY(12.15%);}
    50%  {transform: scaleY(0) scaleX(5) translateY(12.15%);}
    100% {transform: scaleY(1.26) scaleX(5) translateY(12.15%);}
  } */
  .input[placeholder] {
    &:empty:before {
      content: attr(placeholder);
      color: #555;
      cursor: text;
    }
    &:focus {
      outline: none;
      &:empty:after { //this aint going to work, i would have to create a new caret in every input, and make it jump depending on e.target.selectionStart
        content: "";
        margin-right: 1em;
        display: inline-block;
        width: 0.1px;
        //background: rgba(0, 0, 0, 0.089);
        backdrop-filter: invert(100%);
        height: 1em;
        transform: scaleY(1.26) scaleX(5) translateY(12.15%);
        animation-name: psuedoCarret;
        animation-duration: 1s;
        //animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      &:empty:before {
        content: "";
      }
    }
  }
</style>