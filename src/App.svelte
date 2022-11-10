<script>

  // import MessingAround from "./lib/MessingAround.svelte";
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/UI/FeedbackStats.svelte';
  import './style.css';

  let feedback = [
    {
      id: 1,
      rating: 10,
      content: 'lorem ipsum 1'
    },
    {
      id: 2,
      rating: 5,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam dolorem rem laudantium ad sequi dignissimos!'
    },
    {
      id: 3,
      rating: 8,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt totam unde ipsa odio deleniti, laboriosam provident. Quaerat, ab laborum!'
    },
    {
      id: 4,
      rating: 7,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, recusandae quae facilis ab illo inventore fugit aliquid quam nemo veritatis est asperiores praesentium quaerat assumenda. Fugiat accusantium tenetur id aspernatur.'
    },
    {
      id: 5,
      rating: 9,
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi libero corrupti nulla.'
    },

  ]

  const onDeleteFeedbackHandler = (e) => {
    // get a param "event" object (e)
    // can access data from this event object from property "detail" => e.detail (= itemId passed from FeedbackItem)

      const itemId = e.detail;
      feedback = feedback.filter(fb => fb.id !== itemId); // filter out (or remove) element that matches the ID
  }

</script>


  <!-- <MessingAround /> -->

<main class="container">
  <FeedbackStats {feedback} />
  <FeedbackList {feedback} on:delete-feedback={onDeleteFeedbackHandler} />
</main>




<!-- 

  - if prop name == value, can simplify with this syntax {propname}
  - handle delete-feedback event here

 -->

 