<script>
  import FeedbackItem from "./FeedbackItem.svelte";

  export let feedback = [];
</script>

<!-- <h1>FeedbackList</h1> -->

{#each feedback as fb (fb.id)}
  <FeedbackItem item={fb} on:delete-feedback />
{/each}

<!-- 
  on:delete-feedback -> we don't need to handle delete-feedback event in this component so leave as is to forward back up to App component
  if event is already handlled here, cannot pass back up
 -->
