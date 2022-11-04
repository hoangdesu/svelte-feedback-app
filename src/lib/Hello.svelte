<script>
    export let name;

    name = name.charAt(0).toUpperCase() + name.slice(1);

    const formatName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const formattedName = formatName(name);
</script>

<div>
    <h1>Hello {formattedName}! ^o^</h1>
</div>