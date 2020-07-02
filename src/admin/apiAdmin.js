// This provides the logic to post the category to the database.

export const createCategory = (userId, token, category) => {
    return fetch(`api/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const createProduct = (product) => {
    return fetch(`api/store`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: product
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}