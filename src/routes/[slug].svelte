<script context="module" lang="ts">
  import makeLoad from "../utilities/makeLoad";
  export const load = makeLoad(
    async (input, sdk) => await sdk.SLUG({ slug: input.page.params.slug })
  );
</script>

<script lang="ts">
  import type { SlugQuery } from "../queries/automatically-typed";

  export let queried: SlugQuery;
</script>

<p>hello from slug</p>
