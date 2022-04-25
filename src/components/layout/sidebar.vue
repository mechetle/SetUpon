<template>
  <aside class="sidebar">
    <template v-if="type == 'annotation'">
      <img src="" alt="">
      <section class="item-detail">
        <h4 
          class="input" 
          placeholder="Item name" 
          :contenteditable="state == 'create'" 
          @input="$emit('update:title', $event.target.innerText)"
          @keydown="preventInput($event, 30)" 
          @paste="processPaste"
        >{{title}}</h4>

        <p>
          <template v-if="state == 'create' && url == null">
            <a href="#">Curate item</a>
            <br>
            <small>
              <b>Add this item to the global catalogue</b>
              Allow others to...
              <br>
              ✅ Embed it in their setups if they have the same product
              <br>
              ✅ Edit details of the product.
            </small> 
          </template>

          <template v-if="url != null">
            <RouterLink to="/">More information</RouterLink>
          </template>
        </p>

        <h5>{{user}}'s notes</h5>
        <p
          class="input" 
          placeholder="Say what ever you want about this item" 
          :contenteditable="state == 'create'" 
          @input="$emit('update:personal_comments', $event.target.innerText)"
          @keydown="preventInput($event, 140)" 
          @paste="processPaste"
        >{{personal_comments}}</p>
        <h5>Discussion</h5>
        <div class="discussions mini"></div>
      </section>
    </template>    
  </aside>
</template>

<script>
export default {
  name: 'annotation',
  props: {
    type: {
      type: String,
      default: 'annotation'
    },

    state: {
      type: String,
      default: 'view'
    },

    // ⚠️ Important stuff ⚠️
    title: {
      type: String,
      default: 'Jikens Co Childrens Chair'
    },
    user: {
      type: String,
      default: 'Jikens Jikens'
    },
    personal_comments: {
      type: String,
      default: "This chair is magnificelty comfortable, i'm 76 years old and it makes me feel like im 6 again, why are you reading this? 😅"
    },
    url: {
      type: String,
      default: null
    },
  },

  emits: ['update:title', 'update:personal_comments', 'update:url'],

  methods: {
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
}
</script>

<style lang="scss" scoped>
small {
  line-height: 1.7em;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}
.sidebar {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 21em;
  padding: 2em;
  min-height: 85vh;
  z-index: 999;
  margin: 1.25em;
  background: #fff;
  border-radius: 0.65em;
  transition-timing-function: cubic-bezier(0.95, 0.16, 0.15, 0.95);
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
</style>