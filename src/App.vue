<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import GridX from "./components/layout/grid/grid-x.vue";
import Cell from "./components/layout/grid/cell.vue";

//icons (google material icons because i can't be bothered designing them):
import SettingsIcon from "vue-material-design-icons/cogOutline.vue"
import HomeIcon from "vue-material-design-icons/homeOutline.vue"
import HomeOutline from "../node_modules/vue-material-design-icons/homeOutline.vue"
import LightningBoltOutline from "vue-material-design-icons/LightningBoltOutline.vue"
import BookOpenPageVariantOutline from "vue-material-design-icons/BookOpenPageVariantOutline.vue"
</script>

<template>
  <Container class="full">
    <GridX>
      <Cell class="large-3" id="sidebar-cell"></Cell>
      <Cell class="large-auto">
        <transition name="slide" mode="out-in">
          <RouterView id="router-view"/>
        </transition>
      </Cell>
      <Cell class="large-3" id="sidebar-cell" style="position:fixed">
        <header id="global-sidebar">
          <div id="top-bar">
            <RouterLink to="/">
              <div id="logo-wrap">
                <img src="/logo/main.svg" alt="SetUpon">
              </div>
            </RouterLink>
            <div class="tb-buttons">
              <nav>
                <!-- <RouterLink></RouterLink> -->
                <RouterLink to="/settings"><span class="large-state"><SettingsIcon></SettingsIcon></span></RouterLink>
                <RouterLink to="/user/0"><span class="large-state">Profile</span></RouterLink>
              </nav>
            </div>
          </div>

          <ul id="main-nav" class="hover-fx dark">
            <li>
              <RouterLink to="/">
                <HomeOutline :size="29"></HomeOutline>
                <span class="large-state">Home</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/trending">
                <LightningBoltOutline :size="29"></LightningBoltOutline>
                <span class="large-state">Trending</span>
              </RouterLink>
              </li>  
            <li>
              <RouterLink to="/items">
                <BookOpenPageVariantOutline :size="29"></BookOpenPageVariantOutline>
                <span class="large-state">Browse Items</span>
              </RouterLink>
            </li>  
          </ul>

        </header>
      </Cell>
    </GridX>

  </Container>
</template>

<style lang="scss">
@import '@/assets/sass/main.scss';

#router-view {
  min-height: 100.1vh;  // get rid of transition glitches.
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.35s, transform 0.45s, filter 0.45s;
  transition-timing-function: cubic-bezier(0.86, 0.19, 0.04, 0.91);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(30%) scale(1.075) translateZ(0);
  filter: blur(1.5rem);

/*   &.add-caseless {
    .sidebar {
      transform: translateZ(100px)
    }
    header {
      //transform: translateY(-100%)
    } 
  }*/

  .blur-overlay {
    opacity: 0 !important;
  }

  .action-button {
    transform: translateX(150px);
  }
}

.grid-x * {
  transition-duration: 0.45s;
}

.action-button {
  transition-delay: 0.25s;
  position: fixed;
  z-index: 999;
  bottom: 2em;
  right: 2em;
  background: $accent;
  padding: 0.5em;
  border-radius: 0.85em;
  box-shadow: 0px 11.2px 11.2px hsl(0deg 0% 0% / 0.33);
  transition-timing-function: cubic-bezier(0.95, 0.16, 0.15, 0.95);

  &.flat {
    box-shadow: none;
  }

  &:hover {
    transition-delay: 0s;
    box-shadow: 0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
    > span {
      transform: scale(0.6);
    }
    cursor: pointer;
  }
  &:active {
    transition-duration: 0.15s;
    transform: scale(0.8);
    > span {
      transition-duration: 0.15s;
      transform: scale(1.2);
    }
  }

  > span {
    display: flex;
  }
}

.post {
  #global-sidebar {
    padding: 0 0.75em;
  }
  #sidebar-cell {
    width: 100px;

    .tb-buttons {
      //display: none;
      
      nav {
        transition-delay: 0.5s;
        transform: scale(0);
        opacity: 0 !important;
      }
    }

    #main-nav {
      a {
        gap: 0;
      }
    }

    span.large-state {
      //display: none;
      font-size:0;
    }
  }
  #logo-wrap {
    //min-width: 70px;
    transform: scale(0.75);
    transition-delay: 0.1s;
    
    img {
      transform: translateX(-92px);
      transition-delay: 0.1s;
    }
  }
}

header#global-sidebar {
  line-height: 1.5;
  height: 100vh;
  //position: sticky;
  top: 0;
  right: 0;
  padding: 0 3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1.8em;

  #top-bar {
    margin-top: 3.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .tb-buttons {
      nav { 
        opacity: 1;
        transition-delay: 0s;
      }
    }

    a {
      text-decoration: none;
      color: #000;
    }
  }

  #main-nav { 
    list-style: none;
    margin: 0;
    padding: 0;
    text-indent: 0;
    padding: 2em 0;

    li {
      display: flex;
      align-items: baseline;
      margin-top: 0.55em;
    }

    a {
      text-decoration: none;
      color: #000;
      padding: 0.75em 1em;
      font-size: 1.35em;
      border-radius: 0.85em;

      align-items: center;
      display: flex;

      gap: 0.5em;

      .material-design-icon {
        display: inline-flex;
      }
    }

    a:hover, .router-link-exact-active {
      background: #EFEBE9;
    }
  }
}

img { 
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}

#logo-wrap {
  height: 47px;
  width: auto;
  position: relative;
  display: flex;
  overflow: hidden;

  img { 
    min-width: 160px !important;
  }
}

</style>
