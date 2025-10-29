var yr=`<!-- prettier-ignore -->
<template id="media-theme-classic">
  <style>
    :host {
      --_primary-color: var(--media-primary-color, white);
      --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));
      --media-icon-color: var(--_primary-color);
      --media-range-thumb-background: var(--_primary-color);
      --media-range-bar-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_secondary-color);
      --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
      --media-range-track-background:
        linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7));
      --media-preview-thumbnail-border: 0;
      --media-preview-thumbnail-border-radius: 2px 2px 0 0;
      --media-preview-time-border-radius: 0 0 2px 2px;
      --media-preview-time-text-shadow: none;
      --media-menu-border-radius: 2px;
      --media-menu-transform-in: translateY(-8px) scale(1);
      --media-menu-transform-out: translateY(-6px) scale(.99);
      --media-menu-item-hover-background: rgba(255, 255, 255, 0.28);
      --media-tooltip-display: none;
      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    media-rendition-menu,
    media-audio-track-menu,
    media-captions-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
    }

    media-rendition-menu {
      min-width: 140px;
    }

    :host([audio]) {
      --media-preview-time-border-radius: 3px;
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
    }

    [disabled]:not(media-live-button),
    [aria-disabled='true']:not(media-live-button) {
      opacity: 60%;
      cursor: not-allowed;
    }

    /* 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast. */
    media-controller {
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused],:not([userinactive])) {
      /* 42px is the height of the control bar and progress bar
       * with an additional 5px as a buffer, to get 47px */
      --media-webkit-text-track-transform: translateY(-47px);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
     @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    :host media-time-range {
      color: var(--_primary-color);
      --media-range-thumb-opacity: 0;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar {
      --media-control-padding: 4px 3px;
    }

    [breakpointsm] media-control-bar {
      --media-control-padding: 9px 5px;
    }

    [breakpointmd] media-control-bar {
      --media-control-padding: 9px 7px;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is(media-text-display, media-time-display):first-child {
      --media-control-padding: 9px 5px 9px 10px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    /* Add a small space on the right to have the play button and
     * fullscreen button aligned in relation to the progress bar. */
    media-control-bar:not([slot])::after {
      content: '';
      width: 2px;
      height: 100%;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(160px, 25%);
      background: linear-gradient(rgb(0 0 0 / 0.4), transparent);
    }

    media-control-bar[slot='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.25), 0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      width: max(43px, min(10%, 55px));
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 2%;
      width: max(33px, min(8%, 40px));
    }

    media-control-bar:not([slot]) media-seek-backward-button {
      padding-right: 5px;
    }

    media-control-bar:not([slot]) media-seek-forward-button {
      padding-left: 5px;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      /* Adding px is required here for calc() */
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      width: min(100%, 100px);
    }

    media-time-display {
      white-space: nowrap;
    }

    :is(media-time-display, media-text-display, media-playback-rate-button[role='button']) {
      color: inherit;
      line-height: 24px;
    }

    :is(.title-display, media-live-button) {
      color: inherit;
      font-size: 16px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.6);
    }

    :host([audio]) .title-display {
      flex-grow: 1;
      font-size: 21px;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
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

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="backward">
        <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
        <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="forward">
        <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
        <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{forwardseekoffset}}
        </text>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
        <path
          d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
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

  <template partial="RenditionSelect">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 24">
        <path
          d="M2.25 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="header">Quality</div>
    </media-rendition-menu>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 24 24">
        <path d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"/>
        <path d="M7.25 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3-3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75Zm3 2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm3-1a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z"/>
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="header">Audio</div>
    </media-audio-track-menu>
  </template>

  <template partial="CaptionsSelect">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
        <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
        <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"/>
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="airplay">
        <path
          d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z"
        />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
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

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
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

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
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
    <media-live-button
      part="{{section ?? 'top'}} live button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-live-button>
  </template>

  <template partial="PlaybackRateButton">
    <media-playback-rate-button
      rates="{{playbackrates}}"
      part="bottom playback-rate button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-button>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range
      part="bottom time range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-range>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:300 md:700"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>
    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    
    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          {{>SeekBackwardButton}}
          {{>SeekForwardButton}}
          {{>TimeDisplay}}
          {{>TimeRange}}
          {{>MuteButton}}
          {{>VolumeRange}}
          {{>PlaybackRateButton}}
          {{>AudioTrackSelect}}
          {{>AirplayButton}}
          {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">

        <template if="targetlivewindow > 0">
          <template if="title">
            <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>TimeRange}}
            {{>MuteButton}}
            {{>VolumeRange}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

        <template if="!targetlivewindow">
          <template if="title">
            <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

      </template>
    </template>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <template if="streamtype == 'on-demand'">

        <template if="!breakpointsm">
          {{>TimeRange}}
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>MuteButton}}
            <div class="spacer"></div>
            {{>CaptionsSelect}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

        <template if="breakpointsm">
          <template if="!breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>SeekBackwardButton section="center"}}
              {{>PlayButton section="center"}}
              {{>SeekForwardButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>TimeDisplay}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>PlaybackRateButton}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="breakpointmd">
          <media-control-bar part="control-bar top" slot="top-chrome">
            {{>TitleDisplay}}
          </media-control-bar>
          <div slot="centered-chrome" class="center-controls">
            {{>PlayButton section="center"}}
          </div>
          {{>TimeRange}}
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>RenditionSelect}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>CaptionsSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
            {{>PipButton}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

      </template>

      <template if="streamtype == 'live'">

        <template if="!targetlivewindow">

          <template if="!breakpointsm">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar part="control-bar top" slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>PlayButton section="center"}}
              </div>
              <media-control-bar part="control-bar bottom">
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="targetlivewindow > 0">

          <template if="!breakpointsm">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar part="control-bar top" slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>SeekBackwardButton section="center"}}
                {{>PlayButton section="center"}}
                {{>SeekForwardButton section="center"}}
              </div>
              {{>TimeRange}}
              <media-control-bar part="control-bar bottom">
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>SeekBackwardButton}}
              {{>SeekForwardButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

        </template>

      </template>

    </template>

    <slot></slot>

  </media-controller>
</template>
`,Aa=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Aa{}globalThis.DocumentFragment=t}var wa=class extends Aa{},Tr={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(wa)}};function Ar(t,e){return new wa}var Sa={document:{createElement:Ar},customElements:Tr},Ma=typeof window>"u"||typeof globalThis.customElements>"u",ta=Ma?Sa:globalThis,wr=Ma?Sa.document:globalThis.document,St={MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest"},V={MEDIA_CONTROLLER:"mediacontroller"},Sr={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},xa=Object.entries(Sr),l=xa.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),Mr={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Li=xa.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...Mr});Object.entries(Li).reduce((t,[e,i])=>{const a=l[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});Object.entries(l).reduce((t,[e,i])=>{const a=Li[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"});var ea={SUBTITLES:"subtitles",CAPTIONS:"captions"},Ia=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},La=class extends Ia{},ia=class extends La{constructor(){super(...arguments),this.role=null}},xr=class{observe(){}unobserve(){}disconnect(){}},Ca={createElement:function(){return new zt.HTMLElement},createElementNS:function(){return new zt.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},zt={ResizeObserver:xr,document:Ca,Node:La,Element:ia,HTMLElement:class extends ia{constructor(){super(...arguments),this.innerHTML=""}get content(){return new zt.DocumentFragment}},DocumentFragment:class extends Ia{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},Ra=typeof window>"u"||typeof window.customElements>"u",Da=Object.keys(zt).every(t=>t in globalThis),d=Ra&&!Da?zt:globalThis,Yt=Ra&&!Da?Ca:globalThis.document,Ba=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},u=(t,e,i)=>(Ba(t,e,"read from private field"),i?i.call(t):e.get(t)),L=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},P=(t,e,i,a)=>(Ba(t,e,"write to private field"),e.set(t,i),i),ut,le,Q,Wt,W,U,Z,X,ht,de,A,aa=1,ra=0,Ir=1,Lr={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof it&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof it?r.element[r.attributeName]=n:r.value=n}}}},Ci=class extends d.DocumentFragment{constructor(t,e,i=Lr){var a;super(),L(this,ut,void 0),L(this,le,void 0),this.append(t.content.cloneNode(!0)),P(this,ut,Ha(this)),P(this,le,i),(a=i.createCallback)==null||a.call(i,this,u(this,ut),e),i.processCallback(this,u(this,ut),e)}update(t){u(this,le).processCallback(this,u(this,ut),t)}};ut=new WeakMap;le=new WeakMap;var Ha=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new Rr;for([i,a]of oa(r.value))if(!i)n.append(a);else{const o=new it(t,r.name,r.namespaceURI);n.append(o),e.push([a,o])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===aa&&!(r instanceof HTMLTemplateElement))Ha(r,e);else{const n=r.data;if(r.nodeType===aa||n.includes("{{")){const o=[];if(n)for([i,a]of oa(n))if(!i)o.push(new Text(a));else{const s=new Na(t);o.push(s),e.push([a,s])}else if(r instanceof HTMLTemplateElement){const s=new Wa(t,r);o.push(s),e.push([s.expression,s])}r.replaceWith(...o.flatMap(s=>s.replacementNodes||[s]))}}return e},na={},oa=t=>{let e="",i=0,a=na[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([ra,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([Ir,e.trim()]),e="",r++):e+=n||"";return e&&a.push([ra,(i>0?"{{":"")+e]),na[t]=a},Cr=11,Pa=class{get value(){return""}set value(t){}toString(){return this.value}},Oa=new WeakMap,Rr=class{constructor(){L(this,Q,[])}[Symbol.iterator](){return u(this,Q).values()}get length(){return u(this,Q).length}item(t){return u(this,Q)[t]}append(...t){for(const e of t)e instanceof it&&Oa.set(e,this),u(this,Q).push(e)}toString(){return u(this,Q).join("")}};Q=new WeakMap;var it=class extends Pa{constructor(t,e,i){super(),L(this,X),L(this,Wt,""),L(this,W,void 0),L(this,U,void 0),L(this,Z,void 0),P(this,W,t),P(this,U,e),P(this,Z,i)}get attributeName(){return u(this,U)}get attributeNamespace(){return u(this,Z)}get element(){return u(this,W)}get value(){return u(this,Wt)}set value(t){u(this,Wt)!==t&&(P(this,Wt,t),!u(this,X,ht)||u(this,X,ht).length===1?t==null?u(this,W).removeAttributeNS(u(this,Z),u(this,U)):u(this,W).setAttributeNS(u(this,Z),u(this,U),t):u(this,W).setAttributeNS(u(this,Z),u(this,U),u(this,X,ht).toString()))}get booleanValue(){return u(this,W).hasAttributeNS(u(this,Z),u(this,U))}set booleanValue(t){if(!u(this,X,ht)||u(this,X,ht).length===1)this.value=t?"":null;else throw new DOMException("Value is not fully templatized")}};Wt=new WeakMap;W=new WeakMap;U=new WeakMap;Z=new WeakMap;X=new WeakSet;ht=function(){return Oa.get(this)};var Na=class extends Pa{constructor(t,e){super(),L(this,de,void 0),L(this,A,void 0),P(this,de,t),P(this,A,e?[...e]:[new Text])}get replacementNodes(){return u(this,A)}get parentNode(){return u(this,de)}get nextSibling(){return u(this,A)[u(this,A).length-1].nextSibling}get previousSibling(){return u(this,A)[0].previousSibling}get value(){return u(this,A).map(t=>t.textContent).join("")}set value(t){this.replace(t)}replace(...t){const e=t.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===Cr?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);e.length||e.push(new Text),P(this,A,Dr(u(this,A)[0].parentNode,u(this,A),e,this.nextSibling))}};de=new WeakMap;A=new WeakMap;var Wa=class extends Na{constructor(t,e){const i=e.getAttribute("directive")||e.getAttribute("type");let a=e.getAttribute("expression")||e.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(t),this.expression=a,this.template=e,this.directive=i}};function Dr(t,e,i,a=null){let r=0,n,o,s,m=i.length,c=e.length;for(;r<m&&r<c&&e[r]==i[r];)r++;for(;r<m&&r<c&&i[m-1]==e[c-1];)a=i[--c,--m];if(r==c)for(;r<m;)t.insertBefore(i[r++],a);if(r==m)for(;r<c;)t.removeChild(e[r++]);else{for(n=e[r];r<m;)s=i[r++],o=n?n.nextSibling:a,n==s?n=o:r<m&&i[r]==o?(t.replaceChild(s,n),n=o):t.insertBefore(s,n);for(;n!=a;)o=n.nextSibling,t.removeChild(n),n=o}return i}function Br(t){return t?.split(/\s+/).map(Hr)}function Hr(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function Pr(t){return t?.split(/\s+/).map(Or)}function Or(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function Nr(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Ua(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}var sa={string:t=>String(t)},Za=class{constructor(t){this.template=t,this.state=void 0}},J=new WeakMap,j=new WeakMap,je={partial:(t,e)=>{e[t.expression]=new Za(t.template)},if:(t,e)=>{var i;if($a(t.expression,e))if(J.get(t)!==t.template){J.set(t,t.template);const a=new Ci(t.template,e,Ri);t.replace(a),j.set(t,a)}else(i=j.get(t))==null||i.update(e);else t.replace(""),J.delete(t),j.delete(t)}},Wr=Object.keys(je),Ri={processCallback(t,e,i){var a,r;if(i)for(const[n,o]of e){if(o instanceof Wa){if(!o.directive){const m=Wr.find(c=>o.template.hasAttribute(c));m&&(o.directive=m,o.expression=o.template.getAttribute(m))}(a=je[o.directive])==null||a.call(je,o,i);continue}let s=$a(n,i);if(s instanceof Za){J.get(o)!==s.template?(J.set(o,s.template),s=new Ci(s.template,s.state,Ri),o.value=s,j.set(o,s)):(r=j.get(o))==null||r.update(s.state);continue}s?(o instanceof it&&o.attributeName.startsWith("aria-")&&(s=String(s)),o instanceof it?typeof s=="boolean"?o.booleanValue=s:typeof s=="function"?o.element[o.attributeName]=s:o.value=s:(o.value=s,J.delete(o),j.delete(o))):o instanceof it?o.value=void 0:(o.value=void 0,J.delete(o),j.delete(o))}}},la={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=sa[e])==null?void 0:i.call(sa,t)}};function Ur(t){return Zr(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function $a(t,e={}){var i,a,r,n,o,s,m;const c=Ur(t);if(c.length===0||c.some(({type:E})=>!E))return Dt(t);if(((i=c[0])==null?void 0:i.token)===">"){const E=e[(a=c[1])==null?void 0:a.token];if(!E)return Dt(t);const k={...e};E.state=k;const _=c.slice(2);for(let S=0;S<_.length;S+=3){const Rt=(r=_[S])==null?void 0:r.token,ee=(n=_[S+1])==null?void 0:n.token,_r=(o=_[S+2])==null?void 0:o.token;Rt&&ee==="="&&(k[Rt]=Bt(_r,e))}return E}if(c.length===1)return ie(c[0])?Bt(c[0].token,e):Dt(t);if(c.length===2){const E=(s=c[0])==null?void 0:s.token,k=la[E];if(!k||!ie(c[1]))return Dt(t);const _=Bt(c[1].token,e);return k(_)}if(c.length===3){const E=(m=c[1])==null?void 0:m.token,k=la[E];if(!k||!ie(c[0])||!ie(c[2]))return Dt(t);const _=Bt(c[0].token,e);if(E==="|")return k(_,c[2].token);const S=Bt(c[2].token,e);return k(_,S)}}function Dt(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function ie({type:t}){return["number","boolean","string","param"].includes(t)}function Bt(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):Ua(t)?parseFloat(t):e[t]}function Zr(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const o in e)a=e[o].exec(t),a&&a.index<i&&(r={token:a[0],type:o,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var Di=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ti=(t,e,i)=>(Di(t,e,"read from private field"),i?i.call(t):e.get(t)),Ht=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},tt=(t,e,i,a)=>(Di(t,e,"write to private field"),e.set(t,i),i),Ge=(t,e,i)=>(Di(t,e,"access private method"),i),_t,ce,yt,ei,Ka,ue,ii,Ve={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},Ga=Yt.createElement("template");Ga.innerHTML=`
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
`;var Oe=class extends d.HTMLElement{constructor(){super(),Ht(this,ei),Ht(this,ue),Ht(this,_t,void 0),Ht(this,ce,void 0),Ht(this,yt,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const t=new MutationObserver(e=>{var i;this.mediaController&&!((i=this.mediaController)!=null&&i.breakpointsComputed)||e.some(a=>{const r=a.target;return r===this?!0:r.localName!=="media-controller"?!1:!!(Ve[a.attributeName]||a.attributeName.startsWith("breakpoint"))})&&this.render()});t.observe(this,{attributes:!0}),t.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(Li.BREAKPOINTS_COMPUTED,this.render),Ge(this,ei,Ka).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var t;return(t=ti(this,_t))!=null?t:this.constructor.template}set template(t){if(t===null){this.removeAttribute("template");return}typeof t=="string"?this.setAttribute("template",t):t instanceof HTMLTemplateElement&&(tt(this,_t,t),tt(this,yt,null),this.createRenderer())}get props(){var t,e,i;const a=[...Array.from((e=(t=this.mediaController)==null?void 0:t.attributes)!=null?e:[]).filter(({name:n})=>Ve[n]||n.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(const n of a){const o=(i=Ve[n.name])!=null?i:Nr(n.name);let{value:s}=n;s!=null?(Ua(s)&&(s=parseFloat(s)),r[o]=s===""?!0:s):r[o]=!1}return r}attributeChangedCallback(t,e,i){t==="template"&&e!=i&&Ge(this,ue,ii).call(this)}connectedCallback(){Ge(this,ue,ii).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==ti(this,ce)&&(tt(this,ce,this.template),this.renderer=new Ci(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(Ga.content.cloneNode(!0),this.renderer))}render(){var t;(t=this.renderer)==null||t.update(this.props)}};_t=new WeakMap;ce=new WeakMap;yt=new WeakMap;ei=new WeakSet;Ka=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};ue=new WeakSet;ii=function(){var t;const e=this.getAttribute("template");if(!e||e===ti(this,yt))return;const i=this.getRootNode(),a=(t=i?.getElementById)==null?void 0:t.call(i,e);if(a){tt(this,yt,e),tt(this,_t,a),this.createRenderer();return}$r(e)&&(tt(this,yt,e),Kr(e).then(r=>{const n=Yt.createElement("template");n.innerHTML=r,tt(this,_t,n),this.createRenderer()}).catch(console.error))};Oe.observedAttributes=["template"];Oe.processor=Ri;function $r(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function Kr(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}d.customElements.get("media-theme")||d.customElements.define("media-theme",Oe);function Gr({anchor:t,floating:e,placement:i}){const a=Vr({anchor:t,floating:e}),{x:r,y:n}=Fr(a,i);return{x:r,y:n}}function Vr({anchor:t,floating:e}){return{anchor:qr(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function qr(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function Fr({anchor:t,floating:e},i){const a=zr(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Va(i),o=t.x+t.width/2-e.width/2,s=t.y+t.height/2-e.height/2,m=t[r]/2-e[r]/2;let c;switch(n){case"top":c={x:o,y:t.y-e.height};break;case"bottom":c={x:o,y:t.y+t.height};break;case"right":c={x:t.x+t.width,y:s};break;case"left":c={x:t.x-e.width,y:s};break;default:c={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":c[a]-=m;break;case"end":c[a]+=m;break}return c}function Va(t){return t.split("-")[0]}function zr(t){return["top","bottom"].includes(Va(t))?"y":"x"}var da=new WeakMap,Bi=t=>{let e=da.get(t);return e||da.set(t,e=new Set),e},qa=new d.ResizeObserver(t=>{for(const e of t)for(const i of Bi(e.target))i(e)});function Se(t,e){Bi(t).add(e),qa.observe(t)}function Me(t,e){const i=Bi(t);i.delete(e),i.size||qa.unobserve(t)}var Hi=class extends Event{constructor({action:t="auto",relatedTarget:e,...i}){super("invoke",i),this.action=t,this.relatedTarget=e}},Yr=class extends Event{constructor({newState:t,oldState:e,...i}){super("toggle",i),this.newState=t,this.oldState=e}};function Ne(t){const e={};for(const i of t)e[i.name]=i.value;return e}function T(t){var e;return(e=ai(t))!=null?e:Ue(t,"media-controller")}function ai(t){var e;const{MEDIA_CONTROLLER:i}=V,a=t.getAttribute(i);if(a)return(e=Ze(t))==null?void 0:e.getElementById(a)}var We=(t,e)=>!t||!e?!1:t?.contains(e)?!0:We(t,e.getRootNode().host),Ue=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||Ue(t.getRootNode().host,e)};function Fa(t=document){var e;const i=t?.activeElement;return i?(e=Fa(i.shadowRoot))!=null?e:i:null}function Ze(t){var e;const i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Qr(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function Xr(t,e){const i=Jr(t,a=>a===e);return i||za(t,e)}function Jr(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of n??[])if(e(o.selectorText))return o}}function za(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];return n?.sheet?(n?.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function It(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function te(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}It(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function ri(t,e){return t.hasAttribute(e)}function ca(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}ri(t,e)!=i&&t.toggleAttribute(e,i)}function O(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function F(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;O(t,e,void 0)!==a&&t.setAttribute(e,a)}var Pi=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},h=(t,e,i)=>(Pi(t,e,"read from private field"),i?i.call(t):e.get(t)),p=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},M=(t,e,i,a)=>(Pi(t,e,"write to private field"),e.set(t,i),i),v=(t,e,i)=>(Pi(t,e,"access private method"),i),x,at,z,he,me,rt,Qt,ni,Ya,xe,Oi,Ie,pe,oi,si,Qa,li,Xa,di,Ja,Tt,At,wt,Xt,Le,Ni,ci,ja,Wi,tr,ui,er,Ui,ir,hi,ar,mi,rr,Vt,Ce,pi,nr,qt,Re,ve,vi;function Mt({type:t,text:e,value:i,checked:a}){const r=Yt.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=Yt.createElement("span");return n.textContent=e,r.append(n),r}function nt(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function jr(t){return`
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
  `}var Y={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"},D=class extends d.HTMLElement{constructor(){if(super(),p(this,ni),p(this,xe),p(this,pe),p(this,si),p(this,li),p(this,di),p(this,wt),p(this,Le),p(this,ci),p(this,Wi),p(this,ui),p(this,Ui),p(this,hi),p(this,mi),p(this,Vt),p(this,pi),p(this,qt),p(this,ve),p(this,x,null),p(this,at,null),p(this,z,null),p(this,he,new Set),p(this,me,void 0),p(this,rt,!1),p(this,Qt,null),p(this,Ie,()=>{const t=h(this,he),e=new Set(this.items);for(const i of t)e.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of e)t.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));M(this,he,e)}),p(this,Tt,()=>{v(this,wt,Xt).call(this),v(this,Le,Ni).call(this,!1)}),p(this,At,()=>{v(this,wt,Xt).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=Ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),M(this,me,new MutationObserver(h(this,Ie))),h(this,me).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[Y.DISABLED,Y.HIDDEN,Y.STYLE,Y.ANCHOR,V.MEDIA_CONTROLLER]}static formatMenuItemText(t,e){return t}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(t){switch(t.type){case"slotchange":v(this,ni,Ya).call(this,t);break;case"invoke":v(this,si,Qa).call(this,t);break;case"click":v(this,ci,ja).call(this,t);break;case"toggle":v(this,ui,er).call(this,t);break;case"focusout":v(this,hi,ar).call(this,t);break;case"keydown":v(this,mi,rr).call(this,t);break}}connectedCallback(){var t,e;M(this,Qt,za(this.shadowRoot,":host")),v(this,pe,oi).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),M(this,x,ai(this)),(e=(t=h(this,x))==null?void 0:t.associateElement)==null||e.call(t,this),this.hidden||(Se(Jt(this),h(this,Tt)),Se(this,h(this,At))),v(this,xe,Oi).call(this)}disconnectedCallback(){var t,e;Me(Jt(this),h(this,Tt)),Me(this,h(this,At)),this.disable(),(e=(t=h(this,x))==null?void 0:t.unassociateElement)==null||e.call(t,this),M(this,x,null)}attributeChangedCallback(t,e,i){var a,r,n,o;t===Y.HIDDEN&&i!==e?(h(this,rt)||M(this,rt,!0),this.hidden?v(this,di,Ja).call(this):v(this,li,Xa).call(this),this.dispatchEvent(new Yr({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):t===V.MEDIA_CONTROLLER?(e&&((r=(a=h(this,x))==null?void 0:a.unassociateElement)==null||r.call(a,this),M(this,x,null)),i&&this.isConnected&&(M(this,x,ai(this)),(o=(n=h(this,x))==null?void 0:n.associateElement)==null||o.call(n,this))):t===Y.DISABLED&&i!==e?i==null?this.enable():this.disable():t===Y.STYLE&&i!==e&&v(this,pe,oi).call(this)}formatMenuItemText(t,e){return this.constructor.formatMenuItemText(t,e)}get anchor(){return this.getAttribute("anchor")}set anchor(t){this.setAttribute("anchor",`${t}`)}get anchorElement(){var t;return this.anchor?(t=Ze(this))==null?void 0:t.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(tn)}get radioGroupItems(){return this.items.filter(t=>t.role==="menuitemradio")}get checkedItems(){return this.items.filter(t=>t.checked)}get value(){var t,e;return(e=(t=this.checkedItems[0])==null?void 0:t.value)!=null?e:""}set value(t){const e=this.items.find(i=>i.value===t);e&&v(this,ve,vi).call(this,e)}focus(){if(M(this,at,Fa()),this.items.length){v(this,qt,Re).call(this,this.items[0]),this.items[0].focus();return}const t=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');t?.focus()}handleSelect(t){var e;const i=v(this,Vt,Ce).call(this,t);i&&(v(this,ve,vi).call(this,i,i.type==="checkbox"),h(this,z)&&!this.hidden&&((e=h(this,at))==null||e.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(t){var e,i;const{key:a}=t,r=this.items,n=(i=(e=v(this,Vt,Ce).call(this,t))!=null?e:v(this,pi,nr).call(this))!=null?i:r[0],o=r.indexOf(n);let s=Math.max(0,o);a==="ArrowDown"?s++:a==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),v(this,qt,Re).call(this,r[s]),r[s].focus()}};x=new WeakMap;at=new WeakMap;z=new WeakMap;he=new WeakMap;me=new WeakMap;rt=new WeakMap;Qt=new WeakMap;ni=new WeakSet;Ya=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&v(this,xe,Oi).call(this),e.name||h(this,Ie).call(this)};xe=new WeakSet;Oi=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};Ie=new WeakMap;pe=new WeakSet;oi=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};si=new WeakSet;Qa=function(t){M(this,z,t.relatedTarget),We(this,t.relatedTarget)||(this.hidden=!this.hidden)};li=new WeakSet;Xa=function(){var t;(t=h(this,z))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Se(Jt(this),h(this,Tt)),Se(this,h(this,At))};di=new WeakSet;Ja=function(){var t;(t=h(this,z))==null||t.setAttribute("aria-expanded","false"),Me(Jt(this),h(this,Tt)),Me(this,h(this,At))};Tt=new WeakMap;At=new WeakMap;wt=new WeakSet;Xt=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=Gr({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=Jt(this).getBoundingClientRect(),n=r.width-e-t,o=r.height-i-this.offsetHeight,{style:s}=h(this,Qt);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,n)}px`),s.setProperty("--_menu-bottom",`${o}px`);const m=getComputedStyle(this),E=s.getPropertyValue("--_menu-bottom")===m.bottom?o:parseFloat(m.bottom),k=r.height-E-parseFloat(m.marginBottom);this.style.setProperty("--_menu-max-height",`${k}px`)};Le=new WeakSet;Ni=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e?.querySelector('[role="menu"]'),{style:a}=h(this,Qt);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),v(this,wt,Xt).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),v(this,wt,Xt).call(this);a.removeProperty("--media-menu-transition-in")};ci=new WeakSet;ja=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(h(this,Wi,tr))){(e=h(this,at))==null||e.focus(),this.hidden=!0;return}const i=v(this,Vt,Ce).call(this,t);!i||i.hasAttribute("disabled")||(v(this,qt,Re).call(this,i),this.handleSelect(t))};Wi=new WeakSet;tr=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};ui=new WeakSet;er=function(t){if(t.target===this)return;v(this,Ui,ir).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Hi({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);v(this,Le,Ni).call(this,!0)};Ui=new WeakSet;ir=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};hi=new WeakSet;ar=function(t){var e;We(this,t.relatedTarget)||(h(this,rt)&&((e=h(this,at))==null||e.focus()),h(this,z)&&h(this,z)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};mi=new WeakSet;rr=function(t){var e,i,a,r,n;const{key:o,ctrlKey:s,altKey:m,metaKey:c}=t;if(!(s||m||c)&&this.keysUsed.includes(o))if(t.preventDefault(),t.stopPropagation(),o==="Tab"){if(h(this,rt)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else o==="Escape"?((n=h(this,at))==null||n.focus(),h(this,rt)&&(this.hidden=!0)):o==="Enter"||o===" "?this.handleSelect(t):this.handleMove(t)};Vt=new WeakSet;Ce=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};pi=new WeakSet;nr=function(){return this.items.find(t=>t.tabIndex===0)};qt=new WeakSet;Re=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};ve=new WeakSet;vi=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};D.shadowRootOptions={mode:"open"};D.getTemplateHTML=jr;function tn(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t?.role)}function Jt(t){var e;return(e=t.getAttribute("bounds")?Ue(t,`#${t.getAttribute("bounds")}`):T(t)||t.parentElement)!=null?e:t}d.customElements.get("media-chrome-menu")||d.customElements.define("media-chrome-menu",D);var Zi=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},C=(t,e,i)=>(Zi(t,e,"read from private field"),i?i.call(t):e.get(t)),B=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qe=(t,e,i,a)=>(Zi(t,e,"write to private field"),e.set(t,i),i),w=(t,e,i)=>(Zi(t,e,"access private method"),i),fe,Ft,fi,or,De,$i,Ki,sr,R,xt,jt,bi,lr,be,gi;function en(t){return`
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
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function an(t){return""}var y={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"},Lt=class extends d.HTMLElement{constructor(){if(super(),B(this,fi),B(this,De),B(this,Ki),B(this,xt),B(this,bi),B(this,be),B(this,fe,!1),B(this,Ft,void 0),B(this,R,()=>{var t,e;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),a=(t=this.submenuElement.checkedItems)==null?void 0:t[0],r=(e=a?.dataset.description)!=null?e:a?.text,n=Yt.createElement("span");n.textContent=r??"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=Ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[y.TYPE,y.DISABLED,y.CHECKED,y.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Pt(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(t){switch(t.type){case"slotchange":w(this,fi,or).call(this,t);break;case"click":this.handleClick(t);break;case"keydown":w(this,bi,lr).call(this,t);break;case"keyup":w(this,xt,jt).call(this,t);break}}attributeChangedCallback(t,e,i){t===y.CHECKED&&Pt(this)&&!C(this,fe)?this.setAttribute("aria-checked",i!=null?"true":"false"):t===y.TYPE&&i!==e?this.role="menuitem"+i:t===y.DISABLED&&i!==e&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(y.DISABLED)||this.enable(),this.role="menuitem"+this.type,qe(this,Ft,Ei(this,this.parentNode)),w(this,be,gi).call(this),this.submenuElement&&w(this,De,$i).call(this)}disconnectedCallback(){this.disable(),w(this,be,gi).call(this),qe(this,Ft,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=Ze(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var t;return(t=this.getAttribute(y.TYPE))!=null?t:""}set type(t){this.setAttribute(y.TYPE,`${t}`)}get value(){var t;return(t=this.getAttribute(y.VALUE))!=null?t:this.text}set value(t){this.setAttribute(y.VALUE,t)}get text(){var t;return((t=this.textContent)!=null?t:"").trim()}get checked(){if(Pt(this))return this.getAttribute("aria-checked")==="true"}set checked(t){Pt(this)&&(qe(this,fe,!0),this.setAttribute("aria-checked",t?"true":"false"),t?this.part.add("checked"):this.part.remove("checked"))}handleClick(t){Pt(this)||this.invokeTargetElement&&We(this,t.target)&&this.invokeTargetElement.dispatchEvent(new Hi({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};fe=new WeakMap;Ft=new WeakMap;fi=new WeakSet;or=function(t){const e=t.target;if(!e?.name)for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?w(this,De,$i).call(this):w(this,Ki,sr).call(this))};De=new WeakSet;$i=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",C(this,R)),this.submenuElement.addEventListener("addmenuitem",C(this,R)),this.submenuElement.addEventListener("removemenuitem",C(this,R)),C(this,R).call(this)};Ki=new WeakSet;sr=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",C(this,R)),this.submenuElement.removeEventListener("addmenuitem",C(this,R)),this.submenuElement.removeEventListener("removemenuitem",C(this,R)),C(this,R).call(this)};R=new WeakMap;xt=new WeakSet;jt=function(t){const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",w(this,xt,jt));return}this.handleClick(t)};bi=new WeakSet;lr=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",w(this,xt,jt));return}this.addEventListener("keyup",w(this,xt,jt),{once:!0})};be=new WeakSet;gi=function(){var t;const e=(t=C(this,Ft))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};Lt.shadowRootOptions={mode:"open"};Lt.getTemplateHTML=en;Lt.getSuffixSlotInnerHTML=an;function Pt(t){return t.type==="radio"||t.type==="checkbox"}function Ei(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?Ei(t,i):e?.items?e:Ei(e,e?.parentNode)}d.customElements.get("media-chrome-menu-item")||d.customElements.define("media-chrome-menu-item",Lt);function rn(t){return`
    ${D.getTemplateHTML(t)}
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
  `}var dr=class extends D{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:T(this).querySelector("media-settings-menu-button")}};dr.getTemplateHTML=rn;d.customElements.get("media-settings-menu")||d.customElements.define("media-settings-menu",dr);function nn(t){return`
    ${Lt.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function on(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}var $e=class extends Lt{};$e.shadowRootOptions={mode:"open"};$e.getTemplateHTML=nn;$e.getSuffixSlotInnerHTML=on;d.customElements.get("media-settings-menu-item")||d.customElements.define("media-settings-menu-item",$e);var st={PLACEMENT:"placement",BOUNDS:"bounds"};function sn(t){return`
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
  `}var Ke=class extends d.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var t;if(!Qr(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const e=this.placement;if(e==="left"||e==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const i=getComputedStyle(this),a=(t=Ue(this,"#"+this.bounds))!=null?t:T(this);if(!a)return;const{x:r,width:n}=a.getBoundingClientRect(),{x:o,width:s}=this.getBoundingClientRect(),m=o+s,c=r+n,E=i.getPropertyValue("--media-tooltip-offset-x"),k=E?parseFloat(E.replace("px","")):0,_=i.getPropertyValue("--media-tooltip-container-margin"),S=_?parseFloat(_.replace("px","")):0,Rt=o-r+k-S,ee=m-c+k+S;if(Rt<0){this.style.setProperty("--media-tooltip-offset-x",`${Rt}px`);return}if(ee>0){this.style.setProperty("--media-tooltip-offset-x",`${ee}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=Ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const t=this.placement;delete this.placement,this.placement=t}}static get observedAttributes(){return[st.PLACEMENT,st.BOUNDS]}get placement(){return O(this,st.PLACEMENT)}set placement(t){F(this,st.PLACEMENT,t)}get bounds(){return O(this,st.BOUNDS)}set bounds(t){F(this,st.BOUNDS,t)}};Ke.shadowRootOptions={mode:"open"};Ke.getTemplateHTML=sn;d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",Ke);var ua=Ke,Gi=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},f=(t,e,i)=>(Gi(t,e,"read from private field"),i?i.call(t):e.get(t)),lt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ae=(t,e,i,a)=>(Gi(t,e,"write to private field"),e.set(t,i),i),ln=(t,e,i)=>(Gi(t,e,"access private method"),i),I,gt,q,mt,ge,ki,cr,N={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function dn(t,e={}){return`
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

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${ua.shadowRootOptions.mode}">
          ${ua.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function cn(t,e){return`
    <slot></slot>
  `}function un(){return""}var ot=class extends d.HTMLElement{constructor(){if(super(),lt(this,ki),lt(this,I,void 0),this.preventClick=!1,this.tooltipEl=null,lt(this,gt,t=>{this.preventClick||this.handleClick(t),setTimeout(f(this,q),0)}),lt(this,q,()=>{var t,e;(e=(t=this.tooltipEl)==null?void 0:t.updateXOffset)==null||e.call(t)}),lt(this,mt,t=>{const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",f(this,mt));return}this.preventClick||this.handleClick(t)}),lt(this,ge,t=>{const{metaKey:e,altKey:i,key:a}=t;if(e||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",f(this,mt));return}this.addEventListener("keyup",f(this,mt),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const t=Ne(this.attributes),e=this.constructor.getTemplateHTML(t);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(e):this.shadowRoot.innerHTML=e}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",N.TOOLTIP_PLACEMENT,V.MEDIA_CONTROLLER,l.MEDIA_LANG]}enable(){this.addEventListener("click",f(this,gt)),this.addEventListener("keydown",f(this,ge)),this.tabIndex=0}disable(){this.removeEventListener("click",f(this,gt)),this.removeEventListener("keydown",f(this,ge)),this.removeEventListener("keyup",f(this,mt)),this.tabIndex=-1}attributeChangedCallback(t,e,i){var a,r,n,o,s;t===V.MEDIA_CONTROLLER?(e&&((r=(a=f(this,I))==null?void 0:a.unassociateElement)==null||r.call(a,this),ae(this,I,null)),i&&this.isConnected&&(ae(this,I,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(s=(o=f(this,I))==null?void 0:o.associateElement)==null||s.call(o,this))):t==="disabled"&&i!==e?i==null?this.enable():this.disable():t===N.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==e?this.tooltipEl.placement=i:t===l.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),f(this,q).call(this)}connectedCallback(){var t,e,i;const{style:a}=Xr(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const r=this.getAttribute(V.MEDIA_CONTROLLER);r&&(ae(this,I,(t=this.getRootNode())==null?void 0:t.getElementById(r)),(i=(e=f(this,I))==null?void 0:e.associateElement)==null||i.call(e,this)),d.customElements.whenDefined("media-tooltip").then(()=>ln(this,ki,cr).call(this))}disconnectedCallback(){var t,e;this.disable(),(e=(t=f(this,I))==null?void 0:t.unassociateElement)==null||e.call(t,this),ae(this,I,null),this.removeEventListener("mouseenter",f(this,q)),this.removeEventListener("focus",f(this,q)),this.removeEventListener("click",f(this,gt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return O(this,N.TOOLTIP_PLACEMENT)}set tooltipPlacement(t){F(this,N.TOOLTIP_PLACEMENT,t)}get mediaController(){return O(this,V.MEDIA_CONTROLLER)}set mediaController(t){F(this,V.MEDIA_CONTROLLER,t)}get disabled(){return ri(this,N.DISABLED)}set disabled(t){ca(this,N.DISABLED,t)}get noTooltip(){return ri(this,N.NO_TOOLTIP)}set noTooltip(t){ca(this,N.NO_TOOLTIP,t)}handleClick(t){}};I=new WeakMap;gt=new WeakMap;q=new WeakMap;mt=new WeakMap;ge=new WeakMap;ki=new WeakSet;cr=function(){this.addEventListener("mouseenter",f(this,q)),this.addEventListener("focus",f(this,q)),this.addEventListener("click",f(this,gt));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};ot.shadowRootOptions={mode:"open"};ot.getTemplateHTML=dn;ot.getSlotTemplateHTML=cn;ot.getTooltipContentHTML=un;d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",ot);var Ct=class extends ot{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(t){this.setAttribute("invoketarget",`${t}`)}get invokeTargetElement(){var t;return this.invokeTarget?(t=Ze(this))==null?void 0:t.querySelector(`#${this.invokeTarget}`):null}handleClick(){var t;(t=this.invokeTargetElement)==null||t.dispatchEvent(new Hi({relatedTarget:this}))}};d.customElements.get("media-chrome-menu-button")||d.customElements.define("media-chrome-menu-button",Ct);var hn={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."},ha,Fe={en:hn},ma=((ha=globalThis.navigator)==null?void 0:ha.language)||"en",mn=t=>{var e,i,a;const[r]=ma.split("-");return((e=Fe[ma])==null?void 0:e[t])||((i=Fe[r])==null?void 0:i[t])||((a=Fe.en)==null?void 0:a[t])||t},g=(t,e={})=>mn(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);function pn(){return`
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
  `}function vn(){return g("Settings")}var Vi=class extends Ct{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",g("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:T(this).querySelector("media-settings-menu")}};Vi.getSlotTemplateHTML=pn;Vi.getTooltipContentHTML=vn;d.customElements.get("media-settings-menu-button")||d.customElements.define("media-settings-menu-button",Vi);var qi=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ur=(t,e,i)=>(qi(t,e,"read from private field"),i?i.call(t):e.get(t)),re=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_i=(t,e,i,a)=>(qi(t,e,"write to private field"),e.set(t,i),i),ne=(t,e,i)=>(qi(t,e,"access private method"),i),Ut,Be,Ee,yi,ke,Ti,fn=class extends D{constructor(){super(...arguments),re(this,Ee),re(this,ke),re(this,Ut,[]),re(this,Be,void 0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_AUDIO_TRACK_LIST,l.MEDIA_AUDIO_TRACK_ENABLED,l.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_AUDIO_TRACK_ENABLED&&e!==i?this.value=i:t===l.MEDIA_AUDIO_TRACK_LIST&&e!==i&&(_i(this,Ut,Pr(i??"")),ne(this,Ee,yi).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ne(this,ke,Ti))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ne(this,ke,Ti))}get anchorElement(){var t;return this.anchor!=="auto"?super.anchorElement:(t=T(this))==null?void 0:t.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return ur(this,Ut)}set mediaAudioTrackList(t){_i(this,Ut,t),ne(this,Ee,yi).call(this)}get mediaAudioTrackEnabled(){var t;return(t=O(this,l.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){F(this,l.MEDIA_AUDIO_TRACK_ENABLED,t)}};Ut=new WeakMap;Be=new WeakMap;Ee=new WeakSet;yi=function(){if(ur(this,Be)===JSON.stringify(this.mediaAudioTrackList))return;_i(this,Be,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="";for(const e of t){const i=this.formatMenuItemText(e.label,e),a=Mt({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(nt(this,"checked-indicator")),this.defaultSlot.append(a)}};ke=new WeakSet;Ti=function(){if(this.value==null)return;const t=new d.CustomEvent(St.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};d.customElements.get("media-audio-track-menu")||d.customElements.define("media-audio-track-menu",fn);var bn=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function gn(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${bn}</slot>
  `}function En(){return g("Audio")}var pa=t=>{const e=g("Audio");t.setAttribute("aria-label",e)},Fi=class extends Ct{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_AUDIO_TRACK_ENABLED,l.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),pa(this)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_LANG&&pa(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=T(this))==null?void 0:t.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var t;return(t=O(this,l.MEDIA_AUDIO_TRACK_ENABLED))!=null?t:""}set mediaAudioTrackEnabled(t){F(this,l.MEDIA_AUDIO_TRACK_ENABLED,t)}};Fi.getSlotTemplateHTML=gn;Fi.getTooltipContentHTML=En;d.customElements.get("media-audio-track-menu-button")||d.customElements.define("media-audio-track-menu-button",Fi);var kn=(t="")=>t.split(/\s+/),_n=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?ea.CAPTIONS:ea.SUBTITLES,language:i,label:r}},hr=(t="",e={})=>kn(t).map(i=>{const a=_n(i);return{...e,...a}}),Ai=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,mr=(t=[])=>Array.prototype.map.call(t,Ai).join(" "),yn=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(l.MEDIA_SUBTITLES_SHOWING)},zi=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Tn=(t,e,i)=>(zi(t,e,"read from private field"),e.get(t)),ze=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},An=(t,e,i,a)=>(zi(t,e,"write to private field"),e.set(t,i),i),Ye=(t,e,i)=>(zi(t,e,"access private method"),i),He,wi,pr,_e,Si,wn=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function Sn(t){return`
    ${D.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${wn}</slot>
  `}var vr=class extends D{constructor(){super(...arguments),ze(this,wi),ze(this,_e),ze(this,He,void 0)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_SUBTITLES_LIST&&e!==i?Ye(this,wi,pr).call(this):t===l.MEDIA_SUBTITLES_SHOWING&&e!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Ye(this,_e,Si))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Ye(this,_e,Si))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:T(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return va(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){fa(this,l.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return va(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){fa(this,l.MEDIA_SUBTITLES_SHOWING,t)}};He=new WeakMap;wi=new WeakSet;pr=function(){var t;if(Tn(this,He)===JSON.stringify(this.mediaSubtitlesList))return;An(this,He,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const e=!this.value,i=Mt({type:"radio",text:this.formatMenuItemText(g("Off")),value:"off",checked:e});i.prepend(nt(this,"checked-indicator")),this.defaultSlot.append(i);const a=this.mediaSubtitlesList;for(const r of a){const n=Mt({type:"radio",text:this.formatMenuItemText(r.label,r),value:Ai(r),checked:this.value==Ai(r)});n.prepend(nt(this,"checked-indicator")),((t=r.kind)!=null?t:"subs")==="captions"&&n.append(nt(this,"captions-indicator")),this.defaultSlot.append(n)}};_e=new WeakSet;Si=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(l.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t?.length&&i&&this.dispatchEvent(new d.CustomEvent(St.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new d.CustomEvent(St.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};vr.getTemplateHTML=Sn;var va=(t,e)=>{const i=t.getAttribute(e);return i?hr(i):[]},fa=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=mr(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};d.customElements.get("media-captions-menu")||d.customElements.define("media-captions-menu",vr);var Mn=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,xn=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function In(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Mn}</slot>
      <slot name="off">${xn}</slot>
    </slot>
  `}function Ln(){return g("Captions")}var ba=t=>{t.setAttribute("data-captions-enabled",yn(t).toString())},ga=t=>{t.setAttribute("aria-label",g("closed captions"))},Yi=class extends Ct{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_SUBTITLES_LIST,l.MEDIA_SUBTITLES_SHOWING,l.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),ga(this),ba(this)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_SUBTITLES_SHOWING?ba(this):t===l.MEDIA_LANG&&ga(this)}get invokeTargetElement(){var t;return this.invokeTarget!=null?super.invokeTargetElement:(t=T(this))==null?void 0:t.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Ea(this,l.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){ka(this,l.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return Ea(this,l.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){ka(this,l.MEDIA_SUBTITLES_SHOWING,t)}};Yi.getSlotTemplateHTML=In;Yi.getTooltipContentHTML=Ln;var Ea=(t,e)=>{const i=t.getAttribute(e);return i?hr(i):[]},ka=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=mr(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};d.customElements.get("media-captions-menu-button")||d.customElements.define("media-captions-menu-button",Yi);var fr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},b=(t,e,i)=>(fr(t,e,"read from private field"),i?i.call(t):e.get(t)),Ot=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},oe=(t,e,i,a)=>(fr(t,e,"write to private field"),e.set(t,i),i),pt,vt,Pe,et,H,$,br=class{constructor(t,e,{defaultValue:i}={defaultValue:void 0}){Ot(this,H),Ot(this,pt,void 0),Ot(this,vt,void 0),Ot(this,Pe,void 0),Ot(this,et,new Set),oe(this,pt,t),oe(this,vt,e),oe(this,Pe,new Set(i))}[Symbol.iterator](){return b(this,H,$).values()}get length(){return b(this,H,$).size}get value(){var t;return(t=[...b(this,H,$)].join(" "))!=null?t:""}set value(t){var e;t!==this.value&&(oe(this,et,new Set),this.add(...(e=t?.split(" "))!=null?e:[]))}toString(){return this.value}item(t){return[...b(this,H,$)][t]}values(){return b(this,H,$).values()}forEach(t,e){b(this,H,$).forEach(t,e)}add(...t){var e,i;t.forEach(a=>b(this,et).add(a)),!(this.value===""&&!((e=b(this,pt))!=null&&e.hasAttribute(`${b(this,vt)}`)))&&((i=b(this,pt))==null||i.setAttribute(`${b(this,vt)}`,`${this.value}`))}remove(...t){var e;t.forEach(i=>b(this,et).delete(i)),(e=b(this,pt))==null||e.setAttribute(`${b(this,vt)}`,`${this.value}`)}contains(t){return b(this,H,$).has(t)}toggle(t,e){return typeof e<"u"?e?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,e){return this.remove(t),this.add(e),t===e}};pt=new WeakMap;vt=new WeakMap;Pe=new WeakMap;et=new WeakMap;H=new WeakSet;$=function(){return b(this,et).size?b(this,et):b(this,Pe)};var Cn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},dt=(t,e,i)=>(Cn(t,e,"read from private field"),i?i.call(t):e.get(t)),Rn=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},K,Qe={RATES:"rates"},gr=[1,1.2,1.5,1.7,2],Et=1;function Dn(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||Et}x</slot>
  `}function Bn(){return g("Playback rate")}var Qi=class extends ot{constructor(){var t;super(),Rn(this,K,new br(this,Qe.RATES,{defaultValue:gr})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(t=this.mediaPlaybackRate)!=null?t:Et}x`}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE,Qe.RATES]}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t===Qe.RATES&&(dt(this,K).value=i),t===l.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,r=Number.isNaN(a)?Et:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",g("Playback rate {playbackRate}",{playbackRate:r}))}}get rates(){return dt(this,K)}set rates(t){t?Array.isArray(t)?dt(this,K).value=t.join(" "):typeof t=="string"&&(dt(this,K).value=t):dt(this,K).value=""}get mediaPlaybackRate(){return It(this,l.MEDIA_PLAYBACK_RATE,Et)}set mediaPlaybackRate(t){te(this,l.MEDIA_PLAYBACK_RATE,t)}handleClick(){var t,e;const i=Array.from(dt(this,K).values(),n=>+n).sort((n,o)=>n-o),a=(e=(t=i.find(n=>n>this.mediaPlaybackRate))!=null?t:i[0])!=null?e:Et,r=new d.CustomEvent(St.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}};K=new WeakMap;Qi.getSlotTemplateHTML=Dn;Qi.getTooltipContentHTML=Bn;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",Qi);var Er=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ft=(t,e,i)=>(Er(t,e,"read from private field"),i?i.call(t):e.get(t)),Xe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Nt=(t,e,i)=>(Er(t,e,"access private method"),i),G,Zt,ye,Te,Mi,Je={RATES:"rates"},Hn=class extends D{constructor(){super(),Xe(this,Zt),Xe(this,Te),Xe(this,G,new br(this,Je.RATES,{defaultValue:gr})),Nt(this,Zt,ye).call(this)}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE,Je.RATES]}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_PLAYBACK_RATE&&e!=i?this.value=i:t===Je.RATES&&e!=i&&(ft(this,G).value=i,Nt(this,Zt,ye).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Nt(this,Te,Mi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Nt(this,Te,Mi))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:T(this).querySelector("media-playback-rate-menu-button")}get rates(){return ft(this,G)}set rates(t){t?Array.isArray(t)?ft(this,G).value=t.join(" "):typeof t=="string"&&(ft(this,G).value=t):ft(this,G).value="",Nt(this,Zt,ye).call(this)}get mediaPlaybackRate(){return It(this,l.MEDIA_PLAYBACK_RATE,Et)}set mediaPlaybackRate(t){te(this,l.MEDIA_PLAYBACK_RATE,t)}};G=new WeakMap;Zt=new WeakSet;ye=function(){this.defaultSlot.textContent="";for(const t of ft(this,G)){const e=Mt({type:"radio",text:this.formatMenuItemText(`${t}x`,t),value:t,checked:this.mediaPlaybackRate===Number(t)});e.prepend(nt(this,"checked-indicator")),this.defaultSlot.append(e)}};Te=new WeakSet;Mi=function(){if(!this.value)return;const t=new d.CustomEvent(St.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};d.customElements.get("media-playback-rate-menu")||d.customElements.define("media-playback-rate-menu",Hn);var Ae=1;function Pn(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||Ae}x</slot>
  `}function On(){return g("Playback rate")}var Xi=class extends Ct{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_PLAYBACK_RATE]}constructor(){var t;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(t=this.mediaPlaybackRate)!=null?t:Ae}x`}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t===l.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,r=Number.isNaN(a)?Ae:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",g("Playback rate {playbackRate}",{playbackRate:r}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:T(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return It(this,l.MEDIA_PLAYBACK_RATE,Ae)}set mediaPlaybackRate(t){te(this,l.MEDIA_PLAYBACK_RATE,t)}};Xi.getSlotTemplateHTML=Pn;Xi.getTooltipContentHTML=On;d.customElements.get("media-playback-rate-menu-button")||d.customElements.define("media-playback-rate-menu-button",Xi);var Ji=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$t=(t,e,i)=>(Ji(t,e,"read from private field"),i?i.call(t):e.get(t)),se=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_a=(t,e,i,a)=>(Ji(t,e,"write to private field"),e.set(t,i),i),ct=(t,e,i)=>(Ji(t,e,"access private method"),i),Kt,kt,bt,Gt,we,xi,Nn=class extends D{constructor(){super(...arguments),se(this,bt),se(this,we),se(this,Kt,[]),se(this,kt,{})}static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_RENDITION_LIST,l.MEDIA_RENDITION_SELECTED,l.MEDIA_RENDITION_UNAVAILABLE,l.MEDIA_HEIGHT]}static formatMenuItemText(t,e){return super.formatMenuItemText(t,e)}static formatRendition(t,{showBitrate:e=!1}={}){const i=`${Math.min(t.width,t.height)}p`;if(e&&t.bitrate){const a=t.bitrate/1e6,r=`${a.toFixed(a<1?1:0)} Mbps`;return`${i} (${r})`}return this.formatMenuItemText(i,t)}static compareRendition(t,e){var i,a;return e.height===t.height?((i=e.bitrate)!=null?i:0)-((a=t.bitrate)!=null?a:0):e.height-t.height}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t===l.MEDIA_RENDITION_SELECTED&&e!==i?(this.value=i??"auto",ct(this,bt,Gt).call(this)):t===l.MEDIA_RENDITION_LIST&&e!==i?(_a(this,Kt,Br(i)),ct(this,bt,Gt).call(this)):t===l.MEDIA_HEIGHT&&e!==i&&ct(this,bt,Gt).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ct(this,we,xi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ct(this,we,xi))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:T(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return $t(this,Kt)}set mediaRenditionList(t){_a(this,Kt,t),ct(this,bt,Gt).call(this)}get mediaRenditionSelected(){return O(this,l.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){F(this,l.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return It(this,l.MEDIA_HEIGHT)}set mediaHeight(t){te(this,l.MEDIA_HEIGHT,t)}compareRendition(t,e){return this.constructor.compareRendition(t,e)}formatMenuItemText(t,e){return this.constructor.formatMenuItemText(t,e)}formatRendition(t,e){return this.constructor.formatRendition(t,e)}showRenditionBitrate(t){return this.mediaRenditionList.some(e=>e!==t&&e.height===t.height&&e.bitrate!==t.bitrate)}};Kt=new WeakMap;kt=new WeakMap;bt=new WeakSet;Gt=function(){if($t(this,kt).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&$t(this,kt).mediaHeight===this.mediaHeight)return;$t(this,kt).mediaRenditionList=JSON.stringify(this.mediaRenditionList),$t(this,kt).mediaHeight=this.mediaHeight;const t=this.mediaRenditionList.sort(this.compareRendition.bind(this)),e=t.find(o=>o.id===this.mediaRenditionSelected);for(const o of t)o.selected=o===e;this.defaultSlot.textContent="";const i=!this.mediaRenditionSelected;for(const o of t){const s=this.formatRendition(o,{showBitrate:this.showRenditionBitrate(o)}),m=Mt({type:"radio",text:s,value:`${o.id}`,checked:o.selected&&!i});m.prepend(nt(this,"checked-indicator")),this.defaultSlot.append(m)}const a=e&&this.showRenditionBitrate(e),r=i?e?this.formatMenuItemText(`${g("Auto")} • ${this.formatRendition(e,{showBitrate:a})}`,e):this.formatMenuItemText(`${g("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(g("Auto")),n=Mt({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(nt(this,"checked-indicator")),this.defaultSlot.append(n)};we=new WeakSet;xi=function(){if(this.value==null)return;const t=new d.CustomEvent(St.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};d.customElements.get("media-rendition-menu")||d.customElements.define("media-rendition-menu",Nn);var Wn=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function Un(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Wn}</slot>
  `}function Zn(){return g("Quality")}var ji=class extends Ct{static get observedAttributes(){return[...super.observedAttributes,l.MEDIA_RENDITION_SELECTED,l.MEDIA_RENDITION_UNAVAILABLE,l.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",g("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:T(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return O(this,l.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(t){F(this,l.MEDIA_RENDITION_SELECTED,t)}get mediaHeight(){return It(this,l.MEDIA_HEIGHT)}set mediaHeight(t){te(this,l.MEDIA_HEIGHT,t)}};ji.getSlotTemplateHTML=Un;ji.getTooltipContentHTML=Zn;d.customElements.get("media-rendition-menu-button")||d.customElements.define("media-rendition-menu-button",ji);var Ii=wr.createElement("template");"innerHTML"in Ii&&(Ii.innerHTML=yr);var ya,Ta,kr=class extends Oe{};kr.template=(Ta=(ya=Ii.content)==null?void 0:ya.children)==null?void 0:Ta[0];ta.customElements.get("media-theme-classic")||ta.customElements.define("media-theme-classic",kr);
