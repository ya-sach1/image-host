<template>
  <div class="discord p-6 max-w-full">
    <div class="flex flex-row min-h-48">
      <div class="w-1/12 mx-4"> <!-- Avatar -->
        <img :src="avatarURL" class="rounded-full" alt="Discord Avatar">
      </div>

      <div class="w-10/12">
        <p> <!-- Username + time -->
          <span class="text-dapper text-lg mr-3">{{config.name}}</span>
          <span class="discord-muted text-md">Today at 12:00 AM</span>
        </p>

        <div>
          <p v-if="showLink || embed || spoilerGlitch"><a href="#" class="discord-link" title="Example Link">{{normalLink}}</a></p> <!-- Link -->

          <div v-if="embed" class="border-l-4 p-2 bg-discord-embed-bg" :style="{borderColor: embedDisplayColor}">
            <p class="text-xl"><a href="#" class="discord-link" title="Example Link">{{embedText || config.name}}</a></p> <!-- Embed Title -->
            <p class="text-lg">Uploaded at 12:00 AM {{embedDate}}</p> <!-- Embed Description -->
            <div class="h-32"> <!-- Embed Image -->
              <img :src="faviconURL" alt="Example Image">
            </div>
          </div>
          <div v-else class="h-32"> <!-- Non-Embed Image -->
            <img :src="faviconURL" alt="Example Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatarURL from "./avatar.png";
import faviconURL from "../favicon.webp";
import config from "./config";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function genRandom(i) {
  let res = "";
  for (const _ of Array(i)) {
    res += characters[Math.floor(Math.random() * characters.length)];
  }
  return res;
}

export default {
  name: "Preview",

  data: () => ({
    avatarURL,
    faviconURL,
    config
  }),

  props: [
    "embed",
    "embedColor",
    "embedText",
    "embedMDY",
    "showLink",
    "compatSLoD",
    "spoilerGlitch",
    "spoilerShowFilename",
    "domains",
    "encryption",
    "encKey",
    "nameLength"
  ],

  computed: {
    normalLink() {
      const genRandomEnc = Number.isNaN(parseInt(this.encKey)) ? (this.encKey ? 0 : 16) : parseInt(this.encKey);
      const fileName = `${this.encryption ? `${genRandom(genRandomEnc) || this.encKey}/` : ""}${genRandom(+this.nameLength || 14)}.png`;

      if (this.spoilerGlitch)
        return `${location.protocol}//${this.domains[0].value}/${this.spoilerShowFilename ? fileName : ""}`

      return `${location.protocol}//${this.domains[0].value}/${fileName}${this.compatSLoD ? "# " : ""}`;
    },

    embedDisplayColor() {
      return this.embedColor === "#000000" ? "#202225" : this.embedColor;
    },

    embedDate() {
      return this.embedMDY ? "1/13/2000" : "13/1/2000";
    }
  }
};
</script>