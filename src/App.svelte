<script>

  // import MessingAround from "./lib/MessingAround.svelte";
  import FeedbackList from './components/FeedbackList.svelte';
  import './style.css';

  let feedback = [
    {
      id: 1,
      rating: 10,
      content: 'lorem ipsum 1'
    },
    {
      id: 2,
      rating: 6,
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
    }
  ]

</script>


  <!-- <MessingAround /> -->

<main class="container">
  <FeedbackList {feedback} />
</main>




<!-- 

  - if prop name == value, can simplify with this syntax {propname}

 -->

 