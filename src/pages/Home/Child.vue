<template>
  <page>
    <page-header>
      <template #title>Child</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">
        <p v-for="i in 20" :key="i">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          ratione atque asperiores, sunt veritatis consequuntur sit consectetur
          odit corrupti optio velit saepe laborum cupiditate, in neque nemo
          molestiae at error?
        </p>
      </div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/Page/Page.vue";
import PageHeader from "src/components/Page/PageHeader.vue";

export default {
  components: { Page, PageHeader },
  name: "Child",
};
</script>
