<script>
  import { FeedbackStore } from '../../stores';

  // using reactive value, to react to the change of list length
  $: totalFeedback = $FeedbackStore.length;
  $: average = $FeedbackStore.reduce((avg, fb) => avg + fb.rating, 0) / totalFeedback;
</script>

<h1>Feedback from Stores</h1>
<div class="feedback-stats">
  <h4>{totalFeedback} reviews</h4>
  <h4>Average rating: {average.toFixed(2)}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
