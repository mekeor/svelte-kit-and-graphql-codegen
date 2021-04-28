<script context="module" lang="ts">
  import makeLoad from "../utilities/makeLoad";
  export const load = makeLoad(async (input, sdk) => await sdk.Order());
</script>

<script lang="ts">
  import type { OrderQuery } from "../queries/automatically-typed";
  export let queried: OrderQuery;
</script>

<p>hello from order</p>
