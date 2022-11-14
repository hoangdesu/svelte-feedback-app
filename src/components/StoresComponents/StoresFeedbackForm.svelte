<script>
  import { v4 as uuidv4 } from 'uuid';

  import Button from "../UI/Button.svelte";
  import Card from "../UI/Card.svelte";
  import RatingSelect from "../UI/RatingSelect.svelte";

  import { FeedbackStore } from '../../stores';
  
  let review = "";
  let isDisabled = true;
  let rating = 10;
  let errorMsg = "";

  const onInputChangeHandler = (evt) => {
    review.trim().length > 0 ? (isDisabled = false) : (isDisabled = true);
  };

  const onRatingChangeHandler = (evt) => {
    rating = parseInt(evt.detail);
    // rating = +evt.detail; // int to str: can use this syntax +str => int
    // console.log(rating);
  };

  const onFormSubmit = (e) => {
    // e.preventDefault(); // not needed since already using event modifier

    // error check: must have more than 3 words
    if (review.trim().split(" ").length <= 3) {
      errorMsg = "Your review is too short. Please write more than 3 words.";
    } else {
      errorMsg = "";

      const newFeedback = {
        id: uuidv4(),
        rating: rating,
        content: review,
      };

      // add directly to the store
      FeedbackStore.update(currentValue => {
        return [newFeedback, ...currentValue];
      })

      // reset input
      rating = 10;
      review = "";
      isDisabled = true;
    }
  };
</script>

<Card>
  <header>
    <h2>How would you rate our service?</h2>
  </header>
  <form on:submit|preventDefault={onFormSubmit}>
    <RatingSelect on:on-rating-change={onRatingChangeHandler} />
    <div class="input-group">
      <input
        type="text"
        placeholder="Write your feedback here"
        bind:value={review}
        on:input={onInputChangeHandler}
      />
      <Button type="submit" style="secondary" {isDisabled}>Submit</Button>
    </div>
    {#if errorMsg !== ""}
      <p style="color: red;">{errorMsg}</p>
    {/if}
  </form>
</Card>

<!-- 
    - event modifier: DOM event handlers can have modifiers that alter their behaviour. For example, a handler with a once modifier will only run a single time:
    - https://svelte.dev/tutorial/event-modifiers
 -->
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
</style>
