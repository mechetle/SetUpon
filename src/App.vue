<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import GridX from "./components/layout/grid/grid-x.vue";
import Cell from "./components/layout/grid/cell.vue";
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
                <RouterLink to="/settings"><span class="large-state">Settings</span></RouterLink>
                <RouterLink to="/user/0"><span class="large-state">Profile</span></RouterLink>
              </nav>
            </div>
          </div>

          <ul id="main-nav" class="hover-fx dark">
            <li><RouterLink to="/"><span class="large-state">Home</span></RouterLink></li>
            <li><RouterLink to="/trending"><span class="large-state">Trending</span></RouterLink></li>  
            <li><RouterLink to="/items"><span class="large-state">Browse Items</span></RouterLink></li>  
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

  &.add-caseless {
    .sidebar {
      transform: translateZ(100px)
    }
    header {
      transform: translateY(-100%)
    }
  }
}

.grid-x * {
  transition-duration: 0.45s;
}

.post {
  #global-sidebar {
    padding: 0 0.75em;
  }
  #sidebar-cell {
    width: 100px;

    .tb-buttons {
      display:none;
    }

    span.large-state {
      display: none;
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
  position: sticky;
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
