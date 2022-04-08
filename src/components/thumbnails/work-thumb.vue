<!--
Thumbnail of the work:
======================
Seen on the home and part of the trending page.
-->
<template>
    <div :class="['cell', 'medium-6', columns, 'work-thumb']">
        <RouterLink :to="`/post/${slug}`">
            <div class="work-thumb-wrapper">
                <div class="work-thumb-wrapper-cont">
                    <div class="details">
                        <h2>{{ title }}</h2>
                        <p>{{ desc }}</p>
                        <div class="cat-wrapper">
                            <div class="categories">
                                <span v-for="categories in cat" :key="categories">
                                    {{ categories }}
                                </span>
                        
                                <!-- <span>{{ cat }}</span> -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="thumb-bg">
                    <img :src="imgSrc" :alt="alt">
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: 'work-thumb',
    props: {
        key: String,
        title: {
            type: String,
            default: 'Untitled Project'
        },
        imgSrc: {
            type: String,
            default: '/assets/img/thumbs/nihdc4.png'
        },
        desc: {
            type: String,
            default: 'Hey bruv, there is no description'
        },
        /* alt: {
            type: String,
        }, */
        cat: {
            type: Array,
        },
        slug: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 6
        },
    },
    computed: {
        columns() {
            return 'large-' + this.size
        },
        alt() {
            if (this.alt == null) {
                return this.desc
            } else {
                return this.alt
            }
        }
    }

}
</script>

<style lang="scss" scoped>
    a {
        color: #fff;
        transition: 0.35s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        text-decoration: none;

        &:hover {
            color: rgba(255, 255, 255, 0.747);
        }
    }
    h3 {
        margin: 1.2rem 0 0.5rem;
    }
    p {
        margin: 0;
    }
    .work-thumb-wrapper-cont {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: flex-end;
    }
    .work-thumb-wrapper {
        margin-bottom: 2em;
        position: relative;
        height: 60vh;

        &:hover{ 
            //transform: scale(1.2);
            
            img {
                transform: scale(1.2);
            }
        }
    }
    .details {
        padding: 2em;
    }
    .thumb-bg {
        overflow-y: hidden;
        height: 60vh;
        position: absolute;
        width: 100%;
        top: 0;
        z-index: -1;

        img {
            position: absolute;
            top: -50%;
            left: 0;
            width: 100%;
            height: auto;
        }
    }
</style>