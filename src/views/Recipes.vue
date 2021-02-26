<template>
  <div>
    <h1>Recipes</h1>
    <section>
      <b-table
          :data="recipes"
          :paginated="isPaginated"
          :per-page="perPage"
          :current-page.sync="currentPage"
          :pagination-simple="isPaginationSimple"
          :pagination-position="paginationPosition"
          :default-sort-direction="defaultSortDirection"
          :pagination-rounded="isPaginationRounded"
          :sort-icon="sortIcon"
          :sort-icon-size="sortIconSize"
          default-sort="user.first_name"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page">

        <b-table-column field="id" label="ID" width="40" sortable numeric v-slot="props">
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="recipe.title" label="Título" sortable v-slot="props">
          {{ props.row.recipe.title }}
        </b-table-column>

        <b-table-column field="recipe.short_description" label="Descripción" sortable v-slot="props">
          {{ props.row.recipe.short_description }}
        </b-table-column>

        <b-table-column label="Categorías" v-slot="props">
                  <span>
                      <b-icon pack="fas"
                              :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                      </b-icon>
                      {{ props.row.gender }}
                  </span>
        </b-table-column>

        <b-table-column field="date" label="Fecha" sortable centered v-slot="props">
                  <span class="tag is-success">
                      {{ new Date(props.row.date).toLocaleDateString() }}
                  </span>
        </b-table-column>
      </b-table>
    </section>
  </div>
</template>

<script>
export default {
  name: "Recipes",
  data() {
    return {
      recipes: [],
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 10
    }
  }
}
</script>

<style scoped>

</style>