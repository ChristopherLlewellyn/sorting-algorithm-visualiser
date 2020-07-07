<template>
  <div id="header">
    <div class="inner_header">
      <div class="logo_container">
        <font-awesome-icon class="logo_container_icon" :icon="['fas', 'robot']" size="2x"></font-awesome-icon>
        <h1 class="logo_container_text">Sorting Algorithm Visualiser</h1>
      </div>

      <div class="links">
        <div class="link">
          <a class="item" href="https://github.com/ChristopherLlewellyn/sorting-algorithm-visualiser" target="_blank"
            rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'github']" size="3x"></font-awesome-icon>
          </a>
        </div>
        <div class="link">
          <a class="item" href="https://www.linkedin.com/in/christopher-llewellyn-888a37170/" target="_blank"
            rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="3x"></font-awesome-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/scss/_variables.scss";
#header {
  width: 100%;
  height: 80px;
  display: block;
  background-color: $bg-primary-dark;
  text-align: center;
}

.inner_header {
  width: 1000px;
  height: 100%;
  display: block;
  margin: 0 auto;
}

.logo_container {
  height: 100%;
  display: table;
  float: left;
}

.logo_container_text {
  color: white;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  font-size: 34px;
  font-family: 'Source Code Pro', monospace;
}

.logo_container_icon {
  color: white;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  margin-right: 20px;
}

.links {
  float: right;
  height: 100%;
}

.links .link {
  height: 100%;
  display: table;
  float: left;
  padding: 0px 20px;
}

.links .link .item {
  display: table-cell;
  vertical-align: middle;
  color: lightslategrey;
}

.links .link .item:hover {
  color: white;
}
</style>