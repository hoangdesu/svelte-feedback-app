<script>
    let firstName = 'Brian';
    let lastName = 'Nguyen';
    let color = 'yellow';

    // $: reactive value
    // mark a statement as reactive 
    // must be on top-level
    // run after other script code, before markup is rendered, whenever the values they depend on have changed
    $: name = firstName + ' ' + lastName;

    const toggle = () => {
        color = color === 'yellow' ? 'pink' : 'yellow';
    };

    // conditional
    $: showText = false;

</script>

<div>
    <h1 style="color: {color}">Hello {name}!</h1>

    <button on:click={toggle}>Toggle color</button>

    <button on:click={() => {showText = !showText}}>Show text</button>

    <!-- conditional rendering -->
    {#if showText}
        <p> Ú oà!</p>
    {:else}
        <p>;)</p>
    {/if}

</div>
