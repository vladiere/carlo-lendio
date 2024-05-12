import { defineStore } from 'pinia';
import axios from 'axios';
import config from '../utils/config';

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentArtist: null,
    currentTrack: null,
  }),
  actions: {
    loadSong(artist: any, track: any) {
      this.currentTrack = track;
      this.currentArtist = artist;

      if (this.audio && this.audio.src) {
        this.audio.pause();
        this.isPlaying = false;
        this.audio.src = '';
      }

      this.audio = new Audio();
      this.audio.src = track.path;

      setTimeout(() => {
        this.isPlaying = true;
        this.audio.play();
      }, 200);
    },
    playOrPauseSong() {
      if (this.audio.paused) {
        this.isPlaying = true;
        this.audio.play();
      } else {
        this.isPlaying = false;
        this.audio.pause();
      }
    },
    playOrPauseThisSong(artist: any, track: any) {
      if (!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)) {
        this.loadSong(artist, track);
        return;
      }

      this.playOrPauseSong();
    },
  }
})
