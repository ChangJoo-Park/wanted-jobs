<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">프론트엔드</router-link> |
      <router-link to="/android">안드로이드</router-link> |
      <router-link to="/ios">아이폰</router-link> |
      <router-link to="/about">소개</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  box-sizing: border-box;
  word-break: break-all;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.container {
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 1rem;
}
</style>
