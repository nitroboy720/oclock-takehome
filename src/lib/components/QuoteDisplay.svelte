<script lang="ts">
    export let products = [];

    let quote = null;

    async function createQuote() {
        let subtotal = products.reduce((sum, p) => sum + p.quantity * p.unitPrice, 0);
        let tva = subtotal * 0.2;
        let total = subtotal + tva;
        let date = new Date().toISOString();

        const year = new Date().getFullYear();
        let id = `Q-${year}-` + String(Math.floor(Math.random() * 1000)).padStart(3, '0');

        quote = { id, subtotal, tva, total, date };
    }
</script>

<div class="box">
    <div class="section">
        <button class="button is-primary" on:click={createQuote}>Create Quote</button>
    </div>

    {#if quote}
    <div class="box">
        <h2 class="title is-4">Quote #{quote.id}</h2>
        <p><strong>Date:</strong> {quote.date}</p>
        <p><strong>Subtotal:</strong> ${quote.subtotal.toFixed(2)}</p>
        <p><strong>Tax Rate:</strong> 20% </p>
        <p><strong>Tax Amount:</strong> ${quote.tva.toFixed(2)}</p>
        <p><strong>Total Amount:</strong> ${quote.total.toFixed(2)}</p>
    </div>
    {/if}
</div>
