<script>
  import Card from "./UI/Card.svelte";
  import { createEventDispatcher } from "svelte";
  export let item;

  /**
   * Lifting the state: need to pass itemID to parent component App
   * Do this by using event dispatcher with a custom event name to pass up to parent component
   */
  const dispatch = createEventDispatcher();

  const onDeleteHandler = (itemId) => {
    // dispatch: (type: EventKey, detail?: any, options?: DispatchOptions) => boolean
    // dispatch/expose a custom event name so the parent component can catch and forward up
    dispatch('delete-feedback', itemId);
  };
</script>

<Card>
  <div class="num-display">{item.rating}</div>
  <button class="close-btn" on:click={() => onDeleteHandler(item.id)}>❌</button
  >
  <div class="content">{item.content}</div>
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
