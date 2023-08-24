<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script>
import AuthorsTable from "./components/AuthorsTable";
import ProjectsTable from "./components/ProjectsTable";
import AppFooter from "@/examples/Footer.vue";

export default {
  name: "Taxi",
  components: {
    AuthorsTable,
    ProjectsTable,
    AppFooter,
  },

  created() {
    window.location.href = "#";
  },
};
</script>
