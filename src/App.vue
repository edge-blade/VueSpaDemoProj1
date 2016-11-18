<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <router-link tag='li' to='/Home'><a>Home</a></router-link>
          <router-link tag='li' to='/TimeEntries'><a>Time Entries</a></router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    components: { 'sidebar': Sidebar },
    data () {
      return {
        // Start with the same value as our
        // first time entry. Hard-coded for now
        // because we'll use a different approach
        // in the next article anyway
        totalTime: 1.5
      }
    },
    created: function () {
      var that = this;
      // Increment the totalTime value based on the new
      // time entry that is dispatched up
      this.eventHub.$on('timeUpdate', function (timeEntry) {
        that.totalTime += parseFloat(timeEntry.totalTime)
      })

      this.eventHub.$on('deleteTime', function (timeEntry) {
        that.totalTime -= parseFloat(timeEntry.totalTime)
      })
    }
  }
</script>