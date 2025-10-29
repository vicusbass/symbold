var _u=Object.defineProperty,Au=(e,t,i)=>t in e?_u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Tu=(e,t,i)=>Au(e,t+"",i),p={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},M={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Ml={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},wl=Object.entries(Ml),s=wl.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),ku={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},bt=wl.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{...ku});Object.entries(bt).reduce((e,[t,i])=>{const a=s[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});var Su=Object.entries(s).reduce((e,[t,i])=>{const a=bt[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),Le={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},Qt={DISABLED:"disabled",SHOWING:"showing"},Oo={MOUSE:"mouse",TOUCH:"touch"},te={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},Ue={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Iu={FULLSCREEN:"fullscreen"};function yu(e){return e?.map(wu).join(" ")}function Mu(e){return e?.split(/\s+/).map(Lu)}function wu(e){if(e){const{id:t,width:i,height:a}=e;return[t,i,a].filter(r=>r!=null).join(":")}}function Lu(e){if(e){const[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function Cu(e){return e?.map(Du).join(" ")}function Ru(e){return e?.split(/\s+/).map(xu)}function Du(e){if(e){const{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(n=>n!=null).join(":")}}function xu(e){if(e){const[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function Ou(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function jn(e){return typeof e=="number"&&!Number.isNaN(e)&&Number.isFinite(e)}function Ll(e){return typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}var Cl=e=>new Promise(t=>setTimeout(t,e)),Uo=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Uu=(e,t)=>{const i=e===1?Uo[t].singular:Uo[t].plural;return`${e} ${i}`},Pi=e=>{if(!jn(e))return"";const t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((l,u)=>l&&Uu(l,u)).filter(l=>l).join(", ")}${i?" remaining":""}`};function ze(e,t){let i=!1;e<0&&(i=!0,e=0-e),e=e<0?0:e;let a=Math.floor(e%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);const o=Math.floor(t/60%60),l=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),n=n>0||l>0?n+":":"",r=((n||o>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}var Pu={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."},Po,$r={en:Pu},jr=((Po=globalThis.navigator)==null?void 0:Po.language)||"en",Nu=e=>{jr=e},Hu=e=>{var t,i,a;const[r]=jr.split("-");return((t=$r[jr])==null?void 0:t[e])||((i=$r[r])==null?void 0:i[e])||((a=$r.en)==null?void 0:a[e])||e},m=(e,t={})=>Hu(e).replace(/\{(\w+)\}/g,(i,a)=>a in t?String(t[a]):`{${a}}`),Rl=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},Dl=class extends Rl{},No=class extends Dl{constructor(){super(...arguments),this.role=null}},Bu=class{observe(){}unobserve(){}disconnect(){}},xl={createElement:function(){return new Vi.HTMLElement},createElementNS:function(){return new Vi.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},Vi={ResizeObserver:Bu,document:xl,Node:Dl,Element:No,HTMLElement:class extends No{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Vi.DocumentFragment}},DocumentFragment:class extends Rl{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(t,i){return{body:{textContent:t}}}}},Ol=typeof window>"u"||typeof window.customElements>"u",Ul=Object.keys(Vi).every(e=>e in globalThis),d=Ol&&!Ul?Vi:globalThis,V=Ol&&!Ul?xl:globalThis.document,Ho=new WeakMap,es=e=>{let t=Ho.get(e);return t||Ho.set(e,t=new Set),t},Pl=new d.ResizeObserver(e=>{for(const t of e)for(const i of es(t.target))i(t)});function ti(e,t){es(e).add(t),Pl.observe(e)}function ii(e,t){const i=es(e);i.delete(t),i.size||Pl.unobserve(e)}function ne(e){const t={};for(const i of e)t[i.name]=i.value;return t}function le(e){var t;return(t=en(e))!=null?t:oi(e,"media-controller")}function en(e){var t;const{MEDIA_CONTROLLER:i}=M,a=e.getAttribute(i);if(a)return(t=wr(e))==null?void 0:t.getElementById(a)}var Nl=(e,t,i=".value")=>{const a=e.querySelector(i);a&&(a.textContent=t)},$u=(e,t)=>{const i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},Hl=(e,t)=>$u(e,t)[0],Ne=(e,t)=>!e||!t?!1:e?.contains(t)?!0:Ne(e,t.getRootNode().host),oi=(e,t)=>{if(!e)return null;const i=e.closest(t);return i||oi(e.getRootNode().host,t)};function ts(e=document){var t;const i=e?.activeElement;return i?(t=ts(i.shadowRoot))!=null?t:i:null}function wr(e){var t;const i=(t=e?.getRootNode)==null?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function Bl(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,t--}return!0}function Wu(e,t,i,a){const r=a.x-i.x,n=a.y-i.y,o=r*r+n*n;if(o===0)return 0;const l=((e-i.x)*r+(t-i.y)*n)/o;return Math.max(0,Math.min(1,l))}function W(e,t){const i=Fu(e,a=>a===t);return i||$l(e,t)}function Fu(e,t){var i,a;let r;for(r of(i=e.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of n??[])if(t(o.selectorText))return o}}function $l(e,t){var i,a;const r=(i=e.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];return n?.sheet?(n?.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function O(e,t,i=Number.NaN){const a=e.getAttribute(t);return a!=null?+a:i}function H(e,t,i){const a=+i;if(i==null||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}O(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function S(e,t){return e.hasAttribute(t)}function I(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}S(e,t)!=i&&e.toggleAttribute(t,i)}function U(e,t,i=null){var a;return(a=e.getAttribute(t))!=null?a:i}function P(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}const a=`${i}`;U(e,t,void 0)!==a&&e.setAttribute(t,a)}var Wl=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},He=(e,t,i)=>(Wl(e,t,"read from private field"),i?i.call(e):t.get(e)),Vu=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ra=(e,t,i,a)=>(Wl(e,t,"write to private field"),t.set(e,i),i),J;function Gu(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var Lr=class extends d.HTMLElement{constructor(){if(super(),Vu(this,J,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER,s.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===M.MEDIA_CONTROLLER&&(t&&((r=(a=He(this,J))==null?void 0:a.unassociateElement)==null||r.call(a,this),ra(this,J,null)),i&&this.isConnected&&(ra(this,J,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=He(this,J))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ra(this,J,Ku(this)),this.getAttribute(M.MEDIA_CONTROLLER)&&((t=(e=He(this,J))==null?void 0:e.associateElement)==null||t.call(e,this)),(i=He(this,J))==null||i.addEventListener("pointerdown",this),(a=He(this,J))==null||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(M.MEDIA_CONTROLLER)&&((t=(e=He(this,J))==null?void 0:e.unassociateElement)==null||t.call(e,this)),(i=He(this,J))==null||i.removeEventListener("pointerdown",this),(a=He(this,J))==null||a.removeEventListener("click",this),ra(this,J,null)}handleEvent(e){var t;const i=(t=e.composedPath())==null?void 0:t[0];if(["video","media-controller"].includes(i?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:r,clientY:n}=e,{left:o,top:l,width:u,height:c}=this.getBoundingClientRect(),f=r-o,g=n-l;if(f<0||g<0||f>u||g>c||u===0&&c===0)return;const v=this._pointerType||"mouse";if(this._pointerType=void 0,v===Oo.TOUCH){this.handleTap(e);return}else if(v===Oo.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return S(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const t=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}};J=new WeakMap;Lr.shadowRootOptions={mode:"open"};Lr.getTemplateHTML=Gu;function Ku(e){var t;const i=e.getAttribute(M.MEDIA_CONTROLLER);return i?(t=e.getRootNode())==null?void 0:t.getElementById(i):oi(e,"media-controller")}d.customElements.get("media-gesture-receiver")||d.customElements.define("media-gesture-receiver",Lr);var Bo=Lr,is=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},re=(e,t,i)=>(is(e,t,"read from private field"),i?i.call(e):t.get(e)),ie=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},it=(e,t,i,a)=>(is(e,t,"write to private field"),t.set(e,i),i),oe=(e,t,i)=>(is(e,t,"access private method"),i),or,Ct,Gi,Kt,_a,tn,Fl,Ai,Aa,an,Vl,rn,Gl,Ki,Cr,Rr,as,ai,qi,b={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function qu(e){return`
    <style>
      
      :host([${s.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${b.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${b.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${b.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${b.AUDIO}])[${b.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${b.AUDIO}])[${b.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${b.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${b.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${b.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${b.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${b.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${b.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_AIRPLAYING}]):not([${s.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${b.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${b.USER_INACTIVE}]:not([${b.NO_AUTOHIDE}]):not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${b.USER_INACTIVE}][${b.AUTOHIDE_OVER_CONTROLS}]:not([${b.NO_AUTOHIDE}]):not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${b.AUDIO}])[${s.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Bo.shadowRootOptions.mode}">
          ${Bo.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var Zu=Object.values(s),Yu="sm:384 md:576 lg:768 xl:960";function Qu(e){Kl(e.target,e.contentRect.width)}function Kl(e,t){var i;if(!e.isConnected)return;const a=(i=e.getAttribute(b.BREAKPOINTS))!=null?i:Yu,r=zu(a),n=Xu(r,t);let o=!1;if(Object.keys(r).forEach(l=>{if(n.includes(l)){e.hasAttribute(`breakpoint${l}`)||(e.setAttribute(`breakpoint${l}`,""),o=!0);return}e.hasAttribute(`breakpoint${l}`)&&(e.removeAttribute(`breakpoint${l}`),o=!0)}),o){const l=new CustomEvent(bt.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(l)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(bt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function zu(e){const t=e.split(/\s+/);return Object.fromEntries(t.map(i=>i.split(":")))}function Xu(e,t){return Object.keys(e).filter(i=>t>=parseInt(e[i]))}var Dr=class extends d.HTMLElement{constructor(){if(super(),ie(this,tn),ie(this,an),ie(this,rn),ie(this,Ki),ie(this,Rr),ie(this,ai),ie(this,or,0),ie(this,Ct,null),ie(this,Gi,null),ie(this,Kt,void 0),this.breakpointsComputed=!1,ie(this,_a,new MutationObserver(oe(this,tn,Fl).bind(this))),ie(this,Ai,!1),ie(this,Aa,t=>{re(this,Ai)||(setTimeout(()=>{Qu(t),it(this,Ai,!1)},0),it(this,Ai,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=ne(this.attributes),i=this.constructor.getTemplateHTML(t);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){re(this,Ct)&&this.mediaUnsetCallback(re(this,Ct));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[b.AUTOHIDE,b.GESTURES_DISABLED].concat(Zu).filter(e=>![s.MEDIA_RENDITION_LIST,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_CHAPTERS_CUES,s.MEDIA_WIDTH,s.MEDIA_HEIGHT,s.MEDIA_ERROR,s.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==b.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(it(this,Ct,e),e.localName.includes("-")&&await d.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;re(this,_a).observe(this,{childList:!0,subtree:!0}),ti(this,re(this,Aa));const t=this.getAttribute(b.AUDIO)!=null,i=m(t?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",i),this.handleMediaUpdated(this.media),this.setAttribute(b.USER_INACTIVE,""),Kl(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=d.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;re(this,_a).disconnect(),ii(this,re(this,Aa)),this.media&&this.mediaUnsetCallback(this.media),(e=d.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){it(this,Ct,null)}handleEvent(e){switch(e.type){case"pointerdown":it(this,or,e.timeStamp);break;case"pointermove":oe(this,an,Vl).call(this,e);break;case"pointerup":oe(this,rn,Gl).call(this,e);break;case"mouseleave":oe(this,Ki,Cr).call(this);break;case"mouseup":this.removeAttribute(b.KEYBOARD_CONTROL);break;case"keyup":oe(this,ai,qi).call(this),this.setAttribute(b.KEYBOARD_CONTROL,"");break}}set autohide(e){const t=Number(e);it(this,Kt,isNaN(t)?0:t)}get autohide(){return(re(this,Kt)===void 0?2:re(this,Kt)).toString()}get breakpoints(){return U(this,b.BREAKPOINTS)}set breakpoints(e){P(this,b.BREAKPOINTS,e)}get audio(){return S(this,b.AUDIO)}set audio(e){I(this,b.AUDIO,e)}get gesturesDisabled(){return S(this,b.GESTURES_DISABLED)}set gesturesDisabled(e){I(this,b.GESTURES_DISABLED,e)}get keyboardControl(){return S(this,b.KEYBOARD_CONTROL)}set keyboardControl(e){I(this,b.KEYBOARD_CONTROL,e)}get noAutohide(){return S(this,b.NO_AUTOHIDE)}set noAutohide(e){I(this,b.NO_AUTOHIDE,e)}get autohideOverControls(){return S(this,b.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){I(this,b.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return S(this,b.USER_INACTIVE)}set userInteractive(e){I(this,b.USER_INACTIVE,e)}};or=new WeakMap;Ct=new WeakMap;Gi=new WeakMap;Kt=new WeakMap;_a=new WeakMap;tn=new WeakSet;Fl=function(e){const t=this.media;for(const i of e){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!t)this.mediaUnsetCallback(r);else{let o=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(r)}}if(t)for(const r of i.addedNodes)r===t&&this.handleMediaUpdated(t)}};Ai=new WeakMap;Aa=new WeakMap;an=new WeakSet;Vl=function(e){if(e.pointerType!=="mouse"&&e.timeStamp-re(this,or)<250)return;oe(this,Rr,as).call(this),clearTimeout(re(this,Gi));const t=this.hasAttribute(b.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&oe(this,ai,qi).call(this)};rn=new WeakSet;Gl=function(e){if(e.pointerType==="touch"){const t=!this.hasAttribute(b.USER_INACTIVE);[this,this.media].includes(e.target)&&t?oe(this,Ki,Cr).call(this):oe(this,ai,qi).call(this)}else e.composedPath().some(t=>["media-play-button","media-fullscreen-button"].includes(t?.localName))&&oe(this,ai,qi).call(this)};Ki=new WeakSet;Cr=function(){if(re(this,Kt)<0||this.hasAttribute(b.USER_INACTIVE))return;this.setAttribute(b.USER_INACTIVE,"");const e=new d.CustomEvent(bt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)};Rr=new WeakSet;as=function(){if(!this.hasAttribute(b.USER_INACTIVE))return;this.removeAttribute(b.USER_INACTIVE);const e=new d.CustomEvent(bt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)};ai=new WeakSet;qi=function(){oe(this,Rr,as).call(this),clearTimeout(re(this,Gi));const e=parseInt(this.autohide);e<0||it(this,Gi,setTimeout(()=>{oe(this,Ki,Cr).call(this)},e*1e3))};Dr.shadowRootOptions={mode:"open"};Dr.getTemplateHTML=qu;d.customElements.get("media-container")||d.customElements.define("media-container",Dr);var ql=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Z=(e,t,i)=>(ql(e,t,"read from private field"),i?i.call(e):t.get(e)),hi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},na=(e,t,i,a)=>(ql(e,t,"write to private field"),t.set(e,i),i),Rt,Dt,lr,lt,Oe,We,rs=class{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){hi(this,Oe),hi(this,Rt,void 0),hi(this,Dt,void 0),hi(this,lr,void 0),hi(this,lt,new Set),na(this,Rt,e),na(this,Dt,t),na(this,lr,new Set(i))}[Symbol.iterator](){return Z(this,Oe,We).values()}get length(){return Z(this,Oe,We).size}get value(){var e;return(e=[...Z(this,Oe,We)].join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(na(this,lt,new Set),this.add(...(t=e?.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return[...Z(this,Oe,We)][e]}values(){return Z(this,Oe,We).values()}forEach(e,t){Z(this,Oe,We).forEach(e,t)}add(...e){var t,i;e.forEach(a=>Z(this,lt).add(a)),!(this.value===""&&!((t=Z(this,Rt))!=null&&t.hasAttribute(`${Z(this,Dt)}`)))&&((i=Z(this,Rt))==null||i.setAttribute(`${Z(this,Dt)}`,`${this.value}`))}remove(...e){var t;e.forEach(i=>Z(this,lt).delete(i)),(t=Z(this,Rt))==null||t.setAttribute(`${Z(this,Dt)}`,`${this.value}`)}contains(e){return Z(this,Oe,We).has(e)}toggle(e,t){return typeof t<"u"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}};Rt=new WeakMap;Dt=new WeakMap;lr=new WeakMap;lt=new WeakMap;Oe=new WeakSet;We=function(){return Z(this,lt).size?Z(this,lt):Z(this,lr)};var Ju=(e="")=>e.split(/\s+/),Zl=(e="")=>{const[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:t==="cc"?Le.CAPTIONS:Le.SUBTITLES,language:i,label:r}},xr=(e="",t={})=>Ju(e).map(i=>{const a=Zl(i);return{...t,...a}}),Yl=e=>e?Array.isArray(e)?e.map(t=>typeof t=="string"?Zl(t):t):typeof e=="string"?xr(e):[e]:[],nn=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${e==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,Zi=(e=[])=>Array.prototype.map.call(e,nn).join(" "),ju=(e,t)=>i=>i[e]===t,Ql=e=>{const t=Object.entries(e).map(([i,a])=>ju(i,a));return i=>t.every(a=>a(i))},Ni=(e,t=[],i=[])=>{const a=Yl(i).map(Ql),r=n=>a.some(o=>o(n));Array.from(t).filter(r).forEach(n=>{n.mode=e})},Or=(e,t=()=>!0)=>{if(!e?.textTracks)return[];const i=typeof t=="function"?t:Ql(t);return Array.from(e.textTracks).filter(i)},zl=e=>{var t;return!!((t=e.mediaSubtitlesShowing)!=null&&t.length)||e.hasAttribute(s.MEDIA_SUBTITLES_SHOWING)},ec=e=>{var t;const{media:i,fullscreenElement:a}=e;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(t=a[r])==null?void 0:t.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},$o="exitFullscreen"in V?"exitFullscreen":"webkitExitFullscreen"in V?"webkitExitFullscreen":"webkitCancelFullScreen"in V?"webkitCancelFullScreen":void 0,tc=e=>{var t;const{documentElement:i}=e;if($o){const a=(t=i?.[$o])==null?void 0:t.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Ti="fullscreenElement"in V?"fullscreenElement":"webkitFullscreenElement"in V?"webkitFullscreenElement":void 0,ic=e=>{const{documentElement:t,media:i}=e,a=t?.[Ti];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Iu.FULLSCREEN?i:a},ac=e=>{var t;const{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;const n=ic(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let o=n.shadowRoot;if(!(Ti in o))return Ne(n,r);for(;o?.[Ti];){if(o[Ti]===r)return!0;o=(t=o[Ti])==null?void 0:t.shadowRoot}}return!1},rc="fullscreenEnabled"in V?"fullscreenEnabled":"webkitFullscreenEnabled"in V?"webkitFullscreenEnabled":void 0,nc=e=>{const{documentElement:t,media:i}=e;return!!t?.[rc]||i&&"webkitSupportsFullscreen"in i},sa,ns=()=>{var e,t;return sa||(sa=(t=(e=V)==null?void 0:e.createElement)==null?void 0:t.call(e,"video"),sa)},sc=async(e=ns())=>{if(!e)return!1;const t=e.volume;e.volume=t/2+.1;const i=new AbortController,a=await Promise.race([oc(e,i.signal),lc(e,t)]);return i.abort(),a},oc=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),lc=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await Cl(10)}return e.volume!==t},dc=/.*Version\/.*Safari\/.*/.test(d.navigator.userAgent),Xl=(e=ns())=>d.matchMedia("(display-mode: standalone)").matches&&dc?!1:typeof e?.requestPictureInPicture=="function",Jl=(e=ns())=>nc({documentElement:V,media:e}),uc=Jl(),cc=Xl(),hc=!!d.WebKitPlaybackTargetAvailabilityEvent,mc=!!d.chrome,dr=e=>Or(e.media,t=>[Le.SUBTITLES,Le.CAPTIONS].includes(t.kind)).sort((t,i)=>t.kind>=i.kind?1:-1),jl=e=>Or(e.media,t=>t.mode===Qt.SHOWING&&[Le.SUBTITLES,Le.CAPTIONS].includes(t.kind)),ed=(e,t)=>{const i=dr(e),a=jl(e),r=!!a.length;if(i.length){if(t===!1||r&&t!==!0)Ni(Qt.DISABLED,i,a);else if(t===!0||!r&&t!==!1){let n=i[0];const{options:o}=e;if(!o?.noSubtitlesLangPref){const f=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),g=f?[f,...globalThis.navigator.languages]:globalThis.navigator.languages,v=i.filter(E=>g.some(w=>E.language.toLowerCase().startsWith(w.split("-")[0]))).sort((E,w)=>{const _=g.findIndex(x=>E.language.toLowerCase().startsWith(x.split("-")[0])),k=g.findIndex(x=>w.language.toLowerCase().startsWith(x.split("-")[0]));return _-k});v[0]&&(n=v[0])}const{language:l,label:u,kind:c}=n;Ni(Qt.DISABLED,i,a),Ni(Qt.SHOWING,i,[{language:l,label:u,kind:c}])}}},ss=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e=="number"&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e!="object"?!1:Array.isArray(e)?vc(e,t):Object.entries(e).every(([i,a])=>i in t&&ss(a,t[i])),vc=(e,t)=>{const i=Array.isArray(e),a=Array.isArray(t);return i!==a?!1:i||a?e.length!==t.length?!1:e.every((r,n)=>ss(r,t[n])):!0},pc=Object.values(Ue),ur,Ec=sc().then(e=>(ur=e,ur)),fc=async(...e)=>{await Promise.all(e.filter(t=>t).map(async t=>{if(!("localName"in t&&t instanceof d.HTMLElement))return;const i=t.localName;if(!i.includes("-"))return;const a=d.customElements.get(i);a&&t instanceof a||(await d.customElements.whenDefined(i),d.customElements.upgrade(t))}))},gc=new d.DOMParser,bc=e=>e&&(gc.parseFromString(e,"text/html").body.textContent||e),ki={mediaError:{get(e,t){const{media:i}=e;if(t?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;const{media:a}=e;if(t?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;const{media:r}=e;if(t?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;const{media:i}=e;return(t=i?.videoWidth)!=null?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;const{media:i}=e;return(t=i?.videoHeight)!=null?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;const{media:i}=e;return(t=i?.paused)!=null?t:!0},set(e,t){var i;const{media:a}=t;a&&(e?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){const{media:i}=e;return i?t?t.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;const{media:i}=e;return(t=i?.ended)!=null?t:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;const{media:i}=e;return(t=i?.playbackRate)!=null?t:1},set(e,t){const{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;const{media:i}=e;return(t=i?.muted)!=null?t:!1},set(e,t){const{media:i}=t;if(i){try{d.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noMutedPref:i}}=t,{media:a}=t;if(!(!a||a.muted||i))try{const r=d.localStorage.getItem("media-chrome-pref-muted")==="true";ki.mediaMuted.set(r,t),e(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaVolume:{get(e){var t;const{media:i}=e;return(t=i?.volume)!=null?t:1},set(e,t){const{media:i}=t;if(i){try{e==null?d.localStorage.removeItem("media-chrome-pref-volume"):d.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noVolumePref:i}}=t;if(!i)try{const{media:a}=t;if(!a)return;const r=d.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;ki.mediaVolume.set(+r,t),e(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(e){const{media:t}=e;return typeof t?.volume>"u"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;const{media:i}=e;return(t=i?.currentTime)!=null?t:0},set(e,t){const{media:i}=t;!i||!jn(e)||(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){const{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(t?.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){const{media:t}=e;return t?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;const{media:i}=e;if(!((t=i?.seekable)!=null&&t.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;const{media:i}=e,a=(t=i?.buffered)!=null?t:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){const{media:t,options:{defaultStreamType:i}={}}=e,a=[Ue.LIVE,Ue.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;const{streamType:r}=t;if(pc.includes(r))return r===Ue.UNKNOWN?a:r;const n=t.duration;return n===1/0?Ue.LIVE:Number.isFinite(n)?Ue.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){const{media:t}=e;if(!t)return Number.NaN;const{targetLiveWindow:i}=t,a=ki.mediaStreamType.get(e);return(i==null||Number.isNaN(i))&&a===Ue.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){const{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(!(ki.mediaStreamType.get(e)===Ue.LIVE))return!1;const r=t.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(e){return dr(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(e){return jl(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;const{media:r,options:n}=t;if(!r)return;const o=l=>{var u;!n.defaultSubtitles||l&&![Le.CAPTIONS,Le.SUBTITLES].includes((u=l?.track)==null?void 0:u.kind)||ed(t,!0)};return r.addEventListener("loadstart",o),(i=r.textTracks)==null||i.addEventListener("addtrack",o),(a=r.textTracks)==null||a.addEventListener("removetrack",o),()=>{var l,u;r.removeEventListener("loadstart",o),(l=r.textTracks)==null||l.removeEventListener("addtrack",o),(u=r.textTracks)==null||u.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(e){var t;const{media:i}=e;if(!i)return[];const[a]=Or(i,{kind:Le.CHAPTERS});return Array.from((t=a?.cues)!=null?t:[]).map(({text:r,startTime:n,endTime:o})=>({text:bc(r),startTime:n,endTime:o}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",e),n?.addEventListener("load",e),()=>{r?.removeEventListener("load",e),n?.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;const{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(t=a.localName)!=null&&t.includes("-")?Ne(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(e,t){const{media:i}=t;if(i)if(e){if(!V.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",o),i.preload="none"},o=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",o),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else V.pictureInPictureElement&&V.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;const{media:i}=e;return[...(t=i?.videoRenditions)!=null?t:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;const{media:r}=e;return(a=(i=r?.videoRenditions)==null?void 0:i[(t=r.videoRenditions)==null?void 0:t.selectedIndex])==null?void 0:a.id},set(e,t){const{media:i}=t;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=e,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;const{media:i}=e;return[...(t=i?.audioTracks)!=null?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;const{media:a}=e;return(i=[...(t=a?.audioTracks)!=null?t:[]].find(r=>r.enabled))==null?void 0:i.id},set(e,t){const{media:i}=t;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=e;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){return ac(e)},set(e,t){e?ec(t):tc(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;const{media:i}=e;return!i?.remote||((t=i.remote)==null?void 0:t.state)==="disconnected"?!1:!!i.remote.state},set(e,t){var i,a;const{media:r}=t;if(r&&!(e&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!e&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(e,t){const{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&d.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){const{media:t}=e;if(!uc||!Jl(t))return te.UNSUPPORTED}},mediaPipUnavailable:{get(e){const{media:t}=e;if(!cc||!Xl(t))return te.UNSUPPORTED;if(t?.disablePictureInPicture)return te.UNAVAILABLE}},mediaVolumeUnavailable:{get(e){const{media:t}=e;if(ur===!1||t?.volume==null)return te.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{ur==null&&Ec.then(t=>e(t?void 0:te.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;const{media:a}=e;if(!mc||!((i=a?.remote)!=null&&i.state))return te.UNSUPPORTED;if(!(t==null||t==="available"))return te.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(e,t){if(!hc)return te.UNSUPPORTED;if(t?.availability==="not-available")return te.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(e){var t;const{media:i}=e;if(!i?.videoRenditions)return te.UNSUPPORTED;if(!((t=i.videoRenditions)!=null&&t.length))return te.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;const{media:a}=e;if(!a?.audioTracks)return te.UNSUPPORTED;if(((i=(t=a.audioTracks)==null?void 0:t.length)!=null?i:0)<=1)return te.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){const{options:{mediaLang:t}={}}=e;return t??"en"}}},_c={[p.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;const{media:o}=t,l=i??void 0;let u,c;if(o&&l!=null){const[E]=Or(o,{kind:Le.METADATA,label:"thumbnails"}),w=Array.prototype.find.call((a=E?.cues)!=null?a:[],(_,k,x)=>k===0?_.endTime>l:k===x.length-1?_.startTime<=l:_.startTime<=l&&_.endTime>l);if(w){const _=/'^(?:[a-z]+:)?\/\//i.test(w.text)||(r=o?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,k=new URL(w.text,_);c=new URLSearchParams(k.hash).get("#xywh").split(",").map(X=>+X),u=k.href}}const f=e.mediaDuration.get(t);let v=(n=e.mediaChaptersCues.get(t).find((E,w,_)=>w===_.length-1&&f===E.endTime?E.startTime<=l&&E.endTime>=l:E.startTime<=l&&E.endTime>l))==null?void 0:n.text;return i!=null&&v==null&&(v=""),{mediaPreviewTime:l,mediaPreviewImage:u,mediaPreviewCoords:c,mediaPreviewChapter:v}},[p.MEDIA_PAUSE_REQUEST](e,t){e["mediaPaused"].set(!0,t)},[p.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;const o="mediaPaused",u=e.mediaStreamType.get(t)===Ue.LIVE,c=!((i=t.options)!=null&&i.noAutoSeekToLive),f=e.mediaTargetLiveWindow.get(t)>0;if(u&&c&&!f){const g=(a=e.mediaSeekable.get(t))==null?void 0:a[1];if(g){const v=(n=(r=t.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,E=g-v;e.mediaCurrentTime.set(E,t)}}e[o].set(!1,t)},[p.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){const a="mediaPlaybackRate",r=i;e[a].set(r,t)},[p.MEDIA_MUTE_REQUEST](e,t){e["mediaMuted"].set(!0,t)},[p.MEDIA_UNMUTE_REQUEST](e,t){const i="mediaMuted";e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e[i].set(!1,t)},[p.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){const a="mediaVolume",r=i;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e[a].set(r,t)},[p.MEDIA_SEEK_REQUEST](e,t,{detail:i}){const a="mediaCurrentTime",r=i;e[a].set(r,t)},[p.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;const n="mediaCurrentTime",o=(i=e.mediaSeekable.get(t))==null?void 0:i[1];if(Number.isNaN(Number(o)))return;const l=(r=(a=t.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,u=o-l;e[n].set(u,t)},[p.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;const{options:r}=t,n=dr(t),o=Yl(i),l=(a=o[0])==null?void 0:a.language;l&&!r.noSubtitlesLangPref&&d.localStorage.setItem("media-chrome-pref-subtitles-lang",l),Ni(Qt.SHOWING,n,o)},[p.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){const a=dr(t),r=i??[];Ni(Qt.DISABLED,a,r)},[p.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){ed(t,i)},[p.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){const a="mediaRenditionSelected",r=i;e[a].set(r,t)},[p.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){const a="mediaAudioTrackEnabled",r=i;e[a].set(r,t)},[p.MEDIA_ENTER_PIP_REQUEST](e,t){const i="mediaIsPip";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[p.MEDIA_EXIT_PIP_REQUEST](e,t){e["mediaIsPip"].set(!1,t)},[p.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){const i="mediaIsFullscreen";e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e[i].set(!0,t)},[p.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e["mediaIsFullscreen"].set(!1,t)},[p.MEDIA_ENTER_CAST_REQUEST](e,t){const i="mediaIsCasting";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[p.MEDIA_EXIT_CAST_REQUEST](e,t){e["mediaIsCasting"].set(!1,t)},[p.MEDIA_AIRPLAY_REQUEST](e,t){e["mediaIsAirplaying"].set(!0,t)}},Ac=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=ki,requestMap:r=_c,options:n={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{const l=[],u={options:{...n}};let c=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const f=_=>{_!=null&&(ss(_,c)||(c=Object.freeze({...c,..._}),l.forEach(k=>k(c))))},g=()=>{const _=Object.entries(a).reduce((k,[x,{get:X}])=>(k[x]=X(u),k),{});f(_)},v={};let E;const w=async(_,k)=>{var x,X,je,At,eo,to,io,ao,ro,no,so,oo,lo,uo,co,ho;const hu=!!E;if(E={...u,...E??{},..._},hu)return;await fc(...Object.values(_));const Tt=l.length>0&&k===0&&o,mo=u.media!==E.media,vo=((x=u.media)==null?void 0:x.textTracks)!==((X=E.media)==null?void 0:X.textTracks),po=((je=u.media)==null?void 0:je.videoRenditions)!==((At=E.media)==null?void 0:At.videoRenditions),Eo=((eo=u.media)==null?void 0:eo.audioTracks)!==((to=E.media)==null?void 0:to.audioTracks),fo=((io=u.media)==null?void 0:io.remote)!==((ao=E.media)==null?void 0:ao.remote),go=u.documentElement!==E.documentElement,bo=!!u.media&&(mo||Tt),_o=!!((ro=u.media)!=null&&ro.textTracks)&&(vo||Tt),Ao=!!((no=u.media)!=null&&no.videoRenditions)&&(po||Tt),To=!!((so=u.media)!=null&&so.audioTracks)&&(Eo||Tt),ko=!!((oo=u.media)!=null&&oo.remote)&&(fo||Tt),So=!!u.documentElement&&(go||Tt),Io=bo||_o||Ao||To||ko||So,kt=l.length===0&&k===1&&o,yo=!!E.media&&(mo||kt),Mo=!!((lo=E.media)!=null&&lo.textTracks)&&(vo||kt),wo=!!((uo=E.media)!=null&&uo.videoRenditions)&&(po||kt),Lo=!!((co=E.media)!=null&&co.audioTracks)&&(Eo||kt),Co=!!((ho=E.media)!=null&&ho.remote)&&(fo||kt),Ro=!!E.documentElement&&(go||kt),Do=yo||Mo||wo||Lo||Co||Ro;if(!(Io||Do)){Object.entries(E).forEach(([D,ci])=>{u[D]=ci}),g(),E=void 0;return}Object.entries(a).forEach(([D,{get:ci,mediaEvents:mu=[],textTracksEvents:vu=[],videoRenditionsEvents:pu=[],audioTracksEvents:Eu=[],remoteEvents:fu=[],rootEvents:gu=[],stateOwnersUpdateHandlers:bu=[]}])=>{v[D]||(v[D]={});const j=B=>{const ee=ci(u,B);f({[D]:ee})};let G;G=v[D].mediaEvents,mu.forEach(B=>{G&&bo&&(u.media.removeEventListener(B,G),v[D].mediaEvents=void 0),yo&&(E.media.addEventListener(B,j),v[D].mediaEvents=j)}),G=v[D].textTracksEvents,vu.forEach(B=>{var ee,de;G&&_o&&((ee=u.media.textTracks)==null||ee.removeEventListener(B,G),v[D].textTracksEvents=void 0),Mo&&((de=E.media.textTracks)==null||de.addEventListener(B,j),v[D].textTracksEvents=j)}),G=v[D].videoRenditionsEvents,pu.forEach(B=>{var ee,de;G&&Ao&&((ee=u.media.videoRenditions)==null||ee.removeEventListener(B,G),v[D].videoRenditionsEvents=void 0),wo&&((de=E.media.videoRenditions)==null||de.addEventListener(B,j),v[D].videoRenditionsEvents=j)}),G=v[D].audioTracksEvents,Eu.forEach(B=>{var ee,de;G&&To&&((ee=u.media.audioTracks)==null||ee.removeEventListener(B,G),v[D].audioTracksEvents=void 0),Lo&&((de=E.media.audioTracks)==null||de.addEventListener(B,j),v[D].audioTracksEvents=j)}),G=v[D].remoteEvents,fu.forEach(B=>{var ee,de;G&&ko&&((ee=u.media.remote)==null||ee.removeEventListener(B,G),v[D].remoteEvents=void 0),Co&&((de=E.media.remote)==null||de.addEventListener(B,j),v[D].remoteEvents=j)}),G=v[D].rootEvents,gu.forEach(B=>{G&&So&&(u.documentElement.removeEventListener(B,G),v[D].rootEvents=void 0),Ro&&(E.documentElement.addEventListener(B,j),v[D].rootEvents=j)});const xo=v[D].stateOwnersUpdateHandlers;bu.forEach(B=>{xo&&Io&&xo(),Do&&(v[D].stateOwnersUpdateHandlers=B(j,E))})}),Object.entries(E).forEach(([D,ci])=>{u[D]=ci}),g(),E=void 0};return w({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(_){const{type:k,detail:x}=_;if(r[k]&&c.mediaErrorCode==null){f(r[k](a,u,_));return}k==="mediaelementchangerequest"?w({media:x}):k==="fullscreenelementchangerequest"?w({fullscreenElement:x}):k==="documentelementchangerequest"?w({documentElement:x}):k==="optionschangerequest"&&(Object.entries(x??{}).forEach(([X,je])=>{u.options[X]=je}),g())},getState(){return c},subscribe(_){return w({},l.length+1),l.push(_),_(c),()=>{const k=l.indexOf(_);k>=0&&(w({},l.length-1),l.splice(k,1))}}}},os=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},A=(e,t,i)=>(os(e,t,"read from private field"),i?i.call(e):t.get(e)),Re=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Be=(e,t,i,a)=>(os(e,t,"write to private field"),t.set(e,i),i),Ye=(e,t,i)=>(os(e,t,"access private method"),i),dt,Si,C,Ii,Ee,Ta,ka,sn,ri,Yi,Sa,on,td=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],Wo=10,h={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"},Tc=class extends Dr{constructor(){super(),Re(this,ka),Re(this,ri),Re(this,Sa),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,Re(this,dt,new rs(this,h.HOTKEYS)),Re(this,Si,void 0),Re(this,C,void 0),Re(this,Ii,void 0),Re(this,Ee,void 0),Re(this,Ta,t=>{var i;(i=A(this,C))==null||i.dispatch(t)}),this.associateElement(this);let e={};Be(this,Ii,t=>{Object.entries(t).forEach(([i,a])=>{if(i in e&&e[i]===a)return;this.propagateMediaState(i,a);const r=i.toLowerCase(),n=new d.CustomEvent(Su[r],{composed:!0,detail:a});this.dispatchEvent(n)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(h.NO_HOTKEYS,h.HOTKEYS,h.DEFAULT_STREAM_TYPE,h.DEFAULT_SUBTITLES,h.DEFAULT_DURATION,h.LANG)}get mediaStore(){return A(this,C)}set mediaStore(e){var t,i;if(A(this,C)&&((t=A(this,Ee))==null||t.call(this),Be(this,Ee,void 0)),Be(this,C,e),!A(this,C)&&!this.hasAttribute(h.NO_DEFAULT_STORE)){Ye(this,ka,sn).call(this);return}Be(this,Ee,(i=A(this,C))==null?void 0:i.subscribe(A(this,Ii)))}get fullscreenElement(){var e;return(e=A(this,Si))!=null?e:this}set fullscreenElement(e){var t;this.hasAttribute(h.FULLSCREEN_ELEMENT)&&this.removeAttribute(h.FULLSCREEN_ELEMENT),Be(this,Si,e),(t=A(this,C))==null||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return S(this,h.DEFAULT_SUBTITLES)}set defaultSubtitles(e){I(this,h.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return U(this,h.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){P(this,h.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return O(this,h.DEFAULT_DURATION)}set defaultDuration(e){H(this,h.DEFAULT_DURATION,e)}get noHotkeys(){return S(this,h.NO_HOTKEYS)}set noHotkeys(e){I(this,h.NO_HOTKEYS,e)}get keysUsed(){return U(this,h.KEYS_USED)}set keysUsed(e){P(this,h.KEYS_USED,e)}get liveEdgeOffset(){return O(this,h.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){H(this,h.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return S(this,h.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){I(this,h.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return S(this,h.NO_VOLUME_PREF)}set noVolumePref(e){I(this,h.NO_VOLUME_PREF,e)}get noSubtitlesLangPref(){return S(this,h.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){I(this,h.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return S(this,h.NO_DEFAULT_STORE)}set noDefaultStore(e){I(this,h.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,o,l,u,c,f,g;if(super.attributeChangedCallback(e,t,i),e===h.NO_HOTKEYS)i!==t&&i===""?(this.hasAttribute(h.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&i===null&&this.enableHotkeys();else if(e===h.HOTKEYS)A(this,dt).value=i;else if(e===h.DEFAULT_SUBTITLES&&i!==t)(a=A(this,C))==null||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(h.DEFAULT_SUBTITLES)}});else if(e===h.DEFAULT_STREAM_TYPE)(n=A(this,C))==null||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(r=this.getAttribute(h.DEFAULT_STREAM_TYPE))!=null?r:void 0}});else if(e===h.LIVE_EDGE_OFFSET)(o=A(this,C))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(h.LIVE_EDGE_OFFSET)?+this.getAttribute(h.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(h.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(h.LIVE_EDGE_OFFSET)}});else if(e===h.SEEK_TO_LIVE_OFFSET)(l=A(this,C))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(h.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(h.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===h.NO_AUTO_SEEK_TO_LIVE)(u=A(this,C))==null||u.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(h.NO_AUTO_SEEK_TO_LIVE)}});else if(e===h.FULLSCREEN_ELEMENT){const v=i?(c=this.getRootNode())==null?void 0:c.getElementById(i):void 0;Be(this,Si,v),(f=A(this,C))==null||f.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===h.LANG&&i!==t&&(Nu(i),(g=A(this,C))==null||g.dispatch({type:"optionschangerequest",detail:{mediaLang:i}}))}connectedCallback(){var e,t;!A(this,C)&&!this.hasAttribute(h.NO_DEFAULT_STORE)&&Ye(this,ka,sn).call(this),(e=A(this,C))==null||e.dispatch({type:"documentelementchangerequest",detail:V}),super.connectedCallback(),A(this,C)&&!A(this,Ee)&&Be(this,Ee,(t=A(this,C))==null?void 0:t.subscribe(A(this,Ii))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;(e=super.disconnectedCallback)==null||e.call(this),A(this,C)&&((t=A(this,C))==null||t.dispatch({type:"documentelementchangerequest",detail:void 0}),(i=A(this,C))==null||i.dispatch({type:p.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),A(this,Ee)&&((a=A(this,Ee))==null||a.call(this),Be(this,Ee,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),(t=A(this,C))==null||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),(t=A(this,C))==null||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){Go(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(t.has(e))return;const i=this.registerMediaStateReceiver.bind(this),a=this.unregisterMediaStateReceiver.bind(this),r=wc(e,i,a);Object.values(p).forEach(n=>{e.addEventListener(n,A(this,Ta))}),t.set(e,r)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(!t.has(e))return;t.get(e)(),t.delete(e),Object.values(p).forEach(a=>{e.removeEventListener(a,A(this,Ta))})}registerMediaStateReceiver(e){if(!e)return;const t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),A(this,C)&&Object.entries(A(this,C).getState()).forEach(([a,r])=>{Go([e],a,r)}))}unregisterMediaStateReceiver(e){const t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",Ye(this,Sa,on))}disableHotkeys(){this.removeEventListener("keydown",Ye(this,Sa,on)),this.removeEventListener("keyup",Ye(this,ri,Yi))}get hotkeys(){return U(this,h.HOTKEYS)}set hotkeys(e){P(this,h.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n;const o=e.target;if(((a=(i=(t=o.getAttribute(h.KEYS_USED))==null?void 0:t.split(" "))!=null?i:o?.keysUsed)!=null?a:[]).map(g=>g==="Space"?" ":g).filter(Boolean).includes(e.key))return;let u,c,f;if(!A(this,dt).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&A(this,dt).contains("nospace")))switch(e.key){case" ":case"k":u=A(this,C).getState().mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new d.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u=this.mediaStore.getState().mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST,this.dispatchEvent(new d.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new d.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new d.CustomEvent(p.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{const g=this.hasAttribute(h.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(h.KEYBOARD_BACKWARD_SEEK_OFFSET):Wo;c=Math.max(((r=this.mediaStore.getState().mediaCurrentTime)!=null?r:0)-g,0),f=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(f);break}case"ArrowRight":{const g=this.hasAttribute(h.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(h.KEYBOARD_FORWARD_SEEK_OFFSET):Wo;c=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)+g,0),f=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(f);break}}}};dt=new WeakMap;Si=new WeakMap;C=new WeakMap;Ii=new WeakMap;Ee=new WeakMap;Ta=new WeakMap;ka=new WeakSet;sn=function(){var e;this.mediaStore=Ac({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(h.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(h.DEFAULT_DURATION)?+this.getAttribute(h.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(h.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(h.LIVE_EDGE_OFFSET)?+this.getAttribute(h.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(h.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(h.SEEK_TO_LIVE_OFFSET):this.hasAttribute(h.LIVE_EDGE_OFFSET)?+this.getAttribute(h.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(h.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(h.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(h.NO_SUBTITLES_LANG_PREF)}})};ri=new WeakSet;Yi=function(e){const{key:t}=e;if(!td.includes(t)){this.removeEventListener("keyup",Ye(this,ri,Yi));return}this.keyboardShortcutHandler(e)};Sa=new WeakSet;on=function(e){const{metaKey:t,altKey:i,key:a}=e;if(t||i||!td.includes(a)){this.removeEventListener("keyup",Ye(this,ri,Yi));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(A(this,dt).contains(`no${a.toLowerCase()}`)||a===" "&&A(this,dt).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",Ye(this,ri,Yi),{once:!0})};var kc=Object.values(s),Sc=Object.values(Ml),id=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&((t=e.nodeName)!=null&&t.includes("-"))&&(d.customElements.upgrade(e),{observedAttributes:n}=e.constructor);const o=(r=(a=(i=e?.getAttribute)==null?void 0:i.call(e,M.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(l=>kc.includes(l)):[]},Ic=e=>{var t,i;return(t=e.nodeName)!=null&&t.includes("-")&&d.customElements.get((i=e.nodeName)==null?void 0:i.toLowerCase())&&!(e instanceof d.customElements.get(e.nodeName.toLowerCase()))&&d.customElements.upgrade(e),Sc.some(a=>a in e)},ln=e=>Ic(e)||!!id(e).length,Fo=e=>{var t;return(t=e?.join)==null?void 0:t.call(e,":")},Vo={[s.MEDIA_SUBTITLES_LIST]:Zi,[s.MEDIA_SUBTITLES_SHOWING]:Zi,[s.MEDIA_SEEKABLE]:Fo,[s.MEDIA_BUFFERED]:e=>e?.map(Fo).join(" "),[s.MEDIA_PREVIEW_COORDS]:e=>e?.join(" "),[s.MEDIA_RENDITION_LIST]:yu,[s.MEDIA_AUDIO_TRACK_LIST]:Cu},yc=async(e,t,i)=>{var a,r;if(e.isConnected||await Cl(0),typeof i=="boolean"||i==null)return I(e,t,i);if(typeof i=="number")return H(e,t,i);if(typeof i=="string")return P(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);const n=(r=(a=Vo[t])==null?void 0:a.call(Vo,i))!=null?r:i;return e.setAttribute(t,n)},Mc=e=>{var t;return!!((t=e.closest)!=null&&t.call(e,'*[slot="media"]'))},at=(e,t)=>{if(Mc(e))return;const i=(r,n)=>{var o,l;ln(r)&&n(r);const{children:u=[]}=r??{},c=(l=(o=r?.shadowRoot)==null?void 0:o.children)!=null?l:[];[...u,...c].forEach(g=>at(g,n))},a=e?.nodeName.toLowerCase();if(a.includes("-")&&!ln(e)){d.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},Go=(e,t,i)=>{e.forEach(a=>{if(t in a){a[t]=i;return}const r=id(a),n=t.toLowerCase();r.includes(n)&&yc(a,n,i)})},wc=(e,t,i)=>{at(e,t);const a=f=>{var g;const v=(g=f?.composedPath()[0])!=null?g:f.target;t(v)},r=f=>{var g;const v=(g=f?.composedPath()[0])!=null?g:f.target;i(v)};e.addEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=f=>{f.forEach(g=>{const{addedNodes:v=[],removedNodes:E=[],type:w,target:_,attributeName:k}=g;w==="childList"?(Array.prototype.forEach.call(v,x=>at(x,t)),Array.prototype.forEach.call(E,x=>at(x,i))):w==="attributes"&&k===M.MEDIA_CHROME_ATTRIBUTES&&(ln(_)?t(_):i(_))})};let o=[];const l=f=>{const g=f.target;g.name!=="media"&&(o.forEach(v=>at(v,i)),o=[...g.assignedElements({flatten:!0})],o.forEach(v=>at(v,t)))};e.addEventListener("slotchange",l);const u=new MutationObserver(n);return u.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{at(e,i),e.removeEventListener("slotchange",l),u.disconnect(),e.removeEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};d.customElements.get("media-controller")||d.customElements.define("media-controller",Tc);var St={PLACEMENT:"placement",BOUNDS:"bounds"};function Lc(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var Ur=class extends d.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Bl(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const t=this.placement;if(t==="left"||t==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const i=getComputedStyle(this),a=(e=oi(this,"#"+this.bounds))!=null?e:le(this);if(!a)return;const{x:r,width:n}=a.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),u=o+l,c=r+n,f=i.getPropertyValue("--media-tooltip-offset-x"),g=f?parseFloat(f.replace("px","")):0,v=i.getPropertyValue("--media-tooltip-container-margin"),E=v?parseFloat(v.replace("px","")):0,w=o-r+g-E,_=u-c+g+E;if(w<0){this.style.setProperty("--media-tooltip-offset-x",`${w}px`);return}if(_>0){this.style.setProperty("--media-tooltip-offset-x",`${_}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[St.PLACEMENT,St.BOUNDS]}get placement(){return U(this,St.PLACEMENT)}set placement(e){P(this,St.PLACEMENT,e)}get bounds(){return U(this,St.BOUNDS)}set bounds(e){P(this,St.BOUNDS,e)}};Ur.shadowRootOptions={mode:"open"};Ur.getTemplateHTML=Lc;d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",Ur);var Ko=Ur,ls=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},$=(e,t,i)=>(ls(e,t,"read from private field"),i?i.call(e):t.get(e)),It=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oa=(e,t,i,a)=>(ls(e,t,"write to private field"),t.set(e,i),i),Cc=(e,t,i)=>(ls(e,t,"access private method"),i),fe,qt,Qe,xt,Ia,dn,ad,$e={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function Rc(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Ko.shadowRootOptions.mode}">
          ${Ko.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Dc(e,t){return`
    <slot></slot>
  `}function xc(){return""}var Q=class extends d.HTMLElement{constructor(){if(super(),It(this,dn),It(this,fe,void 0),this.preventClick=!1,this.tooltipEl=null,It(this,qt,e=>{this.preventClick||this.handleClick(e),setTimeout($(this,Qe),0)}),It(this,Qe,()=>{var e,t;(t=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||t.call(e)}),It(this,xt,e=>{const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",$(this,xt));return}this.preventClick||this.handleClick(e)}),It(this,Ia,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",$(this,xt));return}this.addEventListener("keyup",$(this,xt),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",$e.TOOLTIP_PLACEMENT,M.MEDIA_CONTROLLER,s.MEDIA_LANG]}enable(){this.addEventListener("click",$(this,qt)),this.addEventListener("keydown",$(this,Ia)),this.tabIndex=0}disable(){this.removeEventListener("click",$(this,qt)),this.removeEventListener("keydown",$(this,Ia)),this.removeEventListener("keyup",$(this,xt)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===M.MEDIA_CONTROLLER?(t&&((r=(a=$(this,fe))==null?void 0:a.unassociateElement)==null||r.call(a,this),oa(this,fe,null)),i&&this.isConnected&&(oa(this,fe,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=$(this,fe))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&i!==t?i==null?this.enable():this.disable():e===$e.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===s.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),$(this,Qe).call(this)}connectedCallback(){var e,t,i;const{style:a}=W(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const r=this.getAttribute(M.MEDIA_CONTROLLER);r&&(oa(this,fe,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=$(this,fe))==null?void 0:t.associateElement)==null||i.call(t,this)),d.customElements.whenDefined("media-tooltip").then(()=>Cc(this,dn,ad).call(this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=$(this,fe))==null?void 0:e.unassociateElement)==null||t.call(e,this),oa(this,fe,null),this.removeEventListener("mouseenter",$(this,Qe)),this.removeEventListener("focus",$(this,Qe)),this.removeEventListener("click",$(this,qt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return U(this,$e.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){P(this,$e.TOOLTIP_PLACEMENT,e)}get mediaController(){return U(this,M.MEDIA_CONTROLLER)}set mediaController(e){P(this,M.MEDIA_CONTROLLER,e)}get disabled(){return S(this,$e.DISABLED)}set disabled(e){I(this,$e.DISABLED,e)}get noTooltip(){return S(this,$e.NO_TOOLTIP)}set noTooltip(e){I(this,$e.NO_TOOLTIP,e)}handleClick(e){}};fe=new WeakMap;qt=new WeakMap;Qe=new WeakMap;xt=new WeakMap;Ia=new WeakMap;dn=new WeakSet;ad=function(){this.addEventListener("mouseenter",$(this,Qe)),this.addEventListener("focus",$(this,Qe)),this.addEventListener("click",$(this,qt));const e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};Q.shadowRootOptions={mode:"open"};Q.getTemplateHTML=Rc;Q.getSlotTemplateHTML=Dc;Q.getTooltipContentHTML=xc;d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",Q);var qo=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function Oc(e){return`
    <style>
      :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${qo}</slot>
      <slot name="exit">${qo}</slot>
    </slot>
  `}function Uc(){return`
    <slot name="tooltip-enter">${m("start airplay")}</slot>
    <slot name="tooltip-exit">${m("stop airplay")}</slot>
  `}var Zo=e=>{const t=e.mediaIsAirplaying?m("stop airplay"):m("start airplay");e.setAttribute("aria-label",t)},ds=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_AIRPLAYING,s.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Zo(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_AIRPLAYING&&Zo(this)}get mediaIsAirplaying(){return S(this,s.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){I(this,s.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return U(this,s.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){P(this,s.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new d.CustomEvent(p.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}};ds.getSlotTemplateHTML=Oc;ds.getTooltipContentHTML=Uc;d.customElements.get("media-airplay-button")||d.customElements.define("media-airplay-button",ds);var Pc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Nc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Hc(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Pc}</slot>
      <slot name="off">${Nc}</slot>
    </slot>
  `}function Bc(){return`
    <slot name="tooltip-enable">${m("Enable captions")}</slot>
    <slot name="tooltip-disable">${m("Disable captions")}</slot>
  `}var Yo=e=>{e.setAttribute("aria-checked",zl(e).toString())},us=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",m("closed captions")),Yo(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_SHOWING&&Yo(this)}get mediaSubtitlesList(){return Qo(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){zo(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Qo(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){zo(this,s.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new d.CustomEvent(p.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};us.getSlotTemplateHTML=Hc;us.getTooltipContentHTML=Bc;var Qo=(e,t)=>{const i=e.getAttribute(t);return i?xr(i):[]},zo=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Zi(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-button")||d.customElements.define("media-captions-button",us);var $c='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',Wc='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function Fc(e){return`
    <style>
      :host([${s.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${$c}</slot>
      <slot name="exit">${Wc}</slot>
    </slot>
  `}function Vc(){return`
    <slot name="tooltip-enter">${m("Start casting")}</slot>
    <slot name="tooltip-exit">${m("Stop casting")}</slot>
  `}var Xo=e=>{const t=e.mediaIsCasting?m("stop casting"):m("start casting");e.setAttribute("aria-label",t)},cs=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_CASTING,s.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Xo(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_CASTING&&Xo(this)}get mediaIsCasting(){return S(this,s.MEDIA_IS_CASTING)}set mediaIsCasting(e){I(this,s.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return U(this,s.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){P(this,s.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?p.MEDIA_EXIT_CAST_REQUEST:p.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};cs.getSlotTemplateHTML=Fc;cs.getTooltipContentHTML=Vc;d.customElements.get("media-cast-button")||d.customElements.define("media-cast-button",cs);var hs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mt=(e,t,i)=>(hs(e,t,"read from private field"),t.get(e)),De=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ms=(e,t,i,a)=>(hs(e,t,"write to private field"),t.set(e,i),i),et=(e,t,i)=>(hs(e,t,"access private method"),i),cr,Qi,_t,ya,un,cn,rd,hn,nd,mn,sd,vn,od,pn,ld;function Gc(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function Kc(e){return`
    <slot id="content"></slot>
  `}var mi={OPEN:"open",ANCHOR:"anchor"},aa=class extends d.HTMLElement{constructor(){super(),De(this,ya),De(this,cn),De(this,hn),De(this,mn),De(this,vn),De(this,pn),De(this,cr,!1),De(this,Qi,null),De(this,_t,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[mi.OPEN,mi.ANCHOR]}get open(){return S(this,mi.OPEN)}set open(e){I(this,mi.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":et(this,mn,sd).call(this,e);break;case"focusout":et(this,vn,od).call(this,e);break;case"keydown":et(this,pn,ld).call(this,e);break}}connectedCallback(){et(this,ya,un).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){et(this,ya,un).call(this),e===mi.OPEN&&i!==t&&(this.open?et(this,cn,rd).call(this):et(this,hn,nd).call(this))}focus(){ms(this,Qi,ts());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;const i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');i?.focus()}get keysUsed(){return["Escape","Tab"]}};cr=new WeakMap;Qi=new WeakMap;_t=new WeakMap;ya=new WeakSet;un=function(){if(!mt(this,cr)&&(ms(this,cr,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{const{style:t}=W(this.shadowRoot,":host");t.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};cn=new WeakSet;rd=function(){var e;(e=mt(this,_t))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};hn=new WeakSet;nd=function(){var e;(e=mt(this,_t))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};mn=new WeakSet;sd=function(e){ms(this,_t,e.relatedTarget),Ne(this,e.relatedTarget)||(this.open=!this.open)};vn=new WeakSet;od=function(e){var t;Ne(this,e.relatedTarget)||((t=mt(this,Qi))==null||t.focus(),mt(this,_t)&&mt(this,_t)!==e.relatedTarget&&this.open&&(this.open=!1))};pn=new WeakSet;ld=function(e){var t,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:c}=e;l||u||c||this.keysUsed.includes(o)&&(e.preventDefault(),e.stopPropagation(),o==="Tab"?(e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):o==="Escape"&&((n=mt(this,Qi))==null||n.focus(),this.open=!1))};aa.shadowRootOptions={mode:"open"};aa.getTemplateHTML=Gc;aa.getSlotTemplateHTML=Kc;d.customElements.get("media-chrome-dialog")||d.customElements.define("media-chrome-dialog",aa);var vs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},N=(e,t,i)=>(vs(e,t,"read from private field"),i?i.call(e):t.get(e)),Y=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Fe=(e,t,i,a)=>(vs(e,t,"write to private field"),t.set(e,i),i),ce=(e,t,i)=>(vs(e,t,"access private method"),i),ge,Pr,Ma,wa,he,hr,La,Ca,Ra,ps,dd,Da,En,xa,fn,mr,Es,gn,ud,bn,cd,_n,hd,An,md;function qc(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `}var li=class extends d.HTMLElement{constructor(){if(super(),Y(this,ps),Y(this,Da),Y(this,xa),Y(this,mr),Y(this,gn),Y(this,bn),Y(this,_n),Y(this,An),Y(this,ge,void 0),Y(this,Pr,void 0),Y(this,Ma,void 0),Y(this,wa,void 0),Y(this,he,{}),Y(this,hr,[]),Y(this,La,()=>{if(this.range.matches(":focus-visible")){const{style:e}=W(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Y(this,Ca,()=>{const{style:e}=W(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Y(this,Ra,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),Fe(this,Ma,this.shadowRoot.querySelector("#startpoint")),Fe(this,wa,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",M.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===M.MEDIA_CONTROLLER?(t&&((r=(a=N(this,ge))==null?void 0:a.unassociateElement)==null||r.call(a,this),Fe(this,ge,null)),i&&this.isConnected&&(Fe(this,ge,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=N(this,ge))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&t!==i)&&(i==null?(this.range.removeAttribute(e),ce(this,Da,En).call(this)):(this.range.setAttribute(e,i),ce(this,xa,fn).call(this)))}connectedCallback(){var e,t,i;const{style:a}=W(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),N(this,he).pointer=W(this.shadowRoot,"#pointer"),N(this,he).progress=W(this.shadowRoot,"#progress"),N(this,he).thumb=W(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),N(this,he).activeSegment=W(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const r=this.getAttribute(M.MEDIA_CONTROLLER);r&&(Fe(this,ge,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=N(this,ge))==null?void 0:t.associateElement)==null||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",N(this,La)),this.shadowRoot.addEventListener("focusout",N(this,Ca)),ce(this,Da,En).call(this),ti(this.container,N(this,Ra))}disconnectedCallback(){var e,t;ce(this,xa,fn).call(this),(t=(e=N(this,ge))==null?void 0:e.unassociateElement)==null||t.call(e,this),Fe(this,ge,null),this.shadowRoot.removeEventListener("focusin",N(this,La)),this.shadowRoot.removeEventListener("focusout",N(this,Ca)),ii(this.container,N(this,Ra))}updatePointerBar(e){var t;(t=N(this,he).pointer)==null||t.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,t;const i=this.range.valueAsNumber*100;(e=N(this,he).progress)==null||e.style.setProperty("width",`${i}%`),(t=N(this,he).thumb)==null||t.style.setProperty("left",`${i}%`)}updateSegments(e){const t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const i=[...new Set([+this.range.min,...e.flatMap(r=>[r.start,r.end]),+this.range.max])];Fe(this,hr,[...i]);const a=i.pop();for(const[r,n]of i.entries()){const[o,l]=[r===0,r===i.length-1],u=o?"calc(var(--segments-gap) / -1)":`${n*100}%`,f=`calc(${((l?a:i[r+1])-n)*100}%${o||l?"":" - var(--segments-gap)"})`,g=V.createElementNS("http://www.w3.org/2000/svg","rect"),v=W(this.shadowRoot,`#segments-clipping rect:nth-child(${r+1})`);v.style.setProperty("x",u),v.style.setProperty("width",f),t.append(g)}}getPointerRatio(e){return Wu(e.clientX,e.clientY,N(this,Ma).getBoundingClientRect(),N(this,wa).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":ce(this,An,md).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":ce(this,gn,ud).call(this,e);break;case"pointerdown":ce(this,mr,Es).call(this,e);break;case"pointerup":ce(this,bn,cd).call(this);break;case"pointerleave":ce(this,_n,hd).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};ge=new WeakMap;Pr=new WeakMap;Ma=new WeakMap;wa=new WeakMap;he=new WeakMap;hr=new WeakMap;La=new WeakMap;Ca=new WeakMap;Ra=new WeakMap;ps=new WeakSet;dd=function(e){const t=N(this,he).activeSegment;if(!t)return;const i=this.getPointerRatio(e),r=`#segments-clipping rect:nth-child(${N(this,hr).findIndex((n,o,l)=>{const u=l[o+1];return u!=null&&i>=n&&i<=u})+1})`;(t.selectorText!=r||!t.style.transform)&&(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};Da=new WeakSet;En=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};xa=new WeakSet;fn=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(e=d.window)==null||e.removeEventListener("pointerup",this),(t=d.window)==null||t.removeEventListener("pointermove",this)};mr=new WeakSet;Es=function(e){var t;Fe(this,Pr,e.composedPath().includes(this.range)),(t=d.window)==null||t.addEventListener("pointerup",this)};gn=new WeakSet;ud=function(e){var t;e.pointerType!=="mouse"&&ce(this,mr,Es).call(this,e),this.addEventListener("pointerleave",this),(t=d.window)==null||t.addEventListener("pointermove",this)};bn=new WeakSet;cd=function(){var e;(e=d.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};_n=new WeakSet;hd=function(){var e,t;this.removeEventListener("pointerleave",this),(e=d.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(t=N(this,he).activeSegment)==null||t.style.removeProperty("transform")};An=new WeakSet;md=function(e){this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),ce(this,ps,dd).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!N(this,Pr))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};li.shadowRootOptions={mode:"open"};li.getTemplateHTML=qc;d.customElements.get("media-chrome-range")||d.customElements.define("media-chrome-range",li);var vd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},la=(e,t,i)=>(vd(e,t,"read from private field"),i?i.call(e):t.get(e)),Zc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},da=(e,t,i,a)=>(vd(e,t,"write to private field"),t.set(e,i),i),be;function Yc(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var fs=class extends d.HTMLElement{constructor(){if(super(),Zc(this,be,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===M.MEDIA_CONTROLLER&&(t&&((r=(a=la(this,be))==null?void 0:a.unassociateElement)==null||r.call(a,this),da(this,be,null)),i&&this.isConnected&&(da(this,be,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=la(this,be))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(M.MEDIA_CONTROLLER);a&&(da(this,be,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=la(this,be))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=la(this,be))==null?void 0:e.unassociateElement)==null||t.call(e,this),da(this,be,null)}};be=new WeakMap;fs.shadowRootOptions={mode:"open"};fs.getTemplateHTML=Yc;d.customElements.get("media-control-bar")||d.customElements.define("media-control-bar",fs);var pd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ua=(e,t,i)=>(pd(e,t,"read from private field"),i?i.call(e):t.get(e)),Qc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ca=(e,t,i,a)=>(pd(e,t,"write to private field"),t.set(e,i),i),_e;function zc(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function Xc(e,t){return`
    <slot></slot>
  `}var Je=class extends d.HTMLElement{constructor(){if(super(),Qc(this,_e,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===M.MEDIA_CONTROLLER&&(t&&((r=(a=ua(this,_e))==null?void 0:a.unassociateElement)==null||r.call(a,this),ca(this,_e,null)),i&&this.isConnected&&(ca(this,_e,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=ua(this,_e))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i;const{style:a}=W(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const r=this.getAttribute(M.MEDIA_CONTROLLER);r&&(ca(this,_e,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=ua(this,_e))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=ua(this,_e))==null?void 0:e.unassociateElement)==null||t.call(e,this),ca(this,_e,null)}};_e=new WeakMap;Je.shadowRootOptions={mode:"open"};Je.getTemplateHTML=zc;Je.getSlotTemplateHTML=Xc;d.customElements.get("media-text-display")||d.customElements.define("media-text-display",Je);var Ed=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Jo=(e,t,i)=>(Ed(e,t,"read from private field"),i?i.call(e):t.get(e)),Jc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},jc=(e,t,i,a)=>(Ed(e,t,"write to private field"),t.set(e,i),i),yi;function eh(e,t){return`
    <slot>${ze(t.mediaDuration)}</slot>
  `}var fd=class extends Je{constructor(){var e;super(),Jc(this,yi,void 0),jc(this,yi,this.shadowRoot.querySelector("slot")),Jo(this,yi).textContent=ze((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===s.MEDIA_DURATION&&(Jo(this,yi).textContent=ze(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return O(this,s.MEDIA_DURATION)}set mediaDuration(e){H(this,s.MEDIA_DURATION,e)}};yi=new WeakMap;fd.getSlotTemplateHTML=eh;d.customElements.get("media-duration-display")||d.customElements.define("media-duration-display",fd);var th={2:m("Network Error"),3:m("Decode Error"),4:m("Source Not Supported"),5:m("Encryption Error")},ih={2:m("A network error caused the media download to fail."),3:m("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:m("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:m("The media is encrypted and there are no keys to decrypt it.")},gd=e=>{var t,i;return e.code===1?null:{title:(t=th[e.code])!=null?t:`Error ${e.code}`,message:(i=ih[e.code])!=null?i:e.message}},bd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ah=(e,t,i)=>(bd(e,t,"read from private field"),i?i.call(e):t.get(e)),rh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nh=(e,t,i,a)=>(bd(e,t,"write to private field"),t.set(e,i),i),Oa;function sh(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${_d({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function oh(e){return e.code&&gd(e)!==null}function _d(e){var t;const{title:i,message:a}=(t=gd(e))!=null?t:{};let r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}var jo=[s.MEDIA_ERROR_CODE,s.MEDIA_ERROR_MESSAGE],gs=class extends aa{constructor(){super(...arguments),rh(this,Oa,null)}static get observedAttributes(){return[...super.observedAttributes,...jo]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!jo.includes(e))return;const r=(a=this.mediaError)!=null?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=oh(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){return ah(this,Oa)}set mediaError(e){nh(this,Oa,e)}get mediaErrorCode(){return O(this,"mediaerrorcode")}set mediaErrorCode(e){H(this,"mediaerrorcode",e)}get mediaErrorMessage(){return U(this,"mediaerrormessage")}set mediaErrorMessage(e){P(this,"mediaerrormessage",e)}};Oa=new WeakMap;gs.getSlotTemplateHTML=sh;gs.formatErrorMessage=_d;d.customElements.get("media-error-dialog")||d.customElements.define("media-error-dialog",gs);var lh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,dh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function uh(e){return`
    <style>
      :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${lh}</slot>
      <slot name="exit">${dh}</slot>
    </slot>
  `}function ch(){return`
    <slot name="tooltip-enter">${m("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${m("Exit fullscreen mode")}</slot>
  `}var el=e=>{const t=e.mediaIsFullscreen?m("exit fullscreen mode"):m("enter fullscreen mode");e.setAttribute("aria-label",t)},bs=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_FULLSCREEN,s.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),el(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_FULLSCREEN&&el(this)}get mediaFullscreenUnavailable(){return U(this,s.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){P(this,s.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return S(this,s.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){I(this,s.MEDIA_IS_FULLSCREEN,e)}handleClick(){const e=this.mediaIsFullscreen?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};bs.getSlotTemplateHTML=uh;bs.getTooltipContentHTML=ch;d.customElements.get("media-fullscreen-button")||d.customElements.define("media-fullscreen-button",bs);var{MEDIA_TIME_IS_LIVE:Ua,MEDIA_PAUSED:Hi}=s,{MEDIA_SEEK_TO_LIVE_REQUEST:hh,MEDIA_PLAY_REQUEST:mh}=p,vh='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function ph(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Ua}]:not([${Hi}])) slot[name=indicator] > *,
      :host([${Ua}]:not([${Hi}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Ua}]:not([${Hi}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${vh}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${m("live")}</slot>
  `}var tl=e=>{var t;const i=e.mediaPaused||!e.mediaTimeIsLive,a=m(i?"seek to live":"playing live");e.setAttribute("aria-label",a);const r=(t=e.shadowRoot)==null?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=m("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")},Ad=class extends Q{static get observedAttributes(){return[...super.observedAttributes,Ua,Hi]}connectedCallback(){super.connectedCallback(),tl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),tl(this)}get mediaPaused(){return S(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return S(this,s.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){I(this,s.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new d.CustomEvent(hh,{composed:!0,bubbles:!0})),this.hasAttribute(Hi)&&this.dispatchEvent(new d.CustomEvent(mh,{composed:!0,bubbles:!0})))}};Ad.getSlotTemplateHTML=ph;d.customElements.get("media-live-button")||d.customElements.define("media-live-button",Ad);var Td=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},vi=(e,t,i)=>(Td(e,t,"read from private field"),i?i.call(e):t.get(e)),il=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},pi=(e,t,i,a)=>(Td(e,t,"write to private field"),t.set(e,i),i),Ae,Pa,ha={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},kd=500,Eh=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function fh(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${kd}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Eh}</slot>
    <div id="status" role="status" aria-live="polite">${m("media loading")}</div>
  `}var _s=class extends d.HTMLElement{constructor(){if(super(),il(this,Ae,void 0),il(this,Pa,kd),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER,s.MEDIA_PAUSED,s.MEDIA_LOADING,ha.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===ha.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===M.MEDIA_CONTROLLER&&(t&&((r=(a=vi(this,Ae))==null?void 0:a.unassociateElement)==null||r.call(a,this),pi(this,Ae,null)),i&&this.isConnected&&(pi(this,Ae,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=vi(this,Ae))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(M.MEDIA_CONTROLLER);a&&(pi(this,Ae,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=vi(this,Ae))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=vi(this,Ae))==null?void 0:e.unassociateElement)==null||t.call(e,this),pi(this,Ae,null)}get loadingDelay(){return vi(this,Pa)}set loadingDelay(e){pi(this,Pa,e);const{style:t}=W(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return S(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return S(this,s.MEDIA_LOADING)}set mediaLoading(e){I(this,s.MEDIA_LOADING,e)}get mediaController(){return U(this,M.MEDIA_CONTROLLER)}set mediaController(e){P(this,M.MEDIA_CONTROLLER,e)}get noAutohide(){return S(this,ha.NO_AUTOHIDE)}set noAutohide(e){I(this,ha.NO_AUTOHIDE,e)}};Ae=new WeakMap;Pa=new WeakMap;_s.shadowRootOptions={mode:"open"};_s.getTemplateHTML=fh;d.customElements.get("media-loading-indicator")||d.customElements.define("media-loading-indicator",_s);var gh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,al=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,bh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function _h(e){return`
    <style>
      :host(:not([${s.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${s.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${s.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${s.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${s.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${s.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${s.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${gh}</slot>
      <slot name="low">${al}</slot>
      <slot name="medium">${al}</slot>
      <slot name="high">${bh}</slot>
    </slot>
  `}function Ah(){return`
    <slot name="tooltip-mute">${m("Mute")}</slot>
    <slot name="tooltip-unmute">${m("Unmute")}</slot>
  `}var rl=e=>{const t=e.mediaVolumeLevel==="off",i=m(t?"unmute":"mute");e.setAttribute("aria-label",i)},As=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),rl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_VOLUME_LEVEL&&rl(this)}get mediaVolumeLevel(){return U(this,s.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){P(this,s.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};As.getSlotTemplateHTML=_h;As.getTooltipContentHTML=Ah;d.customElements.get("media-mute-button")||d.customElements.define("media-mute-button",As);var nl=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Th(e){return`
    <style>
      :host([${s.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${s.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${nl}</slot>
      <slot name="exit">${nl}</slot>
    </slot>
  `}function kh(){return`
    <slot name="tooltip-enter">${m("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${m("Exit picture in picture mode")}</slot>
  `}var sl=e=>{const t=e.mediaIsPip?m("exit picture in picture mode"):m("enter picture in picture mode");e.setAttribute("aria-label",t)},Ts=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_PIP,s.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_PIP&&sl(this)}get mediaPipUnavailable(){return U(this,s.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){P(this,s.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return S(this,s.MEDIA_IS_PIP)}set mediaIsPip(e){I(this,s.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?p.MEDIA_EXIT_PIP_REQUEST:p.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};Ts.getSlotTemplateHTML=Th;Ts.getTooltipContentHTML=kh;d.customElements.get("media-pip-button")||d.customElements.define("media-pip-button",Ts);var Sh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},yt=(e,t,i)=>(Sh(e,t,"read from private field"),i?i.call(e):t.get(e)),Ih=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ve,Wr={RATES:"rates"},Sd=[1,1.2,1.5,1.7,2],Zt=1;function yh(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||Zt}x</slot>
  `}function Mh(){return m("Playback rate")}var ks=class extends Q{constructor(){var e;super(),Ih(this,Ve,new rs(this,Wr.RATES,{defaultValue:Sd})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:Zt}x`}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Wr.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===Wr.RATES&&(yt(this,Ve).value=i),e===s.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,r=Number.isNaN(a)?Zt:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",m("Playback rate {playbackRate}",{playbackRate:r}))}}get rates(){return yt(this,Ve)}set rates(e){e?Array.isArray(e)?yt(this,Ve).value=e.join(" "):typeof e=="string"&&(yt(this,Ve).value=e):yt(this,Ve).value=""}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,Zt)}set mediaPlaybackRate(e){H(this,s.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;const i=Array.from(yt(this,Ve).values(),n=>+n).sort((n,o)=>n-o),a=(t=(e=i.find(n=>n>this.mediaPlaybackRate))!=null?e:i[0])!=null?t:Zt,r=new d.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}};Ve=new WeakMap;ks.getSlotTemplateHTML=yh;ks.getTooltipContentHTML=Mh;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",ks);var wh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Lh=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function Ch(e){return`
    <style>
      :host([${s.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${s.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${s.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${s.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${wh}</slot>
      <slot name="pause">${Lh}</slot>
    </slot>
  `}function Rh(){return`
    <slot name="tooltip-play">${m("Play")}</slot>
    <slot name="tooltip-pause">${m("Pause")}</slot>
  `}var ol=e=>{const t=e.mediaPaused?m("play"):m("pause");e.setAttribute("aria-label",t)},Ss=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),ol(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===s.MEDIA_PAUSED||e===s.MEDIA_LANG)&&ol(this)}get mediaPaused(){return S(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};Ss.getSlotTemplateHTML=Ch;Ss.getTooltipContentHTML=Rh;d.customElements.get("media-play-button")||d.customElements.define("media-play-button",Ss);var ve={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function Dh(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var xh=e=>{e.style.removeProperty("background-image")},Oh=(e,t)=>{e.style["background-image"]=`url('${t}')`},Is=class extends d.HTMLElement{static get observedAttributes(){return[ve.PLACEHOLDER_SRC,ve.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===ve.SRC&&(i==null?this.image.removeAttribute(ve.SRC):this.image.setAttribute(ve.SRC,i)),e===ve.PLACEHOLDER_SRC&&(i==null?xh(this.image):Oh(this.image,i))}get placeholderSrc(){return U(this,ve.PLACEHOLDER_SRC)}set placeholderSrc(e){P(this,ve.SRC,e)}get src(){return U(this,ve.SRC)}set src(e){P(this,ve.SRC,e)}};Is.shadowRootOptions={mode:"open"};Is.getTemplateHTML=Dh;d.customElements.get("media-poster-image")||d.customElements.define("media-poster-image",Is);var Id=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Uh=(e,t,i)=>(Id(e,t,"read from private field"),i?i.call(e):t.get(e)),Ph=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Nh=(e,t,i,a)=>(Id(e,t,"write to private field"),t.set(e,i),i),Na,Hh=class extends Je{constructor(){super(),Ph(this,Na,void 0),Nh(this,Na,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_CHAPTER,s.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===s.MEDIA_PREVIEW_CHAPTER||e===s.MEDIA_LANG)&&i!==t&&i!=null)if(Uh(this,Na).textContent=i,i!==""){const a=m("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",a)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return U(this,s.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){P(this,s.MEDIA_PREVIEW_CHAPTER,e)}};Na=new WeakMap;d.customElements.get("media-preview-chapter-display")||d.customElements.define("media-preview-chapter-display",Hh);var yd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ma=(e,t,i)=>(yd(e,t,"read from private field"),i?i.call(e):t.get(e)),Bh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},va=(e,t,i,a)=>(yd(e,t,"write to private field"),t.set(e,i),i),Te;function $h(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var Nr=class extends d.HTMLElement{constructor(){if(super(),Bh(this,Te,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;const a=this.getAttribute(M.MEDIA_CONTROLLER);a&&(va(this,Te,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=ma(this,Te))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=ma(this,Te))==null?void 0:e.unassociateElement)==null||t.call(e,this),va(this,Te,null)}attributeChangedCallback(e,t,i){var a,r,n,o,l;[s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===M.MEDIA_CONTROLLER&&(t&&((r=(a=ma(this,Te))==null?void 0:a.unassociateElement)==null||r.call(a,this),va(this,Te,null)),i&&this.isConnected&&(va(this,Te,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=ma(this,Te))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return U(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){P(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(s.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(t=>+t)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(s.MEDIA_PREVIEW_COORDS);return}this.setAttribute(s.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;const[i,a,r,n]=e,o=t.split("#")[0],l=getComputedStyle(this),{maxWidth:u,maxHeight:c,minWidth:f,minHeight:g}=l,v=Math.min(parseInt(u)/r,parseInt(c)/n),E=Math.max(parseInt(f)/r,parseInt(g)/n),w=v<1,_=w?v:E>1?E:1,{style:k}=W(this.shadowRoot,":host"),x=W(this.shadowRoot,"img").style,X=this.shadowRoot.querySelector("img"),je=w?"min":"max";k.setProperty(`${je}-width`,"initial","important"),k.setProperty(`${je}-height`,"initial","important"),k.width=`${r*_}px`,k.height=`${n*_}px`;const At=()=>{x.width=`${this.imgWidth*_}px`,x.height=`${this.imgHeight*_}px`,x.display="block"};X.src!==o&&(X.onload=()=>{this.imgWidth=X.naturalWidth,this.imgHeight=X.naturalHeight,At()},X.src=o,At()),At(),x.transform=`translate(-${i*_}px, -${a*_}px)`}};Te=new WeakMap;Nr.shadowRootOptions={mode:"open"};Nr.getTemplateHTML=$h;d.customElements.get("media-preview-thumbnail")||d.customElements.define("media-preview-thumbnail",Nr);var ll=Nr,Md=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dl=(e,t,i)=>(Md(e,t,"read from private field"),i?i.call(e):t.get(e)),Wh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Fh=(e,t,i,a)=>(Md(e,t,"write to private field"),t.set(e,i),i),Mi,Vh=class extends Je{constructor(){super(),Wh(this,Mi,void 0),Fh(this,Mi,this.shadowRoot.querySelector("slot")),dl(this,Mi).textContent=ze(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_PREVIEW_TIME&&i!=null&&(dl(this,Mi).textContent=ze(parseFloat(i)))}get mediaPreviewTime(){return O(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){H(this,s.MEDIA_PREVIEW_TIME,e)}};Mi=new WeakMap;d.customElements.get("media-preview-time-display")||d.customElements.define("media-preview-time-display",Vh);var Mt={SEEK_OFFSET:"seekoffset"},Fr=30,Gh=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function Kh(e,t){return`
    <slot name="icon">${Gh(t.seekOffset)}</slot>
  `}function qh(){return m("Seek backward")}var Zh=0,ys=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,Mt.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,Mt.SEEK_OFFSET,Fr)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===Mt.SEEK_OFFSET&&(this.seekOffset=O(this,Mt.SEEK_OFFSET,Fr))}get seekOffset(){return O(this,Mt.SEEK_OFFSET,Fr)}set seekOffset(e){H(this,Mt.SEEK_OFFSET,e),this.setAttribute("aria-label",m("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),Nl(Hl(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME,Zh)}set mediaCurrentTime(e){H(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};ys.getSlotTemplateHTML=Kh;ys.getTooltipContentHTML=qh;d.customElements.get("media-seek-backward-button")||d.customElements.define("media-seek-backward-button",ys);var wt={SEEK_OFFSET:"seekoffset"},Vr=30,Yh=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function Qh(e,t){return`
    <slot name="icon">${Yh(t.seekOffset)}</slot>
  `}function zh(){return m("Seek forward")}var Xh=0,Ms=class extends Q{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,wt.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,wt.SEEK_OFFSET,Vr)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===wt.SEEK_OFFSET&&(this.seekOffset=O(this,wt.SEEK_OFFSET,Vr))}get seekOffset(){return O(this,wt.SEEK_OFFSET,Vr)}set seekOffset(e){H(this,wt.SEEK_OFFSET,e),this.setAttribute("aria-label",m("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),Nl(Hl(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME,Xh)}set mediaCurrentTime(e){H(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,t=new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};Ms.getSlotTemplateHTML=Qh;Ms.getTooltipContentHTML=zh;d.customElements.get("media-seek-forward-button")||d.customElements.define("media-seek-forward-button",Ms);var wd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Gr=(e,t,i)=>(wd(e,t,"read from private field"),i?i.call(e):t.get(e)),Jh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},jh=(e,t,i,a)=>(wd(e,t,"write to private field"),t.set(e,i),i),Ot,rt={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},ul=[...Object.values(rt),s.MEDIA_CURRENT_TIME,s.MEDIA_DURATION,s.MEDIA_SEEKABLE],cl=["Enter"," "],em="&nbsp;/&nbsp;",Tn=(e,{timesSep:t=em}={})=>{var i,a;const r=(i=e.mediaCurrentTime)!=null?i:0,[,n]=(a=e.mediaSeekable)!=null?a:[];let o=0;Number.isFinite(e.mediaDuration)?o=e.mediaDuration:Number.isFinite(n)&&(o=n);const l=e.remaining?ze(0-(o-r)):ze(r);return e.showDuration?`${l}${t}${ze(o)}`:l},tm="video not loaded, unknown time.",im=e=>{var t;const i=e.mediaCurrentTime,[,a]=(t=e.mediaSeekable)!=null?t:[];let r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){e.setAttribute("aria-valuetext",tm);return}const n=e.remaining?Pi(0-(r-i)):Pi(i);if(!e.showDuration){e.setAttribute("aria-valuetext",n);return}const o=Pi(r),l=`${n} of ${o}`;e.setAttribute("aria-valuetext",l)};function am(e,t){return`
    <slot>${Tn(t)}</slot>
  `}var Ld=class extends Je{constructor(){super(),Jh(this,Ot,void 0),jh(this,Ot,this.shadowRoot.querySelector("slot")),Gr(this,Ot).innerHTML=`${Tn(this)}`}static get observedAttributes(){return[...super.observedAttributes,...ul,"disabled"]}connectedCallback(){const{style:e}=W(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",m("playback time"));const t=i=>{const{key:a}=i;if(!cl.includes(a)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",i=>{const{metaKey:a,altKey:r,key:n}=i;if(a||r||!cl.includes(n)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){ul.includes(e)?this.update():e==="disabled"&&i!==t&&(i==null?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return S(this,rt.REMAINING)}set remaining(e){I(this,rt.REMAINING,e)}get showDuration(){return S(this,rt.SHOW_DURATION)}set showDuration(e){I(this,rt.SHOW_DURATION,e)}get noToggle(){return S(this,rt.NO_TOGGLE)}set noToggle(e){I(this,rt.NO_TOGGLE,e)}get mediaDuration(){return O(this,s.MEDIA_DURATION)}set mediaDuration(e){H(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){H(this,s.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Tn(this);im(this),e!==Gr(this,Ot).innerHTML&&(Gr(this,Ot).innerHTML=e)}};Ot=new WeakMap;Ld.getSlotTemplateHTML=am;d.customElements.get("media-time-display")||d.customElements.define("media-time-display",Ld);var Cd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},q=(e,t,i)=>(Cd(e,t,"read from private field"),t.get(e)),pe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ae=(e,t,i,a)=>(Cd(e,t,"write to private field"),t.set(e,i),i),rm=(e,t,i,a)=>({set _(r){ae(e,t,r)},get _(){return q(e,t)}}),Ut,Ha,Pt,wi,Ba,$a,Wa,Nt,nt,Fa,nm=class{constructor(e,t,i){pe(this,Ut,void 0),pe(this,Ha,void 0),pe(this,Pt,void 0),pe(this,wi,void 0),pe(this,Ba,void 0),pe(this,$a,void 0),pe(this,Wa,void 0),pe(this,Nt,void 0),pe(this,nt,0),pe(this,Fa,(a=performance.now())=>{ae(this,nt,requestAnimationFrame(q(this,Fa))),ae(this,wi,performance.now()-q(this,Pt));const r=1e3/this.fps;if(q(this,wi)>r){ae(this,Pt,a-q(this,wi)%r);const n=1e3/((a-q(this,Ha))/++rm(this,Ba)._),o=(a-q(this,$a))/1e3/this.duration;let l=q(this,Wa)+o*this.playbackRate;l-q(this,Ut).valueAsNumber>0?ae(this,Nt,this.playbackRate/this.duration/n):(ae(this,Nt,.995*q(this,Nt)),l=q(this,Ut).valueAsNumber+q(this,Nt)),this.callback(l)}}),ae(this,Ut,e),this.callback=t,this.fps=i}start(){q(this,nt)===0&&(ae(this,Pt,performance.now()),ae(this,Ha,q(this,Pt)),ae(this,Ba,0),q(this,Fa).call(this))}stop(){q(this,nt)!==0&&(cancelAnimationFrame(q(this,nt)),ae(this,nt,0))}update({start:e,duration:t,playbackRate:i}){const a=e-q(this,Ut).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),ae(this,Wa,e),ae(this,$a,performance.now()),this.duration=t,this.playbackRate=i}};Ut=new WeakMap;Ha=new WeakMap;Pt=new WeakMap;wi=new WeakMap;Ba=new WeakMap;$a=new WeakMap;Wa=new WeakMap;Nt=new WeakMap;nt=new WeakMap;Fa=new WeakMap;var ws=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},F=(e,t,i)=>(ws(e,t,"read from private field"),i?i.call(e):t.get(e)),K=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ke=(e,t,i,a)=>(ws(e,t,"write to private field"),t.set(e,i),i),z=(e,t,i)=>(ws(e,t,"access private method"),i),Ht,vt,vr,Bi,pr,Va,zi,Xi,Bt,$t,Li,Ls,Rd,kn,Er,Cs,fr,Rs,gr,Ds,Sn,Dd,Ji,br,In,xd,sm="video not loaded, unknown time.",om=e=>{const t=e.range,i=Pi(+Od(e)),a=Pi(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:sm;t.setAttribute("aria-valuetext",r)};function lm(e){return`
    ${li.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${ll.shadowRootOptions.mode}">
            ${ll.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var pa=(e,t=e.mediaCurrentTime)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(t-i)/(a-i);return Math.max(0,Math.min(r,1))},Od=(e,t=e.range.valueAsNumber)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i},xs=class extends li{constructor(){super(),K(this,$t),K(this,Ls),K(this,Er),K(this,fr),K(this,gr),K(this,Sn),K(this,Ji),K(this,In),K(this,Ht,void 0),K(this,vt,void 0),K(this,vr,void 0),K(this,Bi,void 0),K(this,pr,void 0),K(this,Va,void 0),K(this,zi,void 0),K(this,Xi,void 0),K(this,Bt,void 0),K(this,kn,i=>{this.dragging||(jn(i)&&(this.range.valueAsNumber=i),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),ke(this,vr,this.shadowRoot.querySelectorAll('[part~="box"]')),ke(this,pr,this.shadowRoot.querySelector('[part~="preview-box"]')),ke(this,Va,this.shadowRoot.querySelector('[part~="current-box"]'));const t=getComputedStyle(this);ke(this,zi,parseInt(t.getPropertyValue("--media-box-padding-left"))),ke(this,Xi,parseInt(t.getPropertyValue("--media-box-padding-right"))),ke(this,vt,new nm(this.range,F(this,kn),60))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_DURATION,s.MEDIA_SEEKABLE,s.MEDIA_CURRENT_TIME,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_TIME,s.MEDIA_PREVIEW_CHAPTER,s.MEDIA_BUFFERED,s.MEDIA_PLAYBACK_RATE,s.MEDIA_LOADING,s.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",m("seek")),z(this,$t,Li).call(this),ke(this,Ht,this.getRootNode()),(e=F(this,Ht))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),z(this,$t,Li).call(this),(e=F(this,Ht))==null||e.removeEventListener("transitionstart",this),ke(this,Ht,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===s.MEDIA_CURRENT_TIME||e===s.MEDIA_PAUSED||e===s.MEDIA_ENDED||e===s.MEDIA_LOADING||e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE?(F(this,vt).update({start:pa(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),z(this,$t,Li).call(this),om(this)):e===s.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=F(this,Bt),this.updateBar()))}get mediaChaptersCues(){return F(this,Bt)}set mediaChaptersCues(e){var t;ke(this,Bt,e),this.updateSegments((t=F(this,Bt))==null?void 0:t.map(i=>({start:pa(this,i.startTime),end:pa(this,i.endTime)})))}get mediaPaused(){return S(this,s.MEDIA_PAUSED)}set mediaPaused(e){I(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return S(this,s.MEDIA_LOADING)}set mediaLoading(e){I(this,s.MEDIA_LOADING,e)}get mediaDuration(){return O(this,s.MEDIA_DURATION)}set mediaDuration(e){H(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){H(this,s.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){H(this,s.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(s.MEDIA_BUFFERED);return e?e.split(" ").map(t=>t.split(":").map(i=>+i)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(s.MEDIA_BUFFERED);return}const t=e.map(i=>i.join(":")).join(" ");this.setAttribute(s.MEDIA_BUFFERED,t)}get mediaSeekable(){const e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,t=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaSeekableStart(){var e;const[t=0]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaPreviewImage(){return U(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){P(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return O(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){H(this,s.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return S(this,s.MEDIA_ENDED)}set mediaEnded(e){I(this,s.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const t=this.mediaBuffered;if(!t.length)return;let i;if(this.mediaEnded)i=1;else{const r=this.mediaCurrentTime,[,n=this.mediaSeekableStart]=(e=t.find(([o,l])=>o<=r&&r<=l))!=null?e:[];i=pa(this,n)}const{style:a}=W(this.shadowRoot,"#buffered");a.setProperty("width",`${i*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const t=W(this.shadowRoot,"#current-rail"),i=W(this.shadowRoot,'[part~="current-box"]'),a=z(this,Er,Cs).call(this,F(this,Va)),r=z(this,fr,Rs).call(this,a,this.range.valueAsNumber),n=z(this,gr,Ds).call(this,a,this.range.valueAsNumber);t.style.transform=`translateX(${r})`,t.style.setProperty("--_range-width",`${a.range.width}`),i.style.setProperty("--_box-shift",`${n}`),i.style.setProperty("--_box-width",`${a.box.width}px`),i.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":z(this,In,xd).call(this);break;case"pointermove":z(this,Sn,Dd).call(this,e);break;case"pointerup":case"pointerleave":z(this,Ji,br).call(this,null);break;case"transitionstart":Ne(e.target,this)&&setTimeout(()=>z(this,$t,Li).call(this),0);break}}};Ht=new WeakMap;vt=new WeakMap;vr=new WeakMap;Bi=new WeakMap;pr=new WeakMap;Va=new WeakMap;zi=new WeakMap;Xi=new WeakMap;Bt=new WeakMap;$t=new WeakSet;Li=function(){z(this,Ls,Rd).call(this)?F(this,vt).start():F(this,vt).stop()};Ls=new WeakSet;Rd=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Bl(this)};kn=new WeakMap;Er=new WeakSet;Cs=function(e){var t;const a=((t=this.getAttribute("bounds")?oi(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=e.offsetWidth,o=-(r.left-a.left-n/2),l=a.right-r.left-n/2;return{box:{width:n,min:o,max:l},bounds:a,range:r}};fr=new WeakSet;Rs=function(e,t){let i=`${t*100}%`;const{width:a,min:r,max:n}=e.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const l=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${l})`}return i};gr=new WeakSet;Ds=function(e,t){const{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+F(this,zi)){const o=e.range.left-e.bounds.left-F(this,zi);return`${n-i/2+o}px`}if(n>r-F(this,Xi)){const o=e.bounds.right-e.range.right-F(this,Xi);return`${n+i/2-o-e.range.width}px`}return 0};Sn=new WeakSet;Dd=function(e){const t=[...F(this,vr)].some(f=>e.composedPath().includes(f));if(!this.dragging&&(t||!e.composedPath().includes(this))){z(this,Ji,br).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=W(this.shadowRoot,"#preview-rail"),r=W(this.shadowRoot,'[part~="preview-box"]'),n=z(this,Er,Cs).call(this,F(this,pr));let o=(e.clientX-n.range.left)/n.range.width;o=Math.max(0,Math.min(1,o));const l=z(this,fr,Rs).call(this,n,o),u=z(this,gr,Ds).call(this,n,o);a.style.transform=`translateX(${l})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${u}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const c=Math.round(F(this,Bi))-Math.round(o*i);Math.abs(c)<1&&o>.01&&o<.99||(ke(this,Bi,o*i),z(this,Ji,br).call(this,F(this,Bi)))};Ji=new WeakSet;br=function(e){this.dispatchEvent(new d.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))};In=new WeakSet;xd=function(){F(this,vt).stop();const e=Od(this);this.dispatchEvent(new d.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))};xs.shadowRootOptions={mode:"open"};xs.getTemplateHTML=lm;d.customElements.get("media-time-range")||d.customElements.define("media-time-range",xs);var dm=1,um=e=>e.mediaMuted?0:e.mediaVolume,cm=e=>`${Math.round(e*100)}%`,hm=class extends li{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME,s.MEDIA_MUTED,s.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,t=new d.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",m("volume"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===s.MEDIA_VOLUME||e===s.MEDIA_MUTED)&&(this.range.valueAsNumber=um(this),this.range.setAttribute("aria-valuetext",cm(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return O(this,s.MEDIA_VOLUME,dm)}set mediaVolume(e){H(this,s.MEDIA_VOLUME,e)}get mediaMuted(){return S(this,s.MEDIA_MUTED)}set mediaMuted(e){I(this,s.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return U(this,s.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){P(this,s.MEDIA_VOLUME_UNAVAILABLE,e)}};d.customElements.get("media-volume-range")||d.customElements.define("media-volume-range",hm);var Ud=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},T=(e,t,i)=>(Ud(e,t,"read from private field"),i?i.call(e):t.get(e)),ye=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Pe=(e,t,i,a)=>(Ud(e,t,"write to private field"),t.set(e,i),i),Wt,Ga,st,Ci,Ge,Ke,qe,ot,Ft,Ka,ue,hl=1,ml=0,mm=1,vm={processCallback(e,t,i){if(i){for(const[a,r]of t)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof pt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof pt?r.element[r.attributeName]=n:r.value=n}}}},Os=class extends d.DocumentFragment{constructor(e,t,i=vm){var a;super(),ye(this,Wt,void 0),ye(this,Ga,void 0),this.append(e.content.cloneNode(!0)),Pe(this,Wt,Pd(this)),Pe(this,Ga,i),(a=i.createCallback)==null||a.call(i,this,T(this,Wt),t),i.processCallback(this,T(this,Wt),t)}update(e){T(this,Ga).processCallback(this,T(this,Wt),e)}};Wt=new WeakMap;Ga=new WeakMap;var Pd=(e,t=[])=>{let i,a;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new Em;for([i,a]of pl(r.value))if(!i)n.append(a);else{const o=new pt(e,r.name,r.namespaceURI);n.append(o),t.push([a,o])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===hl&&!(r instanceof HTMLTemplateElement))Pd(r,t);else{const n=r.data;if(r.nodeType===hl||n.includes("{{")){const o=[];if(n)for([i,a]of pl(n))if(!i)o.push(new Text(a));else{const l=new Bd(e);o.push(l),t.push([a,l])}else if(r instanceof HTMLTemplateElement){const l=new $d(e,r);o.push(l),t.push([l.expression,l])}r.replaceWith(...o.flatMap(l=>l.replacementNodes||[l]))}}return t},vl={},pl=e=>{let t="",i=0,a=vl[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++i==1?(t&&a.push([ml,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--i?(a.push([mm,t.trim()]),t="",r++):t+=n||"";return t&&a.push([ml,(i>0?"{{":"")+t]),vl[e]=a},pm=11,Nd=class{get value(){return""}set value(e){}toString(){return this.value}},Hd=new WeakMap,Em=class{constructor(){ye(this,st,[])}[Symbol.iterator](){return T(this,st).values()}get length(){return T(this,st).length}item(e){return T(this,st)[e]}append(...e){for(const t of e)t instanceof pt&&Hd.set(t,this),T(this,st).push(t)}toString(){return T(this,st).join("")}};st=new WeakMap;var pt=class extends Nd{constructor(e,t,i){super(),ye(this,ot),ye(this,Ci,""),ye(this,Ge,void 0),ye(this,Ke,void 0),ye(this,qe,void 0),Pe(this,Ge,e),Pe(this,Ke,t),Pe(this,qe,i)}get attributeName(){return T(this,Ke)}get attributeNamespace(){return T(this,qe)}get element(){return T(this,Ge)}get value(){return T(this,Ci)}set value(e){T(this,Ci)!==e&&(Pe(this,Ci,e),!T(this,ot,Ft)||T(this,ot,Ft).length===1?e==null?T(this,Ge).removeAttributeNS(T(this,qe),T(this,Ke)):T(this,Ge).setAttributeNS(T(this,qe),T(this,Ke),e):T(this,Ge).setAttributeNS(T(this,qe),T(this,Ke),T(this,ot,Ft).toString()))}get booleanValue(){return T(this,Ge).hasAttributeNS(T(this,qe),T(this,Ke))}set booleanValue(e){if(!T(this,ot,Ft)||T(this,ot,Ft).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}};Ci=new WeakMap;Ge=new WeakMap;Ke=new WeakMap;qe=new WeakMap;ot=new WeakSet;Ft=function(){return Hd.get(this)};var Bd=class extends Nd{constructor(e,t){super(),ye(this,Ka,void 0),ye(this,ue,void 0),Pe(this,Ka,e),Pe(this,ue,t?[...t]:[new Text])}get replacementNodes(){return T(this,ue)}get parentNode(){return T(this,Ka)}get nextSibling(){return T(this,ue)[T(this,ue).length-1].nextSibling}get previousSibling(){return T(this,ue)[0].previousSibling}get value(){return T(this,ue).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const t=e.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===pm?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);t.length||t.push(new Text),Pe(this,ue,fm(T(this,ue)[0].parentNode,T(this,ue),t,this.nextSibling))}};Ka=new WeakMap;ue=new WeakMap;var $d=class extends Bd{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}};function fm(e,t,i,a=null){let r=0,n,o,l,u=i.length,c=t.length;for(;r<u&&r<c&&t[r]==i[r];)r++;for(;r<u&&r<c&&i[u-1]==t[c-1];)a=i[--c,--u];if(r==c)for(;r<u;)e.insertBefore(i[r++],a);if(r==u)for(;r<c;)e.removeChild(t[r++]);else{for(n=t[r];r<u;)l=i[r++],o=n?n.nextSibling:a,n==l?n=o:r<u&&i[r]==o?(e.replaceChild(l,n),n=o):e.insertBefore(l,n);for(;n!=a;)o=n.nextSibling,e.removeChild(n),n=o}return i}var El={string:e=>String(e)},Wd=class{constructor(e){this.template=e,this.state=void 0}},ut=new WeakMap,ct=new WeakMap,yn={partial:(e,t)=>{t[e.expression]=new Wd(e.template)},if:(e,t)=>{var i;if(Fd(e.expression,t))if(ut.get(e)!==e.template){ut.set(e,e.template);const a=new Os(e.template,t,Us);e.replace(a),ct.set(e,a)}else(i=ct.get(e))==null||i.update(t);else e.replace(""),ut.delete(e),ct.delete(e)}},gm=Object.keys(yn),Us={processCallback(e,t,i){var a,r;if(i)for(const[n,o]of t){if(o instanceof $d){if(!o.directive){const u=gm.find(c=>o.template.hasAttribute(c));u&&(o.directive=u,o.expression=o.template.getAttribute(u))}(a=yn[o.directive])==null||a.call(yn,o,i);continue}let l=Fd(n,i);if(l instanceof Wd){ut.get(o)!==l.template?(ut.set(o,l.template),l=new Os(l.template,l.state,Us),o.value=l,ct.set(o,l)):(r=ct.get(o))==null||r.update(l.state);continue}l?(o instanceof pt&&o.attributeName.startsWith("aria-")&&(l=String(l)),o instanceof pt?typeof l=="boolean"?o.booleanValue=l:typeof l=="function"?o.element[o.attributeName]=l:o.value=l:(o.value=l,ut.delete(o),ct.delete(o))):o instanceof pt?o.value=void 0:(o.value=void 0,ut.delete(o),ct.delete(o))}}},fl={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var i;return(i=El[t])==null?void 0:i.call(El,e)}};function bm(e){return _m(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function Fd(e,t={}){var i,a,r,n,o,l,u;const c=bm(e);if(c.length===0||c.some(({type:f})=>!f))return Ei(e);if(((i=c[0])==null?void 0:i.token)===">"){const f=t[(a=c[1])==null?void 0:a.token];if(!f)return Ei(e);const g={...t};f.state=g;const v=c.slice(2);for(let E=0;E<v.length;E+=3){const w=(r=v[E])==null?void 0:r.token,_=(n=v[E+1])==null?void 0:n.token,k=(o=v[E+2])==null?void 0:o.token;w&&_==="="&&(g[w]=fi(k,t))}return f}if(c.length===1)return Ea(c[0])?fi(c[0].token,t):Ei(e);if(c.length===2){const f=(l=c[0])==null?void 0:l.token,g=fl[f];if(!g||!Ea(c[1]))return Ei(e);const v=fi(c[1].token,t);return g(v)}if(c.length===3){const f=(u=c[1])==null?void 0:u.token,g=fl[f];if(!g||!Ea(c[0])||!Ea(c[2]))return Ei(e);const v=fi(c[0].token,t);if(f==="|")return g(v,c[2].token);const E=fi(c[2].token,t);return g(v,E)}}function Ei(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function Ea({type:e}){return["number","boolean","string","param"].includes(e)}function fi(e,t){const i=e[0],a=e.slice(-1);return e==="true"||e==="false"?e==="true":i===a&&["'",'"'].includes(i)?e.slice(1,-1):Ll(e)?parseFloat(e):t[e]}function _m(e,t){let i,a,r;const n=[];for(;e;){r=null,i=e.length;for(const o in t)a=t[o].exec(e),a&&a.index<i&&(r={token:a[0],type:o,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n}var Ps=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Mn=(e,t,i)=>(Ps(e,t,"read from private field"),i?i.call(e):t.get(e)),gi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ht=(e,t,i,a)=>(Ps(e,t,"write to private field"),t.set(e,i),i),Kr=(e,t,i)=>(Ps(e,t,"access private method"),i),zt,qa,Xt,wn,Vd,Za,Ln,qr={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Gd=V.createElement("template");Gd.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;var Hr=class extends d.HTMLElement{constructor(){super(),gi(this,wn),gi(this,Za),gi(this,zt,void 0),gi(this,qa,void 0),gi(this,Xt,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(t=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||t.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(qr[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(bt.BREAKPOINTS_COMPUTED,this.render),Kr(this,wn,Vd).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Mn(this,zt))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(ht(this,zt,e),ht(this,Xt,null),this.createRenderer())}get props(){var e,t,i;const a=[...Array.from((t=(e=this.mediaController)==null?void 0:e.attributes)!=null?t:[]).filter(({name:n})=>qr[n]||n.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(const n of a){const o=(i=qr[n.name])!=null?i:Ou(n.name);let{value:l}=n;l!=null?(Ll(l)&&(l=parseFloat(l)),r[o]=l===""?!0:l):r[o]=!1}return r}attributeChangedCallback(e,t,i){e==="template"&&t!=i&&Kr(this,Za,Ln).call(this)}connectedCallback(){Kr(this,Za,Ln).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Mn(this,qa)&&(ht(this,qa,this.template),this.renderer=new Os(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Gd.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}};zt=new WeakMap;qa=new WeakMap;Xt=new WeakMap;wn=new WeakSet;Vd=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};Za=new WeakSet;Ln=function(){var e;const t=this.getAttribute("template");if(!t||t===Mn(this,Xt))return;const i=this.getRootNode(),a=(e=i?.getElementById)==null?void 0:e.call(i,t);if(a){ht(this,Xt,t),ht(this,zt,a),this.createRenderer();return}Am(t)&&(ht(this,Xt,t),Tm(t).then(r=>{const n=V.createElement("template");n.innerHTML=r,ht(this,zt,n),this.createRenderer()}).catch(console.error))};Hr.observedAttributes=["template"];Hr.processor=Us;function Am(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function Tm(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}d.customElements.get("media-theme")||d.customElements.define("media-theme",Hr);function km({anchor:e,floating:t,placement:i}){const a=Sm({anchor:e,floating:t}),{x:r,y:n}=ym(a,i);return{x:r,y:n}}function Sm({anchor:e,floating:t}){return{anchor:Im(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function Im(e,t){var i;const a=e.getBoundingClientRect(),r=(i=t?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function ym({anchor:e,floating:t},i){const a=Mm(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Kd(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,u=e[r]/2-t[r]/2;let c;switch(n){case"top":c={x:o,y:e.y-t.height};break;case"bottom":c={x:o,y:e.y+e.height};break;case"right":c={x:e.x+e.width,y:l};break;case"left":c={x:e.x-t.width,y:l};break;default:c={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":c[a]-=u;break;case"end":c[a]+=u;break}return c}function Kd(e){return e.split("-")[0]}function Mm(e){return["top","bottom"].includes(Kd(e))?"y":"x"}var Ns=class extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}},wm=class extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}},Hs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},y=(e,t,i)=>(Hs(e,t,"read from private field"),i?i.call(e):t.get(e)),L=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Se=(e,t,i,a)=>(Hs(e,t,"write to private field"),t.set(e,i),i),R=(e,t,i)=>(Hs(e,t,"access private method"),i),Ie,Et,Xe,Ya,Qa,ft,ji,Cn,qd,_r,Bs,Ar,za,Rn,Dn,Zd,xn,Yd,On,Qd,Jt,jt,ei,ea,Tr,$s,Un,zd,Ws,Xd,Pn,Jd,Fs,jd,Nn,eu,Hn,tu,$i,kr,Bn,iu,Wi,Sr,Xa,$n;function ni({type:e,text:t,value:i,checked:a}){const r=V.createElement("media-chrome-menu-item");r.type=e,r.part.add("menu-item"),r.part.add(e),r.value=i,r.checked=a;const n=V.createElement("span");return n.textContent=t,r.append(n),r}function gt(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}function Lm(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}var tt={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"},Ce=class extends d.HTMLElement{constructor(){if(super(),L(this,Cn),L(this,_r),L(this,za),L(this,Dn),L(this,xn),L(this,On),L(this,ei),L(this,Tr),L(this,Un),L(this,Ws),L(this,Pn),L(this,Fs),L(this,Nn),L(this,Hn),L(this,$i),L(this,Bn),L(this,Wi),L(this,Xa),L(this,Ie,null),L(this,Et,null),L(this,Xe,null),L(this,Ya,new Set),L(this,Qa,void 0),L(this,ft,!1),L(this,ji,null),L(this,Ar,()=>{const e=y(this,Ya),t=new Set(this.items);for(const i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));Se(this,Ya,t)}),L(this,Jt,()=>{R(this,ei,ea).call(this),R(this,Tr,$s).call(this,!1)}),L(this,jt,()=>{R(this,ei,ea).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),Se(this,Qa,new MutationObserver(y(this,Ar))),y(this,Qa).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[tt.DISABLED,tt.HIDDEN,tt.STYLE,tt.ANCHOR,M.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":R(this,Cn,qd).call(this,e);break;case"invoke":R(this,Dn,Zd).call(this,e);break;case"click":R(this,Un,zd).call(this,e);break;case"toggle":R(this,Pn,Jd).call(this,e);break;case"focusout":R(this,Nn,eu).call(this,e);break;case"keydown":R(this,Hn,tu).call(this,e);break}}connectedCallback(){var e,t;Se(this,ji,$l(this.shadowRoot,":host")),R(this,za,Rn).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),Se(this,Ie,en(this)),(t=(e=y(this,Ie))==null?void 0:e.associateElement)==null||t.call(e,this),this.hidden||(ti(ta(this),y(this,Jt)),ti(this,y(this,jt))),R(this,_r,Bs).call(this)}disconnectedCallback(){var e,t;ii(ta(this),y(this,Jt)),ii(this,y(this,jt)),this.disable(),(t=(e=y(this,Ie))==null?void 0:e.unassociateElement)==null||t.call(e,this),Se(this,Ie,null)}attributeChangedCallback(e,t,i){var a,r,n,o;e===tt.HIDDEN&&i!==t?(y(this,ft)||Se(this,ft,!0),this.hidden?R(this,On,Qd).call(this):R(this,xn,Yd).call(this),this.dispatchEvent(new wm({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===M.MEDIA_CONTROLLER?(t&&((r=(a=y(this,Ie))==null?void 0:a.unassociateElement)==null||r.call(a,this),Se(this,Ie,null)),i&&this.isConnected&&(Se(this,Ie,en(this)),(o=(n=y(this,Ie))==null?void 0:n.associateElement)==null||o.call(n,this))):e===tt.DISABLED&&i!==t?i==null?this.enable():this.disable():e===tt.STYLE&&i!==t&&R(this,za,Rn).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=wr(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(Cm)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return(t=(e=this.checkedItems[0])==null?void 0:e.value)!=null?t:""}set value(e){const t=this.items.find(i=>i.value===e);t&&R(this,Xa,$n).call(this,t)}focus(){if(Se(this,Et,ts()),this.items.length){R(this,Wi,Sr).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e?.focus()}handleSelect(e){var t;const i=R(this,$i,kr).call(this,e);i&&(R(this,Xa,$n).call(this,i,i.type==="checkbox"),y(this,Xe)&&!this.hidden&&((t=y(this,Et))==null||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;const{key:a}=e,r=this.items,n=(i=(t=R(this,$i,kr).call(this,e))!=null?t:R(this,Bn,iu).call(this))!=null?i:r[0],o=r.indexOf(n);let l=Math.max(0,o);a==="ArrowDown"?l++:a==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=r.length-1),l<0&&(l=r.length-1),l>r.length-1&&(l=0),R(this,Wi,Sr).call(this,r[l]),r[l].focus()}};Ie=new WeakMap;Et=new WeakMap;Xe=new WeakMap;Ya=new WeakMap;Qa=new WeakMap;ft=new WeakMap;ji=new WeakMap;Cn=new WeakSet;qd=function(e){const t=e.target;for(const i of t.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(t.name)&&R(this,_r,Bs).call(this),t.name||y(this,Ar).call(this)};_r=new WeakSet;Bs=function(){const e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=t.assignedNodes().length===0&&e.assignedNodes().length===0};Ar=new WeakMap;za=new WeakSet;Rn=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),i=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",i==="row"?"":"width:0")};Dn=new WeakSet;Zd=function(e){Se(this,Xe,e.relatedTarget),Ne(this,e.relatedTarget)||(this.hidden=!this.hidden)};xn=new WeakSet;Yd=function(){var e;(e=y(this,Xe))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),ti(ta(this),y(this,Jt)),ti(this,y(this,jt))};On=new WeakSet;Qd=function(){var e;(e=y(this,Xe))==null||e.setAttribute("aria-expanded","false"),ii(ta(this),y(this,Jt)),ii(this,y(this,jt))};Jt=new WeakMap;jt=new WeakMap;ei=new WeakSet;ea=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:i}=km({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const r=ta(this).getBoundingClientRect(),n=r.width-t-e,o=r.height-i-this.offsetHeight,{style:l}=y(this,ji);l.setProperty("position","absolute"),l.setProperty("right",`${Math.max(0,n)}px`),l.setProperty("--_menu-bottom",`${o}px`);const u=getComputedStyle(this),f=l.getPropertyValue("--_menu-bottom")===u.bottom?o:parseFloat(u.bottom),g=r.height-f-parseFloat(u.marginBottom);this.style.setProperty("--_menu-max-height",`${g}px`)};Tr=new WeakSet;$s=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=t?.querySelector('[role="menu"]'),{style:a}=y(this,ji);if(e||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),R(this,ei,ea).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),R(this,ei,ea).call(this);a.removeProperty("--media-menu-transition-in")};Un=new WeakSet;zd=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(y(this,Ws,Xd))){(t=y(this,Et))==null||t.focus(),this.hidden=!0;return}const i=R(this,$i,kr).call(this,e);!i||i.hasAttribute("disabled")||(R(this,Wi,Sr).call(this,i),this.handleSelect(e))};Ws=new WeakSet;Xd=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(i=>i.matches('button[part~="back"]'))};Pn=new WeakSet;Jd=function(e){if(e.target===this)return;R(this,Fs,jd).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of t)i.invokeTargetElement!=e.target&&e.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Ns({relatedTarget:i}));for(const i of t)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);R(this,Tr,$s).call(this,!0)};Fs=new WeakSet;jd=function(){const t=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!t)};Nn=new WeakSet;eu=function(e){var t;Ne(this,e.relatedTarget)||(y(this,ft)&&((t=y(this,Et))==null||t.focus()),y(this,Xe)&&y(this,Xe)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};Hn=new WeakSet;tu=function(e){var t,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:c}=e;if(!(l||u||c)&&this.keysUsed.includes(o))if(e.preventDefault(),e.stopPropagation(),o==="Tab"){if(y(this,ft)){this.hidden=!0;return}e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else o==="Escape"?((n=y(this,Et))==null||n.focus(),y(this,ft)&&(this.hidden=!0)):o==="Enter"||o===" "?this.handleSelect(e):this.handleMove(e)};$i=new WeakSet;kr=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};Bn=new WeakSet;iu=function(){return this.items.find(e=>e.tabIndex===0)};Wi=new WeakSet;Sr=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};Xa=new WeakSet;$n=function(e,t){const i=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};Ce.shadowRootOptions={mode:"open"};Ce.getTemplateHTML=Lm;function Cm(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e?.role)}function ta(e){var t;return(t=e.getAttribute("bounds")?oi(e,`#${e.getAttribute("bounds")}`):le(e)||e.parentElement)!=null?t:e}d.customElements.get("media-chrome-menu")||d.customElements.define("media-chrome-menu",Ce);var Vs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Me=(e,t,i)=>(Vs(e,t,"read from private field"),i?i.call(e):t.get(e)),xe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Zr=(e,t,i,a)=>(Vs(e,t,"write to private field"),t.set(e,i),i),me=(e,t,i)=>(Vs(e,t,"access private method"),i),Ja,Fi,Wn,au,Ir,Gs,Ks,ru,we,si,ia,Fn,nu,ja,Vn;function Rm(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function Dm(e){return""}var se={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"},di=class extends d.HTMLElement{constructor(){if(super(),xe(this,Wn),xe(this,Ir),xe(this,Ks),xe(this,si),xe(this,Fn),xe(this,ja),xe(this,Ja,!1),xe(this,Fi,void 0),xe(this,we,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),a=(e=this.submenuElement.checkedItems)==null?void 0:e[0],r=(t=a?.dataset.description)!=null?t:a?.text,n=V.createElement("span");n.textContent=r??"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[se.TYPE,se.DISABLED,se.CHECKED,se.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),bi(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":me(this,Wn,au).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":me(this,Fn,nu).call(this,e);break;case"keyup":me(this,si,ia).call(this,e);break}}attributeChangedCallback(e,t,i){e===se.CHECKED&&bi(this)&&!Me(this,Ja)?this.setAttribute("aria-checked",i!=null?"true":"false"):e===se.TYPE&&i!==t?this.role="menuitem"+i:e===se.DISABLED&&i!==t&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(se.DISABLED)||this.enable(),this.role="menuitem"+this.type,Zr(this,Fi,Gn(this,this.parentNode)),me(this,ja,Vn).call(this),this.submenuElement&&me(this,Ir,Gs).call(this)}disconnectedCallback(){this.disable(),me(this,ja,Vn).call(this),Zr(this,Fi,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=wr(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(se.TYPE))!=null?e:""}set type(e){this.setAttribute(se.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(se.VALUE))!=null?e:this.text}set value(e){this.setAttribute(se.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(bi(this))return this.getAttribute("aria-checked")==="true"}set checked(e){bi(this)&&(Zr(this,Ja,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){bi(this)||this.invokeTargetElement&&Ne(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Ns({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};Ja=new WeakMap;Fi=new WeakMap;Wn=new WeakSet;au=function(e){const t=e.target;if(!t?.name)for(const a of t.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();t.name==="submenu"&&(this.submenuElement?me(this,Ir,Gs).call(this):me(this,Ks,ru).call(this))};Ir=new WeakSet;Gs=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Me(this,we)),this.submenuElement.addEventListener("addmenuitem",Me(this,we)),this.submenuElement.addEventListener("removemenuitem",Me(this,we)),Me(this,we).call(this)};Ks=new WeakSet;ru=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Me(this,we)),this.submenuElement.removeEventListener("addmenuitem",Me(this,we)),this.submenuElement.removeEventListener("removemenuitem",Me(this,we)),Me(this,we).call(this)};we=new WeakMap;si=new WeakSet;ia=function(e){const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",me(this,si,ia));return}this.handleClick(e)};Fn=new WeakSet;nu=function(e){const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",me(this,si,ia));return}this.addEventListener("keyup",me(this,si,ia),{once:!0})};ja=new WeakSet;Vn=function(){var e;const t=(e=Me(this,Fi))==null?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=t[0]);for(const a of t)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};di.shadowRootOptions={mode:"open"};di.getTemplateHTML=Rm;di.getSuffixSlotInnerHTML=Dm;function bi(e){return e.type==="radio"||e.type==="checkbox"}function Gn(e,t){if(!e)return null;const{host:i}=e.getRootNode();return!t&&i?Gn(e,i):t?.items?t:Gn(t,t?.parentNode)}d.customElements.get("media-chrome-menu-item")||d.customElements.define("media-chrome-menu-item",di);function xm(e){return`
    ${Ce.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}var su=class extends Ce{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:le(this).querySelector("media-settings-menu-button")}};su.getTemplateHTML=xm;d.customElements.get("media-settings-menu")||d.customElements.define("media-settings-menu",su);function Om(e){return`
    ${di.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function Um(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}var Br=class extends di{};Br.shadowRootOptions={mode:"open"};Br.getTemplateHTML=Om;Br.getSuffixSlotInnerHTML=Um;d.customElements.get("media-settings-menu-item")||d.customElements.define("media-settings-menu-item",Br);var ui=class extends Q{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=wr(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Ns({relatedTarget:this}))}};d.customElements.get("media-chrome-menu-button")||d.customElements.define("media-chrome-menu-button",ui);function Pm(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function Nm(){return m("Settings")}var qs=class extends ui{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",m("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:le(this).querySelector("media-settings-menu")}};qs.getSlotTemplateHTML=Pm;qs.getTooltipContentHTML=Nm;d.customElements.get("media-settings-menu-button")||d.customElements.define("media-settings-menu-button",qs);var Zs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ou=(e,t,i)=>(Zs(e,t,"read from private field"),i?i.call(e):t.get(e)),fa=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Kn=(e,t,i,a)=>(Zs(e,t,"write to private field"),t.set(e,i),i),ga=(e,t,i)=>(Zs(e,t,"access private method"),i),Ri,yr,er,qn,tr,Zn,Hm=class extends Ce{constructor(){super(...arguments),fa(this,er),fa(this,tr),fa(this,Ri,[]),fa(this,yr,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===s.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(Kn(this,Ri,Ru(i??"")),ga(this,er,qn).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ga(this,tr,Zn))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ga(this,tr,Zn))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=le(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return ou(this,Ri)}set mediaAudioTrackList(e){Kn(this,Ri,e),ga(this,er,qn).call(this)}get mediaAudioTrackEnabled(){var e;return(e=U(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){P(this,s.MEDIA_AUDIO_TRACK_ENABLED,e)}};Ri=new WeakMap;yr=new WeakMap;er=new WeakSet;qn=function(){if(ou(this,yr)===JSON.stringify(this.mediaAudioTrackList))return;Kn(this,yr,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="";for(const t of e){const i=this.formatMenuItemText(t.label,t),a=ni({type:"radio",text:i,value:`${t.id}`,checked:t.enabled});a.prepend(gt(this,"checked-indicator")),this.defaultSlot.append(a)}};tr=new WeakSet;Zn=function(){if(this.value==null)return;const e=new d.CustomEvent(p.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-audio-track-menu")||d.customElements.define("media-audio-track-menu",Hm);var Bm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function $m(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Bm}</slot>
  `}function Wm(){return m("Audio")}var gl=e=>{const t=m("Audio");e.setAttribute("aria-label",t)},Ys=class extends ui{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),gl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_LANG&&gl(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=le(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=U(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){P(this,s.MEDIA_AUDIO_TRACK_ENABLED,e)}};Ys.getSlotTemplateHTML=$m;Ys.getTooltipContentHTML=Wm;d.customElements.get("media-audio-track-menu-button")||d.customElements.define("media-audio-track-menu-button",Ys);var Qs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Fm=(e,t,i)=>(Qs(e,t,"read from private field"),t.get(e)),Yr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Vm=(e,t,i,a)=>(Qs(e,t,"write to private field"),t.set(e,i),i),Qr=(e,t,i)=>(Qs(e,t,"access private method"),i),Mr,Yn,lu,ir,Qn,Gm=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function Km(e){return`
    ${Ce.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${Gm}</slot>
  `}var du=class extends Ce{constructor(){super(...arguments),Yr(this,Yn),Yr(this,ir),Yr(this,Mr,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_LIST&&t!==i?Qr(this,Yn,lu).call(this):e===s.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Qr(this,ir,Qn))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Qr(this,ir,Qn))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:le(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return bl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){_l(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return bl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){_l(this,s.MEDIA_SUBTITLES_SHOWING,e)}};Mr=new WeakMap;Yn=new WeakSet;lu=function(){var e;if(Fm(this,Mr)===JSON.stringify(this.mediaSubtitlesList))return;Vm(this,Mr,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const t=!this.value,i=ni({type:"radio",text:this.formatMenuItemText(m("Off")),value:"off",checked:t});i.prepend(gt(this,"checked-indicator")),this.defaultSlot.append(i);const a=this.mediaSubtitlesList;for(const r of a){const n=ni({type:"radio",text:this.formatMenuItemText(r.label,r),value:nn(r),checked:this.value==nn(r)});n.prepend(gt(this,"checked-indicator")),((e=r.kind)!=null?e:"subs")==="captions"&&n.append(gt(this,"captions-indicator")),this.defaultSlot.append(n)}};ir=new WeakSet;Qn=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(s.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if(e?.length&&i&&this.dispatchEvent(new d.CustomEvent(p.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;const a=new d.CustomEvent(p.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};du.getTemplateHTML=Km;var bl=(e,t)=>{const i=e.getAttribute(t);return i?xr(i):[]},_l=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Zi(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu")||d.customElements.define("media-captions-menu",du);var qm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Zm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Ym(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${qm}</slot>
      <slot name="off">${Zm}</slot>
    </slot>
  `}function Qm(){return m("Captions")}var Al=e=>{e.setAttribute("aria-checked",zl(e).toString())},Tl=e=>{e.setAttribute("aria-label",m("closed captions"))},zs=class extends ui{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING,s.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),Tl(this),Al(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_SHOWING?Al(this):e===s.MEDIA_LANG&&Tl(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=le(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return kl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Sl(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return kl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Sl(this,s.MEDIA_SUBTITLES_SHOWING,e)}};zs.getSlotTemplateHTML=Ym;zs.getTooltipContentHTML=Qm;var kl=(e,t)=>{const i=e.getAttribute(t);return i?xr(i):[]},Sl=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Zi(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu-button")||d.customElements.define("media-captions-menu-button",zs);var uu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Vt=(e,t,i)=>(uu(e,t,"read from private field"),i?i.call(e):t.get(e)),zr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},_i=(e,t,i)=>(uu(e,t,"access private method"),i),Ze,Di,ar,rr,zn,Xr={RATES:"rates"},zm=class extends Ce{constructor(){super(),zr(this,Di),zr(this,rr),zr(this,Ze,new rs(this,Xr.RATES,{defaultValue:Sd})),_i(this,Di,ar).call(this)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Xr.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===Xr.RATES&&t!=i&&(Vt(this,Ze).value=i,_i(this,Di,ar).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",_i(this,rr,zn))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",_i(this,rr,zn))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:le(this).querySelector("media-playback-rate-menu-button")}get rates(){return Vt(this,Ze)}set rates(e){e?Array.isArray(e)?Vt(this,Ze).value=e.join(" "):typeof e=="string"&&(Vt(this,Ze).value=e):Vt(this,Ze).value="",_i(this,Di,ar).call(this)}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,Zt)}set mediaPlaybackRate(e){H(this,s.MEDIA_PLAYBACK_RATE,e)}};Ze=new WeakMap;Di=new WeakSet;ar=function(){this.defaultSlot.textContent="";for(const e of Vt(this,Ze)){const t=ni({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(gt(this,"checked-indicator")),this.defaultSlot.append(t)}};rr=new WeakSet;zn=function(){if(!this.value)return;const e=new d.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-playback-rate-menu")||d.customElements.define("media-playback-rate-menu",zm);var nr=1;function Xm(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||nr}x</slot>
  `}function Jm(){return m("Playback rate")}var Xs=class extends ui{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:nr}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===s.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,r=Number.isNaN(a)?nr:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",m("Playback rate {playbackRate}",{playbackRate:r}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:le(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,nr)}set mediaPlaybackRate(e){H(this,s.MEDIA_PLAYBACK_RATE,e)}};Xs.getSlotTemplateHTML=Xm;Xs.getTooltipContentHTML=Jm;d.customElements.get("media-playback-rate-menu-button")||d.customElements.define("media-playback-rate-menu-button",Xs);var Js=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},xi=(e,t,i)=>(Js(e,t,"read from private field"),i?i.call(e):t.get(e)),ba=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Il=(e,t,i,a)=>(Js(e,t,"write to private field"),t.set(e,i),i),Lt=(e,t,i)=>(Js(e,t,"access private method"),i),Oi,Yt,Gt,Ui,sr,Xn,jm=class extends Ce{constructor(){super(...arguments),ba(this,Gt),ba(this,sr),ba(this,Oi,[]),ba(this,Yt,{})}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_LIST,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_RENDITION_SELECTED&&t!==i?(this.value=i??"auto",Lt(this,Gt,Ui).call(this)):e===s.MEDIA_RENDITION_LIST&&t!==i?(Il(this,Oi,Mu(i)),Lt(this,Gt,Ui).call(this)):e===s.MEDIA_HEIGHT&&t!==i&&Lt(this,Gt,Ui).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Lt(this,sr,Xn))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Lt(this,sr,Xn))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:le(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return xi(this,Oi)}set mediaRenditionList(e){Il(this,Oi,e),Lt(this,Gt,Ui).call(this)}get mediaRenditionSelected(){return U(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){P(this,s.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return O(this,s.MEDIA_HEIGHT)}set mediaHeight(e){H(this,s.MEDIA_HEIGHT,e)}};Oi=new WeakMap;Yt=new WeakMap;Gt=new WeakSet;Ui=function(){if(xi(this,Yt).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&xi(this,Yt).mediaHeight===this.mediaHeight)return;xi(this,Yt).mediaRenditionList=JSON.stringify(this.mediaRenditionList),xi(this,Yt).mediaHeight=this.mediaHeight;const e=this.mediaRenditionList.sort((n,o)=>o.height-n.height);for(const n of e)n.selected=n.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";const t=!this.mediaRenditionSelected;for(const n of e){const o=this.formatMenuItemText(`${Math.min(n.width,n.height)}p`,n),l=ni({type:"radio",text:o,value:`${n.id}`,checked:n.selected&&!t});l.prepend(gt(this,"checked-indicator")),this.defaultSlot.append(l)}const i=t?this.formatMenuItemText(`${m("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(m("Auto")),a=ni({type:"radio",text:i,value:"auto",checked:t}),r=this.mediaHeight>0?`${m("Auto")} (${this.mediaHeight}p)`:m("Auto");a.dataset.description=r,a.prepend(gt(this,"checked-indicator")),this.defaultSlot.append(a)};sr=new WeakSet;Xn=function(){if(this.value==null)return;const e=new d.CustomEvent(p.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-rendition-menu")||d.customElements.define("media-rendition-menu",jm);var ev=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function tv(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${ev}</slot>
  `}function iv(){return m("Quality")}var js=class extends ui{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",m("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:le(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return U(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){P(this,s.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return O(this,s.MEDIA_HEIGHT)}set mediaHeight(e){H(this,s.MEDIA_HEIGHT,e)}};js.getSlotTemplateHTML=tv;js.getTooltipContentHTML=iv;d.customElements.get("media-rendition-menu-button")||d.customElements.define("media-rendition-menu-button",js);var Jr,yl,Jn=(yl=(Jr=d.document)==null?void 0:Jr.createElement)==null?void 0:yl.call(Jr,"template");Jn&&(Jn.innerHTML=`
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));

        --media-icon-color: var(--_primary-color);
        --media-range-thumb-background: var(--_primary-color);
        --media-range-bar-color: var(--_primary-color);
        --media-control-background: transparent;
        --media-control-hover-background: transparent;
        --media-range-track-border-radius: 3px;
        --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
        --media-range-track-background: rgba(255, 255, 255, 0.5);
        --media-range-thumb-opacity: 0;
        --media-preview-thumbnail-border-radius: 2px;
        --media-tooltip-display: none;

        color: var(--_primary-color);
      }

      @supports (color: color-mix(in srgb, red, blue)) {
        :host {
          --_secondary-color: color-mix(in srgb, var(--media-secondary-color, #000) 75%, transparent);
        }
      }

      media-control-bar {
        --media-control-padding: 2px;
        background: var(--_secondary-color);
        align-items: center;
        height: 30px;
        border-radius: 4px;
        margin: 0 5px 5px;
        padding-inline: 2px;
      }

      media-controller[breakpointsm] media-control-bar {
        --media-control-padding: 4px;
        height: 38px;
        border-radius: 8px;
        padding-inline: 5px;
      }

      media-controller[breakpointmd] media-control-bar {
        height: 46px;
        margin: 0 8px 8px;
      }

      media-controller[breakpointlg] media-control-bar,
      media-controller[breakpointxl] media-control-bar {
        padding-inline: 7px;
      }

      .live-controls-left {
        margin-right: auto;
      }

      media-time-range,
      media-live-button,
      media-time-display,
      media-text-display,
      media-playback-rate-button[role='button'] {
        color: inherit;
      }

      [disabled]:not(media-live-button) {
        opacity: 60%;
        cursor: not-allowed;
      }

      
      media-seek-backward-button {
        display: var(--media-control-display, var(--media-seek-backward-button-display, none));
      }

      media-seek-forward-button {
        display: var(--media-control-display, var(--media-seek-forward-button-display, none));
      }

      media-pip-button {
        display: var(--media-control-display, var(--media-pip-button-display, none));
      }
    </style>

    <template partial="PlayButton">
      <media-play-button part="play button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
          <path d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
          <path
            d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
          />
        </svg>
      </media-play-button>
    </template>

    <template partial="MuteButton">
      <media-mute-button part="mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
          <path
            d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
          <path
            d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
          <path
            d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
          <path
            d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
          />
        </svg>
      </media-mute-button>
    </template>

    <template partial="CaptionsButton">
      <media-captions-button part="captions button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
          <path
            d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
          <path
            d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"
          />
        </svg>
      </media-captions-button>
    </template>

    <template partial="FullscreenButton">
      <media-fullscreen-button part="fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
          <path
            d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
          <path
            d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
          />
        </svg>
      </media-fullscreen-button>
    </template>

    <template partial="LiveButton">
      <media-live-button part="live seek-live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <span slot="text" style="font-weight: normal">Live</span>
        <svg
          slot="indicator"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          xmlns="http://www.w3.org/2000/svg"
          style="width: 8px; height: 8px; margin-right: 2px"
        >
          <rect width="8" height="8" rx="2" />
        </svg>
      </media-live-button>
    </template>

    <template partial="PipButton">
      <media-pip-button part="pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
          <path
            d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
          <path
            d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
          />
        </svg>
      </media-pip-button>
    </template>

    <template partial="SeekBackwardButton">
      <media-seek-backward-button
        seekoffset="{{backwardseekoffset ?? 10}}"
        part="seek-backward button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 22 24" slot="icon">
          <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
          <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
            {{backwardseekoffset ?? 10}}
          </text>
        </svg>
      </media-seek-backward-button>
    </template>

    <template partial="SeekForwardButton">
      <media-seek-forward-button
        seekoffset="{{forwardseekoffset ?? 10}}"
        part="seek-forward button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 22 24" slot="icon">
          <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
          <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset ?? 10}}
          </text>
        </svg>
      </media-seek-forward-button>
    </template>

    <template partial="AirplayButton">
      <media-airplay-button part="airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="icon">
          <path d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
        </svg>
      </media-airplay-button>
    </template>

    <template partial="CastButton">
      <media-cast-button part="cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
          <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
          <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
          <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
          <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
          <path d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z" />
        </svg>
      </media-cast-button>
    </template>

    <template partial="TimeRange">
      <media-time-range part="time range" disabled="{{disabled}}" aria-disabled="{{disabled}}"></media-time-range>
    </template>

    <template partial="VolumeRange">
      <media-volume-range part="volume range" disabled="{{disabled}}" aria-disabled="{{disabled}}"></media-volume-range>
    </template>

    <media-controller
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <template if="title">
        <div slot="top-chrome">
          <media-text-display>{{title}}</media-text-display>
        </div>
      </template>

      <template if="streamtype == 'on-demand'">
        <template if="!breakpointsm">
          <media-control-bar>
            {{>PlayButton}} {{>TimeRange}} {{>MuteButton}} {{>CaptionsButton}} {{>FullscreenButton}}
          </media-control-bar>
        </template>

        <template if="breakpointsm">
          <media-control-bar>
            {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeRange}}
            <template if="breakpointmd">
              <media-time-display></media-time-display>
            </template>
            {{>MuteButton}} {{>VolumeRange}} {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar>
          <div class="live-controls-left">
            {{>LiveButton}}
            <template if="!targetlivewindow">
              <template if="breakpointsm">
                <media-time-display></media-time-display>
              </template>
            </template>
          </div>
          <template if="targetlivewindow > 0">
            <template if="breakpointsm">{{>TimeRange}}</template>
          </template>
          <div class="live-controls-right">
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
            {{>MuteButton}} {{>VolumeRange}} {{>CaptionsButton}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
            {{>FullscreenButton}}
          </div>
        </media-control-bar>
      </template>

      <slot></slot>
    </media-controller>

  `);var cu=class extends Hr{};Tu(cu,"template",Jn);d.customElements&&!d.customElements.get("media-theme-minimal")&&d.customElements.define("media-theme-minimal",cu);
