<script>
  // import MessingAround from "./lib/MessingAround.svelte"; // component for learning Svelte

  import { AppStore } from "./stores";
  import { onMount, onDestroy } from "svelte";

  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/UI/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import "./style.css";
  import StoresFeedbackForm from "./components/StoresComponents/StoresFeedbackForm.svelte";
  import StoresFeedbackList from "./components/StoresComponents/StoresFeedbackList.svelte";
  import StoresFeedbackStats from "./components/StoresComponents/StoresFeedbackStats.svelte";

  let feedback = [
    {
      id: 1,
      rating: 10,
      content: "Svelte is actually an amazing and great frontend framework to use!",
    },
    {
      id: 2,
      rating: 5,
      content:
        "I already started falling in love with it",
    },
    {
      id: 3,
      rating: 8,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt totam unde ipsa odio deleniti, laboriosam provident. Quaerat, ab laborum!",
    },
    {
      id: 4,
      rating: 7,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, recusandae quae facilis ab illo inventore fugit aliquid quam nemo veritatis est asperiores praesentium quaerat assumenda. Fugiat accusantium tenetur id aspernatur.",
    },
    {
      id: 5,
      rating: 9,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi libero corrupti nulla.",
    },
  ];

  let currentId = 6;

  const onDeleteFeedbackHandler = (e) => {
    // get a param "event" object (e)
    // can access data from this event object from property "detail" => e.detail (= itemId passed from FeedbackItem)

    const itemId = e.detail;
    feedback = feedback.filter((fb) => fb.id !== itemId); // filter out (or remove) element that matches the ID
  };

  const onFormSubmitHandler = (e) => {
    const newFeedback = { id: currentId, ...e.detail };
    feedback = [newFeedback, ...feedback];
    ++currentId;
    // console.log(feedback);
  };

  let activeApp = "event-dispatcher";

  const unsubscribeAppStore = AppStore.subscribe(
    (data) => (activeApp = data.activeApp)
  );

  // using component life cycle
  onMount(() => {
    console.log("component App mounted");
  });

  onDestroy(() => {
    unsubscribeAppStore();
  });

  const appSelectHandler = (e) => {
    AppStore.update((currentState) => {
      return { ...currentState, activeApp: e.currentTarget.value };
    });
    activeApp = $AppStore.activeApp;
    console.log('active app:', activeApp);
  };
</script>

<main class="container">
  <h1 class="header">Svelte Feedback app</h1>
  <div class="app-selector">
    <ul>
      <li>
        <input
          type="radio"
          checked={activeApp === "event-dispatcher"}
          id="event-dispatcher"
          name="app-selector"
          value="event-dispatcher"
          on:change={appSelectHandler}
        />
        <label for="event-dispatcher">Use event dispatcher</label>
      </li>
      <li>
        <input
          type="radio"
          checked={activeApp === "stores"}
          id="stores"
          name="app-selector"
          value="stores"
          on:change={appSelectHandler}
        />
        <label for="stores">Use stores</label>
      </li>
    </ul>
  </div>

  {#if activeApp === "event-dispatcher"}
    <FeedbackForm on:on-form-submit={onFormSubmitHandler} />
    <FeedbackStats {feedback} />
    <FeedbackList {feedback} on:delete-feedback={onDeleteFeedbackHandler} />
  {:else if activeApp === "stores"}
    <StoresFeedbackForm />
    <StoresFeedbackStats />
    <StoresFeedbackList />
  {/if}
</main>

<!-- <MessingAround /> -->

<!-- 
NOTES:
  - if prop name == value, can simplify with this syntax {propname}
  - handle delete-feedback event here

 -->
<style>

  .header {
    margin: 50px;
    text-align: center;
  }
  .app-selector ul {
    display: flex;
    justify-content: space-around;
  }

  .app-selector li {
    position: relative;
    /* background: #e4cdd3; */
    color: #fff;
    width: 300px;
    height: 50px;
    padding: 10px;
    text-align: center;
    transition: 0.3s;
    font-size: 19px;
  }

  .app-selector label {
    width: 500px;
    height: 50px;
    padding: 10px;
    cursor: pointer;
    transition: 0.2s;
  }

  .app-selector [type="radio"] {
    opacity: 0;
  }

  [type="radio"]:checked ~ label {
    background-color: rgb(194, 60, 60);
    padding: 10px 30px;
    width: 300px;
  }
</style>
