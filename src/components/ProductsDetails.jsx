import { useLocation, useParams} from 'react-router-dom';
const ProductsDetails = () => {

    const {state} = useLocation();
    const params = useParams();
    console.log(state);
    console.log(params);


    return(
        <div className='sections'>
            <h2>Details</h2>
            <p><b>Name:</b> {state.name}</p>
            <p><b>Calories:</b> {state.calories}</p>
        </div>
    );
}

export default ProductsDetails;