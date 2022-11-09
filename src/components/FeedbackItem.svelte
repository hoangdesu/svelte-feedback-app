<script>
  import Card from "./UI/Card.svelte";
  export let item;
</script>

<Card>
  <div class="num-display">{item.rating}</div>
  <div class="close-btn">X</div>
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
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
