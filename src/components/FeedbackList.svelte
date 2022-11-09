<script>
  import FeedbackItem from "./FeedbackItem.svelte";

  export let feedback = [];
</script>

<h1>FeedbackList</h1>

{#each feedback as fb (fb.id)}
  <FeedbackItem>hi</FeedbackItem>
{/each}
