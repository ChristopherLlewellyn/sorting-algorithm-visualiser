<template>
  <div id="header">
    <div class="inner_header">
      <div class="logo_container">
        <h1>Sorting Algorithm Visualiser</h1>
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

.logo_container h1 {
  color: white;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  font-size: 38px;
  font-family: 'Source Code Pro', monospace;
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