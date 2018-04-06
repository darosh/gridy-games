<template>
  <svg viewBox="0 0 24 24">
    <defs>
      <clipPath :id="clipA">
        <rect width="12" height="24" x="0" y="0"></rect>
      </clipPath>
      <clipPath :id="clipB">
        <rect width="12" height="24" x="12" y="0"></rect>
      </clipPath>
    </defs>
    <g v-html="layers.Body[value[0]]" :style="{fill: fills.Body[value[1]].darken1}" :clip-path="urlA"></g>
    <g v-html="layers.Body[value[0]]" :style="{fill: fills.Body[value[1]].darken2}" :clip-path="urlB"></g>
    <g v-html="layers.Eyes[value[2]]" :style="{fill: fills.Eyes[value[1]][value[3]].lighten2}" :clip-path="urlA"></g>
    <g v-html="layers.Eyes[value[2]]" :style="{fill: fills.Eyes[value[1]][value[3]].lighten1}" :clip-path="urlB"></g>
    <g v-html="layers.Mouth[value[4]]" :style="{fill: fills.Eyes[value[1]][value[5]].lighten2}" :clip-path="urlA"></g>
    <g v-html="layers.Mouth[value[4]]" :style="{fill: fills.Eyes[value[1]][value[5]].lighten1}" :clip-path="urlB"></g>
  </svg>
</template>

<script>
import avatars from "raw-loader!../../avatars.svg";
import { Stream } from "stream";
import colors from "vuetify/es5/util/colors";

const div = document.createElement("div");
div.innerHTML = avatars;
const labeled = div.querySelectorAll("[inkscape\\:label]");

const layers = {};

labeled.forEach(element => {
  if (element.childElementCount) {
    const l = element.getAttribute("inkscape:label").split(" ");
    layers[l[0]] = layers[l[0]] || [];

    for (const c of element.children) {
      for (let name of c.getAttributeNames()) {
        if (/inkscape|^id$|style|sodipodi/.test(name)) {
          c.removeAttribute(name);
        }
      }
    }

    layers[l[0]][l[1] || 0] = element.innerHTML;
  }
});

console.log(layers);

let id = 0;

const scale = [
  colors.red,
  colors.pink,
  colors.purple,
  colors.deepPurple,
  colors.indigo,
  colors.blue,
  colors.lightBlue,
  colors.cyan,
  colors.teal,
  colors.green,
  colors.lightGreen,
  colors.lime,
  colors.yellow,
  colors.amber,
  colors.orange,
  colors.deepOrange
]

const white = {
  lighten2: colors.grey.lighten3,
  lighten1: colors.grey.lighten2,
}

const black = {
  lighten2: colors.grey.darken2,
  lighten1: colors.grey.darken3,
}

const fills = {
  Body: [],
  Eyes: [],
};

for(let x = 0; x < 8; x++) {
  fills.Body[x] = scale[(x * 2 + 2) % scale.length]
  fills.Eyes[x] = []

  for(let y = 0; y < 8; y++) {
    fills.Eyes[x][y] = x === y ? white : (x - y === -1) ? black : scale[(y * 2 + 1) % scale.length]
  }
}

export default {
  props: {
    value: {
      type: String,
      default: "075101"
    }
  },
  data() {
    return {
      id: ++id,
      layers,
      fills
    };
  },
  computed: {
    clipA() {
      return "clip-a-" + this.id;
    },
    clipB() {
      return "clip-b-" + this.id;
    },
    urlA() {
      return `url(#${this.clipA})`;
    },
    urlB() {
      return `url(#${this.clipB})`;
    }
  }
};
</script>
