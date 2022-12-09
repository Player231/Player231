Array.prototype.parse2D = function() {
    const rows = []
    for (let i = 0; i < this.length; i+=16) {
        rows.push(this.slice(i, i + 16))
    }
    return rows
}

Array.prototype.createObjectsFrom2D = function(object, symbols) {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === symbols) {
              objects.push(
                new object({
                  position: {
                    x: x * 35,
                    y: y * 35,
                  }
                })
              )
            }
        })
    })
    return objects
}