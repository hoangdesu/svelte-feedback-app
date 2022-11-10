<script>
    export let feedback;

  // using reactive value, to react to the change of list length
  $: totalFeedback = feedback.length;
  $: average = feedback.reduce((avg, fb) => (avg + fb.rating), 0) / totalFeedback;

</script>

<div class="feedback-stats">
    <h4>{totalFeedback} reviews</h4>
    <h4>Average rating: {average}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>