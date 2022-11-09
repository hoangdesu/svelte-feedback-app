<script>

  // import MessingAround from "./lib/MessingAround.svelte";
  import FeedbackList from './components/FeedbackList.svelte';

  let feedback = [
    {
      id: 1,
      rating: 10,
      content: 'lorem ipsum'
    },
    {
      id: 2,
      rating: 6,
      content: 'lorem ipsum'
    },
    {
      id: 3,
      rating: 8,
      content: 'lorem ipsum'
    },
    {
      id: 4,
      rating: 7,
      content: 'lorem ipsum'
    }
  ]

</script>


  <!-- <MessingAround /> -->

<main>
  <FeedbackList {feedback} />
</main>

<!-- 

  - if prop name == value, can simplify with this syntax {propname}

 -->
