<template>

  <router-link to="/">
    <button>Home</button>
  </router-link>

  <br>

  <div v-if="name == 'nana' || name == 'raycall'" class="chat">
    <div v-for="message in messages" :key="message">
      <div :class="'container ' + (isOwner(message.from) ? '' : 'darker')">

        <div v-if="message.from == 'nana'">
          <img src="../assets/images/20190821_211246.jpg" alt="Avatar"
               :class="(isOwner(message.from) ? 'left' : 'right')">
        </div>

        <div v-if="message.from == 'raycall'">
          <img src="../assets/images/20191130_211239.jpg" alt="Avatar"
               :class="(isOwner(message.from) ? 'left' : 'right')">
        </div>


        <p>{{ message.message }}</p>
        <span :class="'time-' + (isOwner(message.from) ? 'right' : 'left')">{{ message.time }}</span>
      </div>
    </div>

    <div class="container">
      <textarea rows="2" cols="70" v-model="messageToSend"></textarea>
      <br>
      <button @click="sendMessage" ref="send">Send</button>
    </div>

  </div>
</template>

<script>

import io from 'socket.io-client';

const socket = io('localhost:3000', { transports: ["websocket"] })

export default {
  name: 'Chat',
  props: ['name'],
  data() {
    return {
      messageToSend: '',
      messages: [],
    };
  },
  methods: {
    isOwner(from) {
      return (from == this.name);
    },
    sendMessage() {
      let date = new Date()
      let newMessage = {
        from: this.name,
        message: this.messageToSend,
        time: date.getHours() + ":" + date.getMinutes()
      }
      this.messages.push(newMessage);
      socket.emit('sendMessage', newMessage)
      this.messageToSend = '';
    }
  },
  updated() {
    this.$refs.send.scrollIntoView();
  },
  created() {
    socket.on("connection", (response) => {
      console.log(response);
    });

    socket.on("sendMessage", (response) => {
      this.messages.push(response)
      let audio = new Audio(require('../assets/audio/decay-475.mp3'))
      audio.play()
    });
  },
  beforeUnmount() {
    socket.off()
  }
};
</script>

<style src="../assets/css/chat.css" scoped></style>
