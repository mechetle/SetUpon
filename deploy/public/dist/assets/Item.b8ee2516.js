import{_ as y,f as b,o as l,c,a,b as d,w as n,G as w,j as g,d as u,t as r,C as _,h as k,v as C,i as v,F as I,k as T,p as D,e as $}from"./index.a68fb71d.js";import{C as f}from"./container.48eafde8.js";const p=t=>(D("data-v-8d80e8a0"),t=t(),$(),t),N=u(" Uncategorized "),S=["contenteditable"],U=u(' "'),P=["contenteditable"],A=u('" '),j={class:"image-wrapper"},z={class:"img-creation-bar"},R={class:"annot-wrapper"},B=["src"],q={key:1,class:"img-upload-zone"},F=p(()=>a("h4",null,"Upload image to header",-1)),M=p(()=>a("p",null,'Click the buttons: "image" > "Choose File"',-1)),V=[F,M],E={id:"discussions"},G=p(()=>a("h3",null,"Discussions",-1)),K=p(()=>a("p",null,"Not implemented",-1)),L={id:"reddit"},O=p(()=>a("p",null,"What are people saying about this item on Reddit",-1)),W={key:0},X=p(()=>a("small",null,"This will update when posted",-1)),H=[X],J=["href"],Q=["src"],Y={class:"upvotes"},Z={props:["currentUser"],data(){return{route:{item:null,category:null},reddit:null,item:{item:"Acer Nitro 5",category:null,description:null,links:null,item_discussions:null,images:null},state:"create"}},computed:{createMode(){if(this.state=="create")return!0}},methods:{fileUpload(t,e){this.$http.post("https://omvs9m8wk9.execute-api.us-east-1.amazonaws.com/su-s3",{extension:"jpg",mime:"application/json"},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.currentUser.at}`}}).then(o=>{const i=o.data.uploadUrl;console.log(i),console.log(t.target.files[0]);const s=t.target.files[0];this.$http.put(i,s,{headers:{"Content-Type":"image/jpeg"}}).then(m=>{console.log("S3: Image uploaded through presigned_url",m.data),console.log(i.split("?")[0]),this.item.images[e].url=i.split("?")[0].replace("setupon-s3-bucket.s3.amazonaws.com","d1brkipwoarxuy.cloudfront.net"),this.$nextTick(()=>{let h=document.querySelectorAll(".annot-wrapper img");h[e].onload=()=>{this.push_rendered_img_dims(h[e],e),this.push_natural_img_dims(h[e],e)},this.stampModeEnabled="stamp"})}).catch(m=>{console.log(m)})}).catch(o=>{console.log(o)})},onInput(t,e,o){e!="caption"?this.item[e]=t.target.innerText:(console.log(o),this.item.images[o].caption=t.target.innerText)},preventInput(t,e=140){t.keyCode===13&&t.preventDefault(),t.target.innerText.length==e&&t.keyCode!=8&&t.preventDefault()},processPaste(t){t.preventDefault();const e=t.clipboardData?(t.originalEvent||t).clipboardData.getData("text/plain"):window.clipboardData?window.clipboardData.getData("Text"):"";if(document.queryCommandSupported("insertText"))document.execCommand("insertText",!1,e);else{const o=document.getSelection().getRangeAt(0);o.deleteContents();const i=document.createTextNode(e);o.insertNode(i),o.selectNodeContents(i),o.collapse(!1);const s=window.getSelection();s.removeAllRanges(),s.addRange(o)}}},created(){this.route.item=this.$route.params.item.replaceAll("-"," "),this.route.category=this.$route.params.item,this.state=="view"||this.editing?this.$http.get(`https://omvs9m8wk9.execute-api.us-east-1.amazonaws.com/items/${this.route.item}`).then(t=>{this.item=t.data.Item,console.log(t.data)}).catch(t=>{console.log("Unable to get published item from setUpon api: error...\u{1F62D} "+t)}):(console.log("Creating new item mode"),this.item.images=[{url:"",caption:"",annotations:[]}]),this.$http.get(`https://api.reddit.com/r/all/search?q=${this.item.item.replaceAll(" ","+")}&limit=15`).then(t=>{console.log("Got data from reddit api:",t.data.data.children),this.reddit=t.data.data.children}).catch(t=>{console.log("Unable to get published reddit item from setUpon api: error...\u{1F62D} "+t)})}},x=Object.assign(Z,{setup(t){return(e,o)=>{const i=b("RouterLink");return l(),c("div",null,[a("header",null,[d(f,null,{default:n(()=>[d(w,{class:"grid-margin-x"},{default:n(()=>[d(_,{class:"large-5",id:"title"},{default:n(()=>[a("p",null,[e.category!=null?(l(),g(i,{key:0,to:"/items/"+e.category},{default:n(()=>[u(r(e.category),1)]),_:1},8,["to"])):(l(),g(i,{key:1,to:"/items"},{default:n(()=>[N]),_:1}))]),a("h2",{class:"input",placeholder:"Product Name\u2122\uFE0F",contenteditable:e.createMode,onInput:o[0]||(o[0]=s=>e.onInput(s,"item")),onKeydown:o[1]||(o[1]=s=>e.preventInput(s,30)),onPaste:o[2]||(o[2]=(...s)=>e.processPaste&&e.processPaste(...s))},r(e.item.item),41,S),a("blockquote",null,[U,a("span",{class:"input",placeholder:"Product description: This Kambrook toaster has a 2 slice capacity. Set for light and golden or crispy brown with its variable browning control.",contenteditable:e.createMode,onInput:o[3]||(o[3]=s=>e.onInput(s,"description")),onKeydown:o[4]||(o[4]=s=>e.preventInput(s,230)),onPaste:o[5]||(o[5]=(...s)=>e.processPaste&&e.processPaste(...s))},r(e.item.description),41,P),A])]),_:1}),d(_,{class:"large-7"},{default:n(()=>[a("div",j,[k(a("div",z,[a("input",{type:"file",accept:"image/jpeg",onChange:o[6]||(o[6]=s=>e.fileUpload(s,0))},null,32)],512),[[C,e.state=="create"]]),a("div",R,[e.item.images[0].url!=""?(l(),c("img",{key:0,src:e.item.images[0].url,alt:""},null,8,B)):(l(),c("div",q,V))])])]),_:1})]),_:1})]),_:1})]),a("section",E,[d(f,null,{default:n(()=>[G,K]),_:1})]),a("section",L,[d(f,null,{default:n(()=>[a("h3",null,'"'+r(e.item.item)+'" on reddit',1),O,e.state=="create"?(l(),c("p",W,H)):v("",!0),d(w,{class:"grid-margin-x"},{default:n(()=>[(l(!0),c(I,null,T(e.reddit,s=>(l(),g(_,{class:"large-6"},{default:n(()=>[a("a",{href:"https://www.reddit.com"+s.data.permalink,target:"_blank"},[a("h4",null,r(s.data.title),1),a("p",null,r(s.data.author)+" \u{1F537} "+r(s.data.subreddit_name_prefixed),1),s.data.is_reddit_media_domain==!0?(l(),c("img",{key:0,src:s.data.url},null,8,Q)):v("",!0),a("div",Y,r(s.data.score),1)],8,J)]),_:2},1024))),256))]),_:1})]),_:1})])])}}});var oe=y(x,[["__scopeId","data-v-8d80e8a0"]]);export{oe as default};
