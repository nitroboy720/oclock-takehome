<script lang="ts">
    import { enhance } from '$app/forms';

    let name;
    let unitPrice;
    let quantity;
</script>

<div class="box">

    <div class="container">
    <section class="section">
        <h1 class="title">Quote Generator</h1>
    </section>
    </div>

    <h2 class="title is-4">Add Product/ Service</h2>

    <form method="POST" action="?/create" use:enhance>
        <label>
		    Name of the product or service: 
		    <input name="name" bind:value={name} type="text" required maxlength="25" placeholder="Name"/>
	    </label>
        <label>
            Quantity:
            <input name="quantity" bind:value={quantity} type="number" required min="1" placeholder="Quantity" />
        </label>
        <label>
            Price per unit (CAD$):
            <input name="unitPrice" bind:value={unitPrice} type="number" required min="0" placeholder="Unit Price" />
        </label>
        <button class="button is-primary"> Add Line Item </button>
    </form>
</div>