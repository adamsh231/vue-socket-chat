<template>

  <div class="profile">
    <div class="card">
      <img src="../assets/images/20190821_211246.jpg" alt="Nana" style="width:100%">
      <h1>Roudlotul Jennah</h1>
      <p class="title">CEO & Founder, Kampung moslem</p>
      <p>People of Galunggung</p>
      <router-link to="/chat/nana"><p><button>Choose</button></p></router-link>

    </div>
    <div class="card">
      <img src="../assets/images/20191012_103501.jpg" alt="Raycall" style="width:100%">
      <h1>Raycall Karditama</h1>
      <p class="title">Boss, Cemara's Family</p>
      <p>Purwosari's Gangster</p>
      <router-link to="/chat/raycall"><p><button>Choose</button></p></router-link>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Profile',
};
</script>

<style src="../assets/css/profile.css" scoped></style>
