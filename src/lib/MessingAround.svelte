<script>
    let firstName = 'Brian';
    let lastName = 'Nguyen';
    let color = 'yellow';

    $: name = firstName + ' ' + lastName;
</script>

<main>
    <h1 style="color: {color}">Hello {name}!</h1>
</main>
