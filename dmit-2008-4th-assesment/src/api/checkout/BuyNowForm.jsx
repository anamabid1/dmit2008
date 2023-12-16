// BuyNowForm.jsx, it should take into account the priceId property
function BuyNowForm({ priceId }) {
    return (
      <form action="/api/checkout" method="POST">
        <input type="hidden" name="id" value="from dashboard" />
        <input type="hidden" name="price" value={priceId} />
        <button
          type="submit"
          value="submit"
          className="w-2/5 text-xl font-bold rounded-md bg-white/5 hover:bg-white/20 py-2.5 text-white ring-4 ring-white/5 ring-offset-2 ring-offset-white/[0.09]"
        >
          Buy Now
        </button>
      </form>
    );
  }
  
  export { BuyNowForm };
  