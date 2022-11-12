<script>
  import Card from "../UI/Card.svelte";
  import { FeedbackStore } from "../../stores";
  export let item;

  const onDeleteHandler = (itemId) => {
    // delete directly from the store
    FeedbackStore.update((currentValue) => {
      return currentValue.filter((fb) => fb.id !== itemId);
    });
  };

  export let showId = false;
</script>

<Card>
  <div class="num-display">{item.rating}</div>
  <button class="close-btn" on:click={() => onDeleteHandler(item.id)}>❌</button
  >
  {#if showId}
    <div>[{item.id}]</div>
  {/if}
  <div class="content">"{item.content}"</div>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
