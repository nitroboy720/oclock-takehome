export let products: Product[] = [];

export const load = () => {
    return {
       products
    };
}; 

export const actions = {
    createProduct: async ({ request }) => {
        const formData = await request.formData();
        
        const name = formData.get("name");
        const quantity = formData.get("quantity");
        const unitPrice = formData.get("price");
        const id = Math.floor(Math.random() * 100);

        const product = { id, name, quantity, unitPrice, total: (Number(quantity) * Number(unitPrice)) };
      
        products.push(product);
        return { success: true };
    },

    deleteProduct: async ({ request }) => {
        const formData = await request.formData();

        const id = formData.get("id");

        products = products.filter(product => product.id !== Number(id)); 
        return { success: true };
    },

    editProduct: async ({ request }) => {
        const formData = await request.formData();

        const id = Number(formData.get("id"));
        const name = formData.get("name");
        const quantity = formData.get("quantity");
        const unitPrice = formData.get("price");

        const product = { id, name, quantity, unitPrice, total: (Number(quantity) * Number(unitPrice)) };
    
        products = products.map(p => p.id === Number(id) ? product : p);
        return { success: true };
    }
};