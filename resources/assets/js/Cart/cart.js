export default {
    data: {
        search: '',
        cart: []
    },
    add(item) {
        var found = _.find(this.data.cart, ['id', item.id]);
        if (typeof found != 'object') {

            this.data.cart.push({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                qty: 1
            })
        }
    },
    inc(item) {
        var found = _.find(this.data.cart, ['id', item.id]);
        if (typeof found == 'object') {
            var index = _.indexOf(this.data.cart, found)
            {
                this.data.cart[index].qty++
            }
        }
    },
    dec(item) {
        var found = _.find(this.data.cart, ['id', item.id]);
        if (typeof found == 'object') {
            var index = _.indexOf(this.data.cart, found);
            if (this.data.cart[index].qty == 0) {
                this.data.cart.sprice(found)
            } else {
                this.data.cart[index].qty--
            }
        }


    }
}