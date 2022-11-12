<script>
  import {
    fade,
    blur,
    fly,
    slide,
    scale,
    draw,
    crossfade,
  } from "svelte/transition";
  import FeedbackItem from "./StoresFeedbackItem.svelte";
  import { FeedbackStore } from "../../stores";
  import StoresFeedbackItem from "./StoresFeedbackItem.svelte";

  let showId = false;
  const toggleShowId = () => {
    showId = !showId;
  };
</script>

<!-- <h1>FeedbackList</h1> -->

<!-- old app: use array -->
<!-- {#each feedback as fb (fb.id)}

<div in:scale out:slide="{{ duration: 500 }}"> 
  <FeedbackItem item={fb} on:delete-feedback />
</div>
{/each} -->

<!-- using stores -->
<button class={showId && 'active'} on:click={toggleShowId}>Show IDs</button>

{#each $FeedbackStore as fb (fb.id)}
  <div in:fade out:scale>
    <StoresFeedbackItem item={fb} {showId} />
  </div>
{/each}

<!-- 
  on:delete-feedback -> we don't need to handle delete-feedback event in this component so leave as is to forward back up to App component
  if event is already handlled here, cannot pass back up
 - Animations and transitions come built in with Svelte. Cannot add to custom component, have to wrap around a div
 - https://blog.logrocket.com/essential-transitions-and-animations-in-svelte/
 - can set separate transitions for in and out
 -->

<style>
  button {
    display: block;
    /* margin-right: 0; */
    margin: 10px;
    margin-left: auto;
    color: rgb(226, 211, 211);
    border: 0;
    border-radius: 8px;
    color: rgb(62, 47, 47);
    width: 100px;
    height: 40px;
    cursor: pointer;
  }
  .active {
    background-color: purple;
    color: white;
  }
</style>
