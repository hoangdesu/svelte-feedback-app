<script>
  import { fade, blur, fly, slide, scale, draw, crossfade } from 'svelte/transition';
  import FeedbackItem from "./FeedbackItem.svelte";

  export let feedback = [];
</script>

<!-- <h1>FeedbackList</h1> -->

{#each feedback as fb (fb.id)}
<!-- <div transition:scale> // basic transition -->
<div in:scale out:slide="{{ duration: 500 }}"> <!-- set separte in and out transitions, with configs if needed -->
  <FeedbackItem item={fb} on:delete-feedback />
</div>
{/each}

<!-- 
  on:delete-feedback -> we don't need to handle delete-feedback event in this component so leave as is to forward back up to App component
  if event is already handlled here, cannot pass back up
 - Animations and transitions come built in with Svelte. Cannot add to custom component, have to wrap around a div
 - https://blog.logrocket.com/essential-transitions-and-animations-in-svelte/
 - can set separate transitions for in and out
 -->
