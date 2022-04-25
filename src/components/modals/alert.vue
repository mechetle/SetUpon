<!--
Alert:
========
Basically an modal that appears to 
reassure to users actions.
-->
<template>
  <div class="alert-bg">
    <div class="alert-modal">
      <div class="modal-text">
        <h3>{{title}}</h3>
        <p>{{msg}}</p>        
      </div>

      <div class="button-area">
        <div class="slot">
          <slot></slot>
        </div>

        <div class="hover-fx dark">
          <a v-on:click="dismiss">Cancel</a>
        </div>

      </div>
    </div>
    <div class="void" v-on:click="dismiss"></div>
  </div>
</template>

<style lang="scss" scoped>
  $t-modal-from: scale(0%) translateY(100%);
  $t-modal-to: scale(100%) translateY(0);
  $blur-amount: 18px;

  .button-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:  #eceff1;
    padding: 0em 2em 1.5em;

    .hover-fx {
      padding-top: 1em;
      padding-right: 1.5em;
    }
  }

  .slot {
    display: flex;
    align-items: flex-end;
    transform: translateY(0.7em);
  }

  .alert-bg {
    display: flex;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 9999;
    top: 0;
    justify-content: center;
    align-items: flex-end;
    transform: scale(0);

    .void {
      position: absolute;
      height:100%;
      width: 100%;
      top: 0;

      background: rgba(44, 62, 80, 0);
      backdrop-filter: blur(0);
      transition-duration: 0.35s;
      transition-delay: 0.25s;
    }

    .alert-modal {
      background: #fff;
      width: 690px;
      transform: $t-modal-from;
      transition-delay: 0.25s;
      transition-duration: 0.35s;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      transition-property: transform;
      z-index: 10000;
      transform-origin: bottom;

      .modal-text {
        padding: 0.5em 2em 2em;
      }
    }

    &.activated {
      transform: scale(1);

      .void {
        background: rgba(44, 62, 80, 0.77);
        backdrop-filter: blur($blur-amount);
      }

      .alert-modal {
        transform: $t-modal-to;
      }
    }
    &.exitOut {
      .void {
        background: rgba(44, 62, 80, 0);
        backdrop-filter: blur(0);
      }
      .alert-modal {
        transform: $t-modal-from;
      }
    }

  }
</style>

<script>
export default {
  name: "Alert",

  props: {
    title: String,
    msg: String,
  },

  methods: {
    dismiss() {
      let abg = document.querySelector(".alert-bg")
      
      abg.classList.add("exitOut")

      function hey() {
        abg.classList.toggle("activated")
        abg.classList.remove("exitOut")
        abg.addEventListener("transitionend", hey, true);
      }

      abg.addEventListener('transitionend', hey, false );
    }
  }
};

</script>
