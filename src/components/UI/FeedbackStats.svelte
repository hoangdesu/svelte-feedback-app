<script>
  export let feedback;

  // using reactive value, to react to the change of list length
  $: totalFeedback = feedback.length;
  $: average = feedback.reduce((avg, fb) => avg + fb.rating, 0) / totalFeedback;
</script>

<h2>Feedback from App</h2>
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
