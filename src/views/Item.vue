<template>
  <div>
    <h1 
      class="input" 
      placeholder="Product NameV1™️" 
      :contenteditable="createMode" 
      @input="onInput($event, 'title')" 
      @keydown="preventInput($event, 230)" @paste="processPaste">
      {{item.title}}
    </h1>

    <blockquote>
      "<span
        class="input" 
        placeholder="My beautiful workspace" 
        :contenteditable="createMode" 
        @input="onInput($event, 'description')" 
        @keydown="preventInput($event, 230)" 
        @paste="processPaste">
        {{item.description}}
      </span>"
    </blockquote>
  </div>

  
</template>

<script>
export default {
  data() {
    return {
      route: {
        item: null,
        category: null,
      },

      item: {
        item: null,
        category: null,
        title: null,
        description: null,
        likes: null,
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
    }
  },

  methods: {
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

    /* if (this.state == "view" || this.editing) {
      this.$http
      .get(
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
    } */
  }
}
</script>

<style lang="scss" scoped>

</style>