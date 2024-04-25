import express from 'express';
import axios from 'axios';
import cors from 'cors';
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const arr = [];
// axios.get('http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=10&minPrice=p&maxPrice=q', {
//     headers: {
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0MDQxMjkyLCJpYXQiOjE3MTQwNDA5OTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNkMTQ4Y2FkLWQ4YjEtNGIxMC05MjIxLThkZmFmOGMyNzVmZiIsInN1YiI6IkUyMUNTRVUwNjM2QGJlbm5ldHQuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiQmVubmV0dCBVbml2ZXJzaXR5IiwiY2xpZW50SUQiOiJjZDE0OGNhZC1kOGIxLTRiMTAtOTIyMS04ZGZhZjhjMjc1ZmYiLCJjbGllbnRTZWNyZXQiOiJRd1FNcE1VRUhXVm9tSE9OIiwib3duZXJOYW1lIjoiU3VqYWwgWWFkYXYiLCJvd25lckVtYWlsIjoiRTIxQ1NFVTA2MzZAYmVubmV0dC5lZHUuaW4iLCJyb2xsTm8iOiJFMjFDU0VVMDYzNiJ9.MoDC_Tx4tLKSLHv_rHYunLyuZMnEr-ROgEbH1ectods'
//     }
// })

app.get('/categories/:categoryname/products', async function (req, res) {
    const categoryName = req.params;
    console.log(categoryName)
    const { n, min, max } = req.query;

    try {
        const productResponse = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${categoryName.categoryname}/products?top=${top}&minPrice=${min}&maxPrice=${max}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0MDQ4NzA5LCJpYXQiOjE3MTQwNDg0MDksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNkMTQ4Y2FkLWQ4YjEtNGIxMC05MjIxLThkZmFmOGMyNzVmZiIsInN1YiI6IkUyMUNTRVUwNjM2QGJlbm5ldHQuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiQmVubmV0dCBVbml2ZXJzaXR5IiwiY2xpZW50SUQiOiJjZDE0OGNhZC1kOGIxLTRiMTAtOTIyMS04ZGZhZjhjMjc1ZmYiLCJjbGllbnRTZWNyZXQiOiJRd1FNcE1VRUhXVm9tSE9OIiwib3duZXJOYW1lIjoiU3VqYWwgWWFkYXYiLCJvd25lckVtYWlsIjoiRTIxQ1NFVTA2MzZAYmVubmV0dC5lZHUuaW4iLCJyb2xsTm8iOiJFMjFDU0VVMDYzNiJ9.hgMJUIukqypUWeQN3pgLrfWay0AURKJBnsMxC0yqFaI"
            }
        })

        const products = productResponse.data;
        res.status(200).send({products})
        console.log(products)
    }
    catch(e) {
        console.log(e)
    }
})

app.listen(port, () => {
    console.log('http://localhost:3000')
})