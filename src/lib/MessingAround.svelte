<script>
  let firstName = "Brian";
  let lastName = "Nguyen";
  let color = "yellow";

  // $: reactive value
  // mark a statement as reactive
  // must be on top-level
  // run after other script code, before markup is rendered, whenever the values they depend on have changed
  // 're-run this code whenever any of the referenced values change'
  $: name = firstName + " " + lastName;

  const toggle = () => {
    color = color === "yellow" ? "pink" : "yellow";
  };

  // conditional
  let showText = false;

  // loops
  let myNames = [
    {
      id: 1,
      name: "Cún",
    },
    {
      id: 2,
      name: "Hoàng",
    },
    {
      id: 3,
      name: "Brian",
    },
    {
      id: 4,
      name: "Doroke",
    },
  ];

  const addNewName = () => {
    const newName = {
      id: Math.floor(Math.random() * 100) + 1,
      name: "new user",
    };

    // myNames.push(newName) // => NOT GONNA WORK
    // cannot use push(), has to create a new array object
    myNames = [...myNames, newName];
  };

  // more reactive values
  let count = 0;
  let doubleNOreactive = count * 2;
  $: doubleREACTIVE = count * 2;
</script>

<div>
  <h1 style="color: {color}">Hello {name}!</h1>
  <button on:click={toggle}>Toggle color</button>

  <button
    on:click={() => {
      showText = !showText;
    }}>Show text</button
  >

  <!-- conditional rendering -->
  {#if showText}
    <p>Ú oà!</p>
  {:else}
    <p>;)</p>
  {/if}

  <h3>My names:</h3>
  <button on:click={addNewName}>Add new name</button>
  <button on:click={() => (myNames = [])}>Clear all names</button>

  <p>You have {myNames.length} names:</p>
  <!-- loops -->
  <!-- {#each expression as varName (key)}...{/each} -->
  {#each myNames as name (name.id)}
    <p>{name.id}. {name.name}</p>
  {/each}

  <!-- reactive value again -->
  <h2>Reactive value</h2>
  <p>Count = {count}</p>
  <p>REACTIVE double = {doubleREACTIVE}</p>
  <p>NO reactive double = {doubleNOreactive}</p>
  <button on:click={() => count++}>Increase count value</button>
  <p>This button only increases the value of "count", and value of "double" depends on "count"</p>
ialzied<p>The value of REACTIVE double will change with count. The other one stays after being initialzied</p>
</div>
