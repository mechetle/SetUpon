<template>
  <div>
    <div class="post-main">
      <header class="post">
        <div class="overlay" v-show="stampModeEnabled == 'mouse'">
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
              <a href="#" v-if="this.currentUser.displayName == this.post.user && this.state != 'create'">
                <DeleteIcon :size="30" @click="preDeletePost()"></DeleteIcon>
              </a>
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
        <template v-if="post.images[0].annotations.length >= 0">
          <div 
            v-for="(annotation, index) in post.images[0].annotations"
            class="pointer"
            :style="p_cords[0][index]"
            @click="openSidebar('annotation', annotation, 0, index)"
          >
          </div>
        </template>
        <!-- v-if="(post.images.length == 0 && post.images[0].url == '') -->
        <template v-if="state == 'create'">
          <div class="img-creation-bar">
            <input type="file" accept="image/jpeg" @change="fileUpload($event, 0)" v-show="stampModeEnabled == 'image'">

            <div class="toolbar">
              <input type="radio" id="mouse" value="mouse" v-model="stampModeEnabled">
              <label for="mouse"><Cursor></Cursor></label>

              <input type="radio" id="image" value="image" v-model="stampModeEnabled">
              <label for="image">Image</label>
              
              <input type="radio" id="pointer_stamp" value="stamp" v-model="stampModeEnabled">
              <label for="pointer_stamp">Add</label>

              <input type="radio" id="pointer_move" value="move" v-model="stampModeEnabled">
              <label for="pointer_move"><CursorMove></CursorMove></label>
            </div>
          </div> 
        </template>

        <div class="annot-wrapper" :class="{add: stampModeEnabled == 'stamp', move: stampModeEnabled == 'move'}">
          <div class="annotate-zone" v-show="stampModeEnabled == 'stamp'" @click="addPointer($event, 0)"></div>

          <div class="toggle-vis-blur" v-show="showTitleCard">
            <div class="blur-overlay"></div>
          </div>

          <template v-if="post.images[0].url != ''">
            <img :src="post.images[0].url" alt="">
          </template>
          <template v-else>
            <div class="img-upload-zone">
              <h3>Upload image to header</h3>
              <p>Click the buttons: "image" > "Choose File"</p>
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
                    @click="openSidebar('annotation', annotation, i + 1, j)"
                  >
                  </div>

                  <div class="img-creation-bar" v-show="stampModeEnabled == 'image'">
                    <input type="file" accept="image/jpeg" @change="fileUpload($event, i + 1)">
                  </div>

                  <div class="annot-wrapper" :class="{add: stampModeEnabled == 'stamp', move: stampModeEnabled == 'move'}">
                    <div class="annotate-zone" v-show="stampModeEnabled == 'stamp'" @click="addPointer($event, i + 1)"></div>

                    <div class="blur-overlay"></div>
                    <template v-if="post.images[i + 1].url != ''">
                      <img :src="images.url" alt="">
                    </template>
                    <template v-else>
                      <div class="img-upload-zone">
                        <h4>Upload image to header</h4>
                        <p>Click the buttons: "image" > "Choose File"</p>
                      </div>
                    </template>
                  </div>
                </div>
                
              </Cell>
              <Cell class="large-3">
                <p 
                  class="caption input"
                  placeholder="Describe what is in the photo" :contenteditable="createMode" 
                  @input="onInput($event, 'caption', i + 1)"
                  @keydown="preventInput($event, 230)" 
                  @paste="processPaste"
                >
                  {{images.caption}}
                </p>
                <!-- <p>
                  Index: {{i}}, 
                  Index_corrected: {{i + 1}}, 
                  {{p_cords[i + 1][0]}}
                </p> -->
              </Cell>
            </template>

            <div class="action-button flat" v-show="sidebar.opened == false && state =='create'" @click="postPost">
              <Send size="45"></Send>
            </div>

            <p class="add-section" v-if="post.images.length != 5 && state == 'create'">
              <a href="#" @click="initiateImageSpace">
                Add new section {{post.images.length}} / 5
              </a>
            </p>
          </GridX>
        </Container>
      </article>

      <Transition name="sidebar">
        <Sidebar 
          v-if="sidebar.opened"
          :state = "state"
          v-model:title="post.images[pointerClicked.i].annotations[pointerClicked.j].item" 
          v-model:user="post.user"
          v-model:personal_comments="post.images[pointerClicked.i].annotations[pointerClicked.j].personal_comments"
          v-model:url="post.images[pointerClicked.i].annotations[pointerClicked.j].url"
        ></Sidebar>
      </Transition>

      <Transition name="scale_in">
        <div class="action-button flat" v-if="sidebar.opened" @click="sidebar.opened = false">
          <CloseIcon size="45"></CloseIcon>
        </div>
      </Transition>
      <Transition name="scale_in">
        <div class="action-button flat nobg" id="delete" v-if="sidebar.opened && state == 'create'" @click="deletePointer">
          <Delete size="45" v-if="sidebar.opened"></Delete>
        </div>
      </Transition>

      <Alert :title="alert.title" :msg="alert.msg">
        <a v-on:click="deletePost" href="#" class="button">Delete</a>
        <!-- <a v-if="method === 'SET' " v-on:click="archiveProject" class="button ghost">Archive</a> -->
      </Alert>

    </div>
  </div>
</template>

<script setup>
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import VisibilityIcon from 'vue-material-design-icons/EyeOutline.vue';
import VisibilityIconOff from 'vue-material-design-icons/EyeOffOutline.vue';
import Send from 'vue-material-design-icons/Send.vue';
import Delete from 'vue-material-design-icons/Delete.vue';
import Cursor from 'vue-material-design-icons/CursorDefault.vue';
import CursorMove from 'vue-material-design-icons/CursorMove.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import Sidebar from '@/components/layout/sidebar.vue';
import Container from '@/components/layout/grid/container.vue';
import GridX from "@/components/layout/grid/grid-x.vue";
import Cell from '@/components/layout/grid/cell.vue';
import Alert from '../components/modals/alert.vue';

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

      alert: { // alert dialogue initial values
        title: "Uh oh, you've made some unsaved modifications",
        msg: "Do you want to save these changes, or exit out of the builder?"
      },

      uploading: false,

      state: 'view',
      editing: false,
      stampModeEnabled: 'mouse',

      pointerClicked: {
        i: null,
        j: null,
      },

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

      // this is temporary data for testing -- remove later
      /* post_temp: {
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
      }, */

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
        this.post.date = Date.parse(d) / 1000; // convert to epoch
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
      this.post.images = [{
        url: "",
        caption: "",
        annotations: []
      }]
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

    // Do stuff specifically for create mode also when not editing:;
    if (this.state == 'create' && !(this.editing)) {
      // set the user for this new post
      this.post.user = this.currentUser.displayName;
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
      // this is so it gets every images
      if (this.post.images.length != imagesForAnnotation.length) {
        imagesForAnnotation = document.querySelectorAll(".annot-wrapper img");
      }


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

  watch: {
    // whenever stampMode is enabled
    stampModeEnabled(newBool, oldBool) {
      let annotationSpace = document.querySelectorAll(".annot-wrapper")
      console.log("annotationSpace", annotationSpace)
      
      if (newBool == "stamp" || newBool == "image") {
        console.log("turning on stamp mode for pointers")
        this.showTitleCard = false;

      } else {
        console.log("turning off stamp mode for pointers")
        //this.showTitleCard = true;
      }
    }
  },

  methods: {
    preDeletePost() {
      this.alert.title = "Delete work?"
      this.alert.msg = "You are about to delete a project, are you sure you want to do that, or was this a mis-click?"
      document.querySelector(".alert-bg").classList.add("activated")
    },
    deletePost() {
      if (this.currentUser.displayName == this.post.user) {
        console.log("Current user is the same as post, deleting post.")

        this.$http
        .delete(`${import.meta.env.VITE_API_URL}/posts/${this.route.user}/${this.route.date}`, {
          headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${this.currentUser.at}`
          },
        })
        .then((response) => {
          console.log("Deleting post response:", response)
          this.$router.push({ path: '/' })
        })
        .catch((error) => {
          console.log('Api list:' + `${import.meta.env.VITE_API_URL}/posts/${this.route.user}/${this.route.date}`);
          console.log('Unable to delete post to api (): error ' + error);
        });
      }
    },
    postPost() {
      this.$http.put(
        `${import.meta.env.VITE_API_URL}/posts`,
        this.post,
        {
          headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${this.currentUser.at}`
          },
        }
      ).then((response) => {
        console.log(response.data)
        console.log("Post posted!")

        this.$router.push({ name: 'home' })
      })
      .catch((error) => {
        console.log('Unable to get published posts from setUpon api: error...😭 ' + error);
        console.log(`${import.meta.env.VITE_API_URL}/posts`, this.currentUser.at);
        console.error(error)
      });
    },

    initiateImageSpace(e) {
      e.preventDefault();
      if (this.post.images.length < 6) {
        this.post.images.push({
          url: "",
          caption: "",
          annotations: []
        })
      }
    },
    deletePointer(e) {
      let i = this.pointerClicked.i
      let j = this.pointerClicked.j

      this.post.images[i].annotations.splice(j, 1)
      this.sidebar.opened = false
    },
    addPointer(e, i) {
      let x = e.offsetX;
      let y = e.offsetY;
      console.log(x, y)

      // process the coords so its in scale with the dimensions of image 👌🏻
      this.$nextTick(() => {
        x = x / this.multiplier[i];
        y = y / this.multiplier[i];
        console.log("Adjusted p coordinates:", x, y, "with multiplier:", this.multiplier)

        // After it has been put in to the data
        let newPointer = {
          x: x,
          y: y,
          item: null,
          url: null,
          personal_comments: null
        }
        this.post.images[i].annotations.push(newPointer)
      })

      // Turn off stamp mode
      this.stampModeEnabled = "mouse";
    },
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

          // store it in the vue data:
          this.post.images[index].url = presigned_url.split('?')[0].replace(import.meta.env.VITE_S3_URL, import.meta.env.VITE_CLOUDFRONT_URL)

          // Once stored get and push dimensions
          this.$nextTick(() => {
            let imagesForAnnotation = document.querySelectorAll(".annot-wrapper img");
            //console.log("BIG BRUH:", imagesForAnnotation)
            //console.log("BIG BRUH url:", presigned_url)

            imagesForAnnotation[index].onload = () => {
              this.push_rendered_img_dims(imagesForAnnotation[index], index)
              this.push_natural_img_dims(imagesForAnnotation[index], index)
            }

            this.stampModeEnabled = 'stamp'
          })
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
    onInput(e, data, i) {
      //console.log(e.target.innerText);
      if (data != 'caption') {
        this.post[data] = e.target.innerText
      } else {
        console.log(i);
        this.post.images[i].caption = e.target.innerText
      }

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
    openSidebar: function (type, data, i, j, event) {
      this.sidebar.opened = true;

      // store which pointer it was clicked
      this.pointerClicked = {
        i: i,
        j: j
      }

      // not needed
      switch (type) {
        case 'annotation':
          //console.log(data.item, data.personal_comments)

          //this.sidebar.title = data.item;
          this.sidebar.data = {
            user: this.post.user,
            //personal_comments: data.personal_comments,
          }
          break;
      
        default:
          break;
      }
    }, 
    push_natural_img_dims(el, index = null) {
      let dims = {
        width: el.naturalWidth,
        //height: el.naturalHeight,
      }
      console.log(dims);

      if (index == null) {
        // if no index is supplied just push it
        this.img_dims.natural.push(dims)
      } else {
        // if there is an index replace val at index
        this.img_dims.natural[index] = dims
      }

    },
    push_rendered_img_dims(el, index = null) {
      let dims_rendered = {
        width: el.width,
        //height: el.height,
      }
      console.log(dims_rendered);
      if (index == null) {
        // if no index is supplied just push it
        this.img_dims.rendered.push(dims_rendered)
      } else {
        // if there is an index replace val at index
        this.img_dims.rendered[index] = dims_rendered
      }
    },

    hideTitleCard() {
      this.showTitleCard = !this.showTitleCard;
    }
  }
}
</script>

<style lang="scss" scoped>
  .add-section {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 3.5em;
  }
  .action-button#delete {
    margin-right: 20.25em;
  }
  .toolbar {
    display: flex;
    align-items: center;
    margin-top: 0.35em;
    gap: 1.15em;
    position: fixed;

    label {
      cursor: pointer;
      border-radius: 0.4em;
    }

    input:checked + label {
      background: #536DFE;
      padding: 0.4em;
      color: #ECEFF1;
    }

    input {
      // height: 0;
      // width: 0;
      // margin: 0;
      display: none;
    }
  }
  .img-creation-bar {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    border-radius: 1.1em;
    height: 100px;

    article & {
      width: 100%;
      z-index: 8;
    }

    > input {
      display: flex;
      background: #fff;
      color: #000;
      padding: 1.5em;
      margin-top: 17.5em;
      border-radius: 0.85em;
      box-shadow: 0px 7px 20px hsl(0deg 0% 0% / 25%);
    }
  }
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
    transition-duration: 0.25s;

    * {
      transition-duration: 0.25s;
    }

    svg {
      transition-duration: 0.25s !important;
    }
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
    min-height: 17em;
  }

  body:not(.post) {
    .sidebar {
      transition-duration: 0.4s;
      transform: translateY(200%);
    }
  }

  #hide-title-card {
    display: flex;
    align-items: baseline;
    gap: 1.5em;

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

    .annotate-zone {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      cursor: url('/outline_add_circle_outline_black_18dp.png') 18 18,crosshair;
    }
    &.move {
      cursor: grab;
    }

    img {
      min-width: 100%;
    }
  }

  input[type=file] {
    &::file-selector-button {
      cursor: pointer;
      font-family: "Space Grotesk", sans-serif;
      background: $accent;
      padding: 0.85em 1.2em;
      border: 0;
      border-radius: 0.85em;
      margin-right: 1em;
      font-weight: bold;
      font-size: 16px;
    }
    &::file-selector-button:hover {
      background-color: #536DFE;
      color: #ECEFF1;
    }
  }
  

  .img-upload-zone {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    user-select: none;
    color: #A1887F;

    article & {
      min-height: 100%;
    }
  }

  header.post {
    background: #D7CCC8;
    display: flex;
    justify-content: center;


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
</style>