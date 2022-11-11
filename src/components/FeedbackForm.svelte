<script>
  import Button from "./UI/Button.svelte";
  import Card from "./UI/Card.svelte";
    import RatingSelect from './UI/RatingSelect.svelte';

  let review = "";
  let isDisabled = true;

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("input:", review);
    review = "";
  };

  const onInputChangeHandler = (evt) => {
    review.trim().length > 0 ? (isDisabled = false) : (isDisabled = true);
  };
</script>


<Card>
  <header>
    <h2>How would you rate our service?</h2>
  </header>
  <form>
    <RatingSelect />
    <div class="input-group">
      <input
        type="text"
        placeholder="Write your feedback here"
        bind:value={review}
        on:input={onInputChangeHandler}
      />
      <Button type="submit" style="secondary" {isDisabled}>Submit</Button>
    </div>
  </form>
</Card>


<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
