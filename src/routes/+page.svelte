<script lang="ts">
    import { enhance } from '$app/forms';
    import QuoteDisplay from '$lib/components/QuoteDisplay.svelte';
    import QuoteForm from '$lib/components/QuoteForm.svelte';

    export let data;

    let editId;
    let editName;
    let editQuantity;
    let editPrice;

    function startEditing(product) {
        editId = product.id;
        editName = product.name;
        editQuantity = product.quantity;
        editPrice = product.unitPrice;
    }

    function cancelEditing() {
        editId = null;
    }
</script>

<div>
    <QuoteForm />
    <table class="table is-fullwidth">
        <thead>
            <tr>
                <th>Product/Service</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
            </tr>            
        </thead>
        <tbody>
            {#each data.products as product}
                <tr>
                  {#if editId === product.id}
                    <td><input type="text" bind:value={editName} /></td>
                    <td><input type="number" bind:value={editQuantity} min="1" /></td>
                    <td><input type="number" bind:value={editPrice} min="0" /></td>
                    <td>
                        <form method="POST" action="?/editProduct" use:enhance>
                            <input type="hidden" name="id" value={product.id} />
                            <input type="hidden" name="name" value={editName} />
                            <input type="hidden" name="quantity" value={editQuantity} />
                            <input type="hidden" name="price" value={editPrice} />
                            <button type="submit" class="button is-success">Save</button>
                            <button type="button" class="button is-light" on:click={cancelEditing}>Cancel</button>
                        </form>
                    </td>
                    {:else}
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>${product.unitPrice}</td>
                        <td>${product.quantity * product.unitPrice}</td>
                        <td>
                            <button class="button is-primary" on:click={() => startEditing(product)}>Edit Item</button>
                            
                        </td>
                        <td>
                            <form method="POST" action="?/deleteProduct" use:enhance>
                                <input type="hidden" name="id" value={product.id} />
                                <button type="submit" class="button is-danger">Delete</button>
                            </form>
                        </td>
                    {/if}
                </tr>
            {/each}
        </tbody>
    </table>
</div>
<QuoteDisplay products={data.products} />


