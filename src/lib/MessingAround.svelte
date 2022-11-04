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
    let showText = false;

    // loops
    let myNames = [
        {
            id: 1,
            name: 'Cún'
        },
        {
            id: 2,
            name: 'Hoàng'
        },
        {
            id: 3,
            name: 'Brian'
        },
        {
            id: 4,
            name: 'Doroke'
        }
    ];

    const addNewName = () => {
        const newName = {
            id: Math.floor(Math.random() * 100) + 1,
            name: 'new user'
        }
        
        // myNames.push(newName) // => NOT GONNA WORK
        // cannot use push(), has to create a new array object
        myNames = [...myNames, newName];
    }

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

    <h3>My names:</h3>
    <button on:click={addNewName}>Add new name</button>

    <!-- loops -->
    <!-- {#each expression as varName (key)}...{/each} -->
    {#each myNames as name (name.id)}
        <p>{name.id}. {name.name}</p>
    {/each}

</div>
