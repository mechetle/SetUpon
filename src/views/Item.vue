<template>
  <div>
    <header>
      <Container>
        <GridX class="grid-margin-x">
          <Cell class="large-5" id="title">
            <p>
              <template v-if="category != null">
                <RouterLink :to="'/items/' + category">
                  {{category}}
                </RouterLink>
              </template>
              <template v-else>
                <RouterLink to="/items">
                  Uncategorized
                </RouterLink>
              </template>
            </p>
            <h2 
              class="input" 
              placeholder="Product Name™️" 
              :contenteditable="createMode" 
              @input="onInput($event, 'item')" 
              @keydown="preventInput($event, 30)" @paste="processPaste">
              {{item.item}}
            </h2>
  
            <blockquote>
              "<span
                class="input" 
                placeholder="Product description: This Kambrook toaster has a 2 slice capacity. Set for light and golden or crispy brown with its variable browning control." 
                :contenteditable="createMode" 
                @input="onInput($event, 'description')" 
                @keydown="preventInput($event, 230)" 
                @paste="processPaste">
                {{item.description}}
              </span>"
            </blockquote>
          </Cell>
  
          <Cell class="large-7">
            <div class="image-wrapper">
              <div class="img-creation-bar" v-show="state == 'create'">
                <input type="file" accept="image/jpeg" @change="fileUpload($event, 0)">
              </div>
  
              <div class="annot-wrapper">
                <template v-if="item.images[0].url != ''">
                  <img :src="item.images[0].url" alt="">
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
  
        </GridX>
  
      </Container>
    </header>

    <section id="discussions">
      <Container>
        <h3>Discussions</h3>
        <p>Not implemented</p>
      </Container>
    </section>

    <section id="reddit">
      <Container>
        <h3>"{{item.item}}" on reddit</h3>
        <p>What are people saying about this item on Reddit</p>

        <GridX class="grid-margin-x">
          <template v-for="post in reddit">
            <Cell class="large-6">
              <a :href="'https://www.reddit.com' + post.data.permalink" target="_blank" >
                <h4>{{post.data.title}}</h4>
                <p>{{post.data.author}}</p>
                <p>{{post.data.subreddit_name_prefixed}}</p>
                <template v-if="post.data.is_reddit_media_domain == true">
                  <img :src="post.data.url">
                </template>
                <p>{{post.data.score}}</p>
              </a>
            </Cell>
            
          </template>
        </GridX>
      </Container>
    </section>

  </div>

  
</template>

<script setup>
import Container from '@/components/layout/grid/container.vue';
import GridX from "@/components/layout/grid/grid-x.vue";
import Cell from '@/components/layout/grid/cell.vue';
</script>

<script>
export default {
  props: ["currentUser"],

  data() {
    return {
      route: {
        item: null,
        category: null,
      },

      reddit: null,

      item: {
        item: "Acer Nitro 5",
        category: null,
        description: null,
        links: null,
        item_discussions: null,
        images: null,
      },

      //state: 'view',
      state: 'create',
    }
  },

  computed: {
    createMode() {
      if (this.state == 'create') {
        return true;
      }
    },
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

          // store it in the vue data:
          this.item.images[index].url = presigned_url.split('?')[0].replace(import.meta.env.VITE_S3_URL, import.meta.env.VITE_CLOUDFRONT_URL)

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
    // For state == 'create'
    onInput(e, data, i) {
      //console.log(e.target.innerText);
      if (data != 'caption') {
        this.item[data] = e.target.innerText
      } else {
        console.log(i);
        this.item.images[i].caption = e.target.innerText
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
  },

  created() {
    this.route.item = (this.$route.params.item).replaceAll('-', ' ');
    this.route.category = this.$route.params.item;

    if (this.state == "view" || this.editing) {
      this.$http
      .get(
        `${import.meta.env.VITE_API_URL}/items/${this.route.item}`
      )
      .then((response) => {
        this.item = response.data.Item
        console.log(response.data)
      })
      .catch((error) => {
        console.log('Unable to get published item from setUpon api: error...😭 ' + error);
      });
    } else {
      console.log("Creating new item mode")
      this.item.images = [{
        url: "",
        caption: "",
        annotations: []
      }]
    }

    this.$http
      .get(
        `https://api.reddit.com/r/all/search?q=${(this.item.item).replaceAll(' ', '+')}&limit=15`
      )
      .then((response) => {
        console.log("Got data from reddit api:", response.data.data.children);
        this.reddit = response.data.data.children;
      })
      .catch((error) => {
        console.log('Unable to get published reddit item from setUpon api: error...😭 ' + error);
      });
  }
}
</script>

<style lang="scss" scoped>
header {
  margin-top: 1.2em;
  #title {
    margin-top: 1.6em;
  }
}

blockquote {
  margin: 0;
}
.img-creation-bar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  border-radius: 1.1em;
  height: 100px;
  bottom: 70px;

  article & {
    width: 100%;
    z-index: 8;
  }

  > input {
    display: flex;
    background: #fff;
    color: #000;
    padding: 1.5em;
    border-radius: 0.85em;
    box-shadow: 0px 7px 20px hsl(0deg 0% 0% / 25%);
  }
}
.caption {
  position: sticky;
  top: 2em; 
}
.image-wrapper {
  position: relative;
  display: flex;
  text-align: center;
  background: #D7CCC8;
  min-height: 24em;
  justify-content: center;
}

.annot-wrapper {
  width: 100%;

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


</style>