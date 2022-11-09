<div class="card">
    <slot />
</div>

<!-- 
    - <slot> is like children prop in React, allow passing data between component
 -->

<style>
    .card {
        background-color: #fffffd;
        color: #444;
        border-radius: 15px;
        padding: 40px 50px;
        margin: 20px 0;
        position: relative;
    }
</style>